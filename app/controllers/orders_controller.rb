class OrdersController < ApplicationController
  def show
    @order = current_user.orders.find(params[:id])
  end

  def create
    @cart_articles = session[:cart].map { |id| Article.find(id) }
    total_amount = @cart_articles.pluck(:price).sum
    order = Order.new(user: current_user, amount: total_amount, state: 'pending')
    order.articles = @cart_articles
    order.save

    session = Stripe::Checkout::Session.create(
      payment_method_types: ['card'],
      line_items: @cart_articles.map do |article|
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

    order.update(checkout_session_id: session.id)
    redirect_to new_order_payment_path(order)
  end
end
