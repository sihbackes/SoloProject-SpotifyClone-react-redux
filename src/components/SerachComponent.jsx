import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction } from "../redux/actions";
import { Form } from "react-bootstrap";

const SearchComponent = () => {
  const [query, setQuery] = useState(" ");

  const dispatch = useDispatch();

  const dataRedux = useSelector((state) => state.query.queryList);
  //the query on the line above came from the bigReducer on the store component
  const listOfResults = dataRedux.data;
  console.log(listOfResults);

  useEffect(() => {
    dispatch(getDataAction("aerosmith"));
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getDataAction(query));
  };
  return (
    <div className="center-section-search flex-shrink-1">
      <div className="center-nav-bar px-35 py-2">
        <div className="btns-prev-next">
          <img className="img-btn" src="img/prev.svg" alt="" />

          <img className="img-btn" src="img/next.svg" alt="" />
        </div>
        <div className="search-bar">
          <div className="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewbox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
          <Form onSubmit={handleSubmit}>
            <input
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="What do you want to listen to?"
            />
          </Form>
        </div>
        <div className="user-name-div text-white">
          <span className="user-name-image px-1">
            <i className="bi bi-person-circle"></i>
          </span>
          <span className="user-name-text px-1">User Name</span>
        </div>
      </div>

      <div className="browse-all-section">
        <h2 className="px-35">Browse All</h2>
        <div className="browse-all row mx-1">
          {listOfResults && (
            <>
              {listOfResults.map((element) => (
                <div className="col-sm-6 col-md-4 col-xl-2">
                  <div className="recently-played-cards card mb-3">
                    <img
                      src={element.album.cover}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="recently-played-card-body card-body">
                      <p className="card-text p-cards-title">
                        {element.album.title}
                      </p>
                      <p className="card-text">{element.title.name}</p>
                    </div>
                    <button className="green-player-btn-rp">
                      <svg
                        id="rp-play"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-play-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
