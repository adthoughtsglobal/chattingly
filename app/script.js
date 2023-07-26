var avans = 0;
const button = document.getElementById("send");
const meml = [];
let yourcolor;
let playnoises = new Boolean(false);
var unremess = 0;
var fuser;

function tiv() {
	navigator.vibrate(50, 75, 100, 125, 100, 75, 50);
}

on();
let lnu = localStorage.getItem("lname");

const banned = ["UID215751086"];

if (banned.includes(lnu)) {
	document.body.innerHTML = `<div style="text-align: center;padding: 25vh 20vw; cursor: no-drop"><h1 style="color: red; font-size: 100px ">!</h1><h1>Wait!, ` + localStorage.getItem("uname") + `, you're banned...</h1><p>This means you cannot use chattingly until the developer decides. You can still use mods or other services, illegally.</div>`;
}
if (localStorage.getItem("uname") == null || localStorage.getItem("uname") == "") {
	location.href = "/auth.html?np="+location.href;
} else {
	document.getElementById("username").value = localStorage.getItem("uname");
	document.getElementById("aboutme").value = localStorage.getItem("udesc");
}
let luc = localStorage.getItem("lcolor");
if (luc != null || luc != "") {
	document.querySelector("#icls").value = luc;
}



localStorage.setItem("uname", document.getElementById("username").value);
localStorage.setItem("udesc", document.getElementById("aboutme").value);

if (window.location.href.includes("?host=")) {
	const params = new Proxy(new URLSearchParams(window.location.search), {
		get: (searchParams, prop) => searchParams.get(prop),
	});
	var connection = new WebSocket(params.host); /* the channel host */

} else {
	var connection = new WebSocket("wss://wss.adthoughtsglobal.repl.co");
}

if (window.location.href.includes("?h=")) {
	var cutp = "ch";
	const params = new Proxy(new URLSearchParams(window.location.search), {
		get: (searchParams, prop) => searchParams.get(prop),
	});
	var chcx = params.h; /* the channel host */
	var chcu = params.hu; /* The host user */
} else {
	var chcx = "main";
	var chcu = "main";
}

document.title = "Chattingly | " + chcx;

connection.onopen = (event) => {
	console.log("Connected");
	document.querySelector("#aboutme").setAttribute("placeholder", "Hi i am " + document.getElementById("username").value + "! say hi!");
	console.log("%c" + "Hold Up!", "color: red; -webkit-text-stroke: 2px black; font-size: 72px; font-weight: bold;")
	console.log("%c" + "If someone told you to paste something here, there's a 1000/10 chance that it's a scam!!!", "color: #7289DA; -webkit-text-stroke: 1px black; font-size: 20px; font-weight: bold;");
	console.log("It may result in errors that hurts your device is some ways if you use this console.")
	let ngname = chcx;
	if (cutp == "ch") {
		if (localStorage.getItem("lists") == null) {
			let x = localStorage.getItem("lists") + `<div class="group">
			<b onclick="openw('https://adthoughtsglobal.github.io/chattingly//app/?h=` + ngname + `')"><i class="material-icons">people</i></b><button class="del" onclick="rem(this)"><i class="material-icons">delete</i></button>
			<a class="gname">` + ngname + `</a>
		</div>`;
			localStorage.setItem("lists", x);
		}
		if (localStorage.getItem("lists").includes(chcx)) { }
		else {

			var xss;
			xss = localStorage.getItem("lists") + `<div class="group">
			<b onclick="openw('/app/?h=` + ngname + `')"><i class="material-icons">people</i></b><button class="del" onclick="rem(this)"><i class="material-icons">delete</i></button>
			<a class="gname">` + ngname + `</a>
		</div>`;
			localStorage.setItem("lists", removeNull(xss));

		}
		chat.innerHTML += `<div class="infocon"><h1>Connected to ${chcx}!</h1><p style='color:white;'>Start chatting on <b>${chcx}</b> with chattingly!<br><b>OnDev:</b> Some Features may not be visible, it will be visible soon!</p><button class="bsp1 btn btn-primary awidth" onclick="navigator.clipboard.writeText(location.href)" aria-label="default input example"><i class="fas fa-share"></i> Share</button></div>`;
	}
	cutewms = ["Just joined the chat!", "Showed Up!", "Just Joined, say hi!", "have just joined.", "made its way here."]
	let cutewm = cutewms[Math.floor(Math.random() * cutewms.length)];
	connection.send(`{"server":" <p><i class='material-icons enex' style='font-size:15px;'>arrow_forward</i> ` + document.getElementById('username').value + ` ` + cutewm + `</p>", "hname":"` + chcx + `"}`);
	connection.send(`{"crave":"show you", "hname":"` + chcx + `"}`);
	setTimeout(off, 2000);
	localStorage.setItem("lists", removeNull(localStorage.getItem("lists")));
};

