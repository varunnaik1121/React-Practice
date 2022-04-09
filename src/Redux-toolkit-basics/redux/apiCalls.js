import { updateStart, updateError, updateSuccess } from "./userSlice";
import axios from "axios";
const updateUser = async (dispatch) => {
  dispatch(updateStart());
  try {
    const data = await axios.get("https://randomuser.me/api/");
    dispatch(updateSuccess(data.data.results));
  } catch (err) {
    dispatch(updateError(err));
  }
};
export default updateUser;
