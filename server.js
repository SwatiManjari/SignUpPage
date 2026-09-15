const express = require("express");

const app = express();

const port = 3000;

const users = [];

app.use(express.static(__dirname));

app.use(express.json());

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    });

    console.log(users);

    res.send("Signup successful!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});