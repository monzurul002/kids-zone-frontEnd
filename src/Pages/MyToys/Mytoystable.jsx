import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const Mytoystable = ({ mytoy, myToys, setMyToys }) => {
    const { _id, seller, catagory, name, price, quantity, email } = mytoy;
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

    return (
        <tr>
            <td>{name}</td>
            <td>{seller}</td>
            <td>{catagory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{email}</td>
            <td className="text-green-500 font-bold"><button>Update</button></td>
            <td onClick={() => handleDeleteItem(_id)} className="text-white"><button><MdDelete className="text-red-500 text-3xl pt-1"></MdDelete></button></td>
        </tr>
    );
};

export default Mytoystable;