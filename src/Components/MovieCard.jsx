export default function MovieCard({ movie, imageUrl, handleMovieClick }) {
  const image = `${imageUrl}${movie.poster_path}`;

  const trimTitle = (title) => {
    const limit = 30;
    if (title.length > limit) {
      const newTitle = title.slice(0, limit) + "...";
      return newTitle;
    } else {
      return title;
    }
  };

  const trimText = (text) => {
    const limit = 170;

    if (text.length > limit) {
      const newText = text.slice(0, limit) + "...";
      return newText;
    } else {
      return text;
    }
  };

  return (
    <div className="flex items-center max-w-[370px] md:w-[500px] md:h-[270px] h-fit bg-slate-500 rounded-xl border-2 border-slate-300 p-3">
      {movie.poster_path ? (
        <img src={image} alt={movie.title} className="w-28 m-auto" />
      ) : (
        <h2>[No se encontro imagen]</h2>
      )}
      <main className="px-5 py-2 flex flex-col gap-5 justify-between h-[100%]">
        <header className="flex flex-col gap-2">
          <h2 className="text-xl text-slate-800 font-bold">
            {trimTitle(movie.title)
              ? trimTitle(movie.title)
              : "[No se encontro un titulo]"}
          </h2>
          <p className="text-sm text-slate-700 font-medium leading-4 text-pretty">
            {trimText(movie.overview)
              ? trimText(movie.overview)
              : "[No se encontro descripcion] "}
          </p>
        </header>
        <footer className="flex items-center gap-2">
          <button
            onClick={() =>
              handleMovieClick({
                show: true,
                movie: { ...movie, poster_path: image },
              })
            }
            className="w-fit bg-slate-800 px-4 py-1 border-2 border-slate-600 rounded-md text-slate-50 hover:bg-slate-700 active:bg-slate-800"
          >
            Info
          </button>
          <p className="font-medium text-sm">Fecha: {movie.release_date}</p>
        </footer>
      </main>
    </div>
  );
}
