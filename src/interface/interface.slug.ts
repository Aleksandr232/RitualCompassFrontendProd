

export interface IAboutSlugProps {
    id: number;
    title: string;
    description: string ;
    slug: string;
    seo_title: string;
    seo_description: string;
    seo_keywords: string;
  }
  
  export interface IAboutListProps {
    posts: IAboutSlugProps[];
  }
  