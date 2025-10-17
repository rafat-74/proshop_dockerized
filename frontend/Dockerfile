# نبدأ من Node image
FROM node:18

# نحدد فولدر العمل داخل الكونتينر
WORKDIR /app

# ننسخ ملفات الـ package من فولدر frontend
COPY package*.json ./

# نسطب الـ dependencies
RUN npm install

# ننسخ باقي ملفات الفرونت
COPY . .

# نعمل build للفرونت
RUN npm run build

# نستخدم Nginx علشان نخدم الـ build النهائي
FROM nginx:alpine

# ننسخ ملفات الـ build من المرحلة الأولى لفولدر Nginx
COPY --from=0 /app/build /usr/share/nginx/html

# نفتح بورت 80
EXPOSE 80

# نشغل Nginx
CMD ["nginx", "-g", "daemon off;"]
