import React, { use } from "react";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail, MdOutlineLock } from "react-icons/md";
import AuthContext from "../Context/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const { loginWithGoogle } = use(AuthContext);
  const handleLoginForm = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };

  const handleGoogleLogin = () => {
    loginWithGoogle().then(() => {
      toast.success("successfully logged in");
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sand">
      <title>Login</title>
      <div className="card w-full max-w-md bg-primary shadow-xl rounded-4xl">
        <div className="card-body">
          {/* Title */}
          <h2 className="card-title text-3xl font-bold justify-center mb-6 text-secondary">
            Welcome Back
          </h2>

          <form onSubmit={handleLoginForm}>
            {/* Email Input */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="font-semibold  text-secondary/80">Email</span>
              </label>
              <label className="input input-bordered flex items-center gap-2 w-full rounded-full">
                <MdOutlineEmail className="text-xl text-secondary/70" />
                <input
                  type="email"
                  name="email"
                  placeholder="your-email@example.com"
                />
              </label>
            </div>

            {/* Password Input */}
            <div className="form-control mb-2">
              <label className="label">
                <span className="font-semibold text-secondary/80">
                  Password
                </span>
              </label>
              <label className="input input-bordered flex items-center gap-2 w-full rounded-full">
                <MdOutlineLock className="text-xl text-secondary/70" />
                <input type="password" name="password" placeholder="••••••••" />
              </label>
            </div>

            {/* Forget Text */}
            <div className="text-right">
              <a
                href="#"
                className="text-sm hover:underline text-secondary/70 hover:text-secondary"
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <div className="form-control mt-6">
              <button type="submit" className="btn w-full">
                Login
              </button>
            </div>
          </form>

          <p className="text-center mt-4 text-white">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-bold hover:underline text-secondary"
            >
              Create one
            </Link>
          </p>

          <div className="divider text-secondary/60">OR</div>

          {/* Google Login Button */}
          <div className="form-control">
            <button onClick={handleGoogleLogin} className="btn w-full">
              <FcGoogle size={24} />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
