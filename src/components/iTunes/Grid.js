import Card from "./Card";
import { store, fetchAlbums, init, changeKeyword } from "./Redux";
import { connect } from "react-redux";

function Grid(props) {
  const { state, INIT, FETCH_Albums } = props;
  return (
    <main>
      <div id="result-row">
        <h1 id="search-result">Search Albums by Artist Name</h1>
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
  INIT: () => dispatch(init()),
  FETCH_Albums: (albums) => dispatch(fetchAlbums(albums)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
