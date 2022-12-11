export const GET_DATA = "GET_DATA";
export const PLAY_MUSIC = "PLAY_MUSIC";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export const getDataAction = (query) => {
  return async (dispatch) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4fb92d580fmsh29489d65e968a28p1565bbjsncea4009bc4b4",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`,
        options
      );
      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: GET_DATA,
          payload: data,
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const PlayMusicAction = (music, artist, cover) => {
  return {
    type: PLAY_MUSIC,
    payload: { music, artist, cover },
  };
};

export const AddToFavoritesAction = (music) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: music,
  };
};

export const RemoveFromFavoritesAction = (music) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: music,
  };
};
