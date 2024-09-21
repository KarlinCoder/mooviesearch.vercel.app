export default function MovieCard({ movie, imageUrl }) {
  const trimTitle = (title) => {
    if (title.length > 50) {
      const newTitle = title.slice(0, 40) + "...";
      return newTitle;
    } else {
      return title;
    }
  };

  const trimText = (text) => {
    if (text.length > 50) {
      const newText = text.slice(0, 180) + "...";
      return newText;
    } else {
      return text;
    }
  };

  return (
    <div className="flex items-center w-[370px] md:h-[270px] h-fit bg-slate-500 rounded-xl border-2 border-slate-300 p-3">
      {movie.poster_path ? (
        <img
          src={`${imageUrl}${movie.poster_path}`}
          alt={movie.title}
          className="w-28 m-auto"
        />
      ) : (
        <h2>[No se encontro imagen]</h2>
      )}
      <main className="px-5 py-2 flex flex-col justify-between h-[100%]">
        <header>
          <h2 className="text-xl text-slate-800 font-bold">
            {trimTitle(movie.title)
              ? trimTitle(movie.title)
              : "[No se encontro un titulo]"}
          </h2>
          <p className="text-md text-slate-700 font-medium leading-4 text-pretty">
            {trimText(movie.overview)
              ? trimText(movie.overview)
              : "[No se encontro descripcion] "}
          </p>
        </header>
        <footer>
          <p className="font-bold">Fecha: {movie.release_date}</p>
        </footer>
      </main>
    </div>
  );
}
