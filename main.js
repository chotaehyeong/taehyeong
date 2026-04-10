
class LottoBall extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const number = this.getAttribute('number');
    const color = this.getColor(parseInt(number, 10));

    const circle = document.createElement('div');
    circle.style.backgroundColor = color;
    circle.style.width = '60px';
    circle.style.height = '60px';
    circle.style.borderRadius = '50%';
    circle.style.display = 'flex';
    circle.style.justifyContent = 'center';
    circle.style.alignItems = 'center';
    circle.style.fontSize = '1.5em';
    circle.style.fontWeight = 'bold';
    circle.style.color = 'white';
    circle.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';

    circle.textContent = number;

    shadow.appendChild(circle);
  }

  getColor(number) {
    if (number <= 10) return '#f44336'; // Red
    if (number <= 20) return '#ff9800'; // Orange
    if (number <= 30) return '#ffeb3b'; // Yellow
    if (number <= 40) return '#4caf50'; // Green
    return '#2196f3'; // Blue
  }
}

customElements.define('lotto-ball', LottoBall);

const generateBtn = document.getElementById('generate-btn');
const lottoNumbersContainer = document.getElementById('lotto-numbers');
const themeToggle = document.getElementById('theme-toggle');

// Theme Logic
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
  const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
});

function generateLottoNumbers() {
  const numbers = new Set();
  while (numbers.size < 6) {
    numbers.add(Math.floor(Math.random() * 45) + 1);
  }
  return Array.from(numbers).sort((a, b) => a - b);
}

generateBtn.addEventListener('click', () => {
  lottoNumbersContainer.innerHTML = '';
  const lottoNumbers = generateLottoNumbers();
  lottoNumbers.forEach((number, index) => {
    setTimeout(() => {
      const lottoBall = document.createElement('lotto-ball');
      lottoBall.setAttribute('number', number);
      lottoNumbersContainer.appendChild(lottoBall);
    }, index * 100);
  });
});
