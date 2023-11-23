
const ToysTable = ({ toy }) => {
    const { Seller, ToyName, SubCategory, Price, AvailableQuantity } = toy;
    return (
        <tr>
            <th></th>
            <td>{Seller}</td>
            <td>{ToyName}</td>
            <td>{SubCategory}</td>
            <td>{Price}</td>
            <td>{AvailableQuantity}</td>
            <td className="btn btn-success">View Details</td>
        </tr>
    );
};

export default ToysTable;