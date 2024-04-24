import app from "./app";
import mongoose from "mongoose";

async function server() {
  try {
    await mongoose.connect(
      "mongodb+srv://db_express_typescript_mongoose_starter:suZvbCMfy8oC0quT@cluster0.zuyuakg.mongodb.net/db_express_typescript_mongoose_starter?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Database is connected");
    app.listen(5000, () => {
      console.log(`Server is listening on port ${5000}`);
    });
  } catch (error) {
    console.log(error);
  }
}

server();
