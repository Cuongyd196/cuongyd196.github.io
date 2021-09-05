import axios from "axios";
import { API, HOST_API } from "../constants/API";

export function getAll(page, limit, query) {
  query = query ? query : "";
  return axios
    .get(`${HOST_API}${API.DEV_QUERY.format(page, limit, query)}`)
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
    .get(`${HOST_API}${API.DEV_ID}${id}`)
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

