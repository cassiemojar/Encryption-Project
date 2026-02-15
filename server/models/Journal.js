import mongoose from "mongoose";

const journalSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    encryptedText: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Journal", journalSchema);