import axios, {AxiosResponse} from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com';

const getData = async <T>(url: string, params?: any) => {
  try {
    const res: AxiosResponse<T, any> = await axios.get<T>(url, params);
    return res?.data;
  } catch (e) {
    console.log(e);
  }
};

export {getData};
