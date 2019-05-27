// import ajax from "./ajax";
import meMockup from "./meMockup";

class Users {
  me() {
    // return ajax.get("/user/me");
    return meMockup;
  }
}

export default new Users();
