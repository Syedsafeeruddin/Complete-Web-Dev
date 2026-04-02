import { Permission } from "node-appwrite"
import { db, questionAttachmentBucket } from "../name"
import { storage } from "./config"

export default async function getOrCreateStorage(){
    try {
        await storage.getBucket(questionAttachmentBucket)
        console.log("Storage Connected")
    } catch (error) {
        try {
            await storage.createBucket(
                db, 
                questionAttachmentBucket, 
                questionAttachmentBucket,
                [
                    Permission.read("any"),
                    Permission.read("users"),
                    Permission.create("any"),
                    Permission.update("any"),
                    Permission.delete("any"),
                ],
                false,
                undefined,
                undefined,
                ["jpg", "png", "gif", "jpeg", "webp", "heic"]
            )
            console.log("Storage Created")
            console.log("Storage Connected")
        } catch (error) {
            console.error("Error Creating Storage", error)
        }
    }
}