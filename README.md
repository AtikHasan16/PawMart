# 🐾 PawMart - Pet Adoption & Supply Portal

**Live Website Link:** [Welcome to PawMart](https://project-pawmart.netlify.app/)

---

### 📝 Project Description

PawMart is a modern, full-stack, community-driven platform designed for pet lovers. It allows users to list pets for adoption and sell a variety of pet-related products, including food, toys, and accessories. Buyers and potential adopters can easily browse listings, view product details, and connect with sellers. The application features a clean, responsive user interface and provides a seamless experience for both buyers and sellers.

---

### ✨ Key Features

-   **Full User Authentication:** Secure user registration and login system with email/password and Google Sign-In, powered by Firebase.
-   **Interactive Dashboard:** A personalized dashboard for authenticated users to manage their profile, view their orders, add new product/pet listings, and manage their existing listings.
-   **Complete CRUD Functionality:** Users have full control over their listings, with the ability to create, read, update, and delete them.
-   **Product and Pet Listings:** A comprehensive system for listing pets for adoption and selling pet supplies.
-   **Categorized Listings:** Products are organized into categories, allowing users to easily filter and find what they are looking for.
-   **Dynamic and Responsive UI:** Built with React, Tailwind CSS, and DaisyUI, the application is fully responsive and provides a great user experience on all devices.
-   **Engaging User Experience:** Features modern UI elements like a typewriter effect, scroll animations, image carousels, and interactive maps.
-   **Notifications:** Provides user-friendly notifications for various actions using React Hot Toast and SweetAlert2.
-   **PDF Generation:** Allows users to generate PDF documents, likely for order summaries or listing details.

---

### 💻 Technologies Used

-   **Core Framework:** React
-   **Routing:** React Router
-   **Styling:** Tailwind CSS, DaisyUI
-   **Backend Service:** Firebase (for Authentication and Hosting)
-   **HTTP Client:** Axios
-   **Animations:** Framer Motion
-   **UI Components:**
    -   React Icons
    -   React Simple Typewriter
    -   React Spinners
    -   Swiper (for carousels)
    -   Leaflet & React Leaflet (for maps)
-   **Notifications:** React Hot Toast, SweetAlert2
-   **PDF Generation:** jspdf, jspdf-autotable
-   **Build Tool:** Vite
-   **Linting:** ESLint

---

### 📂 Project Structure

The project follows a standard React application structure:

```
src/
├── assets/         # Static assets like images and logos
├── Components/     # Reusable UI components
├── Context/        # React context for state management (e.g., AuthProvider)
├── Error/          # Error pages
├── Firebase/       # Firebase configuration
├── Hooks/          # Custom React hooks
├── Layouts/        # Main application layouts (e.g., MainLayout, DashLayout)
├── Pages/          # Application pages/views
├── Routes/         # Routing configuration and private/guest route components
├── Utilities/      # Utility functions
├── App.jsx         # Main application component
├── main.jsx        # Application entry point
└── index.css       # Global CSS styles
```

---

### 🚀 How to Run Locally

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/AtikHasan16/PawMart.git
    cd PawMart
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Set up Firebase:**
    -   Create a new Firebase project.
    -   In your Firebase project, create a new web application.
    -   Copy the Firebase configuration object.
    -   Create a file named `firebase.config.js` in the `src/Firebase/` directory.
    -   Add your Firebase configuration to `src/Firebase/firebase.config.js`. It should look like this:

    ```javascript
    import { initializeApp } from "firebase/app";

    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID"
    };

    const app = initializeApp(firebaseConfig);
    export default app;
    ```

4.  **Run the Development Server:**
    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173`.

---

### 📜 Scripts

-   `npm run dev`: Starts the development server.
-   `npm run build`: Builds the application for production.
-   `npm run lint`: Lints the code using ESLint.
-   `npm run preview`: Previews the production build locally.
