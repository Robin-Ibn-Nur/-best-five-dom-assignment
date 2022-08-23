function selectedPlayers(playerName) {
    const tBody = document.getElementById('players-name');
    tBody.innerHTML = '';
    for (let i = 0; i < selectedPlayer.length; i++) {
        const name = selectedPlayer[i].Name;
        const position = selectedPlayer[i].position;

        const tr = document.createElement('tr')

        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        <td>${position}</td>
        `;
        tBody.appendChild(tr)
    }

}