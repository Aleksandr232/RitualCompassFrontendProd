import { routers } from "@/utils/routers";

export const navigationLink = [
  { id: 1, name: "Главная", route: routers.home },
  { id: 2, name: "Кладбища", route: routers.cemetery },
  { id: 3, name: "Морги", route: routers.morgue },
  { id: 4, name: "О нас", route: routers.about },
  { id: 5, name: "Контакты", route: routers.home },
];
