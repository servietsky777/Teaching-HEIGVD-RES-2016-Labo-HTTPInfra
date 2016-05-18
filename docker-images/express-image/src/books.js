var Chance = require('chance');
var chance = new Chance();

module.exports = {
	generateBooks: function () {
		var numberOfBooks = chance.integer({
			min: 0, 
			max: 10
		});
		var books = [];
		for(var i = 0; i < numberOfBooks; i++){
			var numberOfParagraph = chance.integer({min: 10, max: 100});
			books.push({
				title : chance.word({
						length: chance.integer({min: 5, max: 15})
					}),
				author : chance.word({
						length: chance.integer({min: 5, max: 20})
					}) + " " +
					chance.word({
						length: chance.integer({min: 5, max: 20})
					}),
				content : chance.paragraph({sentences: 10}),
				date : chance.year()
			});
		}
		console.log(books);
		return books;
	}
};

