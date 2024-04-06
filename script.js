let followerCount = 1000;
const followBtn = document.getElementById('followBtn');
const followerCountElement = document.getElementById('followerCount');

followBtn.addEventListener('click', function() {
    followerCount++;
    followerCountElement.textContent = followerCount;
    alert("Followed!");
});
