function showSubmenu() {
	var x = document.getElementById("expandingMenu");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
	}

function img_mouseOver() {
	document.getElementById("mulan1").src="images/mulan1.png";
	document.getElementById("mulan1").height="180";
	}
	
function img_mouseOut() {
	document.getElementById("mulan1").src="images/mulan3.png";
	document.getElementById("mulan1").height="180";
	}



function chooseCharacter() {
	var Character = document.getElementById("choose_character").value;
	document.getElementById("favourite_character").innerHTML = Character;
	event.preventDefault();
	}

function characterRandom() {
	var ran = Math.floor(Math.random() * 4) + 1;

	var preferCharacter = document.getElementById("choose_character").value;
	document.getElementById("random_character").src = 'images/character'+ran+'.png';
	if (ran === 1) {
		document.getElementById("introduction").innerHTML = "Fa Mulan is a young female who is willing to give up her life to save her father. She enters the army as a man named Ping. She faces the worst enemy China's ever seen, the Hun leader Shan-Yu, who has an army willing to destroy anything in their path.";
		if (preferCharacter == "Mulan") {
			document.getElementById("match_character").innerHTML="Matches your favorite character";
		} else {document.getElementById("match_character").innerHTML="";}
	} else if (ran === 2) {
		document.getElementById("introduction").innerHTML = "Cri-Kee is a 'lucky' cricket that was given to Mulan while getting her ready to meet the Matchmaker. He is first seen in possession of Grandmother Fa, who crosses a road while covering her eyes to demonstrate Cri-kee's ability; however, his actions lead the Matchmaker to reject Mulan.";
		if (preferCharacter == "Cri-Kee") {
			document.getElementById("match_character").innerHTML="Matches your favorite character";
		} else {document.getElementById("match_character").innerHTML="";}
	} else if (ran === 3) {
		document.getElementById("introduction").innerHTML = "Based on the real-life emperor Qin Shi Huang, this character is shown as the wise and benevolent leader of all China. He lives in a palace and he has a long mustache and beard.";
		if (preferCharacter == "Emperor") {
			document.getElementById("match_character").innerHTML="Matches your favorite character";
		} else {document.getElementById("match_character").innerHTML="";}
	} else if (ran === 4) {
		document.getElementById("introduction").innerHTML = "Khan is Mulan's horse with a black coat and white markings on his face, belly and legs. He is portrayed as a very intelligent and confident horse. When he first saw Mushu, he tried to kill him with his hooves out of fear.";
		if (preferCharacter == "Khan") {
			document.getElementById("match_character").innerHTML="Matches your favorite character";
		} else {document.getElementById("match_character").innerHTML="";}
	}
	}

function slider() {
	var level = document.getElementById("like_disney").value;
	if (level > 75) {
		document.getElementById("comment").innerHTML="Disney fan!";
	} else if (level > 50) {
		document.getElementById("comment").innerHTML="You like Disney!";
	} else if (level > 25) {
		document.getElementById("comment").innerHTML="Not too bad!";
	} else {
		document.getElementById("comment").innerHTML="Oh Dear!";
	}
	}
