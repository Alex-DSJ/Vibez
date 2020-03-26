import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  LIKE_SCREAM,
  UNLIKE_SCREAM
} from '../types';

const initialState = {
  authenticated: false,
  loading: false,
  credentials: {},
  likes: [],
  notifications: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SET_USER:
      return {
        authenticated: true,
        loading: false,
        ...action.payload
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true
      };
      case LIKE_SCREAM:
        return {
          ...state, //return the state as it is ... a bit unclear
          likes:[ //an array of likes from the database
            ...state.likes,
            {
              userHandle: state.credentials.handle, //handle from user profile
              screamId: action.payload.screamId //id from the payload AKA from the database

            }
          ]//a bit unclear why using square bracket..
        }
      case UNLIKE_SCREAM:
        return {
          ...state, //retrieve the state
          likes: state.likes.filter(
            (like)=> like.screamId === action.payload.screamId // retrieve the like from the screamId

          )
        };//done in this file
    default:
      return state;
  }
}
