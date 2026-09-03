import placeholderPoster from '../assets/home.png';

// Информаця по играм для замены данных 
// Ключи объекта должны совпадать с тем что вы передаете в URL (например: /games/tales)
export const gamesData = {
  'tales': {
    title: 'TALES of WEAK PEOPLE',
    poster: placeholderPoster, // Используем импортированную переменную
    trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Мрачная история о выживании, где каждый выбор имеет цену.',
    steamLink: 'https://store.steampowered.com/'
  },
  'project-unknown': {
    title: 'Project: UNKNOWN',
    poster: placeholderPoster,
    trailerUrl: 'https://www.youtube.com/embed/...',
    description: 'Секретный проект студии. Информация засекречена.',
    steamLink: '#'
  }
};