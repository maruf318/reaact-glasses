import { Link, useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const { googleSignIn, createUser, handleUpdateProfile } =
    useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.img.value;
    console.log(email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Logged In");
        handleUpdateProfile(name, photo)
          .then(() => {
            console.log("profile updated");
          })
          .catch((error) => {
            console.error(error);
          });
        navigate("/");
      })
      .catch((error) => console.error(error));
  };
  //create user

  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("Logged In");
        navigate("/");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input
                  type="text"
                  placeholder="image url"
                  name="img"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6 p-0">
                <button className="btn btn-neutral">Register</button>
              </div>
              <label className="label">
                Have an account?{" "}
                <Link to="/login" className="label-text-alt link link-hover">
                  Please Login
                </Link>
              </label>
              <button onClick={handleGoogle}>Google</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
