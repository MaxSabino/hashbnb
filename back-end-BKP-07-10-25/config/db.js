import "dotenv/config";
import mongoose from "mongoose";

const { MONGO_URI } = process.env;

export const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(MONGO_URI);
    console.log("Deu Certo ---> Conexão Ativa!");
  } catch (error) {
    console.log("Falha na Conexão!!!", error);
  }
};
