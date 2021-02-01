import mongoose from 'mongoose'

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    orderItems: [
      {
        name: { type: String, required: true },
        // 购买数量
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      province: { type: String, required: true },
    },
    // 支付方法
    paymentMethod: {
      type: String,
      required: true,
    },
    // 支付结果
    paymentResult: {
      id: { type: String },
      status: { type: String },
      updata_time: { type: String },
      email_address: { type: String },
    },
    // 是否发货
    isDelivered: { type: Boolean, required: true, default: false },
    // 发货时间
    deliveredAt: { type: Date },
    shippingPrice: { type: Number, required: true, default: 0 },
    totalPrice: { type: Number, required: true, default: 0 },
    // 是否支付
    isPaid: { type: Boolean, required: true, default: false },
    // 支付时间
    paidAt: { type: Date },
  },
  {
    timestamps: true,
  }
)

const Order = mongoose.model('Order', orderSchema)

export default Order
