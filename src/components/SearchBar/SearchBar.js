import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getInput, setAlbums } from "../../actions/Actions";
import "./SearchBar.css";
import { iTunesAPI } from "../../api/api";

export default function SearchBar() {
  let history = useHistory();
  console.log(history);
  const userInput = useSelector((state) => state.userInput);
  const dispatch = useDispatch();

  const handleGetSearchTerm = (e) => {
    dispatch(getInput(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(getInput(userInput));
    history.push({
      pathname: "/Gallery",
      search: `?query=${userInput.split(" ").join("+")}`,
    });
    iTunesAPI(userInput).then((res) => {
      dispatch(setAlbums(res));
      dispatch(getInput(""));
    });
  };

  return (
    <header className="container__search-bar">
      <form
        className="search-bar"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          className="search-txt"
          type="text"
          placeholder="Type the artist name"
          value={userInput}
          onChange={(e) => {
            handleGetSearchTerm(e);
          }}
        ></input>
        <button className="search-btn" type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </header>
  );
}
