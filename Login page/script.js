const container = document.getElementById('container');
const registerBtn = document.getElementById('register'); // Corrected ID
const loginBtn = document.getElementById('login');       // Corrected ID

registerBtn.addEventListener('click', () => {
  container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
  container.classList.remove('active');
});

const createAccountBtn = document.getElementById('createAccountBtn');
if (createAccountBtn) {
  createAccountBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = '../public/index2.html';
  });
}