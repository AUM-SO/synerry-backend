import mongoose from "mongoose";

const UserDataSchema = new mongoose.Schema(
    {
        ipAddress: {
            type: String,
        },
        browserName: {
            type: String,
        },
        browserVersion: {
            type: String,
        },
        OSName: {
            type: String,
        },
        timestamps: {
            type: String,
        }
        /* CounterVisit: {
            type: Number,
        } */
    }, { timestamps: true }
);

const Users = mongoose.model("Users", UserDataSchema);

export default Users;
