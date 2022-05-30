const router = require('express').Router();
const { Quotes, User, Category } = require('../models');
const sequelize = require('../config/connection')
// TODO: Import the custom middleware

// GET Quotes of the Day
router.get('/home', async (req, res) => {
	try {
		const quotesData = await Quotes.findAll({
			attributes: ['id', 'description', 'author', 'likes'],
			order: sequelize.literal('rand()'), 
			limit: 1,
			include: [
				{
					model: User,
					attributes: ['username']
				},
				{
					model: Category,
					attributes: ['category_name']
				},
			]
		});

		const quotes = quotesData.map((quote) => quote.get({ plain: true }));
		res.render('homepage',{
		title: 'Random Quote',
		quotes
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.get('/login', (req, res) => {
	if (req.session.loggedIn) {
		res.redirect('/');
		return;
	}

	res.render('login');
});

module.exports = router;