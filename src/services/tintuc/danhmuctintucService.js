import axios from "axios";
import { API } from "../../common/API";

export function getAll(page, limit, query) {
  query = query ? query : "";
  return axios
    .get(`${API.DANHMUC_TINTUC_QUERY(page, limit, query)}`)
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
    .get(`${API.DANHMUC_TINTUC_ID(id)}`)
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