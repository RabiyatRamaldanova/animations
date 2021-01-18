import {takeEvery, put, call} from 'redux-saga/effects';
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

 
  //   var reachable = null;

  // reachable = NetInfo.isInternetReachable()
  
  

export function* workerLoadData(title) {
  yield put(setAnimation(true));
  const data = yield call(fetchData(title));
  yield put(setAnimation(false));
  yield put(getMovieAfter(data));

}

export function* watcherLoadData() {
    yield takeEvery(GET_ARRAY, workerLoadData);
}