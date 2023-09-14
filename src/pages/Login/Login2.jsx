import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  useTitle("Login");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { SignInUser, googleSignIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    // sign in user
    SignInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        form.reset();
        setSuccess("User Login Successful!");
        navigate(from, { replace: true });
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
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="h-screen">
      <div className="h-full bg-base-200">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://img.freepik.com/free-vector/key-concept-illustration_114360-6305.jpg?size=626&ext=jpg&ga=GA1.2.209329912.1680195530&semt=sph"
              alt=""
            />
          </div>
          <div className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
            <div className="">
              <h1 className="text-2xl text-center font-bold">Login</h1>
              <form onSubmit={handleLogin}>
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
                <div className="form-control mt-6">
                  <input
                    className="btn border-0 bg-gradient-to-r from-cyan-500 to-blue-500"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <p className="text-center text-red-400">{error}</p>
              <p className="text-center text-emerald-400">{success}</p>
              <p className="my-4 text-center">
                New to Toy Trackers?{" "}
                <Link className="text-blue-500 font-bold" to="/sign-up">
                  SignUp
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
    </div>
  );
};

export default Login;
