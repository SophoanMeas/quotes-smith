const { User } = require('../models');

const userData = [
	{
		username: 'bladepicky',
		first_name: 'Nimra',
		last_name: 'Norton',
		email: 'nirma.norton@hotmail.com',
		password: 'xxxxxxxx'
	},
	{
		username: 'ridtruly',
		first_name: 'Mimi',
		last_name: 'Ferreira',
		email: 'mimi.ferreira@gmail.com',
		password: 'xxxxxxxx'
	},
	{
		username: 'greedyalcohol',
		first_name: 'Colton',
		last_name: 'Nguyen',
		email: 'colton.nguyen@gmail.com',
		password: 'xxxxxxxx'
	},
	{
		username: 'admin1',
		first_name: 'Patrick',
		last_name: 'Narcisse',
		email: 'pat@gmail.com',
		password: '1234567'
	}
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
