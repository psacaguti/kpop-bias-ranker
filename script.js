// Starting list of NewJeans members
let members = [
    "Minji",
    "Hanni", 
    "Danielle",
    "Haerin",
    "Hyein"
];

// Function to render the ranking list
function renderRanking() {
    const listContainer = document.getElementById('ranking-list');
    listContainer.innerHTML = '';
    
    members.forEach((member, index) => {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'member-item';
        
        memberDiv.innerHTML = `
            <div class="member-name">${member}</div>
            <div class="controls">
                <button class="up-btn" onclick="moveUp(${index})" ${index === 0 ? 'disabled' : ''}>
                    ↑ Up
                </button>
                <button class="down-btn" onclick="moveDown(${index})" ${index === members.length - 1 ? 'disabled' : ''}>
                    ↓ Down  
                </button>
            </div>
            <div class="rank-number">${index + 1}</div>
        `;
        
        listContainer.appendChild(memberDiv);
    });
}

// Function to move a member up in ranking
function moveUp(index) {
    if (index > 0) {
        [members[index], members[index - 1]] = [members[index - 1], members[index]];
        renderRanking();
    }
}

// Function to move a member down in ranking  
function moveDown(index) {
    if (index < members.length - 1) {
        [members[index], members[index + 1]] = [members[index + 1], members[index]];
        renderRanking();
    }
}

// Initialize the page
renderRanking();