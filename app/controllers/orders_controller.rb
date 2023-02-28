class OrdersController < ApplicationController
  skip_before_action :authenticate_user!

  def show
    @order = Order.find(params[:id])
  end

  def create
    article = Article.find(params[:article_id])
    order  = Order.create!(article: article, article_sku: article.id, amount: (article.price_cents), state: 'pending')

    session = Stripe::Checkout::Session.create(
      payment_method_types: ['card'],
      line_items: [{
        name: article.name,
        # images: [article.photo_url],
        amount: article.price_cents,
        currency: 'eur',
        quantity: 1
        }],
        success_url: order_url(order),
        cancel_url: order_url(order)
      )

    order.update(checkout_session_id: session.id)
    redirect_to new_order_payment_path(order)
  end
end
