import axios from "axios";

const USER_API_BASE_URL = "http://localhost:9000/api/users";

class UserService {
  getUsers() {
    return axios.get(USER_API_BASE_URL);
  }

  createUser(user) {
    return axios.post(USER_API_BASE_URL, user);
  }

  getUserById(userId) {
    return axios.get(USER_API_BASE_URL + "/:" + userId);
  }

  updateUser(userId) {
    return axios.put(USER_API_BASE_URL + "/:" + userId);
  }

  deleteUser(userId) {
    return axios.delete(USER_API_BASE_URL + "/:" + userId);
  }
}

export default new UserService();
