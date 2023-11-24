import { BASE_URL } from './../util/constants';
import axios from "axios";

export default axios.create({
  baseURL: BASE_URL,
});
