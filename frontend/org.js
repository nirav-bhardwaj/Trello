async function fetchOrgs() {
    const token = localStorage.getItem('token');
    // Standardize to port 3000
    const response = await fetch('http://localhost:3000/api/organizations', {
        headers: { 'Authorization': `Bearer ${token}` }
    });

    const data = await response.json();
    const list = document.getElementById('org-list');
    list.innerHTML = ''; 

    data.forEach(org => {
        const div = document.createElement('div');
        div.className = 'org-card';
        div.innerHTML = `<h3>${org.name}</h3>`;
        
        // ADD THIS: Make the card fetch boards when clicked
        div.onclick = () => getBoards(org._id); 
        
        list.appendChild(div);
    });
}

async function getBoards(orgId) {
    const token = localStorage.getItem('token');
    const response = await fetch(`http://localhost:3000/api/organizations/${orgId}/boards`, {
        headers: { 'Authorization': `Bearer ${token}` }
    });

    const data = await response.json();
    const boardContainer = document.getElementById('board-list');
    boardContainer.innerHTML = ''; // Clear previous boards

    data.boards.forEach(board => {
        const boardDiv = document.createElement('div');
        boardDiv.className = 'board-card';
        boardDiv.innerText = board.name;
        boardContainer.appendChild(boardDiv);
    });
}

fetchOrgs();