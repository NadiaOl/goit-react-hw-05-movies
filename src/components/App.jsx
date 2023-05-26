import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Layout from "./Layout/Layout";
import MovieDetails from "./pages/MovieDetails";
import Cast from "./pages/Cast"
import Reviews from "./pages/Reviews"


export const App = () => {


  return (
    <Routes >
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='movies' element={<Movies />}/>
        <Route path='/movies/:movieId' element={<MovieDetails/> } >
          <Route path='cast' element={<Cast/> }/>
          <Route path='reviews' element={<Reviews/> }/>
        </Route>
      </Route>
      

    </Routes>
  );
};

export default App