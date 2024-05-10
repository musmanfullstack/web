"use client";
import React from "react";
import Slider from "react-slick";
import { CategoryType } from "@/types";
interface Props {
  categoryData: CategoryType[];
}
const CategorySlider = ({categoryData} : Props) => {
  return (
    <Slider
      className="row popular_service_slider wow fadeInUp"
      slidesToShow={4} // Set the number of slides to show
      infinite={true}
      dots={true}
      autoplay={true}
      arrows={false}
      responsive={[
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ]}
    >
      {categoryData.map((item) => (
        <div className="col-xl-3" key={item._id}>
          <div className={`tf__popular_service_single ${item.color}`}>
            <span>
              <i className={item.icon}></i>
            </span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <a href="#">
              <i className="fas fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CategorySlider;
