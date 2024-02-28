import mongoose from "mongoose"

const transactionSchema = new mongoose.Schema({
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    transactionID: {
      type: String,
      unique: true,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'success', 'failure', 'canceled'],
      required: true
    }
  }, { timestamps: true });

  const Transaction = mongoose.model("Transaction",transactionSchema)

  export default Transaction;