connection.onclose = (event) => {
	console.log("Disconnected");
	location.reload();
};

connection.onerror = (event) => {
	console.error("WebSocket error observed:", event);
};

var unnew;

function focus() {
	document.title = "Chattingly | " + chcx + " | " + (meml.length - 1) + " users connected";
	unremess = 0;
}

connection.onmessage = (event) => {
	let gnmfj = event.data;

	if (event.data.includes(`{"cmd":"gmsg","val":`)) {
		if (JSON.parse(event.data).val.hname == chcx) {
			/* bot */
			let nmo = JSON.parse(event.data).val;
			let punm = nmo.un;
			let pdt = "bot";
			let pmc = nmo.mc;
			let pnm = nmo.nm;
			let gnmfj = `<p class="mh"><strong class="unms" style='background-color: ` + pmc + `' title="` + punm + `">` + punm + `</strong> <span style="display: inline;" class="datewith">` + pdt + `</span> <br> <textarea class="msgtxt" readonly>` + pnm + `</textarea></p>`;
			chat.innerHTML += gnmfj;
			window.scrollTo(0, document.body.scrollHeight);
		}
	}
	if (JSON.parse(event.data).hname == chcx) {
		if (event.data.startsWith(`{"tyda`)) {
			document.getElementById("typing").innerHTML = JSON.parse(event.data).tydat + " is typing...";
			setTimeout(tcttst, 2000)
			function tcttst() {
				document.getElementById("typing").innerHTML = "...";
			}
		}
		if (cutp == "ch") {
			if (event.data.includes(`"ty":"ch"`)) {

			}
		}

		// append received message from the server to the DOM element 
		const chat = document.querySelector("#chat");
		if (event.data == '"ping"') { return; }
		if (event.data == '"ONLINE"') { return; }

		if (event.data.includes(" Just joined the chat")) {
			;
			updatemem();
		}
		if (event.data.includes(" Just left the chat")) {
			;
		}

		if (event.data.includes(`retrue`)) {
			/* retrue */
			var cachemem = "true";
			chat.innerHTML += `<button style="display: none;">` + event.data + `</button>`;
		} else if (event.data.includes(`"dat":"n"`)) {
			/* Normal messages */
			if (document.hasFocus()) { } else {
				unremess++
				document.title = unremess + " new messages | Chattingly";
			}
			let nmo = JSON.parse(event.data);
			let punm = nmo.un;
			let key = nmo.key;
			let pdt = nmo.dt;
			let pmc = nmo.mc;
			let pnm = addemojis(bold(removeTags(nmo.nm)));
			// msuffix is the appended content before messages, the badge.
			if (punm == document.getElementById("username").value) {
				var msuffix = `<p class="mh"><button class="unms" style='color: ` + pmc + `' title="` + punm + `" onclick="showtext('` + punm + `','meth', '` + pmc + `')">` + punm + `</button> <span style="display: inline;" class="datewith">` + pdt + `</span><button class="delbtn" onclick="gdel(`+ key +`)"><i class="material-icons" style="font-size:15px;">delete_forever</i></button><button class="delbtn" onclick="copym(this)"><i class="material-icons" style="font-size:15px;">content_copy</i></button> <br><span class="msgtxt">`;
			} else {
			var msuffix = `<p class="mh"><button class="unms" style='color: ` + pmc + `' title="` + punm + `" onclick="showtext('` + punm + `','meth', '` + pmc + `')">` + punm + `</button> <span style="display: inline;" class="datewith">` + pdt + `</span><button class="delbtn" onclick="this.parentElement.remove()"><i class="material-icons" style="font-size:15px;">delete_forever</i></button><button class="delbtn" onclick="copym(this)"><i class="material-icons" style="font-size:15px;">content_copy</i></button> <br><span class="msgtxt">`;
			}

			let gnmfj = msuffix + pnm + `</span></p>`;
			chat.lastElementChild.insertAdjacentHTML("afterend", gnmfj);
			unnew = nmo.un;

			if (document.querySelector("#chat").innerHTML.includes("E?")) {
				document.querySelector("#chat").lastElementChild.remove();
			}

			/* sending retrue */
			if (gnmfj.includes("E?" + document.getElementById("username").value)) {
				connection.send(
					`{"retrue":"", "abt":" ` + document.getElementById('aboutme').value + `", "u": "` + localStorage.getItem('lname') + `", "un":"` + document.getElementById("username").value + `", "hname":"` + chcx + `"}`);
			}
		} else if (event.data.includes(`"dat":"il"`)) {
			/* Image */
			if (document.hasFocus()) { } else {
				unremess++
				document.title = unremess + " new messages | Chattingly";
			}
			let nmo = JSON.parse(event.data);
			let punm = nmo.un;
			let pdt = nmo.dt;
			let pmc = nmo.mc;
			let pl = nmo.l;
			let gnmfj = `<p class="mh"><button class="unms" style='color: ` + pmc + `' title="` + punm + `" onclick="showtext('` + punm + `','meth')">` + punm + `</button> <span style="display: inline;" class="datewith">` + pdt + `</span> <br> <img src="` + pl + `" onclick="showimg(this)" onerror="this.src = 'https://media.discordapp.net/attachments/1083374857292615680/1109037703594512384/image.png?width=119&height=130';" class="img-thumbnail" style='border-radius: 5px;'></p>`;
			chat.innerHTML += gnmfj;

		} else if (event.data.includes(`"dat":"tsts"`)) {
			/* tests */
			let nmo = JSON.parse(event.data);
			let punm = nmo.un;
			let pdt = nmo.dt;
			let pmc = nmo.mc;
			let pnm = nmo.nm;
			let gnmfj = `<p class="mh"><button class="unms" style='background-color: ` + pmc + `' title="` + punm + `" onclick="showtext('` + punm + `','meth')">` + punm + `</button> <span style="display: inline;" class="datewith">` + pdt + `</span> <br> <textarea class="msgtxt" readonly>` + pnm + `</textarea></p>`;
			chat.innerHTML += gnmfj;
		} else {
			if (event.data.includes(`{"cmd":"handshake","listener":"setprotocol"}`)) {
				chat.innerHTML += `<p>Some Other Client have started a websocket connection.</p>`;
			} else if (event.data.includes(`{"crave":"addme"`)) {
				;
				let nmo = JSON.parse(event.data);
				let punm = nmo.un;
				if (meml.includes(punm)) { }
				else {
					meml.push(punm);
				}
			} else if (event.data.includes(`{"crave":"show you"`)) {
				connection.send(`{"crave":"addme","un":"` + document.getElementById("username").value + `", "hname":"` + chcx + `"}`)
			} else if (event.data.includes(`dat":"dm`)) {
				/* Dm's */
				let nmo = JSON.parse(event.data);
				if (nmo.to == document.getElementById("username").value || nmo.un == document.getElementById("username").value) {
					let punm = nmo.un;
					let pdt = nmo.dt;
					let pmc = nmo.mc;
					let pnm = bold(removeTags(nmo.nm));
					// msuffix is the appended content before messages, the badge.
					let gnmfj = `<p class="mh"><button class="unms" style='color: ` + pmc + `' title="` + punm + `" onclick="showtext('` + punm + `','meth', '` + pmc + `')">` + punm + ` -> <span style="color: ` + localStorage.getItem("lcolor") + `">You</span></button> <span style="display: inline;" class="datewith">` + pdt + ` (Direct Message : Only you can see this)</span><button class="delbtn" onclick="this.parentElement.remove()"><i class="material-icons" style="font-size:15px;">delete_forever</i></button><button class="delbtn" onclick="copym(this)"><i class="material-icons" style="font-size:15px;">content_copy</i></button> <br><span class="msgtxt">` + pnm + `</span></p>`;
					chat.lastElementChild.insertAdjacentHTML("afterend",
						gnmfj);
				}
			} else if (event.data.includes(`{"server":"`)) {
				let xhu = JSON.parse(event.data).server;
				chat.innerHTML += xhu;
			}
		}

		if (event.data.includes("@silent ")) {

		} else {
			let x = "@" + document.getElementById("username").value;

			if (event.data.includes(x)) {
				document.getElementById("hh").play();
				tiv();
			}


		}
		window.scrollTo(0, document.body.scrollHeight);



	};
}

