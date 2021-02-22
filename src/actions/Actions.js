const USER_INPUT = "input/artistname";
const FETCH_ALBUMS = "input/searchalbums";

export const actions = {
  USER_INPUT,
  FETCH_ALBUMS,
};

export const userInout = (input) => ({
  type: actions.USER_INPUT,
  payload: input,
});

export const fetchAlbums = (res) => ({
  type: actions.FETCH_ALBUMS,
  payload: res,
});
