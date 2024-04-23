import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI

let cached = (global as any).mongoose || { conn: null, promise: null}

export const connectToDatabase = async () => {

    if(MONGODB_URI){
        mongoose.connect(MONGODB_URI )
    }

    // console.log('connect to database was called')
    // if (cached.conn) return cached.conn;
    // if(!MONGODB_URI) throw new Error(`MONGODB URI is missing`);

    // cached.promise = mongoose.connect(MONGODB_URI)

    // console.log("Got to this point before the connection")
    // console.log(cached)

    // try{
    //     cached.conn = await cached.promise
    // } catch (error){
    //     console.log(error)
    // }

    // console.log("Got to this point after the connection")

    // return cached.conn;
}