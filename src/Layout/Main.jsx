import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";
import Swal from 'sweetalert2'
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import Lodder from "../Pages/Lodder/Lodder";


const Main = () => {
    const { loading } = useContext(AuthContext)

    if (loading) {
        return <Lodder></Lodder>
    }
    return (
        <div >
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;