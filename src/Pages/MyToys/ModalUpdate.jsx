import React, { useEffect, useState } from 'react';

// const ModalUpdate = ({ updateToy, setUpdateToy }) => {
const ModalUpdate = ({ updateId, setUpdateId }) => {
    console.log(updateId);
    // const { _id, seller, catagory, name, price, quantity, description, email } = updateToy;
    const [updateToy, setUpdateToy] = useState({})
    const { _id, seller, catagory, name, price, quantity, description, email } = updateToy;
    useEffect(() => {
        fetch(`http://localhost:5000/updatetoy/${updateId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUpdateToy(data)
            })
    }, [updateId])

    return (

        <div>
            <dialog id="my_modal_5" className="modal w-full  modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="flex justify-between ">
                        <h3 className="font-bold text-center text-lg">{name}</h3>
                        <div className="flex justify-end py-2">
                            <form method="dialog">
                                <button onClick={setUpdateId(" ")} className="btn btn-sm btn-circle bg-red-600 text-white btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                        </div>
                    </div>
                    <div >
                        <form >
                            <div className="form-control  ">
                                <label className="label">
                                    <span className="label-text">Product name</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input  input-bordered " defaultValue={name} />

                            </div>

                            <div className="form-control  ">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input  input-bordered " id='quantity' defaultValue={quantity} />

                            </div>

                            <div className="form-control  ">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" id='description' placeholder="Type here" className="input  input-bordered " defaultValue={description} />

                            </div>

                            <div className="flex justify-end text-center">
                                <input className="btn py-2  btn-success my-2" type="submit" value="Submit" />
                            </div>
                        </form>

                    </div>
                </div>
            </dialog>

        </div>

    );
};

export default ModalUpdate;