import { useEffect, useState } from "react";

const FetchComponent = ({ artist }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4fb92d580fmsh29489d65e968a28p1565bbjsncea4009bc4b4",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`,
          options
        );
        if (response.ok) {
          let { data } = await response.json();
          setResults(data);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, [artist]);

  return (
    <>
      {results.slice(0, 6).map((element) => (
        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div class="recently-played-cards card mb-3">
            <img src={element.album.cover} class="card-img-top" alt="..." />
            <div class="recently-played-card-body card-body">
              <p class="card-text p-cards-title"></p>
              <p class="card-text"></p>
            </div>
            <button class="green-player-btn-rp">
              <svg
                id="rp-play"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-play-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default FetchComponent;
