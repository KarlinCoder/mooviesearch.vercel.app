import { useState, useEffect } from "react";
import MovieCard from "./Components/MovieCard";
import SearchBar from "./Components/SearchBar";
import Footer from "./Components/Footer";
import Modal from "./Components/Modal";

const API_URL = "https://api.themoviedb.org/3/search/movie?";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export default function App() {
  const [peliculas, setPeliculas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [stateMessage, setStateMessage] = useState("Cargando datos...");
  const [modalData, setModalData] = useState({ show: false, movie: {} });

  return (
    <>
      <SearchBar
        setPeliculas={setPeliculas}
        setIsLoading={setIsLoading}
        setStateMessage={setStateMessage}
        API_URL={API_URL}
        isLoading={isLoading}
      />

      <main className="flex flex-wrap justify-center gap-5">
        {isLoading && (
          <h2 className="font-medium text-slate-300 text-xl w-52 text-center">
            {stateMessage}
          </h2>
        )}

        {peliculas.map((peli) => {
          return (
            <MovieCard
              movie={peli}
              imageUrl={IMAGE_URL}
              key={peli.id}
              handleMovieClick={setModalData}
            />
          );
        })}
      </main>

      {modalData.show && (
        <Modal
          movie={modalData.movie}
          visible={modalData.show}
          closeModal={setModalData}
        />
      )}

      <Footer />
    </>
  );
}
