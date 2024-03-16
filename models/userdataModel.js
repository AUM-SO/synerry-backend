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
        },
        deviceType: {
            type: String,
        },
        onWeb: {
            type: String,
        }
        /* CounterVisit: {
            type: Number,
        } */
    }, { timestamps: true }
);

const User = mongoose.model("User", UserDataSchema);

export default User;
