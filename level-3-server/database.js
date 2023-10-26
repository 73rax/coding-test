const mongoose = require("mongoose");
require("dotenv").config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.${process.env.DB_CONNECTION_STRING}.mongodb.net/?retryWrites=true&w=majority`;


const connectToMongoDB = async () => {
    try {
        await mongoose
            .connect(uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                serverSelectionTimeoutMS: 30000,
            });
            console.log("Connected to MongoDB")
    } catch (error) {
        console.error("MongoDB Connection Error: " + error);
    }
}



module.exports = {connectToMongoDB};