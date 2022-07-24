import express from "express";

const app = express();

const port = 8888; 

app.use(express.json());

app.get("/", (request, response) => {
    return response.status(201).json({ message: "Hello world!" });
});

app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}`);
});