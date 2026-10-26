import mongoose from "mongoose";

export interface Giginterface {
    UserId: mongoose.Types.ObjectId;
    GigTitle: string;
    GigDescription: string;
    GigPrice: number;
    GigLocation: number;
    Time: Date;
    ExpireDateAndTime: Date;
    IsActive: boolean;
}

const gigSchema = new mongoose.Schema<Giginterface>({
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    GigTitle: {
        type: String,
        required: true,
    },
    GigDescription: {
        type: String,
        required: true,
    },
    GigPrice: {
        type: Number,
        required: true,
    },
    GigLocation: {
        type: Number,
        required: true,
    },
    Time: {
        type: Date,
        default: Date.now,
    },
    ExpireDateAndTime: {
        type: Date,
        required: true,
    },
    IsActive: {
        type: Boolean,
        default: true,
    },
})

export default mongoose.model<Giginterface>("Gig", gigSchema)