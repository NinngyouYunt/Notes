import { Schema} from "mongoose";

// Some Useful syntax


// ----------------------- Mongoose ----------------------------
// Create a model
const bookmodel = new Schema({
  title: {type: String},
  lendOut: {type: Boolean, default: false}
});

// Defining Book model as class definition
const Book = mongoose.model("Book", bookmodel);

// Retrieve book info from request
const book = new Book(req.body);
// Save the book document to db
book.save(callBack); // Use callBack or Promise to async the response

// Search for item
/**
 * Query and option works same as MongoDB
 * option - {"_id": 0} to disable returning id
 * use either callBack or then to async
 */
Book.find(query, option, callBack(items));

// Modified documents for return
const modifiedItems = items.map((item) => {
  const newItem = item.toJSON();
  // modify the newItem
  // req.headers.host for host address
  /**
   * Can be used to double verify info(like password) 
   * then remove password string from returning JSON (not needed to be sent back)
  */ 
  return newItem;
});
return res.json(modifiedItems);
// ---------------------------- END Mongoose ----------------------------

// ---------------------------- Controllers, Routers ----------------------------
/**
 * Move all the routes to separate files
 */
const router = require("./routers/someRouter");
app.use("/", router); // Mount router to root

/**
 * Put controllers in separate files to allow unit tests
 */
const controller = require("./controllers/someController");
someRouter.route("/")
  .get(controller.get);
// ---------- BEGIN someController.js ----------
const get = (req, res) => {};
const post = (req, res) => {};
module.exports = {get, post};
// ---------- END someController.js ----------
// ----------------------------END Controllers, Routers ----------------------------

// ---------------------------- Middleware ----------------------------
someRouter.use("/", (req,res,next) => { // Mount middleware to root
  /**
   * Can attach extra info to req for information
   * Always call next (callback stack) when success
   * Remember once "res.send()" is used, the request completes
   */
  if (good) return next();
  else return res.sendStatus(404);
});
// ---------------------------- END Middleware ----------------------------

// ---------------------------- Other ----------------------------

/**
 * GET to retrieve
 * POST to add
 * PUT to replace
 * PATCH to update
 * DELETE to remove
 */

// ---------------------------- END Other ----------------------------
