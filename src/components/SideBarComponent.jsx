import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="left-nav">
      <div className="logo">
        <Link to={"/"}>
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt=""
          />
        </Link>
      </div>
      <ul className="nav-pages py-2">
        <Link to={"/"}>
          <li className="d-flex align-items-center px-3 selected">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-house-door-fill"
              viewbox="0 0 16 16"
            >
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
            </svg>
            <span className="nav-page-text px-2">Home</span>
          </li>
        </Link>

        <Link to={"search"}>
          <li className="d-flex align-items-center px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewbox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <span className="nav-page-text px-2">Search</span>
          </li>
        </Link>

        <li className="d-flex align-items-center your-library px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-music-note-list"
            viewbox="0 0 16 16"
          >
            <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
            <path fill-rule="evenodd" d="M12 3v10h-1V3h1z" />
            <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z" />
            <path
              fill-rule="evenodd"
              d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"
            />
          </svg>
          <span className="nav-page-text px-2">Your library</span>
        </li>
      </ul>
      <ul className="nav-extra py-2">
        <li className="d-flex align-items-center create-playlist px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-square-fill"
            viewbox="0 0 16 16"
          >
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
          </svg>
          <span className="nav-page-text px-2">Create Playlist</span>
        </li>

        <li className="d-flex align-items-center liked-songs px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-heart-fill"
            viewbox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
          <span className="nav-page-text px-2">Liked Songs</span>
        </li>
      </ul>
      <ul className="nav-playlist py-2">
        <li className="px-3">This Is Miley Cyrus</li>
        <li className="px-3">This Is Bon Jovi</li>
        <li className="px-3">This Is Evanescence</li>
        <li className="px-3">This Is Green Day</li>
        <li className="px-3">This Is Beyonce</li>
        <li className="px-3">This Is Gloria Groove</li>
        <li className="px-3">This Is Nando Reis</li>
        <li className="px-3">This Is Aerosith</li>
        <li className="px-3">This Is Lizzo</li>
        <li className="px-3">This Is Pearl Jam</li>
        <li className="px-3">This Is Ed Sheeran</li>
        <li className="px-3">This Is Simple Plan</li>
      </ul>
    </div>
  );
};

export default SideBar;
