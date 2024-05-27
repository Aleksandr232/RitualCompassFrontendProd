import { IPostModalCompanyRequest, IPostModalQuickRequest } from "@/interface/interface";

const postQuickRequest = async (url: string, data: IPostModalQuickRequest | IPostModalCompanyRequest) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

export default postQuickRequest;
