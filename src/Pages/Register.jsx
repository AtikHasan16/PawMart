import React, { useContext, useState } from "react";
import AuthContext from "../Context/AuthContext";
import toast from "react-hot-toast";
import { MdOutlineEmail, MdOutlineLock, MdPictureAsPdf } from "react-icons/md";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { CgEye, CgImage, CgUser } from "react-icons/cg";
import { GoEyeClosed } from "react-icons/go";

const Register = () => {
  const { loginWithGoogle, registerWithEmail, setLoading, updateCurrentUser } =
    useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [invalid, setInvalid] = useState("");
  const handleShowPass = () => {
    setShowPass(!showPass);
  };
  const handleRegisterForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.image.value;
    //console.log(name, email, password, photoURL);

    if (password.length < 6) {
      return setInvalid("Password must be at least 6 character");
    } else if (!/[A-Z]/.test(password)) {
      return setInvalid("Password must contain at least one uppercase letter.");
    } else if (!/[a-z]/.test(password)) {
      return setInvalid("Password must contain at least one lowercase letter.");
    }
    registerWithEmail(email, password)
      .then(() => {
        toast.success("Registration Successful");

        updateCurrentUser(name, photoURL)
          .then(() => {
            toast.success("successfully updated user info");
            setLoading(false);
          })
          .catch((error) => {
            toast.error(error.code);
            setLoading(false);
          });
      })
      .catch((error) => {
        toast.error(error.code);
        setLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {
        toast.success("successfully logged in");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sand">
      <title>Register</title>
      <div className="border-2 border-secondary w-full max-w-md bg-primary shadow-xl rounded-4xl">
        <div className="card-body">
          {/* Title */}
          <h2 className="card-title text-3xl font-bold justify-center mb-6 text-secondary">
            Welcome Back
          </h2>

          <form onSubmit={handleRegisterForm}>
            {/* Name Input */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="font-semibold  text-secondary/80">Name</span>
              </label>
              <label className="input input-bordered flex items-center gap-2 w-full rounded-full">
                <CgUser className="text-xl text-secondary/70"></CgUser>
                <input type="text" name="name" placeholder="your-name" />
              </label>
            </div>
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
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                />
                <div onClick={handleShowPass} className="cursor-pointer">
                  {showPass ? (
                    <GoEyeClosed size={24} />
                  ) : (
                    <CgEye size={24}></CgEye>
                  )}
                </div>
              </label>
            </div>
            {/* Image Input */}
            <div className="form-control mb-2">
              <label className="label">
                <span className="font-semibold text-secondary/80">
                  Password
                </span>
              </label>
              <label className="input input-bordered flex items-center gap-2 w-full rounded-full">
                <CgImage className="text-xl text-secondary/70" />
                <input type="text" name="image" placeholder="https://" />
              </label>
            </div>

            {/* Forget Text */}
            <div className="text-right flex">
              <p className="text-sm  text-red-400 text-left">{invalid}</p>
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
                Register
              </button>
            </div>
          </form>

          <p className="text-center mt-4 text-white">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-bold hover:underline text-secondary"
            >
              Login here
            </Link>
          </p>

          <div className="divider text-secondary/60">OR</div>

          {/* Google Login Button */}
          <div className="form-control">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn w-full"
            >
              <FcGoogle size={24} />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
