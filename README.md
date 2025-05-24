# ⚡ Year Progress

A modern frontend project built with:

- [Vite](https://vitejs.dev/) – Fast build tool
- [React](https://reactjs.org/) – UI library
- [TypeScript](https://www.typescriptlang.org/) – Typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS

---

## 🧑‍💻 Getting Started (Local Development)

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

---

## 🐳 Running with Docker

### 🔨 Build the Docker image

```bash
docker build -t year_progress .
```

### ▶️ Run the container

```bash
docker run -d -p 8080:80 year_progress
```

Then open [http://localhost:8080](http://localhost:8080) in your browser.

---

## ⚙️ GitHub Actions (CI/CD)

This project uses **GitHub Actions** to automatically build and push a Docker image on each push to the `main` branch.

### ✅ Steps Performed by CI

- Check out the code
- Build Docker image using the included `Dockerfile`
- Push image to Docker Hub or GitHub Container Registry

### 🔒 Secrets Required

Set these secrets in **GitHub → Settings → Secrets → Actions**:

- `DOCKER_USERNAME` – your Docker Hub username
- `DOCKER_PASSWORD` – your Docker Hub password or token

---

## 🧾 Project Structure

```
project/
├── src/                 # Source code
├── dist/                # Production build (generated)
├── package.json         # NPM configuration
├── vite.config.ts       # Vite config
├── tailwind.config.js   # Tailwind CSS config
├── Dockerfile           # Docker build config
└── .github/workflows/   # GitHub Actions
```

---

## 🛠 Tech Stack

- Node.js 20 (Alpine base image)
- React 18
- TypeScript 5
- Tailwind CSS 3
- Nginx (for serving production build)

---

##📦 Docker Image

You can pull the Docker image directly from Docker Hub:

```bash
  docker pull surajkk93/year_progress:v1
   ```

## 📦 Deployment Options

You can deploy the Docker image to:

- **Docker Hub**
- **GitHub Container Registry (GHCR)**
- Any cloud or on-prem server that supports Docker

---

![image](https://github.com/user-attachments/assets/10b8ec6b-ee4b-49c4-9d1f-c9310455d0b7)


---

## 📄 License

MIT – Feel free to use and modify this project.
