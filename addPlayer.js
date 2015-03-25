function addPlayer(name) {
	// Players DIV
	var players = document.getElementById("players");
	// New player DIV
	var newPlayer = document.createElement("div");
	newPlayer.className = "player";
	newPlayer.innerHTML = name;
	players.appendChild(newPlayer);
}