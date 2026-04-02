import { IndexType, Permission } from "node-appwrite"
import {db, voteCollection} from '../name'
import {databases} from './config'

export default async function createVoteCollection(){
    // create Collection
    await databases.createCollection(
        db, 
        voteCollection, 
        voteCollection,
        [
            Permission.read("any"),
            Permission.read("users"),
            Permission.create("any"),
            Permission.update("any"),
            Permission.delete("any"),
        ])
    console.log("Vote Collection Created")

    //create Attributs 
    await Promise.all([
        databases.createEnumAttribute(db, voteCollection, "type", ["question", "answer"], true),
        databases.createStringAttribute(db, voteCollection, "typeId", 50, true),
        databases.createEnumAttribute(db, voteCollection, "voteStatus", ["upvoted", "downvoted"], true),
        databases.createStringAttribute(db, voteCollection, "voteById", 50, true)
    ])
    console.log("Vote Collection Attributes Created")

}