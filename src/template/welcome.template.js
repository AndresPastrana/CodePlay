export const welcomeStringHtml = `
<div class="welcome-page">
  <header class="welcome-header">
    <h1>Welcome to <span class="brand">LiveCode</span></h1>
    <p>Your interactive live code editor for learning, building, and exploring.</p>
  </header>
  <main class="welcome-content">
    <a href="https://github.com/AndresPastrana/LiveCode" target="_blank" class="github-btn">
      View on GitHub
    </a>
    <button id="themeToggle" class="theme-toggle-btn">Toggle Theme</button>
  </main>
  <footer class="welcome-footer">
    <p>Built with ❤️ by <a href="https://github.com/AndresPastrana" target="_blank">Andrés Pastrana</a></p>
  </footer>
</div>
`;

export const welcomeStyles = `
body {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, #141E30, #243B55);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  transition: background 0.5s ease, color 0.5s ease;
}

body.light-theme {
  background: linear-gradient(135deg, #ffffff, #ececec);
  color: #333;
}

.welcome-page {
  text-align: center;
  max-width: 800px;
  padding: 30px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  animation: fadeIn 1.5s ease-in-out;
  transition: background-color 0.5s ease;
}

body.light-theme .welcome-page {
  background-color: rgba(255, 255, 255, 0.9);
}

.welcome-header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #FF6B6B;
}

.welcome-header .brand {
  color: #F9D423;
  font-weight: bold;
}

body.light-theme .welcome-header h1 {
  color: #F94D6F;
}

.welcome-header p {
  font-size: 1rem;
  color: #ccc;
}

body.light-theme .welcome-header p {
  color: #666;
}

.github-btn {
  display: inline-block;
  margin-top: 30px;
  padding: 15px 25px;
  background: linear-gradient(135deg, #FF6B6B, #F9D423);
  border: none;
  color: #fff;
  font-size: 1rem;
  border-radius: 25px;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.github-btn:active {
  transform: scale(0.95);
}

.github-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(249, 212, 35, 0.5);
}

.theme-toggle-btn {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  background: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.theme-toggle-btn:hover {
  background: #45a049;
}

.welcome-footer {
  margin-top: 20px;
  font-size: 0.85rem;
}

.welcome-footer a {
  color: #F9D423;
  text-decoration: none;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;

export const welcomJs = `
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const githubBtn = document.querySelector('.github-btn');

  // Theme toggle functionality
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    themeToggle.textContent = document.body.classList.contains('light-theme')
      ? 'Switch to Dark Theme'
      : 'Switch to Light Theme';
  });

  // Click animation for the GitHub button
  githubBtn.addEventListener('mousedown', () => {
    githubBtn.style.transform = 'scale(0.95)';
  });

  githubBtn.addEventListener('mouseup', () => {
    githubBtn.style.transform = 'scale(1)';
  });
});
`;
