
import { IAddNewBlog } from "./usePostBlogRequest.props";


const usePostBlogRequest = () => {

  const addNewBlog = async ({ api, token, body }: IAddNewBlog) => {

    try {
      const response = await fetch(api, {
        method: "POST",
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        // body: JSON.stringify(params),
        body : body
      });
      

      if (!response.ok) {
        throw new Error(`HTTP ошибка! status: ${response.status}`);
        
      }
      return await response.json();

    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Неизвестная ошибка.";
      console.log(message);
      throw new Error(message);
    }
  };

  return {addNewBlog};
};

export default usePostBlogRequest;