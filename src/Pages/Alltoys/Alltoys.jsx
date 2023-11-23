import { useContext, useEffect, useState } from "react";
import ToysTable from "./ToysTable";
import { AuthContext } from "../../Providers/AuthProviders";
import Lodder from "../Lodder/Lodder";

const Alltoys = () => {
    const [toys, setToys] = useState([]);
    const { user, loading } = useContext(AuthContext);
    const [searchText, setSearchText] = useState('')
    const handleSearch = (e) => {
        console.log(e.target.value);
    }


    useEffect(() => {
        if (loading) {
            return;
        }

        const url = `http://localhost:5000/products?email=${user?.email}&search=${searchText}`;
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setToys(data);
            });
    }, [user, loading, searchText]); // Make sure to include all dependencies of useEffect

    return (
        <div className="overflow-x-auto px-5">
            <div className="py-5 flex flex-between place-content-end">
                <input
                    onBlur={(e) => setSearchText(e.target.value)}
                    type="text"
                    placeholder="Search here"
                    className="input input-bordered w-full max-w-xs"
                />
                <button onClick={handleSearch} className="btn btn-primary">Search</button>
            </div>

            <table className="table ">
                <thead className="bg-slate-200">
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>company</th>
                        <th>location</th>
                        <th>Last Login</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {toys.map((toy) => (
                        <ToysTable toy={toy} key={toy._id}></ToysTable>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Alltoys;
