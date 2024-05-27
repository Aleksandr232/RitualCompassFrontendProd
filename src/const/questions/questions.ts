import { IQuestion } from "@/interface/interface";


export const firstQuestions: IQuestion[] = [
    {
      question: "Какие услуги вам нужны?",
      options: ["Похоронные", "Памятники", "Атрибутика"],
    },
  ];
  
  export const funeralQuestions: IQuestion[] = [
    {
      question: "Нужен ли вам бесплатное такси до ритуального агентства?",
      options: ["Да", "Нет"],
    },
  
    {
      question: "Необходима помощь с местом на кладбище?",
      options: ["Да", "Нет", "Не знаю"],
    },
    {
      question: "Нужно ли оформление документов?",
      options: ["Да", "Нет"],
    },
  ];
  
  export const paraphernaliaQuestions: IQuestion[] = [
    {
      question: "Нужен ли вам бесплатное такси до ритуального агентства?",
      options: ["Да", "Нет"],
    },
    {
      question: "Вам нужны цветы, венки?",
      options: ["Да", "Нет"],
    },
    {
      question: "Ритуальная одежда",
      options: ["Да", "Нет"],
    },
  ];
  
  export const monumentQuestions: IQuestion[] = [
    {
      question: "Нужен ли вам бесплатное такси до ритуального агентства?",
      options: ["Да", "Нет"],
    },
    {
      question: "Какой материал для памятника",
      options: ["Гранит", "Мрамор", "Другой"],
    },
  ];
  