# 🛍️ Product Catalog – React Router v7 Demo

A simple product catalog application built with **React** and **React Router v7** to demonstrate dynamic routes, nested routes, navigation, and layout patterns in a clean and practical way.

This project focuses on mastering routing concepts that are commonly used in real-world React applications.

---

## 🚀 Features

- Home page with project overview
- Products page with shared layout
- Dynamic product details page using URL parameters
- Nested routes using `<Outlet />`
- Top navigation bar with active link styles
- Professional "Product Not Found" handling
- Clean and responsive UI using Bootstrap

---

## 🗺️ Application Routes

| Route | Description |
|------|-------------|
| `/` | Home page |
| `/products` | Products layout + product list |
| `/products/:id` | Dynamic product details page |
| `*` | Not Found (404) page |

---

## 🧭 Navigation

A top navigation bar is visible on all pages and includes:

- Home
- Products

`NavLink` is used to provide active styling for the current route.

---

## 📦 Products Data

- Local array (no API)
- Minimum 6 products
- Each product contains:
  - `id`
  - `name`
  - `price`
  - `category`
  - `description`

---

## 🧩 Nested Routing Structure

The `/products` route acts as a **layout container**.

It includes:
- Page heading
- Description / placeholder for filters
- `<Outlet />` where nested routes render

### Nested Behavior

- `/products` → Displays product list
- `/products/:id` → Displays product details inside the same layout

---

## 📋 Product List Page

- Displays all products in a grid/list
- Each product includes a **View Details** button
- Navigates to `/products/:id`

---

## 🔍 Product Details Page

- Uses `useParams()` to read product ID
- Displays product information:
  - Name
  - Price
  - Category
  - Description
- Includes **Back to Products** navigation using `useNavigate()`
- Shows a friendly **Product Not Found** message if ID is invalid

---

## 🛠️ Technical Requirements

This project uses modern React Router patterns:

- React Router v7 (`element` syntax)
- `<Outlet />` for nested routes
- `useParams()` for dynamic routing
- `useNavigate()` for navigation control

---

## 🧠 Purpose of This Project

This project is built as a practical exercise to understand:

- Layout routes
- Nested routing
- Dynamic routes
- Navigation patterns in React applications

---

## 🧑‍💻 Tech Stack

- React
- React Router v7
- Bootstrap (for styling)

---

## ▶️ Run the Project

```bash
npm install
npm start
