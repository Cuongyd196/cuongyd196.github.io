import { saveID } from "./detailAction";
import { SAVE_ID_DETAIL } from "./detailType";

const initialState = {
    idDetail: ''
}
const reducerSaveID = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_ID_DETAIL: return {
            ...state,
            idDetail: action.payload
        }
        default: return state
    }
}

export default reducerSaveID