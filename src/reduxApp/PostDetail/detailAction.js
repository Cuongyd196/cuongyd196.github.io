import { SAVE_ID_DETAIL } from './detailType'

export function saveID(id) {
    return {
        type: SAVE_ID_DETAIL,
        info: ' Save ID PostDetail',
        payload: id
    }
}
