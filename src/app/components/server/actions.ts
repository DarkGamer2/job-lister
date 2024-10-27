"use server";
import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
const uri = process.env.MONGODB_URI || "";
const client = new MongoClient(uri);
export async function FormSubmission(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");
  if (email) console.log(email);
  if (password) console.log(password);
}

export async function FormRegistration(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      await client.connect();
      const database = client.db("joblister");
      const collection = database.collection("users");
      const { email, password, fullName } = req.body;
      await collection.insertOne({ email, password, fullName });
      res.status(200).json({ message: "Success" });
    } catch (err) {
      res.status(500).json({ message: "Error" });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
