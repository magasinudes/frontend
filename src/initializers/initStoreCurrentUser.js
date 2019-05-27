import { users } from "$services/rest";
import { setUser } from "$store/actions/user";

const initCurrentUser = async (store) => {
  const result = await users.me();
  store.dispatch(setUser(result.user));
};

export default initCurrentUser;
