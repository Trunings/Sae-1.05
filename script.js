document.addEventListener("DOMContentLoaded", () => {
    const musicData = JSON.parse(document.getElementById("music-data").textContent);
    const musicList = document.getElementById("music-list");

    // Générer les musiques
    musicData.albums.forEach(album => {
        const musicBox = document.createElement("section");
        musicBox.className = "music-box";

        musicBox.innerHTML = `
            <img src="${album.image}" alt="Image de l'album ${album.title}">
            <h2>${album.title}</h2>
            <p>${album.description}</p>
            <audio controls>
                <source src="${album.audio}" type="audio/mpeg">
                Votre navigateur ne supporte pas la lecture audio.
            </audio>
            <div>
                <a href="${album.deezer}" target="_blank">Écouter sur Deezer</a>
                <a href="${album.spotify}" target="_blank">Écouter sur Spotify</a>
            </div>
        `;
        musicList.appendChild(musicBox);
    });

    // Gestion du formulaire
    const openFormButton = document.getElementById("openForm");
    const formContainer = document.getElementById("add-music-form");
    const closeFormButton = document.getElementById("closeForm");

    openFormButton.addEventListener("click", () => {
        formContainer.style.display = "block";
    });

    closeFormButton.addEventListener("click", () => {
        formContainer.style.display = "none";
    });
});
