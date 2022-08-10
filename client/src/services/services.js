import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:3000/`,
  withCredentials: true, //true
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: localStorage.getItem('token')
  },
  timeout: 10000,
});

apiClient.interceptors.response.use(response => {
    return response
  }, 
  error => {
    if(error.response.status === 401) {
      if(window.location.pathname ==='/scan/') {
        window.location.reload()
      }
      else if(window.location.pathname ==='/google/') {
        window.location.reload()
      }
      else {
        window.location.href = '/login'
      }
    }
    return Promise.reject(error);
    
}); 

// requests

 const requests = {
  
  logIn(data) {
    return apiClient.post("login", data);
  },
  getBaneriList() {
    return apiClient.get("api/post");
  },
  getBaner(id) {
    return apiClient.get(`api/post/${id}`);
  },
  newBaner(data) {
    return apiClient.post("api/post", data);
  },
  editBaner(id, data) {
    return apiClient.patch(`api/post/${id}`, data);
  },
  deleteBaner(id) {
    return apiClient.delete(`api/post/${id}`);
  },
  getUstanoveList(page, letter) {
    return apiClient.get(`api/ordinacija?page=${page}&letter=${letter}`);
  },
  getUstanova(id) {
    return apiClient.get(`api/ordinacija/${id}`);
  },
  newUstanova(data) {
    return apiClient.post("api/ordinacija", data);
  },
  editUstanova(id, data) {
    return apiClient.patch(`api/ordinacija/${id}`, data);
  },
  deleteUstanova(id) {
    return apiClient.delete(`api/ordinacija/${id}`);
  },
  getDoktoriList(page, letter) {
    return apiClient.get(`api/doktor?page=${page}&letter=${letter}`);
  },
  getDoktor(id) {
    return apiClient.get(`api/doktor/${id}`);
  },
  newDoktor(data) {
    return apiClient.post("api/doktor", data);
  },
  editDoktor(id, data) {
    return apiClient.patch(`api/doktor/${id}`, data);
  },
  deleteDoktor(id) {
    return apiClient.delete(`api/doktor/${id}`);
  },
  getSpecialsList() {
    return apiClient.get("api/special");
  },
  getSpecijalnost(id) {
    return apiClient.get(`api/special/${id}`);
  },
  newSpecijalnost(data) {
    return apiClient.post("api/special", data);
  },
  editSpecijalnost(id, data) {
    return apiClient.patch(`api/special/${id}`, data);
  },
  deleteSpecijalnost(id) {
    return apiClient.delete(`api/special/${id}`);
  },
  getSponsoredPosts() {
    return apiClient.get("api/sponzorisaniPost");
  },
  getSponsored(id) {
    return apiClient.get(`api/sponzorisaniPost/${id}`);
  },
  newSponsored(data) {
    return apiClient.post("api/sponzorisaniPost", data);
  },
  editSponsored(id, data) {
    return apiClient.patch(`api/sponzorisaniPost/${id}`, data);
  },
  deleteSponsored(id) {
    return apiClient.delete(`api/sponzorisaniPost/${id}`);
  },
  getSponsoredUstanove() {
    return apiClient.get("api/sponzorisanaUstanova");
  },
  getSponsoredUstanova(id) {
    return apiClient.get(`api/sponzorisanaUstanova/${id}`);
  },
  newSponsoredUstanova(data) {
    return apiClient.post("api/sponzorisanaUstanova", data);
  },
  editSponsoredUstanova(id, data) {
    return apiClient.patch(`api/sponzorisanaUstanova/${id}`, data);
  },
  deleteSponsoredUstanova(id) {
    return apiClient.delete(`api/sponzorisanaUstanova/${id}`);
  },
  getGradList() {
    return apiClient.get("api/grad");
  },
  getResultsList(page) {
    return apiClient.get(`api/result?page=${page}`);
  },
  getActivityList(page) {
    return apiClient.get(`api/aktiviti?page=${page}`);
  },
  getUserList() {
    return apiClient.get("api/register");
  },
  getUser(id) {
    return apiClient.get(`api/register/${id}`);
  },
  newUser(data) {
    return apiClient.post("api/register", data);
  },
  editUser(id, data) {
    return apiClient.patch(`api/register/${id}`, data);
  },
  resetCode(data) {
    return apiClient.patch("api/register",data);
  },
  editPassword(data) {
    return apiClient.patch(`api/password/`, data);
  },
  googleLogin(data) {
    return apiClient.post(`Gcode/`, data);
  },
  deleteUser(id) {
    return apiClient.delete(`api/register/${id}`);
  },
  
};

export default requests
