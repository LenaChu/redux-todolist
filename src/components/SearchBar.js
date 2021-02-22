import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { changeKeyword } from "./Redux";
import { connect } from "react-redux";

function SearchBar(props) {
  const { state, ChangeKW } = props;
  let artistName;

  const handleGetSearchTerm = (e) => {
    artistName = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("search submit");
    ChangeKW(artistName);
    artistName = "";
  };

  return (
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
  );
}

const mapStateToProps = (state) => ({ state: state });
const mapDispatchToProps = (dispatch) => ({
  ChangeKW: (keyword) => dispatch(changeKeyword(keyword)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
