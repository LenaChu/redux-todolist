import Card from "./Card";
import { fetchAlbums, init } from "./Redux";
import { useEffect } from "react";
import { connect } from "react-redux";
import { iTunesAPI } from "./api";

function Grid(props) {
  const { state, FETCH_Albums } = props;
  const searchTerm = state.keyword;
  const getAllAlbums = (keyword) => {
    if (keyword) {
      const searchTerm = keyword.toLowerCase().split(" ").join("+");
      iTunesAPI(searchTerm).then((res) => {
        console.log(res);
        FETCH_Albums(res);
      });
    }
  };
  useEffect(() => {
    getAllAlbums(searchTerm);
  }, [searchTerm]);

  return (
    <main>
      <div id="result-row">
        {state.keyword ? (
          <h1 id="search-result">
            Found {state.count} albums of {state.keyword}
          </h1>
        ) : (
          <h1 id="search-result">Search Albums by Artist Name</h1>
        )}
      </div>
      <section id="album-gallery">
        {state.albums
          ? state.albums.map((album) => (
              <Card
                link={album.collectionViewUrl}
                id={album.collectionId}
                img={album.artworkUrl100}
                title={album.collectionName}
              ></Card>
            ))
          : null}
      </section>
    </main>
  );
}

const mapStateToProps = (state) => ({ state: state });
const mapDispatchToProps = (dispatch) => ({
  //   INIT: () => dispatch(init()),
  FETCH_Albums: (res) => dispatch(fetchAlbums(res)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
