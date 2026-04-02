import { IndexType, Permission } from "node-appwrite"
import {db, questionCollection} from '../name'
import {databases} from './config'

export default async function createQuestionCollection(){
    // create Collection
    await databases.createCollection(
        db, 
        questionCollection, 
        questionCollection,
        [
            Permission.read("any"),
            Permission.read("users"),
            Permission.create("any"),
            Permission.update("any"),
            Permission.delete("any"),
        ])
    console.log("Question Collection Created")

    //create Attributs 
    await Promise.all([
        databases.createStringAttribute(db, questionCollection, "title", 1000, true),
        databases.createStringAttribute(db, questionCollection, "content", 10000, true),
        databases.createStringAttribute(db, questionCollection, "authorId", 50, true),
        databases.createStringAttribute(db, questionCollection, "tags", 50, true, undefined, true),
        databases.createStringAttribute(db, questionCollection, "attachmentId", 50, false),
    ])
    console.log("Question Collection Attributes Created")

    //create Indexes
    await Promise.all([
        databases.createIndex(
            db,
            questionCollection, 
            "title", 
            IndexType.Fulltext,
            ["title"],
            ["asc"]
        ),
        databases.createIndex(
            db,
            questionCollection, 
            "title", 
            IndexType.Fulltext,
            ["content"],
            ["asc"]
        )
    ])
}