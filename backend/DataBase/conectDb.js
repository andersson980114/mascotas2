import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.URI_MONGO)
    console.log("Connected")
} catch (error) {
    console.log("Mb connection error: "+error)
}
