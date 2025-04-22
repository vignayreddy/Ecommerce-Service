import mongoose from "mongoose"
import Order from "./models/order.model.js"

const data = [
    {
      "user": "65f4a2c845f8e679c86e1234",
      "products": [
        {
          "product": "67d7115a45f8e679c86e639f",
          "quantity": 2,
          "price": 754
        },
        {
          "product": "67d711a345f8e679c86e63a3",
          "quantity": 1,
          "price": 3185
        }
      ],
      "totalAmount": 4693,
      "stripeSessionId": "sess_abc12337e"
    },
    {
      "user": "65f4b3d145f8e679c86e5678",
      "products": [
        {
          "product": "67d7121f45f8e679c86e63b1",
          "quantity": 3,
          "price": 1284
        }
      ],
      "totalAmount": 3852,
      "stripeSessionId": "sess_def45675d"
    },
    {
      "user": "65f4c4e245f8e679c86e9012",
      "products": [
        {
          "product": "67d712aa45f8e679c86e63b9",
          "quantity": 1,
          "price": 745
        },
        {
          "product": "67d7132245f8e679c86e63c1",
          "quantity": 2,
          "price": 1395
        }
      ],
      "totalAmount": 3535,
      "stripeSessionId": "sess_ghi78904c"
    }
  ]

  try{
    mongoose.connect("mongodb+srv://vignayreddymuduganti:MlBZ9TQzLuX3tnza@cluster0.e1izt.mongodb.net/eCommerce?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log('DB connected'));
  }catch (e){
    console.log(e);
  }


Order.insertMany(data)
    .then(() => { 
        console.log('Data inserted successfully')
        mongoose.connection.close();        
    })
    .catch((err) => { console.log(err) });