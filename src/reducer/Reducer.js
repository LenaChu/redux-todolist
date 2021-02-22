import { actions } from "../actions/Actions";

const INIT_STATE = { keyword: "", albums: [], count: null };

export default function iTunesReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case actions.USER_INPUT:
      return { ...state, keyword: action.payload };
    case actions.FETCH_ALBUMS:
      return {
        ...state,
        albums: action.payload.results,
        count: action.payload.resultCount,
      };
    default:
      return state;
  }
}
