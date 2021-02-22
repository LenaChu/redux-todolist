import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { userInput } from "../../actions/Actions";
import "./SearchBar.css";

function SearchBar(props) {
  const { state, UserInput } = props;
  let artistName;

  const handleGetSearchTerm = (e) => {
    artistName = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("search submit");
    UserInput(artistName);
    artistName = "";
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
          value={artistName}
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

const mapStateToProps = (state) => ({ state: state });
const mapDispatchToProps = (dispatch) => ({
  UserInput: (keyword) => dispatch(userInput(keyword)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
