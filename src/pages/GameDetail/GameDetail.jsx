export default function GameDetail() {
  const { gameId } = useParams();
  const game = gamesData[gameId];

  if (!game) {
    return <Navigate to="/games" replace />;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{game.title}</h1>

      {/* Постер */}
      <div className={styles.posterContainer}>
         <img src={game.poster} alt={game.title} className={styles.poster} />
      </div>

      {/* Трейлер */}
      <div className={styles.trailerContainer}>
        <iframe
          className={styles.iframe}
          src={game.trailerUrl}
          title={`${game.title} Trailer`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Описание */}
      <div className={styles.descriptionContainer}>
        <p className={styles.description}>
          {game.description}
        </p>
      </div>

      {/* Кнопка Steam */}
      <div className={styles.steamButtonContainer}>
        <a 
          href={game.steamLink} 
          target="_blank" 
          rel="noreferrer"
          className={styles.steamButton}
        >
          <svg className={styles.steamIcon} viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.979 0C5.353 0 0 5.373 0 12c0 4.887 2.923 9.07 7.07 10.97l2.6-7.399c-.198-.445-.308-.94-.308-1.46 0-2.094 1.7-3.794 3.793-3.794.757 0 1.455.228 2.046.617l4.085-5.91a8.17 8.17 0 00-1.78-.962L16.27 7.82c-1.314-.73-2.868-1.144-4.524-1.144-5.068 0-9.176 4.108-9.176 9.176 0 .895.132 1.761.378 2.587l2.805-7.986c.712-2.025 2.656-3.468 4.93-3.468 2.87 0 5.197 2.327 5.197 5.197 0 2.637-1.956 4.81-4.498 5.143l-2.457 6.993C10.021 23.953 10.985 24 11.979 24c6.627 0 12-5.373 12-12s-5.373-12-12-12zM7.17 17.514c-.669 0-1.213-.544-1.213-1.213s.544-1.213 1.213-1.213c.67 0 1.214.544 1.214 1.213s-.544 1.213-1.214 1.213zm9.183-4.881c0 1.956-1.586 3.542-3.542 3.542-1.897 0-3.456-1.492-3.535-3.364l-2.906 8.272C9.409 21.6 10.665 22 11.979 22c5.514 0 10-4.486 10-10S17.493 2 11.979 2C6.465 2 2 6.486 2 12c0 2.247.747 4.316 2.01 5.952l3.056-8.701c.214-1.637 1.62-2.913 3.328-2.913 1.849 0 3.349 1.5 3.349 3.349h-.001c0 1.625-1.173 2.977-2.729 3.284l1.623 3.974c1.171-.78 1.942-2.093 1.942-3.58 0-2.42-1.96-4.38-4.38-4.38-1.597 0-3.003.856-3.766 2.146l-1.077 3.067c.725.688 1.706 1.118 2.784 1.118 2.206 0 4-1.794 4-4 0-.131-.007-.261-.02-.389l3.524-5.097a8.031 8.031 0 011.084 1.834l-3.32 4.801c.321.64.502 1.353.502 2.103z"/>
          </svg>
          Добавить в желаемое
        </a>
      </div>
    </div>
  );
}