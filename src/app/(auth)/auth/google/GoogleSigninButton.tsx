import API from "@/utils/api/api";
import Link from "next/link";
import React, {useState, useEffect} from 'react';


const GoogleSigninButton = () => {
  const [loginUrl, setLoginUrl] = useState(null);
  const google = API.compass.auth_google;

  useEffect(() => {
    fetch(google, {
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong!');
        })
        .then((data) => {
            setLoginUrl(data.url);
            console.log(data); // Выводим ответ в консоль
        })
        .catch((error) => console.error(error));
}, [google]);

  

  return (
    <div>
      {loginUrl != null && (
        <Link href={loginUrl}>Войти через Google</Link>
      )}
    </div>
  );
};

export default GoogleSigninButton;