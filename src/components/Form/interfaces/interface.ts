import { IChangeCompany } from "@/app/(site)/admin/company/components/ChangeCompany/ChangeCompany.props";
import { ChangeEvent, FormEvent } from "react";

export interface ICompanyRequestForm {
  submitForm: (e: FormEvent<HTMLFormElement>) => void;
  isSuccess: boolean;
  isError: boolean;
}

interface messageValidation {
  isError: boolean;
  message: string;
  isSuccess: boolean;
  isSubmitting: boolean;
}

export interface IAddCompanyForm extends ICompanyRequestForm {
  messageValidation: messageValidation;
  CloseFormDateSeconds: number;
}

export interface IChangeCompanyForm {
  submitForm: (e: FormEvent<HTMLFormElement>) => void;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  isLoading: boolean;
  handleChangeCompany: (prev: boolean) => void;
  formData: IChangeCompany;
}

export interface ISendRatingForm extends ICompanyRequestForm {
  ratings?: number;
  id: number;
}
