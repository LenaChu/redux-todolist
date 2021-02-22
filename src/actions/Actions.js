const USER_INPUT = "input/searchalbums";
const FETCH_ALBUMS = "fetch/getallbums";

export const actions = {
  USER_INPUT,
  FETCH_ALBUMS,
};

export const userInput = (input) => ({
  type: actions.USER_INPUT,
  payload: input,
});

export const fetchAlbums = (res) => ({
  type: actions.FETCH_ALBUMS,
  payload: res,
});
