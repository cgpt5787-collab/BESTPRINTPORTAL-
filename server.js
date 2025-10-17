import express from "express";
import path from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.json());
app.use(express.static(__dirname));

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  if (email && password.length >= 4) {
    return res.json({ success: true, message: `स्वागत है, ${email}!` });
  }
  res.status(400).json({ success: false, message: "गलत लॉगिन जानकारी" });
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("📩 Contact form:", { name, email, message });
  res.json({ success: true, message: "संदेश प्राप्त हुआ — धन्यवाद!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
