export default function Card(props) {
  const { link, id, img, title } = props;
  return (
    <a href={link}>
      <div className="card-container">
        <img id={id} className="album-cover" src={img}></img>
        <p>{title}</p>
      </div>
    </a>
  );
}
