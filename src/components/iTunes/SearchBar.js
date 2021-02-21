import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { iTunesAPI } from "./api";
import { store, fetchAlbums, init, changeKeyword } from "./Redux";
// import { useState, useEffect } from "react";
import { connect } from "react-redux";

function SearchBar(props) {
  const { state, FETCH_Albums } = props;

  const handleGetSearchTerm = (e) => {
    props.changeKeyword(e.target.value);
  };

  const handleFetchAlbums = () => {
    const name = props.keyword;
    if (name) {
      const searchTerm = name.toLowerCase().split(" ").join("+");
      iTunesAPI.API(searchTerm).then((albums) => {
        FETCH_Albums(albums);
      });
    }
    props.changeKeyword("");
  };

  return (
    <div class="search-bar">
      <input
        className="search-txt"
        type="text"
        placeholder="Type the artist name"
        value={props.keyword}
        onChange={(e) => {
          handleGetSearchTerm(e);
        }}
      ></input>
      <button
        className="search-btn"
        type="submit"
        onSubmit={() => {
          handleGetSearchTerm();
        }}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({ state: state });
const mapDispatchToProps = (dispatch) => ({
  ChangeKW: (keyword) => dispatch(changeKeyword(keyword)),

  FETCH_Albums: (albums) => dispatch(fetchAlbums(albums)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
