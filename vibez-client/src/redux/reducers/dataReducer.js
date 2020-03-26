import {SET_SCREAMS, 
    LIKE_SCREAM,UNLIKE_SCREAM,
    LOADING_DATA,
    DELETE_SCREAM,
POST_SCREAM} from '../types'

const initialState = {
    screams: [],
    scream: {},
    loading: false
};

export default function(state = initialState,action){
    switch(action.type){
        case LOADING_DATA:
            return {
                ...state,
                loading: true
            };
        case SET_SCREAMS:
            return{
                ...state,
                screams: action.payload, //an array of scream
                loading: false
            };
        case LIKE_SCREAM:
        case UNLIKE_SCREAM:
            //like_scream and unlike_scream will behave the same, same code
            //if like a scream, add the like to the array of the liker and increase the like for the person liked
            let index = state.screams.findIndex((scream)=>scream.screamId === action.payload.screamId);
            //check error here, screamId is not found
            state.screams[index]=action.payload;
            return {
                ...state
            };
        case  DELETE_SCREAM:
            index = state.screams.findIndex(scream => scream.screamId === action.payload);
            state.screams.splice(index, 1);
            return {
                ...state
            };
        case POST_SCREAM:
            return {
                ...state,//return the state as it was
                screams: [action.payload, ...state.screams]//return all the screams including the new added
              };
        
        default:
            return state;
    }
}