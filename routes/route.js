import express from 'express'
import { userSignup,userLogin,getUser } from '../controller/userController.js';
import { getProduct ,getProductById} from '../controller/productController.js';
import {placeOrder} from '../controller/orderController.js';
import { fetchUser } from '../middleware/fetchUser.js';

const router = express.Router();

router.post('/signup',userSignup);
router.post('/login',userLogin);
router.get('/getuser',fetchUser,getUser);

router.post('/order',placeOrder);


router.get('/products', getProduct);
router.get('/product/:id',getProductById);




export default router;