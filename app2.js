// script.js
const feed = document.getElementById('feed-container');
const postInput = document.getElementById('postInput');
const addBtn = document.getElementById('addPostBtn');

// 1. Funksiya: Yangi post yaratish
function createPost(text) {
    if (text === "") return; // Bo'sh bo'lsa post qilma

    // Element yaratish (createElement)
    const postCard = document.createElement('div');
    postCard.classList.add('post-card');

    // Ichki tarkibni yozish (Interpolation)
    postCard.innerHTML = `
        <span class="delete-btn">X</span>
        <p>${text}</p>
        <small>${new Date().toLocaleTimeString()}</small>
    `;

    // 2. O'chirish funksiyasini qo'shish (Remove)
    postCard.querySelector('.delete-btn').addEventListener('click', () => {
        postCard.remove();
    });

    // 3. Sahifaga qo'shish (Append)
    feed.prepend(postCard); // prepend - tepaga qo'shadi
    postInput.value = ""; // Inputni tozalash
}

// 4. Hodisani tinglash
addBtn.addEventListener('click', () => createPost(postInput.value));

// Enter bosilganda ham post qilsin
postInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') createPost(postInput.value);
});