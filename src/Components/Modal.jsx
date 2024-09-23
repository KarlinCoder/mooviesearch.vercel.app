export default function Modal({ visible, movie, closeModal }) {
  const handleGenresByNumber = (genre) => {
    switch (genre) {
      case 28:
        return "Action";
      case 12:
        return "Adventure";
      case 16:
        return "Animation";
      case 35:
        return "Comedy";
      case 80:
        return "Crime";
      case 99:
        return "Documentary";
      case 18:
        return "Drama";
      case 10751:
        return "Family";
      case 14:
        return "Fantasy";
      case 36:
        return "History";
      case 10402:
        return "Music";
      case 9648:
        return "Mystery";
      case 10749:
        return "Romance";
      case 878:
        return "Science Fiction";
      case 10770:
        return "TV Movie";
      case 53:
        return "Thriller";
      case 10752:
        return "War";
      case 37:
        return "Western";
      case 10762:
        return "Kids";
      default:
        console.log("No match genres");
    }
  };

  const handleClose = () => {
    console.log(movie.poster_path);
    closeModal({ show: false, movie: {} });
  };

  return (
    <section className="fixed flex justify-center items-center w-full h-full transition-all">
      <div className="absolute w-full h-full bg-slate-800 opacity-60 z-40"></div>

      <section
        style={{ backgroundImage: `url(${movie.poster_path})` }}
        className={`flex flex-col gap-4 items-center w-[350px] md:w-fit md:max-w-[900px] h-fit z-[50] shadow-2xl rounded-xl border-4 border-slate-900 transition-all animate-modal-show bg-center bg-cover backdrop-brightness-200 overflow-hidden`}
      >
        <main className="flex w-full h-full bg-black opacity-90 flex-col gap-4 py-7 px-6">
          <h2 className="text-2xl font-bold text-slate-200 italic">
            {movie.title}
          </h2>
          <p className="text-base text-slate-400 max-h-[170px] overflow-hidden overflow-y-auto">
            {movie.overview}
          </p>
          <p className="text-base text-slate-400 leading-4">
            <span className="font-bold">Genres: </span>
            {movie.genre_ids.map((genre) => {
              return `${handleGenresByNumber(genre)}, `;
            })}
          </p>
          {movie.adult && (
            <p className="text-base text-slate-400 leading-4 font-bold">+18</p>
          )}
          <p className="text-base text-slate-400 leading-4">
            <span className="font-bold">Languague: </span>
            {movie.original_language}
          </p>
          <p className="text-base text-slate-400 leading-4">
            <span className="font-bold">Popularity: </span> {movie.popularity}
          </p>
          <p className="text-base text-slate-400 leading-4">
            <span className="font-bold">Release Date: </span>{" "}
            {movie.release_date}
          </p>
          <button
            onClick={handleClose}
            className="py-1 px-5 bg-red-600 text-white rounded-md hover:bg-red-700 active:bg-red-800"
          >
            Close
          </button>
        </main>
      </section>
    </section>
  );
}
