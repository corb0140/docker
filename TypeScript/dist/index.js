import express from "express";
const app = express();
const port = 3000;
app.get("/", (req, res) => {
    res.send(`Hello from port${port}`);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map