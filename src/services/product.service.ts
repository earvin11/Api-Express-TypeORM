import { ProductEntity } from '../entities/product.entity';
import { Product } from '../interfaces/product.interface';

export const createProduct = async(product: Product) => {
    try {
        const newProduct = new ProductEntity()
        newProduct.name = product.name;
        newProduct.price = product.price;
        newProduct.inStock = product.inStock;

        await newProduct.save();
        return newProduct
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getAllProducts = async() => {
    try {
        const products = ProductEntity.find();
        return products;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getPrductById = async ( id: number ) => {
    try {
        const product = await ProductEntity.findOneBy({ id });
        if(!product) return null;
        return product;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const deleteProduct = async( id: number ) => {
    try {
        const product = await getPrductById(id);
        if(!product) return null;

        const resp = await ProductEntity.remove(product);
        return resp;
    } catch (error) {
        console.log(error);
        throw error;
    }
}