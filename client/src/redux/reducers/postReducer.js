import { EditData } from "../actions/globalTypes";
import { POST_TYPE } from "../actions/postAction";

const initialState = {
    loading: false,
    posts: [],
    result: 0,
    page: 0
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_TYPE.CREATE_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            };
        case POST_TYPE.LOADING_POST:
            return {
                ...state,
                loading: action.payload
            };
        case POST_TYPE.GET_POST:
            // console.log(action.payload)
            return {
                ...state,
                posts: action.payload.posts,
                result: action.payload.result
            }
        case POST_TYPE.UPDATE_POST:
            return {
                ...state,
                posts: EditData(state.posts, action.payload._id, action.payload)
            };
        default:
            return state;
    }
}
export default postReducer;