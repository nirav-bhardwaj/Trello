const urlParams = new URLSearchParams(window.location.search);
const boardId = urlParams.get('id');

async function fetchBoardDetails() {
    const token = localStorage.getItem('token');
    const response = await fetch(`http://localhost:3000/api/boards/${boardId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
    });

    const data = await response.json();
    document.getElementById('board-title').innerText = data.title;
    
    renderLists(data.lists);
}

if (boardId) {
    fetchBoardDetails();
} else {
    alert("No board selected!");
    window.location.href = 'organization.html';
}