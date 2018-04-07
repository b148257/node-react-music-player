import {FETCH_START, FETCH_SUCCESS, FETCH_FAILURE} from './actionTypes.js';

export const fetchMusicListStarted = () => ({
	type : FETCH_START
})

export const fetchMusicListSuccess = (song) => ({
	type : FETCH_SUCCESS,
	song : song
})

export const fetchMusciListFailure = (error) => ({
	type : FETCH_FAILURE,
	error
})

export const fetchMusicList = () => {
	return (dispatch) => {
		const apiUrl = '/list';
		const opts = {method : 'GET'}
		dispatch(fetchMusicListStarted());

		fetch(apiUrl, opts)
		.then( (res) => {
			if(res.status !== 200){
				throw new Error('Fail to get response with status ' + res.status);
			}
			res.json().then((resJson) => {
				dispatch(fetchMusicListSuccess(resJson));
			})
			.catch((error) => {
				throw new Error('Invalid json response : ' + error);
			})
		})

		.catch( (error) => {
			dispatch(fetchMusciListFailure(error));
		})
	};
}