import { useContext, useEffect, useState } from "react";
import ToysTable from "./ToysTable";
import { AuthContext } from "../../Providers/AuthProviders";

const Alltoys = () => {
    const [toys, setToys] = useState([])
    //this is just experiment
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/products?email=${user?.email}`
    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [])

    return (
        <div className="overflow-x-auto px-5">
            <div className="py-5 flex flex-between place-content-end">

                <input type="text" placeholder="Search here" className="input input-bordered w-full max-w-xs" />
                <button className="btn btn-primary">Search</button>
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
                    {
                        toys.map(toy => <ToysTable
                            toy={toy}
                            key={toy._id}
                        ></ToysTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Alltoys;