import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
const AddToy = () => {
    const { user } = useContext(AuthContext)


    return (
        <div>
            <h2 className="text-center text-2xl text-purple-700 font-bold py-2">Add Toy</h2>
            <form >
                <div className="grid grid-cols1 md:grid-cols-2 ">

                    <div className="w-10/12 border m-8 p-8 mx-auto">

                        <div className="form-control  ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Type here" className="input input-bordered  " />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" name="seller" placeholder="Type here" className="input input-bordered " defaultValue={user?.displayName} />
                        </div>
                        <div className="form-control  ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Type here" className="input input-bordered " defaultValue={user?.email} />
                        </div>
                        <div className="form-control  ">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered " />
                        </div>
                        <div className="form-control  ">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="text" name="quantity" placeholder="Type here" className="input input-bordered " />
                        </div>


                        <div className="form-control  ">
                            <label className="label">
                                <span className="label-text">Image Upload</span>
                            </label>
                            <input type="file" className="file-input  file-input-bordered file-input-success " />
                        </div>


                    </div>

                    <div className=" p-10">


                        <img className="w-1/2 rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5F1lbDQ4kXBC95EdP08zm2hOJkRLQJoceUFV4_dD3&s" alt="" />
                        <div className="form-control py-2  ">
                            <label className="label">
                                <span className="label-text">Sub Category</span>

                            </label>
                            <select className="select select-info w-full max-w-xs">
                                <option disabled selected>Select Toys</option>
                                <option>Colored PencilsKids</option>
                                <option>Drawing SuppliesArt </option>
                                <option>Painting</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Description</span>

                            </label>
                            <textarea name="description" className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                        </div>

                        <input className="btn btn-primary 	 my-3" type="submit" value="Submit" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddToy;