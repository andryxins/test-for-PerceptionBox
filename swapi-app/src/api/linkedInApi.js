import axios from 'axios';

export const getAuthorizationCode = (token, redirectUri) =>
  axios
    .post(
      `https://cors-anywhere.herokuapp.com/https://www.linkedin.com/oauth/v2/accessToken/?grant_type=authorization_code&code=${token}&redirect_uri=${redirectUri}&client_id=77qg8cay7ed911&client_secret=CbosFe9lqOhLivvR`,
      null,
      {
        headers: {
          'Content-Type': 'x-www-form-urlencoded',
        },
      }
    )
    .then((res) => res.data);

export const getUserInfo = (token) =>
  axios.get(
    'https://cors-anywhere.herokuapp.com/https://api.linkedin.com/v2/me',
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

// export const getUserConfirm = () =>
//   axios.get(
//     `https://cors-anywhere.herokuapp.com/https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77qg8cay7ed911&redirect_uri=http://localhost:3000/signup&scope=r_liteprofile%20r_emailaddress`
//   );
