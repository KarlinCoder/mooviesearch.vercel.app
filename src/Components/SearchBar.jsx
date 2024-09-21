export default function SearchBar({ API_URL, setPeliculas, setIsLoading }) {
  const handleSearch = async (query) => {
    setPeliculas([]);
    setIsLoading(true);
    fetch(`${API_URL}query=${query}&api_key=d8d6d57d6b54c98bd22d21d0130bd233`)
      .then((r) => r.json())
      .then((r) => {
        console.log(r.results);
        setPeliculas(r.results);
        setIsLoading(false);
      });
  };

  return (
    <header className="mx-auto flex flex-col items-center w-[400px] md:w-96 mt-5">
      <label className="text-slate-200 text-2xl font-bold py-3 ml-2">
        Buscar pelicula
      </label>
      <div className="flex items-center gap-2">
        <input
          className="inline-block w-[250px] lg:w-[400px] bg-transparent rounded-s-lg px-3 py-2 border-2 text-slate-200 border-slate-200 outline-none text-md focus:shadow-lg shadow-white"
          type="text"
          placeholder="Ej. Transformers, Spiderman..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch(e.target.value);
              e.target.value = "";
            }
          }}
        />

        <button
          className="inline-block w-20 h-11 font-bold bg-red-500 text-slate-100 rounded-e-lg hover:bg-red-600 active:bg-red-700"
          onClick={() => {
            setPeliculas([]);
          }}
        >
          Limpiar
        </button>
      </div>
    </header>
  );
}
