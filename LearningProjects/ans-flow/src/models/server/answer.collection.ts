import { Permission } from "node-appwrite"
import {db, answerCollection} from '../name'
import {databases} from './config' 
import { log } from "console"

export default async function createAnswerCollection(){
    // create Collection
    await databases.createCollection(
        db, 
        answerCollection, 
        answerCollection,
        [
            Permission.read("any"),
            Permission.read("users"),
            Permission.create("any"),
            Permission.update("any"),
            Permission.delete("any"),
        ])
    console.log("Answer Collection Created")

    //create Attributs 
        await Promise.all([
            databases.createStringAttribute(db, answerCollection, "content", 10000, true),
            databases.createStringAttribute(db, answerCollection, "questionId", 50, true),
            databases.createStringAttribute(db, answerCollection, "authorId", 50, true),
        ])
    console.log("Answer Collection Attributes Created");
    
}