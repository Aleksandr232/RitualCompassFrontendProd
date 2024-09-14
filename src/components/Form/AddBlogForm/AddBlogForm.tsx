import { FC, useState } from "react";
import { getSecondsText } from "@/app/(site)/admin/company/components/AddCompany/getSecondsText/getSecondsText";
import Button from "@/components/Button/Button";
import Ptag from "@/components/Ptag/Ptag";
import styles from "../Form.module.css";
import { IAddCompanyForm } from "../interfaces/interface";
import cn from "classnames";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddBlogForm: FC<IAddCompanyForm> = ({
  submitForm,
  CloseFormDateSeconds,
  messageValidation,
}) => {
  const [text, setText] = useState('');

  const handleTextChange = (value:string) => {
    setText(value);
  };

  return (
    <form
      className={cn(styles.form_wrapper, styles.add_company)}
      onSubmit={submitForm}
    >
      <label htmlFor="company_ritual">
        Название поста
        <input type="text" id="title" name="title" required />
      </label>

      <label htmlFor="description_ritual">
        Описание поста:
 
        <ReactQuill
          value={text}
          onChange={handleTextChange}
          modules={{
            toolbar: [
              [{ 'header': [1, 2, false] }],
              ['bold', 'italic', 'underline','strike', 'blockquote'],
              [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
              ['link', 'image'],
              ['clean']
            ]
          }}
          style={{
            width: '100%',
            height: '200px',
            fontSize: '16px',
            padding: '10px',
            boxSizing: 'border-box',
          }}
          
          
        />
      </label>
      <label htmlFor="company_ritual">
        seo title
        <input type="text" id="seo_title" name="seo_title" required />
      </label>
      <label htmlFor="company_ritual">
        seo keywords
        <input type="text" id="seo_keywords" name="seo_keywords" required />
      </label>
      <label htmlFor="company_ritual">
        seo description
        <input type="text" id="seo_description" name="seo_description" required />
      </label>
      <Button appearance="medium">
        {messageValidation.isSubmitting
          ? "Загрузка"
          : messageValidation.isError
          ? "Ошибка"
          : "Отправить"}
      </Button>
      {messageValidation.isError && (
        <Ptag size="medium" isError>
          {messageValidation.message}
        </Ptag>
      )}
      {messageValidation.isSuccess && (
        <Ptag size="medium" isSuccess>
          {`${
            messageValidation.message
          } ${CloseFormDateSeconds} ${getSecondsText(CloseFormDateSeconds)}`}
        </Ptag>
      )}
    </form>
  );
};

export default AddBlogForm;