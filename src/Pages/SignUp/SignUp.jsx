/* eslint-disable react/no-unescaped-entities */
import { BsRocket } from "react-icons/bs";
import { useContext, useState } from "react";
import { CiLogin } from "react-icons/ci";

import "./SignUp.css"
import { GrFormViewHide } from "react-icons/gr";
import { BiSolidHide } from "react-icons/bi";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
const SignUp = () => {
    const [error, setError] = useState("");
    const [hide, setHide] = useState(true)
    const [confirmHide, setconfirmHide] = useState(true)
    const { user, createNewUser, profileUpdate } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const phone = form.phone.value;
        const photo = form.photo.files[0];
        const confirmPassword = form.confirmPassword.value;
        setError(" ")
        if (!/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])./.test(password)) {
            return setError("Password must be contain at least one uppercase and one number and one lowercase number.")
        }
        if (password !== confirmPassword) {
            setError('')
            return setError("Password don't match")
        }

        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                if (user) {
                    profileUpdate(name)
                        .then(() => {

                            Swal.fire({
                                title: `Welcom ${user?.displayName} to Kids Zone`,

                                icon: "success"
                            });

                        })

                    navigate("/")
                }

                form.reset()
            }).catch(error => {
                setError(error.message)
            })

    }
    // style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
    return (
        <div className="w-full bg-red-800 md:min-h-screen bg-gradient-to-r from-indigo-700 to-cyan-400 p-8">

            <div className=" w-full px-3  pt-10 pb-3 mx-auto  ">

                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/4  text-white text-center p-5 ">

                        <BsRocket className="text-6xl animate-bounce text-center inline-block text-white" />
                        <h2 className="text-2xl font-bold">WELCOME</h2>
                        <p className="text-xl py-3 mb-14 font-semibold text-slate-200">You are not far from your children's Heaven.</p>
                        <span>Already have an account?   </span>
                        <div className="">
                            <Link className="link flex justify-center items-center  text-white" to="/login">Login
                                <CiLogin className="mt-1  font-extra bold text-2xl" /></Link>

                        </div>

                    </div>
                    <div className=" card card1 shadow-2xl w-full md:w-3/4 rounded-l-lg bg-base-100">
                        <h1 className="text-4xl text-center pt-2  text-green-600 font-bold">Sign Up!</h1>
                        <form onSubmit={handleRegister} className="p-5">
                            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                <div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text  ">Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="Write name " className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Mobile Number</span>
                                        </label>
                                        <input type="phone" name="phone" placeholder="phone" className="input input-bordered" required />
                                    </div>

                                </div>

                                <div>

                                    <div className="form-control  ">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <div className="flex w-full justify-center items-center input input-bordered">
                                            <input type={hide ? "password" : "text"} name="password" placeholder="password" className="w-11/12 " required />
                                            {
                                                !hide ? <span onClick={() => setHide(!hide)}><GrFormViewHide className="text-2xl" /></span> :
                                                    <span onClick={() => setHide(!hide)}>< BiSolidHide className="text-2xl" /></span>
                                            }

                                        </div>


                                    </div>
                                    <div className="form-control  ">
                                        <label className="label">
                                            <span className="label-text">Confirm Password</span>
                                        </label>
                                        <div className="flex w-full justify-center items-center input input-bordered">
                                            <input type={confirmHide ? "password" : "text"} name="confirmPassword" placeholder="Confirm password" className="w-11/12 " required />
                                            {
                                                !confirmHide ? <span onClick={() => setconfirmHide(!confirmHide)}><GrFormViewHide className="text-xl" /></span> :
                                                    <span onClick={() => setconfirmHide(!confirmHide)}>< BiSolidHide className="text-xl" /></span>
                                            }

                                        </div>

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Image Upload</span>
                                        </label>
                                        <input type="file" name="photo" className="file-input file-input-bordered file-input-success w-full max-w-xs" />

                                    </div>
                                </div>
                                <p className="text-red-500">{error}</p>
                                <div className="form-control mt-6">
                                    <button className="btn  btn-primary">Register</button>
                                </div>
                            </div>

                        </form>
                        <div className="divider divider-end "></div>
                        <div className="place-items-start	">
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default SignUp;