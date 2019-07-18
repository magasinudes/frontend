import { setUser } from "$store/actions/user";

const initCurrentUser = async (store) => {
  store.dispatch(setUser({ name: "", cip: "", ticket: "" }));
};

export default initCurrentUser;
