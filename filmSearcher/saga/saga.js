import {takeEvery, put, call, select} from 'redux-saga/effects';
import {GET_ARRAY, setAnimation} from '../actions/action1';
import {getMovieAfter} from '../actions/action1';
import NetInfo from "@react-native-community/netinfo";



function fetchData(title) {
    console.log("titleObject",title)
         const url = `http://api.tvmaze.com/search/shows?q=${title.payload}`;
     
  
  console.log("url", url)
    return async() => {
        try{
            return fetch(url)
          .then(response => response.json())
        }
        catch(error) {
            console.log("getMovieAsync" , error)
        }
    }
}

  

export function* workerLoadData(title) {
  const reachableConnection = yield select((state) => state.reducerForAllMovies.reachable);
  if(reachableConnection == false) {
    yield put(setAnimation(true));
  const data = yield call(fetchData(title));
  yield put(setAnimation(false));
  yield put(getMovieAfter(data));
  }
  else {
    alert("No internet connection!");
  }
}

export function* watcherLoadData() {
    yield takeEvery(GET_ARRAY, workerLoadData);
}