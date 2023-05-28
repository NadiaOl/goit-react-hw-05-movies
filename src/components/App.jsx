import { Route, Routes } from "react-router-dom";
import {lazy} from "react"
// import Home from "./pages/Home";
// import Movies from "./pages/Movies";
// import Layout from "./Layout/Layout";
// import MovieDetails from "./pages/MovieDetails";
// import Cast from "./pages/Cast"
// import Reviews from "./pages/Reviews"

const Home = lazy(()=> import('./pages/Home'));
const Movies = lazy(()=> import('./pages/Movies'));
const Layout = lazy(()=> import('./Layout/Layout'));
const MovieDetails = lazy(()=> import('./pages/MovieDetails'));
const Cast = lazy(()=> import('./pages/Cast'));
const Reviews = lazy(()=> import('./pages/Reviews'));

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