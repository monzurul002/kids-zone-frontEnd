import { useLoaderData } from "react-router-dom";

const MyToys = () => {

    const mytoys = useLoaderData()
    return (
        <div>
            <h2>{mytoys.length}</h2>
        </div>
    );
};

export default MyToys;