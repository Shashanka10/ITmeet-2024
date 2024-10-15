import { Client, Databases, Storage } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const FAQ_DATABASE_ID = "ITMeetDatabase";
export const FAQ_COLLECTION_ID = "FAQ";

export const EXPECT_DATABASE_ID = "6708c8b10001ec2fb25e";
export const EXPECT_COLLECTION_ID = "6708c8c1002b381ebfb4";
export const EXPECT_BUCKET_ID = "6708ddf7000a24a0820d";

export const databases = new Databases(client);
export const storage = new Storage(client);

export { ID } from "appwrite";
