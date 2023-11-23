// Lodder.jsx
import React from "react";
import FadeLoader from "react-spinners/FadeLoader";

const Lodder = () => {
    return (
        <div className="flex justify-center items-center w-full h-full bg-slate-900">
            <FadeLoader className="p-64" color="#36d7b7" />
        </div>
    );
};

export default Lodder;
