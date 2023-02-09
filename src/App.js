import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Link,
} from "react-router-dom";
import { useState, useEffect} from "react";
import GifImg from "./GifImg";
import "./App.css"

function SearchGifs() {
  
  const [dataGifs, setDataGifs] = useState([]);

  let { keyword } = useParams(); 


const APIKEY = "uuHFXnfD02xNzGNUGFSre4yaMfm0Dkx4";

useEffect(() => {
  const url = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${APIKEY}&limit=10`;

  fetch(url)
  .then((respuesta) => respuesta.json())
  .then((json) => setDataGifs(json.data));
  
}, [keyword]);

return (
  <div
  style={{
    display: 'flex',
    flexWrap: 'wrap',
    width: '95vw',
    padding: '15px',
    justifyContent: 'space-around',
  }}
  >
    {dataGifs.map((item) => (
      <GifImg
      key={item.id}
      url={item.images.downsized_large.url}
      title={item.title}
      />
    ))}
    </div>
);
    }



export default function App() {
  return (
    <>
   <BrowserRouter>
   <h1>CODERGIFS</h1>
   <nav>
    <Link to="/search/pokemon">Pokemon</Link>
    <Link to="/search/cats">Cats</Link>
    <Link to="/search/javascript">Javascript</Link>
   </nav>
   <Routes>
    <Route path="/" element={<h1>todo</h1>}></Route>
    <Route path="/search/:keyword" element={<SearchGifs />}></Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

