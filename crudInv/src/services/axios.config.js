import axios from "axios";
//import { Mongoose } from "../../../backend/database";

const URL = 'mongodb+srv://spinillapsena:3ssBoHKGpF641QD0@cluster0.oe0xpq9.mongodb.net/INVAPP?retryWrites=true&w=majority'

export const axiosInstance = axios.create({
    baseURL: URL
})