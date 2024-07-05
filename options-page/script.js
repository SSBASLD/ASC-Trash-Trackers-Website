let gameButton = document.getElementById("GameButton");
gameButton.onclick = (e) => {
    window.location.href = window.location.href.replace("/options-page/index.html", "") + "/game/index.html";
}

let timeout = setTimeout(() => {
    window.location.href = window.location.href.replace('/options-page/index.html', "") + "/index.html";
  }, 30000);

document.onclick = () => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
        window.location.href = window.location.href.replace('/options-page/index.html', "") + "/index.html";
      }, 30000);
}