function copym(el) {
navigator.clipboard.writeText(el.parentElement.lastChild.innerHTML);
}


// f- sending a message

function send() {
	function get12HourFormatUTCTime() {
		const date = new Date();
		const utcHours = date.getUTCHours();
		const utcMinutes = date.getUTCMinutes();
		const utcSeconds = date.getUTCSeconds();

		let hours = utcHours % 12;
		if (hours === 0) {
			hours = 12;
		}

		const amPm = utcHours >= 12 ? "PM" : "AM";

		const formattedTime = hours.toString().padStart(2, "0") + ":" +
			utcMinutes.toString().padStart(2, "0") + ":" +
			utcSeconds.toString().padStart(2, "0") + " " + amPm;

		return formattedTime;
	}

	const utcTime = get12HourFormatUTCTime();

	const dateString = utcTime

	const name = document.querySelector("#username")
	const message = document.querySelector("#message");
	let newmessage = formdqs(message.value);

	tiv();
	/* The message sending part */

	function generateRandomSequence() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let sequence = '';

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    sequence += characters.charAt(randomIndex);
  }

  return sequence;
}

 var meskey = generateRandomSequence();

	let data = `{"dat":"n", "un":"${name.value}", "dt":"${dateString}", "mc":"${yourcolor}", "nm":"${newmessage}", "hname":"` + chcx + `","key":"${meskey}"}`;


	// Slash Commands
	// Image
	if (newmessage.startsWith("/img ")) {
		link = newmessage.split(' ')[1]
		if (link == "" || link == "null") {
			data = `{"dat":"il","l":"${link}", "un":"${name.value}", "dt":"${dateString}", "mc":"${yourcolor}", "hname":"` + chcx + `"}`;
		} else {
			data = `{"dat":"il","l":"${link}", "un":"${name.value}", "dt":"${dateString}", "mc":"${yourcolor}", "hname":"` + chcx + `"}`;
		}
	}

	// CHRISTMAS aka anon
	if (newmessage.startsWith("/christmas")) {
		var christmas = newmessage.slice(11);
		data = `{"dat":"n", "un":"Christmas", "dt":"${dateString}", "mc":"blue", "nm":"${christmas}", "hname":"` + chcx + `"}`;
	}
	
	// DM
	if (newmessage.startsWith("/dm ")) {
		nms = newmessage.split(' ')[1]
		to = newmessage.split('@')[1]
		data = `{"dat":"dm","to":"${to}", "un":"${name.value}", "dt":"${dateString}", "mc":"${yourcolor}", "nm":"${nms}", "hname":"` + chcx + `"}`;
	}

	// Channel (ig) 
	if (newmessage.startsWith("/ch ")) {
		nms = newmessage.split(' ')[1]
		to = newmessage.split('#')[1]
		data = `{"dat":"ch","to":"${to}", "un":"${name.value}", "dt":"${dateString}", "mc":"${yourcolor}", "nm":"${nms}"}`;
	}

	// New line : not a slash cmd
	if (newmessage.includes("/n")) {
		newmessage.replace("/n", `
	`);
	}

	let newnnmessage = newmessage

	// Send composed message to the server
	if (newnnmessage != '') {
		connection.send(data);
	}

	// clear input fields
	message.value = "";
	checkinpbord()
};

