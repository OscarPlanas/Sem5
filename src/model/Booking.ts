import { Schema, model } from 'mongoose';

const Booking = new Schema({
	user: String,
	name: String
});

export default model('Booking', Booking);