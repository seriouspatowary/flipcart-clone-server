import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({
  
    
      orderItem:{
        type:Object,
        required:true

      },
      
      totalPrice: {
        type: String,
        required: true,
      },
      orderId: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        default: () =>
          new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
      },


})

const order = mongoose.model('order',orderSchema);

export default order;