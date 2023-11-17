/* eslint-disable react/no-unescaped-entities */
import { BsRocket } from "react-icons/bs";
import { useState } from "react";
import bg from "../../assets//login.jpg"
import "./SignUp.css"
import { GrFormViewHide } from "react-icons/gr";
import { BiSolidHide } from "react-icons/bi";
const SignUp = () => {
    const [error, setError] = useState("");
    const [hide, setHide] = useState(true)
    const [confirmHide, setconfirmHide] = useState(true)
    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        form.reset()
    }
    // style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
    return (
        <div className="w-full bg-red-800 md:min-h-screen bg-gradient-to-r from-indigo-700 to-cyan-400 p-8">

            <div className=" w-full  py-10 mx-auto  ">

                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/4  text-white text-center p-5 ">

                        <BsRocket className="text-6xl animate-bounce text-center inline-block text-white" />
                        <h2 className="text-2xl font-bold">WELCOME</h2>
                        <p className="text-xl py-3 font-semibold text-slate-200">You are not far from your children's Heaven.</p>
                        <h1 className=" mt-12 p-2 text-xl btn bg-primary	text-white	 hidden md:inline-block ">Sign Up!</h1>
                    </div>
                    <div className=" card card1 shadow-2xl w-full md:w-3/4 rounded-l-lg bg-base-200">
                        <h1 className="text-4xl text-center pt-2  text-green-600 font-bold">Sign Up!</h1>
                        <form onSubmit={handleRegister} className="card-body">
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
                                            <span className="label-text">Password</span>
                                        </label>
                                        <div className="flex w-full justify-center items-center input input-bordered">
                                            <input type={confirmHide ? "password" : "text"} name="password" placeholder="password" className="w-11/12 " required />
                                            {
                                                !confirmHide ? <span onClick={() => setconfirmHide(!confirmHide)}><GrFormViewHide className="text-2xl" /></span> :
                                                    <span onClick={() => setconfirmHide(!confirmHide)}>< BiSolidHide className="text-2xl" /></span>
                                            }

                                        </div>

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Image Upload</span>
                                        </label>
                                        <input type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs" />

                                    </div>
                                </div>
                                <p className="text-red-500">{error}</p>
                                <div className="form-control mt-6">
                                    <button className="btn  btn-primary">Register</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default SignUp;