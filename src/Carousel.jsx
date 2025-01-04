import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ToolsCarousel = () => {
  const settings = {
    dots: true, // Adds navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Show previous/next arrows
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const toolsDetails = [
    {
      title: "Image Recognition",
      description: [
        "Analyzes high-resolution images of handicrafts to verify authenticity.",
        "Detects subtle differences in materials, patterns, and designs that are invisible to the human eye.",
      ],
    },
    {
      title: "Pattern Analysis",
      description: [
        "Uses machine learning to identify unique artistic styles and techniques.",
        "Compares uploaded images with a database of genuine and counterfeit examples.",
      ],
    },
  ];

  return (
    <div style={carouselContainerStyle}>
      <Slider {...settings}>
        {toolsDetails.map((tool, index) => (
          <div key={index} style={cardStyle}>
            <h3 style={{ marginBottom: "1rem" }}>{tool.title}</h3>
            {tool.description.map((line, i) => (
              <p key={i} style={{ marginBottom: "0.5rem" }}>
                {line}
              </p>
            ))}
          </div>
        ))}
      </Slider>
    </div>
  );
};

const carouselContainerStyle = {
  padding: "2rem",
  maxWidth: "600px",
  margin: "0 auto",
  textAlign: "center",
};

const cardStyle = {
  padding: "1.5rem",
  backgroundColor: "#fff",
  border: "1px solid #e0e0e0",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  textAlign: "left",
  lineHeight: "1.6",
};

export default ToolsCarousel;
