# 🐾 PawMart - Pet Adoption & Supply Portal

**Live Website Link:** [Visit Now](https://project-pawmart.netlify.app/)

---

### 📝 Project Description

PawMart is a community-driven, full-stack platform where pet owners, breeders, and shops can list pets for adoption or sell pet-related products (food, toys, accessories, etc.). Buyers and adopters can browse listings, contact owners, and place orders directly.

---

### ✨ Key Features

- **Full User Authentication:** Secure user registration and login system built with **Firebase**, supporting both email/password and Google Sign-In.
- **Complete CRUD Functionality:** Authenticated users can create, read, update, and delete their own product or pet listings.
- **Dynamic Ordering System:** Users can adopt pets or order supplies through an interactive modal. All order information is securely stored in the database.
- **Personalized User Dashboards:** Includes private routes for a "My Listings" page (to manage personal listings) and a "My Orders" page (to review order history).
- **Category-Based Filtering:** The "Pets & Supplies" page allows users to browse all listings or view items filtered by specific categories (Pets, Pet Food, Accessories, Pet Care).
- **Modern & Responsive UI:** Built with Tailwind CSS and DaisyUI for a clean, fully responsive design that works on all devices, featuring scroll animations and a typewriter effect for a modern feel.

---

### 💻 Technologies Used

**Client-Side (Front-End):**

- React
- React Router
- Tailwind CSS
- DaisyUI
- Firebase Authentication
- Axios
- Framer Motion (for animations)
- React Simple Typewriter
- React Hot Toast (for notifications)

**Server-Side (Back-End):**

- Node.js
- Express.js
- MongoDB (for the database)
- CORS
- Dotenv

---

### 🚀 How to Run Locally

1.  **Clone the Client & Server Repositories**
2.  **Client:**
    ```bash
    cd pawmart-client
    npm install
    # Add your Firebase config to .env.local
    npm run dev
    ```
3.  **Server:**
    ```bash
    cd pawmart-server
    npm install
    # Add your MongoDB URI and DB_USER/DB_PASS to .env
    npm start
    ```
