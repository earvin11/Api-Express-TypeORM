import { Router } from 'express';

import * as productsController from '../controllers/products.controller';
import { validateJwt } from '../middlewares/validateJwt';


const router = Router();

router.post('/products', [
   validateJwt
],productsController.createProduct );

router.get('/products', productsController.allProducts);
router.get('/products/:id', productsController.getProductById);
router.delete('/products/:id', productsController.deleteProduct);


export default router;