import axios from 'axios';

export const postUserInfo = async (data, url) => {
  try {
    await axios({
      method: 'POST',
      url: 'https://www.toptal.com/developers/postbin/1671287444159-1038259777706',
      withCredentials: false,
      params: {
        ...data,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
