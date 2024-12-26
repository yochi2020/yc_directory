# ใช้ Node.js image เป็น base image
FROM node:23.3.0

# ตั้ง working directory ใน container
WORKDIR /app

# คัดลอก package.json และ package-lock.json
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกโค้ดทั้งหมดไปใน container
COPY . .

# สร้างโปรเจ็กต์
RUN npm run build

# เปิดพอร์ตที่ Next.js ใช้
EXPOSE 3000

# รัน Next.js ในโหมด production
CMD ["npm", "start"]
