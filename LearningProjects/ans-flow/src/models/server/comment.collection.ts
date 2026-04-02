import { Permission } from "node-appwrite"
import {db, commentCollection} from '../name'
import {databases} from './config' 

export default async function createCommentCollection(){
    // create Collection
    await databases.createCollection(
        db, 
        commentCollection, 
        commentCollection,
        [
            Permission.read("any"),
            Permission.read("users"),
            Permission.create("any"),
            Permission.update("any"),
            Permission.delete("any"),
        ])
    console.log("Comment Collection Created")

    //create Attributs 
        await Promise.all([
            databases.createStringAttribute(db, commentCollection, "content", 10000, true),
            databases.createStringAttribute(db, commentCollection, "typeId", 50, true),
            databases.createStringAttribute(db, commentCollection, "authorId", 50, true),
            databases.createEnumAttribute(db, commentCollection, "type", ["answer", "question"], true),
        ])
        console.log("Comment Collection Attributes Created")
    
}