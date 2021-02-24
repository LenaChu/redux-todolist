import { useSelector } from "react-redux";
import "./Gallery.css";
import Card from "../Card/Card";

export default function Gallery() {
  const albums = useSelector((state) => state.albums);
  return (
    <section id="album-gallery">
      {albums.length ? (
        albums.map((album) => (
          <Card
            link={album.collectionViewUrl}
            id={album.collectionId}
            img={album.artworkUrl100}
            title={album.collectionName}
          ></Card>
        ))
      ) : (
        <div className="not-found">{"Not Found"}</div>
      )}
    </section>
  );
}
