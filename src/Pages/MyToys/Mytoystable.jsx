import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import ModalUpdate from "./ModalUpdate";
import { useState } from "react";

const Mytoystable = ({ mytoy, myToys, setMyToys }) => {
    const { _id, seller, catagory, name, price, quantity, email } = mytoy;
    const [updateId, setUpdateId] = useState('')
    const [updateToy, setUpdateToy] = useState({})
    const handleDeleteItem = (id) => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#008000",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/mytoys/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {

                            const restData = myToys.filter(mytoy => mytoy._id !== id);
                            setMyToys(restData)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })






            }
        });
    }

    const handleUpdate = (id) => {
        console.log(id);

        // fetch(`http://localhost:5000/updatetoy/${id}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         setUpdateToy(data)
        //     })
        setUpdateId(id)
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{seller}</td>
            <td>{catagory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{email}</td>
            <td className="text-green-500 font-bold"><button className="btn" onClick={() => {
                handleUpdate(_id)
                document.getElementById('my_modal_5').showModal();

            }}>Update</button></td>
            <td onClick={() => () => handleDeleteItem(_id)} className="text-white"><button><MdDelete className="text-red-500 text-3xl pt-1"></MdDelete></button></td>

            {/* <dialog id="my_modal_5" className="modal w-full  modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="flex justify-between ">
                        <h3 className="font-bold text-center text-lg">{name}</h3>
                        <div className="flex justify-end py-2">
                            <form method="dialog">

                                <button className="btn btn-sm btn-circle bg-red-600 text-white btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                        </div>
                    </div>
                    <div >
                        <form >

                            <div className="form-control  ">
                                <label className="label">
                                    <span className="label-text">Product name</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input  input-bordered " />

                            </div>

                            <div className="form-control  ">
                                <label className="label">
                                    <span className="label-text">seller</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input  input-bordered " defaultValue={seller} />

                            </div>

                            <div className="form-control  ">
                                <label className="label">
                                    <span className="label-text">Product name</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input  input-bordered " defaultValue={quantity} />

                            </div>

                            <div className="flex justify-end text-center">
                                <input className="btn py-2  btn-success my-2" type="submit" value="Submit" />
                            </div>
                        </form>

                    </div>
                </div>
            </dialog> */}


            <ModalUpdate updateId={updateId} setUpdateId={setUpdateId}></ModalUpdate>

            {/* <ModalUpdate updateToy={updateToy} setUpdateToy={setUpdateToy}></ModalUpdate> */}
        </tr>
    );
};

export default Mytoystable;