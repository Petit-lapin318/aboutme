// Переключение темы (без изменений)
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  toggleButton.textContent = '☀️';
}

toggleButton.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    toggleButton.textContent = '☀️';
  } else {
    localStorage.setItem('theme', 'light');
    toggleButton.textContent = '🌙';
  }
});

// Выпадающее меню "Проекты"
const projectsToggle = document.querySelector('.projects-toggle');
const projectsList = document.getElementById('projectsList');

// Проверяем, есть ли сохранённое состояние
const isExpanded = localStorage.getItem('projectsExpanded') === 'true';
if (isExpanded) {
  projectsList.style.display = 'block';
  projectsToggle.textContent = 'Проекты ▲';
}

projectsToggle.addEventListener('click', function() {
  if (projectsList.style.display === 'block') {
    projectsList.style.display = 'none';
    projectsToggle.textContent = 'Проекты ▼';
    localStorage.setItem('projectsExpanded', 'false');
  } else {
    projectsList.style.display = 'block';
    projectsToggle.textContent = 'Проекты ▲';
    localStorage.setItem('projectsExpanded', 'true');
  }
});