function insertimg() {
	let url = prompt("Enter an image url : ");
	message.value = "/img " + url;
	document.getElementById("send").click();
}

var myModal = document.getElementById('modal')
var myInput = document.getElementById('ignore')

function fu1() {
	modal.style.display = 'block';
}

function abyt() {
	$('#mfamp').modal('show');
}

document.body.blur = function() {
	var nmsgs = 0;
}

/* Send a left message on window unload */

window.onbeforeunload = closingCode;
function closingCode() {
	connection.send(`{"server":" <p><i class='material-icons enexl' style='font-size:15px;'>arrow_back</i> ` + document.getElementById("username").value + ` Just left the chat</p>", "hname":"` + chcx + `"}`);

	return null;
}

document.body.onkeydown = function() {
	document.querySelector("#message").focus()
}

function showtext(text, x, z) {
	if (x == 'meth') {
		document.getElementById("showout2").innerHTML = text;
		document.getElementById("myModal3").style.display = "block";
		document.getElementById("mpmoc").style.background = "linear-gradient(8deg, " + z + " 0%, rgba(0,0,0,1) 100%)";
		callforuser(text);
	} else {
		document.getElementById("showout").innerHTML = text;
		document.getElementById("myModal2").style.display = "block";
	}
}

function scd() {
	connection.send(`{"crave":"show you", "hname":"` + chcx + `"}`);
}

