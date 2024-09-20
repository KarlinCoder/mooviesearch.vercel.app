export default function SearchBar({ API_URL, setPeliculas, setIsLoading }) {
  const handleSearch = async (query) => {
    setPeliculas([]);
    setIsLoading(true);
    fetch(`${API_URL}query=${query}&api_key=d8d6d57d6b54c98bd22d21d0130bd233`)
      .then((r) => r.json())
      .then((r) => setPeliculas(r.results));
    setIsLoading(false);
  };

  return (
    <header className="mx-auto flex flex-col w-72 md:w-96 mt-5">
      <label className="text-slate-200 text-2xl font-bold py-3 ml-2">
        Buscar pelicula
      </label>
      <input
        className="inline-block bg-transparent px-3 py-2 border-2 text-slate-200 border-slate-200 rounded-xl outline-none focus:scale-102 transition-all text-md"
        type="text"
        placeholder="Ej. Transformers, Spiderman..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch(e.target.value);
            e.target.value = "";
          }
        }}
      />
    </header>
  );
}
