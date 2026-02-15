import express from "express";
import Journal from "../models/Journal.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Save encrypted journal entry
router.post("/", authMiddleware, async (req, res) => {
    const { encryptedText } = req.body;

    const entry = await Journal.create({
        user: req.user,
        encryptedText,
    });

    res.json(entry);
});

// Get all user's entries
router.get("/", authMiddleware, async (req, res) => {
    const entries = await Journal.find({ user: req.user });
    res.json(entries);
});

export default router;
