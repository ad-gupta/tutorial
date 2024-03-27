import express from "express";
import dotenv from "dotenv";
import error from "./middleware/error.js";
import catchAsyncError from "./middleware/catchAsyncError.js";
import userRoute from "./routes/userRoutes.js";
import tutorRoute from "./routes/tutorRoutes.js";
import orderRoute from "./routes/orderRoutes.js";
import paperRoute from "./routes/paperRoutes.js"
import contactRoute from "./routes/contactRoute.js"
import mongoose from "mongoose";
import path from 'path';
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from 'cors'

const app = express();
dotenv.config();



const connectToDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, { dbName: "tutorApp" })
    .then(() => {
      console.log("connected to db");
    })
    .catch((err) => console.log(err));
};
// app.use('/files', express.static('files'))
app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use("/api/v1", userRoute);
app.use("/api/v1", tutorRoute);
app.use("/api/v1", orderRoute)
app.use("/api/v1", paperRoute)
app.use("/api/v1", contactRoute)

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.use(error);
const server = app.listen(process.env.PORT, () => {
  connectToDB();
  console.log(`server is running on port ${process.env.PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log(`error: ${err.message}`);
  console.log(`shutting down the server due to unhandled promise rejection`);
  server.close(() => process.exit(1));
});

process.on("uncaughtException", (err) => {
  console.log(`error: ${err.message}`);
  console.log(`shutting down the server due to unhandled promise rejection`);
  // server.close(() => process.exit(1))
});


