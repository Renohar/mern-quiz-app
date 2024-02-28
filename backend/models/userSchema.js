import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userID : {
        type: String,
        unique: true,
        required: true,
    },
    
    quizAnswers: [{
        questionID : {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Question'
        },
        selectedOption: {
            type: String,
        },
        Marks:{
            type: Number,
        }

    }],

    paymentStatus: {
        type: String,
        enum: ['pending','completed'],
        default: 'pending',
    }
}, { timestamps: true });

const User = mongoose.model("User",userSchema)

export default User;