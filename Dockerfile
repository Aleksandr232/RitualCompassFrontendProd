# Базовый образ с Node.js и npm
# Используем базовый образ Nginx
FROM nginx:latest

# Копируем конфигурацию Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем файлы вашего Node.js приложения
COPY . /app
WORKDIR /app

# Устанавливаем Node.js и зависимости
RUN apt-get update && apt-get install -y nodejs npm
RUN npm install

# Собираем и запускаем Node.js приложение
RUN npm run build
CMD ["npm", "start"]

# Открываем порты для HTTP и HTTPS
EXPOSE 80
EXPOSE 443