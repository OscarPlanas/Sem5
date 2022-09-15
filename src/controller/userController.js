const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

const register = async (req, res) => {
	var { name, email, password } = req.body;
	password = bcryptjs.hashSync(password, 10);
	const newUser = new User({ name, email, password });
	await newUser.save();
	const token = jwt.sign({ id: newUser._id }, 'yyt#KInN7Q9X3m&$ydtbZ7Z4fJiEtA6uHIFzvc@347SGHAjV4E', {
		expiresIn: 60 * 60 * 24
	});
	res.status(200).json({ auth: true, token });
};

const login = async (req, res) => {
	const user = await User.findOne({ email: req.body.email });
	if (!user) {
		return res.status(404).send('The email does not exist');
	}
	const validPassword = bcryptjs.compareSync(req.body.password, user.password);
	if (!validPassword) {
		return res.status(401).json({ auth: false, token: null });
	}
	const token = jwt.sign({ id: user._id }, 'yyt#KInN7Q9X3m&$ydtbZ7Z4fJiEtA6uHIFzvc@347SGHAjV4E', {
		expiresIn: 60 * 60 * 24
	});
	res.json({ auth: true, token });
};

const profile = async (req, res) => {
	const user = await User.findById(req.userId, { password: 0 });
	if (!user) {
		return res.status(404).send('No user found.');
	}
	res.json(user);
};

const getall = async (req, res) => {
	const users = await User.find();
	res.json(users);
};

const getone = async (req, res) => {
	const user = await User.findById(req.params.id);
	res.json(user);
};

module.exports = {
	register,
	login,
	profile,
	getall
};