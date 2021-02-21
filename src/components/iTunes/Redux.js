import { createStore } from "redux";

export const changeKeyword = (keyword) => ({
  type: "keyword/changekeyword",
  payload: keyword,
});

export const fetchAlbums = (res) => ({
  type: "fetch/searchalbums",
  payload: res,
});

const INIT_STATE = { keyword: "", albums: [], count: null };

function iTunesReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "keyword/changekeyword":
      return { ...state, keyword: action.payload };
    case "fetch/searchalbums":
      return {
        ...state,
        albums: action.payload.results,
        count: action.payload.resultCount,
      };
    default:
      return state;
  }
}

export let store = createStore(iTunesReducer);

store.subscribe(() => console.log(store.getState()));
