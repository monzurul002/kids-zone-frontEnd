import { useContext, useState } from "react";
import loginBg from "../../assets/login.jpg"
import loginSide1 from "../../assets/loginPic.png"
import { BiSolidHide } from "react-icons/bi";
import { GrFormViewHide } from "react-icons/gr";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";


const Login = () => {
    const [hide, setHide] = useState(true);
    const navigate = useNavigate();
    const [error, setError] = useState("")
    const { emailPasswordSignIn } = useContext(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        emailPasswordSignIn(email, password)
            .then(result => {
                const user = result.user;
                if (user) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Succesfully logged In.",
                        showConfirmButton: false,
                        timer: 1000
                    });
                    navigate("/")
                }
            })
            .catch(error => {
                setError(error.message)
            })

    }

    return (
        <div style={{ backgroundImage: `url(${loginBg})` }} className="w-full md:min-h-screen p-8">
            <div className="hero   flex  ">
                <div className="hidden md:inline-block	">
                    <img className="w-50" src={loginSide1} alt="" />
                </div>

                <div className="w-11/12 mx-auto md:px-3 md:w-2/5">
                    <div className="card  py-3  shadow-2xl bg-base-100">
                        <h1 className="text-center text-green-500  font-bold text-3xl">Login</h1>
                        <form onSubmit={handleLogin} className="card-body">

                            <div className="form-control  ">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <div className="flex w-full justify-center items-center input input-bordered">
                                    <input type="email" name="email" placeholder="email" className="w-11/12 " required />


                                </div>

                            </div>

                            <div className="form-control  ">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="flex w-full justify-center items-center input input-bordered">
                                    <input type={!hide ? "password" : "text"} name="password" placeholder="password" className="w-11/12 " required />
                                    {
                                        hide ? <span onClick={() => setHide(!hide)}><GrFormViewHide className="text-2xl" /></span> :
                                            <span onClick={() => setHide(!hide)}>< BiSolidHide className="text-2xl" /></span>
                                    }

                                </div>

                            </div>
                            <p className="text-red-600">{error}</p>
                            <span>Already have an account? <Link className="link text-success" to="/signup">Sign Up</Link></span>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;