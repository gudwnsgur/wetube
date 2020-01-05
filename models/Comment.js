import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CommentSchema = new Schema ({
    text : {
        type : String, 
        required : "Text is required"
    },
    createdAt : {
        type : Date,
        default : Date.now 
    }
});

const model = mongoose.model("Comment", CommentSchema);

export default model;


