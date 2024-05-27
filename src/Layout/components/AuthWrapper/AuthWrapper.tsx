"use client";
import Button from "@/components/Button/Button";
import LinkTag from "@/components/LinkTag/LinkTag";
import { routers } from "@/utils/routers";
import { FC, useEffect, useState } from "react"
import Cookies from "js-cookie";


const AuthWrapper :FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const token = Cookies.get("token");
      console.log(token);
  
      setIsAuthenticated(!!token);
    }, []);
  
    const handleLogout = () => {
      Cookies.remove("token");
      setIsAuthenticated(false);
    };
    return <>
     {!isAuthenticated ? (
        <>
          <LinkTag url={routers.login} appearance={"small"}>
            Войти
          </LinkTag>
          <LinkTag url={routers.registration} appearance="medium">
            Регистрация
          </LinkTag>
        </>
      ) : (
        <Button appearance="medium" onClick={handleLogout}>
          Выйти
        </Button>
      )}
    </>
   
}

export default AuthWrapper