// import { db } from '../name'

// import createQuestionCollection from './question.collection'
// import createAnswerCollection from './answer.collection'
// import createCommentCollection from './comment.collection'
// import createVoteCollection from './vote.collection'

// import { databases } from './config'

// export default async function getOrCreateDB(){
//     try {
//         await databases.get(db)
//         console.log("Database Onnection")
//     } catch (error) {
//         try {
//             await databases.create(db, db)
//             console.log("Database Created")

//             await Promise.all([
//                 createQuestionCollection(),
//                 createAnswerCollection(),
//                 createCommentCollection(),
//                 createVoteCollection()
//             ])
//             console.log("Collections Created")
//             console.log("Database Connected")
//         } catch (error) {
//             console.log("Error Creating Database or Collection", error)
//         }
//     }
//     return databases
// }

import { db } from "../name";
import createAnswerCollection from "./answer.collection";
import createCommentCollection from "./comment.collection";
import createQuestionCollection from "./question.collection";
import createVoteCollection from "./vote.collection";
import { databases } from "./config";

export default async function getOrCreateDB(){
  try {
    await databases.getDatabase({db})
    console.log("Database connection")
  } catch (error) {
    try {
      await databases.createDatabase(db, db)
      console.log("database created")
      //create collections
      await Promise.all([
        createQuestionCollection(),
        createAnswerCollection(),
        createCommentCollection(),
        createVoteCollection(),

      ])
      console.log("Collection created")
      console.log("Database connected")
    } catch (error) {
      console.log("Error creating databases or collection", error)
    }
    return databases
  }
}