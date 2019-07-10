import { setUser } from "$store/actions/user";

const initCurrentUser = async (store) => {
  store.dispatch(setUser({ name: "Yoda", cip: "yoda9999" }));
};

export default initCurrentUser;
