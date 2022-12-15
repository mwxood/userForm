import axios from 'axios';

export const postUserInfo = async (data) => {
  try {
    await axios({
      method: 'POST',
      url: 'https://www.toptal.com/developers/postbin/1671098516871-8350290840025',
      withCredentials: false,
      params: {
        ...data,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
