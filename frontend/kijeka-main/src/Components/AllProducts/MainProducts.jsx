import React, { useState } from 'react'
import DisplayedProduct from './DisplayedProduct'
import ProductCard from './ProductCard'
import data from './data.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'aos/dist/aos.css';
import "swiper/css/grid";
const MainProducts = () => {
    const [productShown, setProductShown] = useState(-1);

    const getCard = (data, index) => {
        return (<ProductCard key={data.id}
            index={index}
            title={data.title}
            description={data.description}
            img={data.img}
            rating={data.rating}
            stars={data.stars}
            setProductShown={setProductShown} />)
    }

    const returProductCards = (data) => {
        if (!data || data.length === 0) {
            return [];
        }
        let count1 = 0, count2 = Math.round(data.length / 2);
        const isLengthOdd = data.length % 2 !== 0;
        const productCardsJsx = [];

        while (count2 < data.length) {
            productCardsJsx.push(
                <SwiperSlide className='!w-[300px]' key={data[count1].id + data[count2].id}>
                    <div>
                        {getCard(data[count1], count1)}
                        {getCard(data[count2], count2)}
                    </div>
                </SwiperSlide>
            )
            count1++;
            count2++;
        }


        {
            isLengthOdd && productCardsJsx.push(
                <SwiperSlide key={data[count1].id}>
                    <div>
                        {getCard(data[count1], count1)}
                    </div>
                </SwiperSlide>
            )
        }

        return productCardsJsx;
    }

    return (
        <>
            <div className="box h-[5rem] w-[25rem] relative flex justify-start items-start ml-[2rem] group mt-6">
                <div className="h-14 w-1.5 bg-[#004B95] absolute mr-[1rem] origin-left group-hover:w-[18rem] duration-300 group"></div>
                <h4 className="text-[28px] absolute font-bold text-[#004B95] mt-[0.5rem] ml-[1rem] group-hover:text-white group-hover:translate-x-5 duration-300">Our Products</h4>
            </div>
            <div className='flex p-[10px] gap-[15px] max-w-full'>
                {/* main products display */}
                <DisplayedProduct productShown={productShown} data={data[productShown]} />

                <Swiper className=''
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    slidesPerView={3}
                >
                    {returProductCards(data)}
                </Swiper>
            </div>

        </>
    )
}

export default MainProducts