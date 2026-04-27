# 📁 STUDENT SERVICE README

```md
# Student Service

## Purpose
Handles student data management.

---

## Structure
- `src/api/` – Routes, controllers
- `src/domain/` – Business logic, repositories
- `app.js` – Express setup
- `server.js` – Server entry point

---

## Running Locally
```bash
npm install
npm run dev
API Endpoints
Get All Students
GET /api/students
Add Student
POST /api/students

Body:

{
  "id": 1,
  "name": "Kaushik",
  "age": 22
}