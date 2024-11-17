const mongo = require("mongodb");

const MongoClient = mongo.MongoClient;

// const url =
//   "mongodb+srv://niraj:niraj@2003@youtubeairbnb.gmw0o.mongodb.net/?retryWrites=true&w=majority&appName=youtubeAirbnb";

const url =
  "mongodb+srv://root:root@youtubeairbnb.gmw0o.mongodb.net/?retryWrites=true&w=majority&appName=youtubeAirbnb";

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(url)
    .then((client) => {
      console.log("MongoDB Connected Successfully!");
      _db = client.db("youtubeAirbnb");
      callback();
    })
    .catch((err) => {
      console.log("Error while connecting to Mongo:", err);
      throw err;
    });
};

const getDB = () => {
  if (!_db) {
    throw new Error("Database not initialized! Please connect first.");
  }
  return _db;
};

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
