import axios from "axios";

const BASE_URL = "http://localhost:3001";
/** API Class.
 *
 * Static class tying together methods used to get/send to the API.
 * There shouldn't be any frontend-specific elements here, and there shouldn't
 * be any API-aware elements elsewhere in the frontend.
 *
 */

class API {
  // the token for interactive with the API will be stored here.
  static token;
  static user;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${API.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      console.log(url)
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  static async signup(data) {
    let res = await this.request("auth/register", data, "post");
    return res;
  }

  static async login(data) {
    let res = await this.request("auth/token", data, "post");
    return res;
  }

  static async post(data) {
    let res = await this.request("post/create", data, "post");
    return res;
  }
  
  static async fetchPosts(data) {
    let res = await this.request("post/fetch");
    return res.posts;
  }

  static async likePost(data) {
    let res = await this.request("post/like", data, "post");
    return res;
  }

  static async writeComment(data) {
    let res = await this.request("post/comment", data, "post");
    return res;
  }

  //THE FOLLOWING TWO ROUTES WOULD BE USED FOR THE PROFILE PAGE
  //AT THE MOMENT THEY ARE NOT USED BY ANY PART OF THE APP
  static async fetchUser(data) {
    let res = await this.request("user");
    return res;
  }

  static async deleteUser(data) {
    let res = await this.request("user", data, );
    return res;
  }
}

export default API;
