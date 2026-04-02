import { voteCollection, db, questionCollection, answerCollection } from "@/models/name";
import { databases, users } from "@/models/server/config";
import { UserPrefs } from "@/store/Auth";
import { NextRequest, NextResponse } from "next/server";
import { Query } from "node-appwrite";

export async function POST(request: NextRequest){
    try {
        //grab the data
        const {votedById, voteStatus, type, typeId} = await request.json()
        //list-document
        const response = await databases.listDocuments(db, voteCollection, [
            Query.equal('type', type),
            Query.equal('typeId', typeId),
            Query.equal('votedById', votedById)
        ])

        if(response.documents.length > 0){
            await databases.deleteDocument(db, voteCollection, response.documents[0].$id)

            //decrease the reputation
            const questionOrAnswer = await databases.getDocument(
                db,
                type === "question" ? questionCollection : answerCollection,
                typeId
            )

            const Authorprefs = await users.getPrefs<UserPrefs>(questionOrAnswer.authorId)

            await users.updatePrefs<UserPrefs>(questionOrAnswer.authorId, {
                reputataion: response.documents[0].voteStatus === "upvoted" ? Number(Authorprefs.reputation) - 1 : Number(Authorprefs.reputation) + 1
            })

        }
        // it means votes does not exist
        if(response.documents[0]?.voteStatus !== voteStatus){
            const doc = await databases.createDocument(db, voteCollection, ID.unique(), {
                type,
                typeId,
                voteStatus,
                votedById
            })

            //inc or dec the reputation
            const questionOrAnswer = await databases.getDocument(
                db,
                type === "question" ? questionCollection : answerCollection,
                typeId
            )

            const Authorprefs = await users.getPrefs<UserPrefs>(questionOrAnswer.authorId)

            await users.updatePrefs<UserPrefs>(questionOrAnswer.authorId, {
                reputataion: response.documents[0].voteStatus === "upvoted" ? Number(Authorprefs.reputation) - 1 : Number(Authorprefs.reputation) + 1
            })
        }

        const [upVote, downVote] = await Promise.all([
            databases.listDocuments(db, voteCollection, [
                Query.equal('type', type),
                Query.equal('typeID', typeId),
                Query.equal('voteStatus', "upvoted"),
                Query.equal('votedById', votedById),
                Query.limit(1),
            ]),
            databases.listDocuments(db, voteCollection, [
                Query.equal('type', type),
                Query.equal('typeID', typeId),
                Query.equal('voteStatus', "downvoted"),
                Query.equal('votedById', votedById),
                Query.limit(1),
            ])
        ])

        return NextResponse.json(
            {
                data: {
                    documents: null, voteResult: upVote.total = downVote.total
                },
                message: "voted handled"
            },
            {status: 200}
        )

    } catch (error: any) {
        return NextResponse.json(
            {error: error?.message || "Error in voting"},
            {status: error?.status || error?.code || 500}
        )
    }
}