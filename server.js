const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/save-location", (req, res) => {
    const { latitude, longitude } = req.body;
    console.log("Received Location:", latitude, longitude);
    res.json({ message: "Location received successfully!", received: { latitude, longitude } });
});

app.listen(3000, () => console.log("Server running on port 3000"));
