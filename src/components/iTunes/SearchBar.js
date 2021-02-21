import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  return (
    <div class="search-bar">
      <input
        class="search-txt"
        type="text"
        name=""
        id="search-input"
        placeholder="Type the artist name"
      ></input>
      <button class="search-btn" type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}
