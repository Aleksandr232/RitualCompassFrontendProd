import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

function toQueryString(paramsObject: any) {
  const params = new URLSearchParams();
  for (const key in paramsObject) {
    const value = paramsObject[key];
    if (Array.isArray(value)) {
      // Если значение - массив, добавьте каждый элемент отдельно
      value.forEach((item) => params.append(key, item));
    } else {
      // Иначе добавьте значение как есть
      params.append(key, value);
    }
  }
  return params.toString();
}

function GoogleCallback() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Функция для взаимодействия с вашим backend'ом для обработки ответа от Google
    const fetchData = async () => {
      const querystring = toQueryString(router.query); // Преобразование объекта query в строку запроса
      const url = `https://cz19567.tw1.ru/auth/callback?${querystring}`;
      try {
        const response = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          // вместо localStorage используйте Cookies для установки токена
          if (data.token) {
            Cookies.set("token", data.token, { expires: 7, path: "/" });
            router.push("/"); // Перенаправление на главную страницу после успешного входа
          }
        } else {
          throw new Error("Something went wrong!");
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    if (router.isReady) {
      fetchData();
    }
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  // добавьте рендеринг для других состояний, если необходимо
  return null;
}