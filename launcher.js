var cakeobj;

if (localStorage.getItem("uname") == null || localStorage.getItem("uname") == "") {

	newman();
}

let luc = localStorage.getItem("lcolor");
if (luc == null || luc == "") {
	let x = "#009dff";
	localStorage.setItem("lcolor", x);
	document.querySelector("#icls").value = localStorage.getItem("lcolor");
} else {
	document.querySelector("#icls").value = luc;
}


if (localStorage.getItem("udesc") == null || localStorage.getItem("udesc") == "") {
	let x = "Hi! I am " + localStorage.getItem("uname") + ", say hi!";
	setTimeout(document.querySelector("#wdialog").show(), 2000)
	localStorage.setItem("udesc", x);
	console.log("ud set");
}
document.getElementById("edname").value = localStorage.getItem("uname")
document.getElementById("eddesc").value = localStorage.getItem("udesc");
console.log("un disp suc");
console.log(localStorage.getItem("uname"));

function saved() {
	localStorage.setItem("uname", document.getElementById("edname").value)
	localStorage.setItem("udesc", document.getElementById("eddesc").value)
	localStorage.setItem("lcolor", document.getElementById("icls").value)
}
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function pmon() {
	document.getElementById("myModal").style.display = "block";
	document.getElementById("edname").innerHTML = localStorage.getItem("uname")
	document.getElementById("eddesc").innerHTML = localStorage.getItem("udesc");
}
function pmoff() {
	document.getElementById("myModal").style.display = "none";
}

document.getElementById("welcome").innerHTML = 'What\'s Cookin\' ' + localStorage.getItem('uname') + '?';
if (localStorage.getItem("listsu") != null) {
	document.getElementById("grouplist").innerHTML = localStorage.getItem("listsu");
}
function openw(par) {
	location.assign(par);
}
function addg() {
	let ngname = prompt("Enter A New Group Name\n\n(The group name 'main' or '' will connect to the chattingly mainstream chat.)");
	if (ngname != null || ngname != "") {
		document.getElementById("grouplist").innerHTML += `<div class="group">
				<button class="del" onclick="rem(this)"><i class="material-icons" style="font-size: 20px;transform: translate(13px, -6px);">more_vert</i></button>
				<a class="gname" style="font-size: 18px;padding: 4px;" onclick="openw('/app/?h=` + ngname + `')">` + ngname + `</a>
<span class="glastm">Active</span>
<span class="gtmd">BETA</span>
			</div>`;
		save();

	}
}

function setthe(val, z) {
	let x = window.getComputedStyle(val).backgroundColor;
	localStorage.setItem("ThCook", x);
	localStorage.setItem("ThCook2", z);
	location.reload();
}

function darkenRGBAColor(rgbaColor, darknessFactor) {
	// Parse the RGBA color string
	var colorValues = rgbaColor.match(/\d+/g);
	var red = parseInt(colorValues[0]);
	var green = parseInt(colorValues[1]);
	var blue = parseInt(colorValues[2]);

	// Calculate the darkened color channels
	var darkenedRed = Math.round(red * (1 - darknessFactor));
	var darkenedGreen = Math.round(green * (1 - darknessFactor));
	var darkenedBlue = Math.round(blue * (1 - darknessFactor));

	// Return the darkened RGBA color string
	return "rgba(" + darkenedRed + ", " + darkenedGreen + ", " + darkenedBlue + ")";
}

function rem(e) {
	document.getElementById("gfs").showModal();
	cakeobj = e.parentElement;
}

function save() {
	localStorage.setItem("listsu", document.getElementById("grouplist").innerHTML);

	return "saved.";
}

function newman() {
	document.querySelector("#wdialog").showModal();
}

var cityName;

function openCity(evt, cityName) {
	cityName = cityName;
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
var exphnl = [];
function explore() {
	var connection = new WebSocket("wss://wss.adthoughtsglobal.repl.co");
	connection.onmessage = function(event) {
		if (event.data.includes("hname")) {
			let xy = JSON.parse(event.data).hname;
			if (!exphnl.includes(xy)) {
			exphnl.push(xy);
			document.getElementById("Paris").innerHTML += `<div class="group" > <button class="del" onclick="rem(this)" ><i class="material-icons" style="font-size: 20px; transform: translate(13px, -6px); ">more_vert</i></button> <a class="gname" style="font-size: 18px; padding: 4px; " onclick="openw('/app/?h=`+xy+`')">`+xy+`</a> <span class="glastm" >Active</span> <span class="gtmd" >BETA</span> </div>`;
			}
		}
	}
}