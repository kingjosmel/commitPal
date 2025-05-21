const express = require("express");
const cors = require("cors");
const commitRoutes = require("./routes/commitRoutes");

const app = express();
const port = process.env.PORT || 3001;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

app.use("/api", commitRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
