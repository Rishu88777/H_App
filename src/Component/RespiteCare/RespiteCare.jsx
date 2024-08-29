import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./RespiteCare.scss";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const RespiteCare = () => {
  return (
    <>
    <div className="respite-care">
      <div className="respite-content">
        <h2>Respite Care</h2>
        <p>
          Respite care is a valuable service that provides temporary relief to primary caregivers and family members who are taking care of their loved ones. Caregiving can be physically and emotionally demanding, and respite care offers caregivers a chance to take a break, recharge, and attend to their own needs.
        </p>
        <p>
          During respite care, trained caregivers step in to care for the individual, ensuring that their needs are met while the primary caregiver takes some time off. This could be for a few hours, a day, or even for an extended period, allowing caregivers to rest, handle personal responsibilities, or simply take some time for themselves.
        </p>
        <p>
          Respite care is particularly helpful for caregivers of individuals with chronic illnesses, disabilities, or special needs. It provides peace of mind, knowing that their loved ones are in safe and capable hands while they are away.
        </p>
      </div>
      <div className="respite-image">
        <img src="https://companionsforseniors.com/wp-content/uploads/2019/03/2019-2-25-Seven-Reasons-Caregivers-and-Seniors-Can-Benefit-from-Respite-Care.jpg" alt="Respite Care" />
      </div>
    </div>
    <div className="swipperdiv">
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_800,h_417/https://papayacare.com/wp-content/uploads/2018/10/Senior-respite-care-Papayacare.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://www.siouxcenterhealth.org/wp-content/uploads/Respite-Care-New.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiii3tMyygjIE8DncgUZ9lt0JZXatcG8xOvzaEuIurY371hzO6fxdi_OER3g_LMgrZ2yg&usqp=CAU" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm2u0M5k02ODSG7N78fXjxw_jz7I9pOIcJ7A&usqp=CAU" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXy7nK3MBJR0-BdHLO9XN38qjAbwoqVklnZLvyMjhxmYEzC8wg7ROaqimdy8nHn0UCnns&usqp=CAU" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjM32-leo0BebEB09tj8vEQmwWqBirzmfQEMkj7aFFJzuwxp2pQw5mZGL9OdTwtKrWm_k&usqp=CAU" alt="" />
        </SwiperSlide>
       
      </Swiper>
      </div>
    </>
  );
};

export default RespiteCare;
