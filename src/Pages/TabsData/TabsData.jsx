
import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
const TabsData = () => {


    return (
        <div className="p-5">
            <Tabs forceRenderTabPanel defaultIndex={1}>
                <TabList className="bg-green-400">
                    <Tab >Arts & Crafts</Tab>
                    <Tab>KidsKids' Art Paints</Tab>
                </TabList>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <TabList className="bg-indigo-500 text-white">
                            <Tab>Kids' Artist Aprons
                            </Tab>
                            <Tab>Kids' Arts & Crafts</Tab>
                            <Tab>Arts & Crafts Supplies</Tab>
                            Kids' Art Paints
                        </TabList>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-5">
                                <div className="card  h-96 border-y-4 border-r-4 bg-base-100 shadow-xl">
                                    <figure className="px-5  mt-5 pt-10">
                                        <img src="https://m.media-amazon.com/images/I/81oMf6KrwvL._AC_UL320_.jpg" alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">Huffy Kids</h2>
                                        <div className="flex">
                                            <p>Price: 20$</p>
                                            <p>Rating:5</p>
                                        </div>
                                        <div className="card-actions">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  h-96 border-y-4 border-r-4 bg-base-100 shadow-xl">
                                    <figure className="px-10 mt-5 pt-10">
                                        <img src="https://m.media-amazon.com/images/G/01/US-hq/2023/img/Toys_Internet/XCM_CUTTLE_1647741_3462225_500x500_en_US._CB576702853_SR432,432_.jpg" alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">Shoes!</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        <div className="card-actions">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  h-96  border-y-4  border-r-4 bg-base-100 shadow-xl">
                                    <figure className="px-10 mt-5 pt-10">
                                        <img src="https://m.media-amazon.com/images/G/01/US-hq/2023/img/Toys_Internet/XCM_CUTTLE_1649972_3468294_750x925_2X_en_US._CB574826146_SR432,432_.jpg" alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">Shoes!</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        <div className="card-actions">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-5">
                                <div className="card  h-96 border-y-4 border-r-4 bg-base-100 shadow-xl">
                                    <figure className="px-5  mt-5 pt-10">
                                        <img src="https://m.media-amazon.com/images/I/61F3p01-OpL._AC_UL320_.jpg" alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">Shoes!</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        <div className="card-actions">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  h-96 border-y-4 border-r-4 bg-base-100 shadow-xl">
                                    <figure className="px-10 mt-5 pt-10">
                                        <img src="https://m.media-amazon.com/images/I/71zEzIr+f9L._AC_UL320_.jpg" alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">Shoes!</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        <div className="card-actions">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  h-96  border-y-4  border-r-4 bg-base-100 shadow-xl">
                                    <figure className="px-10 mt-5 pt-10">
                                        <img src="https://m.media-amazon.com/images/I/81Lg7Hp2Y0L.__AC_SX300_SY300_QL70_FMwebp_.jpg" alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">Shoes!</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        <div className="card-actions">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-5">
                                <div className="card  h-96 border-y-4 border-r-4 bg-base-100 shadow-xl">
                                    <figure className="px-5  mt-5 pt-10">
                                        <img src="https://m.media-amazon.com/images/I/81oMf6KrwvL._AC_UL320_.jpg" alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">Shoes!</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        <div className="card-actions">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  h-96 border-y-4 border-r-4 bg-base-100 shadow-xl">
                                    <figure className="px-10 mt-5 pt-10">
                                        <img src="https://m.media-amazon.com/images/I/81Lg7Hp2Y0L.__AC_SX300_SY300_QL70_FMwebp_.jpg" alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">Shoes!</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        <div className="card-actions">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  h-96  border-y-4  border-r-4 bg-base-100 shadow-xl">
                                    <figure className="px-10 mt-5 pt-10">
                                        <img src="https://m.media-amazon.com/images/I/41yu3JcI-iL._AC_SR320,320_.jpg" alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">Shoes!</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        <div className="card-actions">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>



                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <TabList className="bg-purple-700	 text-white">
                            <Tab> Colored PencilsKids </Tab>
                            <Tab> Drawing ChalksKids </Tab>
                            <Tab> Drawing  Supplies</Tab>
                            <Tab> Art Painting </Tab>

                        </TabList>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-5">
                                <div className="card  h-96 border-y-4 border-r-4 bg-base-100 shadow-xl">
                                    <figure className="px-5  mt-5 pt-10">
                                        <img src="https://m.media-amazon.com/images/I/71zEzIr+f9L._AC_UL320_.jpg" alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">Shoes!</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        <div className="card-actions">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  h-96 border-y-4 border-r-4 bg-base-100 shadow-xl">
                                    <figure className="px-5  mt-5 pt-10">
                                        <img src="https://m.media-amazon.com/images/I/51r5zcmeCgL._AC_SR320,320_.jpg" alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">Shoes!</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        <div className="card-actions">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  h-96 border-y-4 border-r-4 bg-base-100 shadow-xl">
                                    <figure className="px-5  mt-5 pt-10">
                                        <img src="https://m.media-amazon.com/images/I/718++SHoXqL._AC_UL320_.jpg" alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">Shoes!</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        <div className="card-actions">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <TabPanel>
                                <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-5">
                                    <div className="card  h-96 border-y-4 border-r-4 bg-base-100 shadow-xl">
                                        <figure className="px-5  mt-5 pt-10">
                                            <img src="https://m.media-amazon.com/images/I/61F3p01-OpL._AC_UL320_.jpg" alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title">Shoes!</h2>
                                            <p>If a dog chews shoes whose shoes does he choose?</p>
                                            <div className="card-actions">
                                                <button className="btn btn-primary">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card  h-96 border-y-4 border-r-4 bg-base-100 shadow-xl">
                                        <figure className="px-10 mt-5 pt-10">
                                            <img src="https://m.media-amazon.com/images/I/71zEzIr+f9L._AC_UL320_.jpg" alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title">Shoes!</h2>
                                            <p>If a dog chews shoes whose shoes does he choose?</p>
                                            <div className="card-actions">
                                                <button className="btn btn-primary">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card  h-96  border-y-4  border-r-4 bg-base-100 shadow-xl">
                                        <figure className="px-10 mt-5 pt-10">
                                            <img src="https://m.media-amazon.com/images/I/81Lg7Hp2Y0L.__AC_SX300_SY300_QL70_FMwebp_.jpg" alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title">Shoes!</h2>
                                            <p>If a dog chews shoes whose shoes does he choose?</p>
                                            <div className="card-actions">
                                                <button className="btn btn-primary">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>

                        </TabPanel>
                        <TabPanel>
                            <div className="card  h-96 border-y-4 border-r-4 bg-base-100 shadow-xl">
                                <figure className="px-5  mt-5 pt-10">
                                    <img src="https://m.media-amazon.com/images/I/81uMtS8WQFS._AC_UL320_.jpg" alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="card  h-96 border-y-4 border-r-4 bg-base-100 shadow-xl">
                                <figure className="px-5  mt-5 pt-10">
                                    <img src="https://m.media-amazon.com/images/I/81mxzNPIvVL._AC_UL320_.jpg" alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="card  h-96 border-y-4 border-r-4 bg-base-100 shadow-xl">
                                <figure className="px-5  mt-5 pt-10">
                                    <img src="https://m.media-amazon.com/images/I/71i8sytFg7L._AC_UL320_.jpg" alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabsData;