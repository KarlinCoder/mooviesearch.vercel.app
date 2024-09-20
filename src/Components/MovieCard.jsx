export default function MovieCard({ movie, imageUrl }) {
  const trimText = (text) => {
    if (text.length > 50) {
      const newText = text.slice(0, 120) + "...";
      return newText;
    } else {
      return text;
    }
  };

  return (
    <div className="w-72 bg-slate-500 rounded-xl border-2 border-slate-300 hover:scale-102 transition-all cursor-pointer py-6 hover:shadow-lg">
      {movie.poster_path ? (
        <img
          src={`${imageUrl}${movie.poster_path}`}
          alt={movie.title}
          className="w-52 m-auto mb-4"
        />
      ) : (
        <h2>[No se encontro imagen]</h2>
      )}
      <main className="px-5 py-2">
        <h2 className="text-2xl text-slate-800 font-bold">
          {movie.title ? movie.title : "[No se encontro un titulo]"}
        </h2>
        <p className="text-md text-slate-700 font-medium">
          {trimText(movie.overview)
            ? trimText(movie.overview)
            : "[No se encontro descripcion] "}
        </p>
      </main>
    </div>
  );
}
