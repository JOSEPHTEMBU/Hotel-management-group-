function toggleFunction(number) {
	var detail = document.getElementById("founder-details" + number);
	var card = document.getElementById("card" + number);
	var lessButton = document.getElementById("less" + number);
	var moreButton = document.getElementById("more" + number);

	if (moreButton.style.display !== "none") {
		lessButton.style.display = "block";
		detail.style.display = "block";
		card.style.height = "350px";
		moreButton.style.display = "none";
	} else {
		lessButton.style.display = "none";
		detail.style.display = "none";
		card.style.height = "250px";
		moreButton.style.display = "block";
	}
}
