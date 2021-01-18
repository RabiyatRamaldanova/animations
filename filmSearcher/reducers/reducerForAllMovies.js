export const initialState = {
    title: "rabbit", 
    arrayOfData: [],
    isAnimationPlaying: false,
};

function reducerForAllMovies(state = initialState, action) {
    switch (action.type) {
        case 'SET_TITLE':
            return {
                title: action.payload
            };
        case 'GET_ARRAY_AFTER':
            return {
                ...state,
                arrayOfData: action.payload
            }
        case 'SET_ANIMATION':
            return {
                ...state,
                isAnimationPlaying: action.payload
            }
        default:
        return state;
    }
}
export default reducerForAllMovies;
