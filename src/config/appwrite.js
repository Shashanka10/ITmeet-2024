import { Client, Databases } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const FAQ_DATABASE_ID = "ITMeetDatabase";
export const FAQ_COLLECTION_ID = "FAQ";

export const databases = new Databases(client);
export { ID } from "appwrite";
