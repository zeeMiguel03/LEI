const express = require("express");
const fs = require("fs");
const path = require("path");
const PORT = 3000;

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));  
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "Questionario.html"));
});

app.post("/send", (req, res) => {
    console.log("Received data:", req.body); 

    const { name, age, postal, taste, time, ambience } = req.body;

    if (!name || !age) {
        return res.status(400).send("Missing required fields");
    }

    const data = `Name: ${name}, Age: ${age}, Postal: ${postal}, Taste: ${taste}
                 Time: ${time}, Ambience: ${ambience}\n`;

    fs.appendFile("dados.txt", data, (err) => {
        if (err) {
            return res.status(500).send("Error saving...");
        }

        res.send("Saved!");
    });
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
