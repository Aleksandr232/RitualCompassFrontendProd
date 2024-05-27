export interface ICompanyFormData {
  name: string;
  phone: string;
  description: string;
  address: string;
  time: string;
  service: string;
  site: string;
  social: string;
  files: ICompanyPhoto | null;
}

export interface ICompanyPhoto {
  photo: string | null;
}

export interface ICompanyData {
  id: number;
  company_ritual: string;
  phone_ritual: string;
  description_ritual: string;
  address_ritual: string;
  work_time_ritual: string;
  service_ritual: string;
  site_ritual: string;
  social_network_ritual: string[];
  paths: string;
  average_rating: string;
  total_rating_requests: number;
  min_rating: number;
  max_rating: number;
  name: string[];
  comment: string[];
  ratings: string[];
}

export interface IQuestion {
  question: string;
  options: string[];
}

export interface IModalQuickRequest {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export interface IModalQuickRatingRequest extends IModalQuickRequest {
  ratings?: number;
  id: number;
}

export interface IRatingCompaniesRequest {
  ratings: number;
  isEditable: boolean;
  company_id: number;
}

export interface IPostModalQuickRequest {
  name: string;
  phone: string;
  message: string;
}

export interface IPostModalCompanyRequest {
  name: string;
  phone: string;
  material: string;
  clothes: string;
  decoration: string;
  documents: string;
  place: string;
  taxi: string;
  services: string;
}
