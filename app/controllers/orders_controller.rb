class OrdersController < ApplicationController
  def show
    @order = current_user.orders.find(params[:id])
    @order.articles.each do |article|
      quantity_sold = @order.articles.where(id: article.id).count
      article.quantity = article.quantity - quantity_sold
      article.save
    end
    session[:cart] = []
  end

  def create
    @cart_articles = session[:cart].map { |id| Article.find(id) }
    total_amount = @cart_articles.pluck(:price).sum
    order = Order.create(user: current_user, amount: total_amount, state: 'pending', articles: @cart_articles)
    session = create_stripe_session(order, @cart_articles)
    order.update(checkout_session_id: session.id)
    redirect_to new_order_payment_path(order)
  end

  private

  def create_stripe_session(order, articles)
    Stripe::Checkout::Session.create(
      payment_method_types: ['card'],
      line_items: articles.map do |article|
        {
        name: article.name,
        # images: [article.photo_url],
        amount: (article.price * 100).to_i,
        currency: 'eur',
        quantity: 1
        }
      end,
        success_url: order_url(order),
        cancel_url: order_url(order)
      )
  end
end
