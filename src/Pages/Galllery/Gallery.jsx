import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slide1 from "../../assets/gallery/1.jpg"
import slide2 from "../../assets/gallery/3.jpg"
import slide3 from "../../assets/slides/slide3.png"
import slide4 from "../../assets/gallery/2.jpg"
import slide5 from "../../assets/gallery/4.jpg"
import slide6 from "../../assets/slides/slide5.png"
import slide14 from "../../assets/gallery/5.jpg"
import slide7 from "../../assets/gallery/6.jpg"
import slide8 from "../../assets/slides/slide5.png"
import slide9 from "../../assets/gallery/7.jpg"
import slide10 from "../../assets/slides/slide5.png"
import slide11 from "../../assets/gallery/7.png"
import slide12 from "../../assets/gallery/9.jpg"
import slide13 from "../../assets/gallery/10.jpg"
import { Zoom } from 'react-reveal';
import bg from "../../assets/smile.svg"
const Gallery = () => {
    return (
        <div className='bg-base-200'>
            <div className='text-center relative mx-auto pt-8'>
                <div className='animate-bounce'>  <img className='mx-auto top-5 ' src={bg} alt="" /></div>
                <h2 className='text-5xl font-bold  '>We make your children happier <br />
                    with the best toys</h2>
            </div>
            <Zoom left>
                <div className="grid grid-cols-1 md:grid-cols-4   p-14">
                    <div className="card md:w-72 w-full bg-base-100 p-5  shadow-xl">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            loop={true}
                            centeredSlides={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}


                            modules={[Pagination, Navigation, Autoplay]}
                            className="mySwiper"
                        >
                            <div className="p-5 w-full">

                                <SwiperSlide className='px-5' ><img className="px-3 w-56 " src={slide1} alt="" />

                                </SwiperSlide>
                                <SwiperSlide className='px-5' ><img className="px-3 w-56 " src={slide2} alt="" /></SwiperSlide>
                                <SwiperSlide className='px-5' ><img className="px-3 w-56 " src={slide4} alt="" /></SwiperSlide>
                                <SwiperSlide className='px-5' ><img className="px-3 w-56 " src={slide5} alt="" /></SwiperSlide>
                                <SwiperSlide className='px-5' ><img className="px-3 w-56 " src={slide3} alt="" /></SwiperSlide>
                            </div>

                        </Swiper>
                        <div className='text-center'>
                            <h2 className='text-xl text-center text-slate-500 font-semibold'>Toys Gun</h2>
                            <p className='text-slate-500 ms-3'>All sorts of toys.</p>
                        </div>
                    </div>
                    <div className="card md:w-72 w-full bg-base-100 p-5  shadow-xl">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            loop={true}
                            centeredSlides={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}


                            modules={[Pagination, Navigation, Autoplay]}
                            className="mySwiper"
                        >
                            <div className="p-5 w-full">

                                <SwiperSlide className='px-5' ><img className="px-3 w-56 " src={slide6} alt="" />

                                </SwiperSlide>
                                <SwiperSlide className='px-5' ><img className="px-3 w-56 " src={slide7} alt="" /></SwiperSlide>
                                <SwiperSlide className='px-5' ><img className="px-3 w-56 " src={slide12} alt="" /></SwiperSlide>
                                <SwiperSlide className='px-5' ><img className="px-3 w-56 " src={slide6} alt="" /></SwiperSlide>
                                <SwiperSlide className='px-5' ><img className="px-3 w-56 " src={slide5} alt="" /></SwiperSlide>
                            </div>

                        </Swiper>
                        <div className='text-center'>
                            <h2 className='text-xl text-center text-slate-500 font-semibold'>Sttuf Animal Toy</h2>
                            <p className='text-slate-500 ms-3'>Whole sell house</p>
                        </div>
                    </div>
                    <div className="card md:w-72 w-full bg-base-100 p-5  shadow-xl">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            loop={true}
                            centeredSlides={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}


                            modules={[Pagination, Navigation, Autoplay]}
                            className="mySwiper"
                        >
                            <div className="p-5 w-full">

                                <SwiperSlide className='px-5' ><img className="px-3 w-56 " src={slide1} alt="" />

                                </SwiperSlide>
                                <SwiperSlide className='px-5' ><img className="px-3 w-56 " src={slide10} alt="" /></SwiperSlide>
                                <SwiperSlide className='px-5' ><img className="px-3 w-56 " src={slide11} alt="" /></SwiperSlide>
                                <SwiperSlide className='px-5' ><img className="px-3 w-56 " src={slide5} alt="" /></SwiperSlide>
                                <SwiperSlide className='px-5' ><img className="px-3 w-56 " src={slide9} alt="" /></SwiperSlide>
                            </div>

                        </Swiper>
                        <div className='text-center'>
                            <h2 className='text-xl text-center text-slate-500 font-semibold'>Squeze  Toy</h2>
                            <p className='text-slate-500 ms-3'>Children favarable</p>
                        </div>
                    </div>
                    <div className="card md:w-72 w-full bg-base-100 p-5  shadow-xl">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            loop={true}
                            centeredSlides={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}


                            modules={[Pagination, Navigation, Autoplay]}
                            className="mySwiper"
                        >
                            <div className="p-5 w-full">

                                <SwiperSlide className='px-5' ><img className="px-3 w-56 " src={slide1} alt="" />

                                </SwiperSlide>
                                <SwiperSlide className='px-5' ><img className="px-3 w-56 " src={slide9} alt="" /></SwiperSlide>
                                <SwiperSlide className='px-5' ><img className="px-3 w-56 " src={slide13} alt="" /></SwiperSlide>
                                <SwiperSlide className='px-5' ><img className="px-3 w-56 " src={slide10} alt="" /></SwiperSlide>
                                <SwiperSlide className='px-5' ><img className="px-3 w-56 " src={slide5} alt="" /></SwiperSlide>
                            </div>

                        </Swiper>
                        <div className=' text-center'>
                            <h2 className='text-xl text-center text-slate-500 font-semibold'>Baby Toys</h2>
                            <p className='text-slate-500 ms-3'>Sleeping elements.</p>
                        </div>
                    </div>




                </div>
            </Zoom>
        </div>
    );
};

export default Gallery;