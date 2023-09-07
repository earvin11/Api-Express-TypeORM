import { UserEntity } from '../entities/user.entity';
import { User } from '../interfaces/user.interface';
import { generateJwt } from '../shared/generate-jwt';


export const createUser = async( user: User ) => {
    try {
        const newUser = new UserEntity()
        newUser.name = user.name
        newUser.email = user.email
        newUser.fullName = user.fullName
        newUser.password = user.password,

        await newUser.save();
        return newUser;
    } catch (error) {
        console.log(error);
        throw error
    }
};

export const getUsers = async() => {
    try {
        const data = await UserEntity.find();
        return data;
    } catch (error) {
        console.log(error);
        throw error
    }
}

export const getUser = async( email: string ) => {
    try {
        const data = await UserEntity.findOneBy({ email });
        return data;
    } catch (error) {
        console.log(error);       
        throw error;
    }
}

export const deleteUser = async( email: string ) => {
    try {
        const user = await getUser(email);
        if(!user) return null;

        const resp = await UserEntity.remove( user );
        return resp;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const loginUser = async(email: string, password: string) => {
    try {
        const user = await getUser(email);
        if(!user) return null;

        if( user.password === password ) {
            const token = await generateJwt( user.email );

            return {
                user,
                token
            }
        }

        return null;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
