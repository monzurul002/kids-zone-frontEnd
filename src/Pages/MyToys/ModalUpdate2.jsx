
import React from 'react';

const ModalUpdate2 = ({ updateToy }) => {
    const { _id, seller, catagory, name, price, quantity, description, email } = updateToy;
    return (

        <dialog id="my_modal_5" className="modal w-full  modal-bottom sm:modal-middle">
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
                            <input type="text" placeholder="Type here" className="input  input-bordered " defaultValue={name} />

                        </div>

                        <div className="form-control  ">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input  input-bordered " defaultValue={quantity} />

                        </div>

                        <div className="form-control  ">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input  input-bordered " defaultValue={description} />

                        </div>

                        <div className="flex justify-end text-center">
                            <input className="btn py-2  btn-success my-2" type="submit" value="Submit" />
                        </div>
                    </form>

                </div>
            </div>
        </dialog>

    );
};

export default ModalUpdate2;