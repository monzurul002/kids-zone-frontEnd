import { useLoaderData } from "react-router-dom";
import Mytoystable from "./Mytoystable";
import { useState } from "react";

const MyToys = () => {
  const mytoys = useLoaderData();
  const [myToys, setMyToys] = useState(mytoys);

  return (
    <div className="w-11/12 mx-auto">
      <div className="overflow-x-auto">
        <table className="table border-2 p-2 ">
          <thead className="bg-slate-600 text-white">
            <tr>
              <th>Name</th>
              <th>Seller</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Email</th>
              <th>Update</th>
              <th className="text-red-500 bg-gray-600">Delete</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((mytoy) => (
              <Mytoystable
                key={mytoy._id}
                mytoy={mytoy}
                myToys={myToys}
                setMyToys={setMyToys}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
