import {combineReducers} from 'redux';
import reducerForAllMovies from './reducerForAllMovies';
import reducerForFavoriteMovies from './reducerForFavoriteMovies';

const reducer = combineReducers({reducerForAllMovies,reducerForFavoriteMovies});
export default reducer;