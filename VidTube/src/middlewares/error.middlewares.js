// this is a standard file isn't changed, so can be copy pasted!!!


import mongoose from "mongoose";
import {apiError} from "../utils/apiError.js";


const errorHandler = (err, req, res, next) => {
    let error = err;
    let statusCode = error.statusCode || 500;  

    if (!(error instanceof apiError)) {
        statusCode = error instanceof mongoose.Error ? 400 : 500; 
    }

    const message = error.message || "Something went wrong"
    error = new apiError(statusCode, message, error?.error || [], err.stack)

    const response = {
        ...error,
        message: error.message,
        ...(process.env.NODE_ENV === "development" ? {satck: error.stack} : {})
    }

    return res.status(error.statusCode).json(response)
}

export {errorHandler}