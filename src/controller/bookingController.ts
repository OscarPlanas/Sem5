import Booking from '../model/Booking';
import { Request, Response } from 'express';

const booking = async (req: Request, res: Response) => {
	const user = req.body.user;
	const name = req.body.name;
	const newBooking = new Booking({ user, name });
	await newBooking.save();
	res.status(200).json({ auth: true });
};

const cancel = async (req: Request, res: Response) => {
	const booking = await Booking.findOne({ user: req.body.user, name: req.body.name });
	if (!booking) {
		return res.status(404).send('The booking does not exist');
	}
	await Booking.deleteOne({ user: req.body.user });
	res.status(200).json({ auth: true });
};

const getall = async (req: Request, res: Response) => {
	const bookings = await Booking.find();
	res.json(bookings);
};

export default {
	booking,
	cancel,
	getall
};