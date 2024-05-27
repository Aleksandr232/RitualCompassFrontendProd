import { FormEvent, useState } from "react";
import Button from "@/components/Button/Button";
import Htag from "@/components/Htag/Htag";
import Ptag from "@/components/Ptag/Ptag";
import styles from "./SelectionСompanies.module.css";
import {
  firstQuestions,
  funeralQuestions,
  monumentQuestions,
  paraphernaliaQuestions,
} from "@/const/questions/questions";
import { IQuestion } from "@/interface/interface";



const SelectionСompanies = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [questions, setQuestions] = useState<IQuestion[]>(firstQuestions);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleOptionClick = (option: string) => {
    setAnswers((prevAnswers) => [...prevAnswers, option]);

    if (currentStep === 0) {
      if (option === "Похоронные") setQuestions(funeralQuestions);
      else if (option === "Памятники") setQuestions(monumentQuestions);
      else if (option === "Атрибутика") setQuestions(paraphernaliaQuestions);
    }

    nextStep();
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const { name, phone } = data;
    console.log(name, phone + " " + answers.join(" "));
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
    setAnswers((prevAnswers) => prevAnswers.slice(0, -1));
  };

  return (
    <div className={styles.questions_wrapper}>
      {currentStep < questions.length ? (
        <>
          <Htag tag="h3">ОНЛАЙН ПОДБОР</Htag>
          <Ptag size="medium">
            Заполните несколько простых вопросов и получите лучшее предложение
          </Ptag>
          <Ptag size="large">{questions[currentStep].question}</Ptag>
          <div className={styles.questions_button}>
            {questions[currentStep].options.map((option, index) => (
              <Button
                appearance="medium"
                key={index + 1}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </Button>
            ))}
          </div>
          <div className={styles.step_button}>
            {currentStep > 0 && (
              <Button appearance="medium" onClick={prevStep}>
                Назад
              </Button>
            )}
          </div>
        </>
      ) : (
        <form className={styles.form} onSubmit={submitForm}>
          <div>
            <label htmlFor="name">
              Имя:
              <input type="text" name="name" required />
            </label>
          </div>
          <div>
            <label htmlFor="phone">
              Телефон:
              <input type="tel" name="phone" required />
            </label>
          </div>
          <div>
            <Button appearance="large">Отправить</Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default SelectionСompanies;
