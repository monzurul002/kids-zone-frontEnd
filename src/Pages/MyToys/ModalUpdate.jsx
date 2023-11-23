import React from "react";

const ModalUpdate = ({ modalDetails, setModalDetails }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = modalDetails._id;
    alert(id);
    setModalDetails(null);
  };

  return (
    <>
      {modalDetails && (
        <div>
          <dialog
            id="my_modal_5"
            className="modal w-full  modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <div className="flex justify-between ">
                <h3 className="font-bold text-center text-lg">
                  {modalDetails?.name}
                </h3>
                <div className="flex justify-end py-2">
                  <form method="dialog">
                    <button
                      onClick={() => setModalDetails(null)}
                      className="btn btn-sm btn-circle bg-red-600 text-white btn-ghost absolute right-2 top-2"
                    >
                      ✕
                    </button>
                  </form>
                </div>
              </div>
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered "
                      defaultValue={modalDetails?.name}
                    />
                  </div>

                  <div className="form-control  ">
                    <label className="label">
                      <span className="label-text">Quantity</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input  input-bordered "
                      id="quantity"
                      defaultValue={modalDetails?.quantity}
                    />
                  </div>

                  <div className="form-control  ">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <input
                      type="text"
                      id="description"
                      placeholder="Type here"
                      className="input  input-bordered "
                      defaultValue={modalDetails?.description}
                    />
                  </div>
                  <div className="flex justify-end text-center">
                    <button className="btn py-2 btn-success my-2" type="submit">
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      )}
    </>
  );
};

export default ModalUpdate;
