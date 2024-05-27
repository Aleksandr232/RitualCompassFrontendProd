export interface ICompanyTitleProps {
  company_ritual: string;
  average_rating: string;
  max_rating: number;
  min_rating: number;
  total_rating_requests: number;
  isEditable: boolean;
  company_id: number;
  user_names_reviews: string[];
  user_comments_reviews: string[];
  user_rating_reviews: string[];
}
