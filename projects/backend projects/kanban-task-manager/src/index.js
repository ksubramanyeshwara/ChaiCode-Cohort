import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/db.js";

// setting environment variables path to .env
dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    /* 
    this will not run because errors are handled inside connectDB.
    To let .catch() run, either:
        Remove the try...catch inside connectDB, or
        Re-throw the error inside the catch block.
    */
    console.error("Database connection error", error);
    process.exit(1);
  });
