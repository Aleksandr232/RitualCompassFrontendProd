import React, { useEffect, useState} from "react";
import Cookies from "js-cookie";
import API from "@/utils/api/api";

const User=()=>{
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const token = Cookies.get('token');
        if (!token) {
          // если токен отсутствует, перенаправляем на страницу авторизации
        } else {
          fetch(API.compass.user, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
          .then(response => {
            if (response.ok) {
              console.log("Token is valid");
              return response.json();
            } else {
              console.log("Token is invalid");
              Cookies.remove("token");
              // перенаправляем на страницу авторизации
              throw new Error("Invalid token");
            }
          })
          .then(data => {
            setUserData(data);
          })
          .catch(error => {
            console.error(error);
          });
        }
      }, []);
}

// export default User;

