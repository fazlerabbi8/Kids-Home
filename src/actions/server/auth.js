"use server"

import bcrypt from "bcryptjs";
import { collections, dbConnect } from "@/lib/dbConnect";

export const postUser = async(payload) =>{
    const {email, password, name} = payload;

    // checking payload
    if(!email || !password){
        return null;
    }

    // checking user
    const isExist = await dbConnect(collections.USERS).findOne({email});

    if(isExist){
        return null;
    }

    // create user
    const newUser = {
        provider: "credentials",
        name,
        password,
        email,
        password: await bcrypt.hash(password, 12),
        role: "user",
    }

    // insert user
    const result = await dbConnect(collections.USERS).insertOne(newUser);

    if(result.acknowledged){
        return {
            ...result, insertedId: result.insertedId.toString(),
        }
    }
}

export const loginUser = async(payload) =>{
    const {email, password} = payload;

    // checking payload
    if(!email || !password){
        return null;
    }

    // checking user
    const user = await dbConnect(collections.USERS).findOne({email});

    if(!user){
        return null;
    }

    const isMatched = await bcrypt.compare(password, user.password);

    if(isMatched){
        return user;
    }else{
        return null;
    }
}