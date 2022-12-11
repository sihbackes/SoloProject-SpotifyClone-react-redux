import { PLAY_MUSIC } from "../actions";

const initialState = {
  playMusic: {
    artist: "Queen",
    music: "Another One Bites the Dust",
    cover: "https://i.scdn.co/image/ab67616d0000b27307744e2ed983efa3e6620a47",
  },
};

export const playReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_MUSIC:
      return {
        ...state,
        playMusic: action.payload,
      };
    default:
      return state;
  }
};

export default playReducer;