function callforuser(user) {
	document.querySelector("#about").style.filter = "blur(5px)";
	document.querySelector("#showout3").style.filter = "blur(5px)";
	fuser = user;
	document.querySelector("#about").value = "...";
	document.querySelector("#message").value = "E?" + user;
	document.querySelector("#send").click();
	document.getElementById("uionoff").innerHTML = `<div class="google-loading-container">
  <div class="google-loading"></div>
</div>
`
	setTimeout(() => {
		if (document.querySelector("#chat").lastElementChild.innerText.includes(`{"retrue`)) {
			document.getElementById("uionoff").innerHTML = "🟢";
		} else {
			document.getElementById("uionoff").innerHTML = "🔴";
		}
		document.querySelector("#about").innerHTML = removeTags(
			JSON.parse(document.querySelector("#chat").lastElementChild.innerText).abt);
		document.getElementById("showout3").innerHTML = JSON.parse(document.querySelector("#chat").lastElementChild.innerText).u;
		document.querySelector("#about").style.filter = "blur(0)";
		document.querySelector("#showout3").style.filter = "blur(0)";
	}, 2000);
}

function updatemem() {
	document.getElementById("mySidenav").innerHTML = `<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
		<a>All Members</a><hr>`;
	scd();
	for (let i = 0; i < meml.length; i++) {
		document.getElementById("mySidenav").innerHTML += `<a href="#" onclick="showtext('` + meml[i] + `','meth')">` + meml[i] + `</a>`;
	}
}

function fu2() {
	connection.send(`{"tydat":"` + document.getElementById('username').value + `", "hname":"` + chcx + `"}`);
}

function removeTags(str) {
	if ((str === null) || (str === ''))
		return false;
	else
		str = str.toString();
	str = str.replace(/(<([^>]+)>)/ig, '')
	str = str.replace("\n", '<br>');
	return str;
}

function removeNull(str) {
	str = str.toString();
	return str.replace("null", '');
}

function formdqs(text) {
  return text.replace(/"/g, "\\\"");
}


function bold(text) {
	var bold = /\*\*(.*?)\*\*/gm;
	var html = text.replace(bold, '<strong>$1</strong>');
	return html;
}

function pinghim() {
	document.querySelector("#message").value = "@" + fuser;
	send();
}

function dmhim() {
	document.querySelector("#message").value = "/dm " + prompt("message: ") + " @" + fuser;
	send();
}



refreshCSS = () => {
	let links = document.getElementsByTagName('link');
	for (let i = 0; i < links.length; i++) {
		if (links[i].getAttribute('rel') == 'stylesheet') {
			let href = links[i].getAttribute('href');

			let newHref = href + '#';

			links[i].setAttribute('href', newHref);
		}
	}
}

function addemojis(inputString) {
	var emojiData = {
		"happy": "https://em-content.zobj.net/source/animated-noto-color-emoji/356/smiling-face-with-smiling-eyes_1f60a.gif",
		"sweatsmile": "https://images-ext-1.discordapp.net/external/2btjmXRKdpqZpxucxE9V4Mr3ic3pIHH7PxAFXTCsr_g/%3Fsize%3D24%26quality%3Dlossless/https/cdn.discordapp.com/emojis/883683986805776384.gif?width=19&height=19",
		"dollar": "https://cdn.discordapp.com/emojis/1043176947028611203.gif?size=24&quality=lossless",
		"no no no": "https://media.discordapp.net/attachments/918481963948605531/1115530837203636255/shame_on_you.gif?width=28&height=25",
		"kekw": "https://media.tenor.com/ASGuOCPGrKEAAAAM/kekw-kek.gif"
	};

	var regex = /:(.*?):|\/n/g;
	var replacedString = inputString.replace(regex, function(match, captureGroup) {
		if (captureGroup) {
			var imgSrc = emojiData[captureGroup];
			if (imgSrc) {
				return '<img class="emoj" src="' + imgSrc + '" alt="' + captureGroup + '">';
			} else {
				return match;
			}
		} else {
			return '<br>';
		}
	});

	return replacedString;
}


var inputString = "This is a :happy: string with :some: text enclosed in colons.";
var replacedString = addemojis(inputString);
console.log(replacedString);

// Get the input and send elements by their IDs
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send');

function checkinpbord() {
	if (messageInput.value.trim() !== '') {
		// Apply the blue border to the send element
		sendButton.style.border = '1px solid var(--main-color)';
	} else {
		// Remove the border if the input value is empty
		sendButton.style.border = '1px solid grey';
	}
}

// Add an event listener to the input to detect text changes
messageInput.addEventListener('input', () => {
	// Check if the input value is not empty
	if (messageInput.value.trim() !== '') {
		// Apply the blue border to the send element
		sendButton.style.border = '1px solid var(--main-color)';
	} else {
		// Remove the border if the input value is empty
		sendButton.style.border = '1px solid grey';
	}
});

function gdel(key) {
	
}