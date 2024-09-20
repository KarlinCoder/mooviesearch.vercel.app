import { useState, useEffect } from "react";
import MovieCard from "./Components/MovieCard";
import SearchBar from "./Components/SearchBar";
import Footer from "./Components/Footer";

const API_URL = "https://api.themoviedb.org/3/search/movie?";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export default function App() {
  const [peliculas, setPeliculas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <>
      <SearchBar
        setPeliculas={setPeliculas}
        setIsLoading={setIsLoading}
        API_URL={API_URL}
      />

      <main className="flex flex-wrap justify-center gap-5">
        {isLoading && <h1>Cargando datos</h1>}
        {peliculas.map((peli) => {
          return <MovieCard movie={peli} imageUrl={IMAGE_URL} key={peli.id} />;
        })}
      </main>

      <Footer />
    </>
  );
}
