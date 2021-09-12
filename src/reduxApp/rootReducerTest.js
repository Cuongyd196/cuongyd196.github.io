import reducerSaveID from "./PostDetail/detailReducer";
import { combineReducers } from "redux";

const rootReducerTest = combineReducers({
    idPostDetail: reducerSaveID,

})
export default rootReducerTest
