import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  useTitle("Sign Up");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { createUser, googleSignIn, updateUserProfile, logOut } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photo, email, password);

    // password validation
    if (password.length < 6) {
      setError("Please add at least 6 characters in your password");
      return;
    }

    // create User With Email And Password
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("User has been created successful!");
        // window.location.reload(true);
        //   update user profile
        navigate("/login");
        logOut();
        updateUserProfile(loggedUser, name, photo);
        setError("");
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  //   google sign in
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        setSuccess("Google Sign In Successful!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="flex-none min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-14">
          <img
            src="https://img.freepik.com/free-vector/placeholder-concept-illustration_114360-4983.jpg?w=740&t=st=1684436283~exp=1684436883~hmac=dbb8c16ac853c17fda3e5f4243382f08b1ad62f8bc85e298f23dec5573f578f0"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Sign Up</h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  id="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="photo url"
                  name="photo"
                  id="photo"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  id="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  id="password"
                  required
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-5">
                <input
                  className="btn border-0 bg-gradient-to-r from-cyan-500 to-blue-500"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center text-red-400">{error}</p>
            <p className="text-center text-emerald-400">{success}</p>
            <p className="my-3 text-center">
              Already have an account?{" "}
              <Link className="text-blue-500 font-bold mb-0" to="/login">
                Login
              </Link>
            </p>
            <div className="divider mt-0">OR</div>
            <div className="text-center mt-0">
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-info btn-outline"
              >
                <FcGoogle className="text-4xl mr-4" /> Sign-in With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
