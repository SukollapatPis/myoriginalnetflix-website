</body>



const signupBtn = document.getElementById('signup-btn');
const modal = document.getElementById('signup-modal');
const closeBtn = document.getElementsByClassName('close')[0];

signupBtn.onclick = function() {
  modal.style.display = "block";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
