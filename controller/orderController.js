import Order from "../model/orderSchema.js";

export const placeOrder = async(req,res)=>{
    let success = false;
    try {
      const { orderItem,  totalPrice } = req.body;
  
      async function generateUniqueOrderId() {
        const prefix = "FIP";
        let orderId = null;
        let existingOrder = null;
  
        do {
          const randomNumbers = Math.floor(Math.random() * 100000000)
            .toString()
            .padStart(9, "0"); // Generate an 8-digit random number
          orderId = `${prefix}${randomNumbers}`;
  
          // Check if the generated orderId already exists in the database
          const existingOrder = await Order.findOne({ orderId });
  
          // If an order with the same ID exists, regenerate the ID
        } while (existingOrder);
  
        return orderId;
      }
  
      const orderId = await generateUniqueOrderId();
  
      const order = new Order({
        orderItem,
        totalPrice,
        orderId,
        
      });
  
      const savedOrder = await order.save();
      success = true;
      res.json({ success, savedOrder });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }

    
}
