if (localStorage.getItem("ThCook") != null)  {
	var elements = document.querySelectorAll('body *');
elements.forEach((element) => {
  element.style.setProperty('--main-color', localStorage.getItem("ThCook"));
	element.style.setProperty('--dark-color', localStorage.getItem("ThCook2"));
});
} else {
	// do nothing
}
