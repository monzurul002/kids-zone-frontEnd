
import { Tab, TabList } from "react-tabs";
import TabsData from "../TabsData/TabsData";
import 'react-tabs/style/react-tabs.css';
const Category = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="drawer col-span-3 lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><a>Toys & Games</a></li>
                        <li><a>Sidebar Item 2</a></li>

                    </ul>


                </div>
            </div>
            <div className="col-span-9">
                <TabsData></TabsData>

            </div>
        </div>


    );
};

export default Category;
