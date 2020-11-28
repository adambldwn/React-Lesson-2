import axios from 'axios';

export const fetchData = async () => {
    const { REACT_APP_API_BASE_URL, REACT_APP_API_TOKEN } = process.env;
    const response = axios.get(`${REACT_APP_API_BASE_URL}/user`, {
          headers: {
              "app-id": REACT_APP_API_TOKEN,
              },
    });
    return response?.data?.data;
  }