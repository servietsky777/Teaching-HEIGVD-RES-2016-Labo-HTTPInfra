$(function(){
	function loadBooks(){
		$.getJSON("/api/books/", function(books){
			console.log(books);
			if(books.length > 0){
				$("#books").html("<b>" + books[0].title + "</b>" +
					"<p>" + books[0].content + "</p>" +
					"<p><i>" + books[0].author + "</i></p>");
			}
			else{
				$("#books").text("No content");
			}
		});
	};

	loadBooks();
	setInterval(loadBooks, 2000);
});