import ErrorHandler from "../error/error.js";
import {Reservation} from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
    const {firstName, lastName, email, phoneNumber, date, time} = req.body;
    if(!firstName || !lastName || !email || !phoneNumber || !date || !time){
        return next(new ErrorHandler("All fields are required", 400));
    }
    try{
        await Reservation.create({firstName, lastName, email, phoneNumber, date, time});
        res.status(201).json({
            success: true,
            message: "Reservation successful"
        });
    }
    catch(error){
        if(error.name === "ValidationError"){
            const validationErrors = Object.values(error.errors).map((err) => err.message);
            return next(new ErrorHandler(validationErrors.join(", "), 400));
        }
        return next(error);
    }
};
