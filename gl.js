if (localStorage.getItem("ThCook") != null)  {
	var elements = document.querySelectorAll('body *');
elements.forEach((element) => {
  element.style.setProperty('--main-color', localStorage.getItem("ThCook"));
	element.style.setProperty('--dark-color', localStorage.getItem("ThCook2"));
});
} else {
	localStorage.setItem("ThCook", "#3498db")
	localStorage.setItem("ThCook2", "#00708a")
	var elements = document.querySelectorAll('body *');
elements.forEach((element) => {
  element.style.setProperty('--main-color', localStorage.getItem("ThCook"));
	element.style.setProperty('--dark-color', localStorage.getItem("ThCook2"));
}
