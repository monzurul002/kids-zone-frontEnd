import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)

    return (

        <div>

            <div className="w-full text-center gap-5">
                <h2 className="text-2xl ">Login With</h2>
                <button onClick={googleSignIn} className="mx-2"><FcGoogle className="text-3xl" />
                </button>
                <button><FaFacebookSquare className=" text-primary text-3xl" />
                </button>
                <button className="mx-2"><FaSquareXTwitter className="text-3xl" />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;