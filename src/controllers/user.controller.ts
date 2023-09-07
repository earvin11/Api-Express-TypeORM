import { Request, Response } from 'express';
import * as userService from '../services/user.service';

export const sotreUser = async( req: Request, res: Response ) => {
    try {
        const body = req.body;
        console.log({body})
        const data = await userService.createUser( body );    
        res.status(201).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Internal server error' });
    }
};

export const allUsers = async( req: Request, res: Response ) => {
    try {
        const data = await userService.getUsers()
        res.json(data);
    } catch (error) {
        console.log(error)
        res.json({ msg: 'Internal server error' });
    }
};

export const userByEmail = async( req: Request, res: Response ) => {
    try {
        const { email } = req.params;
        const data = await userService.getUser( email );
        res.status(200).json( data );
    } catch (error) {
        res.status(500).json({ msg: 'Internal server error' });
    }
};

export const deleteUserByEmail = async( req: Request, res: Response ) => {
    try {
        const data = await userService.deleteUser( req.params.email );
        if(!data) return res.status(404).json({ msg: 'User not found' });
        res.status(200).json( data );
    } catch (error) {
        res.status(500).json({ msg: 'Internal server error' });
    }
}

export const login = async( req: Request, res: Response ) => {
    try {
        const { email, password } = req.body;

        const resp = await userService.loginUser( email, password );
        if(!resp) return res.status(404).json({ msg: 'User not found' });

        res.status(200).json(resp);
    } catch (error) {
        res.status(500).json({ msg: 'Internal server error' });
    }
}