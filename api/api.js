import axios from "axios";

export const getCountryList = () => {
  return axios
    .get(
      'https://demo9644419.mockable.io/getCountryList'
    )
    .then((res) => res)
    .catch((err) => err.response);
};
