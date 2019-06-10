import express from "express";
import bodyParser from "body-parser";

const app = express();
if (process.env.ENV === "Test") {
  console.log("Running testing environment");
} else {
  console.log("Running in Development environment")
}