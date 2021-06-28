import axios from "axios";
import { API , HOST_API} from "../../common/API";

export function getAll(page, limit, query) {
  query = query ? query : "";
  return axios
    .get(`${HOST_API}${API.TINTUC}`)
    .then(res => {
      if (res.data) {
        return res.data;
      } else {
        return null;
      }
    })
    .catch(error => {
      return null;
    });
}

export function getById(id) {
  return axios
    .get(`${API.TINTUC_ID(id)}`)
    .then(res => {
      if (res.data) {
        return res.data;
      } else {
        return null;
      }
    })
    .catch(error => {
      return null;
    });
}

