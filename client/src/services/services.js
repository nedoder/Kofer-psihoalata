import axios from "axios";

const apiClient = axios.create({
    baseURL: `https://koferpsihoalata.me/`,
    withCredentials: false, 
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    timeout: 10000,
});

apiClient.interceptors.request.use(
    config => {
      const token = localStorage.getItem("token") ? localStorage.getItem("token") : null
      if (token) {
        config.headers.Authorization = `${token}`;
      }
      return config;
    },
    error => Promise.reject(error)
  );

apiClient.interceptors.response.use(response => {
    return response
    },
    error => {
        if (error.response.status === 401) {
            window.location.href = '/login'
        }
        return Promise.reject(error);
    });

// requests
const requests = {
    logIn(data) {
        return apiClient.post("api/user/login", data);
    },
    getPostsList(cat,page) {
        return apiClient.get(`api/post?category=${cat}&page=${page}`);
    },
    getPostList(page) {
        return apiClient.get(`api/post?page=${page}`);
    },
    getPostsByLetter(letter,page) {
        return apiClient.get(`api/post?letter=${letter}&page=${page}`);
    },
    getPostsByTitle(title,page) {
        return apiClient.get(`api/post?title=${title}&page=${page}`);
    },
    getPost(id) {
        return apiClient.get(`api/post/find/${id}`);
    },
    newPost(data) {
        return apiClient.post("api/post", data);
    },
    editPost(id, data) {
        return apiClient.patch(`api/post/${id}`, data);
    },
    deletePost(id) {
        return apiClient.delete(`api/post/${id}`);
    },
    getCommentsList() {
        return apiClient.get("api/comment");
    },
    getComment(id) {
        return apiClient.get(`api/comment/${id}`);
    },
    newComment(data) {
        return apiClient.post("api/comment", data);
    },
    editComment(id, data) {
        return apiClient.patch(`api/comment/${id}`, data);
    },
    deleteComment(id) {
        return apiClient.delete(`api/comment/${id}`);
    },
    getAnswersList() {
        return apiClient.get("api/answer");
    },
    getAnswer(id) {
        return apiClient.get(`api/answer/${id}`);
    },
    newAnswer(data) {
        return apiClient.post("api/answer", data);
    },
    editAnswer(id, data) {
        return apiClient.patch(`api/answer/${id}`, data);
    },
    deleteAnswer(id) {
        return apiClient.delete(`api/answer/${id}`);
    },
    getCategoryList() {
        return apiClient.get("api/category");
    },
    getCategoryLetter(category) {
        return apiClient.get(`api/category?category=${category}`);
    },
    getCategory(id) {
        return apiClient.get(`api/category/${id}`);
    },
    newCategory(data) {
        return apiClient.post("api/category", data);
    },
    editCategory(id, data) {
        return apiClient.patch(`api/category/${id}`, data);
    },
    deleteCategory(id) {
        return apiClient.delete(`api/category/${id}`);
    },
    getInstitutionList(page) {
        return apiClient.get(`api/institution?page=${page}`);
    },
    getInstitution(id) {
        return apiClient.get(`api/institution/find/${id}`);
    },
    newInstitution(data) {
        return apiClient.post("api/institution", data);
    },
    editInstitution(id, data) {
        return apiClient.patch(`api/institution/${id}`, data);
    },
    deleteInstitution(id) {
        return apiClient.delete(`api/institution/${id}`);
    },
    getUserList() {
        return apiClient.get("api/user");
    },
    getUser(id) {
        return apiClient.get(`api/user/${id}`);
    },
    newUser(data) {
        return apiClient.post("api/user", data);
    },
    editUser(id, data) {
        return apiClient.patch(`api/user/${id}`, data);
    },
    deleteUser(id) {
        return apiClient.delete(`api/user/${id}`);
    },
    editPassword(data) {
        return apiClient.patch(`api/password/`, data);
    },
    getActivityList(page) {
        return apiClient.get(`api/activity?page=${page}`);
    },
    sendMail(data) {
        return apiClient.post("api/mail", data);
    },
    sendMessage(data) {
        return apiClient.post("api/mail/message", data);
    },

};

export default requests