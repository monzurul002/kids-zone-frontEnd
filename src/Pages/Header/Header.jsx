import bg from "../../assets/bg.jpg"
import { AiOutlineShopping } from "react-icons/ai";
import { FaBaseballBall } from "react-icons/fa";
import Rotate from 'react-reveal/Rotate';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slide1 from "../../assets/slides/slide1.png"
import slide2 from "../../assets/slides/slide2.png"
import slide3 from "../../assets/slides/slide3.png"
import slide4 from "../../assets/slides/slide4.png"
import slide5 from "../../assets/slides/slide5.png"


const Header = () => {


    const commonBackgroundStyle = {
        backgroundImage: `url(${bg})`,
        // Add any other common styling properties here
    };

    return (

        <div className="">
            <div style={commonBackgroundStyle} className="grid  grid-cols-1 md:grid-cols-2">
                <Rotate top left>
                    <div className="px-10" >
                        <div className="divider divider-end"></div>
                        <h2 className="text-white font-bold text-7xl">
                            Great Product <br />
                            <span className="text-green-500 text-5xl md:text-7xl font-bold">Presentations</span></h2>
                        <p className="py-2 text-xl text-slate-300">How old is the first toy?
                            4,000 years old
                            The origin of the word toy is unknown, but it is believed that it was first used in the 14th century. Toys are mainly made for children. The oldest known doll toy is thought to be 4,000 years old.</p>

                        <div className="flex w-full text-white gap-3 py-5">
                            <AiOutlineShopping className="text-8xl w-50 me-3 text-white" />
                            <div>
                                <h2 className="text-2xl font-bold ">SINGLE PRODUCT SHOWCASES
                                </h2>   <p> The earliest toys were made from rocks, sticks or clay. In Ancient Egypt, children played with dolls made of clay and sticks.</p>
                            </div>

                        </div>

                        <div className="flex w-full text-white gap-3 py-5">
                            <FaBaseballBall
                                className="text-8xl w-50 me-3 text-white" />
                            <div>
                                <h2 className="text-2xl font-bold uppercase "> Enjoyable and easy-to-play
                                </h2>   <p> A happy coincidence also to gather or collect in Latin has been named the greatest toy of all time by industry professionals.</p>
                            </div>

                        </div>
                    </div>
                </Rotate>
                <div>
                    <Rotate top right>
                        <div className="divider divider-start"></div>
                    </Rotate>
                    <div className="flex px-5 py-14 items-center justify-center ">


                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            centeredSlides={true}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}

                            navigation={true}
                            modules={[Pagination, Navigation, Autoplay]}
                            className="mySwiper"
                        >
                            <div className="p-10">

                                <SwiperSlide ><img className="p-10" src={slide1} alt="" /></SwiperSlide>
                                <SwiperSlide className="px-10"><img className="px-10" src={slide2} alt="" /></SwiperSlide>
                                <SwiperSlide className="px-10"><img className="px-10" src={slide3} alt="" /></SwiperSlide>
                                <SwiperSlide className="px-10"><img className="px-10" src={slide4} alt="" /></SwiperSlide>
                                <SwiperSlide className="px-10"><img className="px-10" src={slide5} alt="" /></SwiperSlide>
                            </div>

                        </Swiper>


                    </div>
                </div>


            </div>
        </div>
    );
};

export default Header;