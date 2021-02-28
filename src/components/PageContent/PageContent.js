import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInput, setAlbums, setLoading } from "../../actions/Actions";
import { useHistory, useLocation } from "react-router-dom";
import Gallery from "../Gallery/Gallery";
import Loader from "../Loader/Loader";
import { iTunesAPI } from "../../api/api";
import "./PageContent.css";

export default function PageContent() {
  const userInput = useSelector((state) => state.useInput);
  const count = useSelector((state) => state.count);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  // let artistName;
  console.log(userInput);
  // console.log(location);
  console.log(history);
  let queryString = history.location.search.slice(7);

  useEffect(() => {
    if (location.search !== "") {
      dispatch(setLoading(true));
      console.log(loading);
      iTunesAPI(queryString).then((res) => {
        dispatch(setLoading(false));
        dispatch(setAlbums(res));
      });
    }
  }, [location]);

  return (
    <main>
      <div id="result-row">
        {count && location.search ? (
          <p id="search-result">
            Found {count} albums of {queryString.replace("+", " ")}
          </p>
        ) : (
          <p id="search-result">Search Albums by Artist Name</p>
        )}
      </div>
      {loading ? <Loader /> : <Gallery />}
    </main>
  );
}
