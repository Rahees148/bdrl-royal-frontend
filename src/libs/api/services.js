import axiosCMS from "./axiosCMS";

export function getCMSRequest(URL) {
    return axiosCMS.get(`/${URL}`).then(response => response);
  }
  
  export function postCMSRequest(URL, payload) {
    return axiosCMS.post(`/${URL}`, payload).then(response => response);
  }