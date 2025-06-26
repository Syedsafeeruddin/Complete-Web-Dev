import mongoose, {Schema} from "mongoose"

const playlistSchema = new Schema(
    {
        owner:{
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        video: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        name: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        description: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
)

export const Playlist = mongoose.model("Playlist", playlistSchema)