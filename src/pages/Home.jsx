import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { supabase } from "../../supabaseClients";

const Home = () => {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };

  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      const { data, error } = await supabase
        .from("banner") // 👈 your table name
        .select("*"); // fetch all rows

      if (error) {
        console.error("Error fetching banners:", error);
      } else {
        setBanners(data);
        console.log(data);
      }
    };

    fetchBanners();
  }, []);

  return (
    <div className="md:mx-12 my-9 mx-4">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div>
            <img
              key={banner.id}
              src={banner.file_name} // 👈 direct from table
              alt={banner.title}
              className="w-full md:h-[400px] md:object-cover rounded-lg shadow h-[250px] object-cover object-center"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
