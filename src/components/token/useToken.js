import React from "react";

export default function useToken() {
  const getUserInfo = () => {
    const tokenString = sessionStorage.getItem("user_tokens");
    const userToken = JSON.parse(tokenString);
    return userToken ? userToken : null;
  };

  const [userInfo, setUserInfo] = React.useState(getUserInfo());

  const saveUserInfo = (userToken) => {
    sessionStorage.setItem("user_tokens", JSON.stringify(userToken));
    setUserInfo(userToken);
  };

  return {
    setUserInfo: saveUserInfo,
    userInfo,
  };
}
