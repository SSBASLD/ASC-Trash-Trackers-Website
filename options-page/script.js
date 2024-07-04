let gameButton = document.getElementById("GameButton");
gameButton.onclick = (e) => {
    window.location.href = window.location.href.replace("/options-page/index.html", "") + "/game/index.html";
}