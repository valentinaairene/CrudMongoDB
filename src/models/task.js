import {Schema, model} from "mongoose";

const taskschema= new Schema({
    nombre: String,
    talla: String,
    marca: String,
    stock: Number},
    {
        timestamps:true
    })

export default model("productos",taskschema)