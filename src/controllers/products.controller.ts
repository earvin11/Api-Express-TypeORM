import { Request, Response } from 'express';
import * as productsService from '../services/product.service';


export const createProduct = async( req: Request, res: Response ) => {
    try {
        const { name, price, inStock } = req.body;

        const product = await productsService
            .createProduct({ name, price, inStock });

        res.status(201).json({ msg: 'Product created', product })
    } catch (error) {
        res.status(500).json({ msg: 'Internal server error' });
    }
}

export const allProducts = async( req: Request, res: Response ) => {
    try {
        const data = await productsService.getAllProducts();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ msg: 'Internal server error' });
    }
}

export const getProductById = async ( req: Request, res: Response ) => {
    try {
        const product = await productsService.getPrductById( Number(req.params.id) );
        if(!product) return res.status(404).json({ msg: 'Product not found' });
        res.status(200).json({product});
    } catch (error) {
        res.status(500).json({ msg: 'Internal server error' });
    }
}

export const deleteProduct = async( req: Request, res: Response ) => {
    try {
        const { id } = req.params;
        const resp = await productsService.deleteProduct( Number(id) );
        if(!resp) return res.status(404).json({ msg: 'Product not found' })
        res.status(204).json(resp);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Internal server error' });
    }
};