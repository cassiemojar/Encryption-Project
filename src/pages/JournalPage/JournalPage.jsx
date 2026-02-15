import { useState } from "react";
import "./JournalPage.css";

const JournalPage = () => {
    const [text, setText] = useState("");
    const [output, setOutput] = useState("");
    const [password, setPassword] = useState("");

    // Convert ArrayBuffer ↔ Base64
    const bufferToBase64 = (buffer) =>
        btoa(String.fromCharCode(...new Uint8Array(buffer)));

    const base64ToBuffer = (base64) =>
        Uint8Array.from(atob(base64), c => c.charCodeAt(0));

    // Derive key from password
    const getKey = async (password, salt) => {
        const enc = new TextEncoder();

        const keyMaterial = await window.crypto.subtle.importKey(
            "raw",
            enc.encode(password),
            { name: "PBKDF2" },
            false,
            ["deriveKey"]
        );

        return window.crypto.subtle.deriveKey(
            {
                name: "PBKDF2",
                salt,
                iterations: 100000,
                hash: "SHA-256",
            },
            keyMaterial,
            { name: "AES-GCM", length: 256 },
            false,
            ["encrypt", "decrypt"]
        );
    };

    const encryptText = async () => {
        if (!password) return alert("Enter a password");

        const enc = new TextEncoder();
        const salt = window.crypto.getRandomValues(new Uint8Array(16));
        const iv = window.crypto.getRandomValues(new Uint8Array(12));

        const key = await getKey(password, salt);

        const encrypted = await window.crypto.subtle.encrypt(
            { name: "AES-GCM", iv },
            key,
            enc.encode(text)
        );

        // Combine salt + iv + encrypted data
        const combined = new Uint8Array(
            salt.length + iv.length + encrypted.byteLength
        );
        combined.set(salt, 0);
        combined.set(iv, salt.length);
        combined.set(new Uint8Array(encrypted), salt.length + iv.length);

        setOutput(bufferToBase64(combined));
    };

    const decryptText = async () => {
        if (!password) return alert("Enter a password");

        try {
            const combined = base64ToBuffer(output);

            const salt = combined.slice(0, 16);
            const iv = combined.slice(16, 28);
            const data = combined.slice(28);

            const key = await getKey(password, salt);

            const decrypted = await window.crypto.subtle.decrypt(
                { name: "AES-GCM", iv },
                key,
                data
            );

            const dec = new TextDecoder();
            setText(dec.decode(decrypted));
        } catch (err) {
            alert("Incorrect password or corrupted data");
        }
    };

    return (
        <div className="journal-section">
            <div className="journal-notebook">
                <div className="journal-binding"></div>
                <div className="journal-paper">
                    
                    <input
                        type="password"
                        placeholder="Enter password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <textarea
                        className="journal-textarea"
                        placeholder="Write your thoughts here..."
                        rows="10"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    ></textarea>

                    <div className="journal-buttons">
                        <button className="encrypt-btn" onClick={encryptText}>
                            encrypt entry
                        </button>
                        <button className="decrypt-btn" onClick={decryptText}>
                            decrypt entry
                        </button>
                    </div>

                    <div className="encrypted-output">
                        <p>{output || "Encrypted text will appear here..."}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JournalPage;
