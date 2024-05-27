import { IValidateAdmin } from "./ValidateAdmin.props";

export const ValidateAdmin = async ({API, token,setIsAdmin, setIsLoading} : IValidateAdmin) => {
  console.log(token);
  
    if (!token) {
      return;
    }

    try {
      const response = await fetch(API, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(
          "Ошибка при запросе к API для проверки прав администратора"
        );
      }

      const data = await response.json();
      console.log(data);

      setIsAdmin(true);

    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error);
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  };