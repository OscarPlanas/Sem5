import { Schema, model } from 'mongoose';

const Question = new Schema({
	ask: String,
	user: {
		type: Schema.Types.ObjectId,
		ref: "User"
	},
    booking: {
        type: Schema.Types.ObjectId,
        ref: "Booking"
    }
});

export default model('Question', Question);