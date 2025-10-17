# 🛍️ Dockerized MERN eCommerce App

## 📖 Overview
This is my first project implementing the **MERN Stack** inside a real **Dockerized environment**,  
using **Nginx** as a reverse proxy to simulate a **production-ready setup**.  

The project is a **fully functional eCommerce web app**,  
with a **React.js frontend** and a **Node.js + Express backend**,  
each running in its own **Docker container** for isolation, flexibility, and scalability.

---

## ⚙️ Tech Stack
- 💻 **Frontend:** React.js + Bootstrap  
- 🧠 **Backend:** Node.js + Express  
- 🗄️ **Database:** MongoDB *(optional – static data used in this version)*  
- 🌐 **Reverse Proxy:** Nginx  
- 🐳 **Containerization:** Docker & Docker Compose  

---

## 🧩 Features
- 🔐 Authentication System (Sign Up / Sign In)  
- 🛍️ Product Listing + Details  
- 🛒 Add to Cart  
- 📱 Responsive UI  
- 🧱 Fully Containerized Architecture  
- 🚀 Ready for CI/CD Deployment  

---

## 🐳 Docker Architecture
Each service (**frontend**, **backend**, **nginx**) runs in a **separate container**,  
and they communicate through a **Docker network** defined in `docker-compose.yml`.

```yaml
version: '3'
services:
  frontend:
    build:
      context: ./frontend
      dockerfile: dockerfile
    ports:
      - '3000:3000'
    depends_on:
      - backend

  backend:
    build:
      context: ./backend
      dockerfile: dockerfile
    ports:
      - '5000:5000'

  nginx:
    build:
      context: ./nginx
    ports:
      - '80:80'
    depends_on:
      - frontend
      - backend
```
---

## 🐳 Docker Architecture
Each service (**frontend**, **backend**, **nginx**) runs in a **separate container**,  
and they communicate through a **Docker network** defined in `docker-compose.yml`.

## 📸 Screenshots
All screenshots are included in the `Screenshots/` folder —

They show the UI pages (Home, Sign Up, Cart) and the container setup in **Docker Desktop**.

Please place these image files inside the `Screenshots/` folder:

- **home.png** — Home page screenshot.
- **register.png** — Sign Up / Register page screenshot.
- **cart.png** — Cart page screenshot.
- **logs.png** — Terminal logs / build output screenshot.
- **containers.png** — Docker Desktop containers view screenshot.
- **images.png** — Docker Desktop images view screenshot.
- **vscode_structure.png** — VS Code folder structure screenshot.

**Tip:** Use clear, crop-focused screenshots (avoid desktop clutter) so visitors immediately see the app + containers.

---

## 🧾 How to Run Locally
To run this project on your machine:

1.  **Clone the project:**

    ```bash
    git clone [https://github.com/username/proshop_dockerized.git](https://github.com/username/proshop_dockerized.git)
    cd proshop_dockerized
    ```

2.  **Build and run all containers:**

    ```bash
    docker compose up --build
    ```

3.  **Open in your browser:**

    ```
    http://localhost
    ```

---

## 🧠 Notes & Optional
- If you want to run with a real **MongoDB** instance, update the backend `MONGO_URI` in the **environment variables** or add a `mongo` service to `docker-compose.yml`.
- For **production deployment**, consider serving the **frontend build** from **Nginx** and securing traffic with **HTTPS** (using **letsencrypt** / or reverse proxy config).
- Add a **CI step** (**GitHub Actions**) to build images and run tests automatically.

---

## 👨‍💻 Author
**Rafat Ashraf**

💼 **Aspiring Cloud & DevOps Engineer**

📍 **Egypt**

🔗 **LinkedIn** : www.linkedin.com/in/rafat-devops
