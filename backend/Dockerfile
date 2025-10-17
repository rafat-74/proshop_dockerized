# نبدأ من Node image
FROM node:18

# نحدد فولدر العمل داخل الكونتينر
WORKDIR /app

# ننسخ ملفات الـ package من فولدر backend
COPY package*.json ./

# نسطب الـ dependencies
RUN npm install

# ننسخ كل ملفات الباك إند
COPY . .

# نفتح البورت اللي السيرفر هيشتغل عليه
EXPOSE 5000

# نشغل السيرفر
CMD ["npm", "start"]
