const API = {
  compass: {
    register: process.env.NEXT_PUBLIC_API_URL + "/api/register",
    login: process.env.NEXT_PUBLIC_API_URL + `/api/login`,
    auth_google: process.env.NEXT_PUBLIC_API_URL + `/api/auth`,
    google_callback: process.env.NEXT_PUBLIC_API_URL + `/api/auth/callback`,
    user: process.env.NEXT_PUBLIC_API_URL + `/api/user`,
    post_ritual: process.env.NEXT_PUBLIC_API_URL + `/api/rituals`,
    delete_company: process.env.NEXT_PUBLIC_API_URL + `/api/rituals/delete`,
    quick_request: process.env.NEXT_PUBLIC_API_URL + `/api/send`,
    quick_request_company: process.env.NEXT_PUBLIC_API_URL + `/api/question`,
    rating_request : process.env.NEXT_PUBLIC_API_URL + '/api/rating',
    post_blog : process.env.NEXT_PUBLIC_API_URL + '/api/blog'
  },
  params : {
    aboutSlug : 'https://cz19567.tw1.ru/api/about'
  }
};

export default API;
