import { useEffect, useState } from "react";
import "./css/HomePage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  const [topBanner, setTopBanner] = useState("");
  const [bottomBanner, setBottomBanner] = useState("");
  const [about, setAbout] = useState("");
  const [choosePharma, setChoosePharma] = useState("");
  const [trustedImage, setTrustedImage] = useState([]);
  const [featureDataImage, setFeatureDataImage] = useState([]);
  const [news, setNews] = useState([]);

  const BaseUrl = "https://issa-backend.vercel.app/api/v1/";

  const getTopBanner = async () => {
    try {
      const res = await axios.get(`${BaseUrl}Banner/getTopBanner`);
      setTopBanner(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const ButtomTopBanner = async () => {
    try {
      const res = await axios.get(`${BaseUrl}Banner/getBottomBanner`);
      setBottomBanner(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const aboutUs = async () => {
    try {
      const res = await axios.get(`${BaseUrl}AboutUs/getAboutUs`);
      setAbout(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const choosePharmaData = async () => {
    try {
      const res = await axios.get(`${BaseUrl}WhyChoosePharm/getWhyChoosePharm`);
      setChoosePharma(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const trustedImageData = async () => {
    try {
      const res = await axios.get(`${BaseUrl}TrustedClient/getTrustedClient`);
      setTrustedImage(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const FeatureData = async () => {
    try {
      const res = await axios.get(`${BaseUrl}OurFeatures/getOurFeatures`);
      setFeatureDataImage(res?.data?.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getNewsData = async () => {
    try {
      const res = await axios.get(`${BaseUrl}News/getNews`);
      setNews(res?.data?.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTopBanner();
    ButtomTopBanner();
    aboutUs();
    choosePharmaData();
    trustedImageData();
    FeatureData();
    getNewsData();
  }, []);

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${topBanner?.image})` }}
        className="top-section-homePage"
      >
        <div className="text-container">
          <p style={{ fontSize: "1.2rem", fontWeight: "100" }}>
            {topBanner?.heading}
          </p>
          <p style={{ fontSize: "2.3rem", fontWeight: "600" }}>
            {topBanner?.title}
            {/* Makes Your Health <br /> Better Will Makes Us <br /> Better */}
          </p>
          <p style={{ fontSize: ".9rem", fontWeight: "100" }}>
            {topBanner?.description}
            {/* Our team of highly trained professionals uses the latest healing
            technologies to restore you to pain-free health quickly and easily. */}
          </p>
          {/* <button
            style={{
              padding: "0.5rem 1.5rem",
              backgroundColor: "#024064",
              color: "white",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Get Started
          </button> */}
        </div>
      </div>
      <p
        style={{
          textAlign: "center",
          fontWeight: "100",
          fontSize: "1.2rem",
          marginBottom: "1rem",
          width: "80%",
          margin: "auto",
          marginTop: "4.2rem",
        }}
      >
        Behavioral Health Software{" "}
        <span style={{ fontWeight: "bold", color: "#020000" }}>
          Trusted by Clinicians Nationwide
        </span>
      </p>
      {/* <div
        style={{
          width: "80%",
          margin: "auto",
          marginTop: "1rem",
          marginBottom: "3rem",

          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          rowGap: "1rem",
          columnGap: ".3rem",
        }}
      >
        {trustedImage?.map((item, i) => (
          <div key={i}>
            <img
              style={{ width: "250px", height: "180px" }}
              src={item?.image}
              alt="image2"
            />
          </div>
        ))}
      </div> */}

      <div className="features-container-homepage1">
        <div>
          <p
            style={{
              fontSize: "1.5rem",
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: "2rem",
              marginTop: "1rem",
            }}
          >
            Our Features
          </p>
          <div className="features-container-homepage">
            {featureDataImage?.map((item, i) => (
              <div
                style={{ display: "flex", gap: "1rem", margin: ".2rem" }}
                key={i}
              >
                <img
                  style={{ maxWidth: "45px", maxHeight: "45px" }}
                  src={item?.image}
                  alt="built"
                />
                <div>
                  <p
                    style={{
                      color: "#1C5877",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      lineHeight: "1rem",
                    }}
                  >
                    {item?.title}
                  </p>
                  <p style={{ color: "#3D3D3D" }}>{item?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ width: "80%", margin: "auto" }}>
       
        {/* <div
          className="top-section-homePage1"
          style={{ backgroundImage: `url(${about?.image})` }}
        >
          <div className="text-container1">
            <p style={{ fontSize: ".8rem", fontWeight: "400" }}>About Us</p>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              
              {about?.tittle}
            </p>
            <p style={{ fontSize: ".9rem", fontWeight: "100" }}>
              {about?.description}
              
            </p>
            <div
              className="new-homepage-class"
              style={{
                borderRadius: "10px",
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                fontSize: ".8rem",
              }}
            >
              {about?.info?.slice(0, 4)?.map((item) => (
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      textAlign: "left",
                      gap: "1rem",
                    }}
                  >
                    <img
                      style={{
                        maxWidth: "40px",
                        maxHeight: "40px",
                        width: "auto",
                        height: "auto",
                        marginBottom: "1rem",
                        borderRadius: "50%",
                        border: "1px solid #1A9FB2",
                        padding: "5px",
                        alignItems: "center",
                      }}
                      src={item?.image}
                      alt="images"
                    />
                    <p style={{ fontWeight: "bold", color: "black" }}>
                      {item?.name}
                    </p>
                  </div>
                </>
              ))}
            </div>
            <button
              style={{
                padding: "0.5rem 1.5rem",
                backgroundColor: "#024064",
                color: "white",
                border: "none",
              
                
              }}
              
            >
              More About Us
            </button>
          </div>
        </div> */}
        <div className="container6-homePage">
          {about?.cate?.map((item, i) => (
            <div key={i}>
              <img src={item?.image} alt="" />
              <p>{item?.name}</p>
            </div>
          ))}
        </div>
      </div>


      {/* Speecial Care */}
      <div className="container7-homePage">
        <div>
          <p style={{ fontSize: "1rem" }}> {bottomBanner?.heading}</p>
          <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            {bottomBanner?.title}
          </p>
          <p style={{ fontSize: ".7rem" }}>{bottomBanner?.description}</p>
          {bottomBanner?.descriptionArray?.map((item) => (
            <>
              <p>
                {" "}
                <img
                  style={{ width: "20px" }}
                  src="/HomePage/verify.png"
                  alt=""
                />{" "}
                {item?.description}
              </p>
            </>
          ))}

          {/* <button
            style={{
              padding: "0.5rem 1.5rem",
              backgroundColor: "#1A9FB2",
              color: "white",
              border: "none",
            }}
          >
            Discover Now
          </button> */}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <img
            src={bottomBanner?.image}
            alt="doctor"
            style={{ width: "48%" }}
          />{" "}
          <img
            src={bottomBanner?.image}
            alt="doctor"
            style={{ width: "48%" }}
          />{" "}
        </div>
      </div>
      {/*  */}
      <div className="container8-homePage">
        <p style={{ color: "black", fontSize: ".9rem" }}>
          {choosePharma?.title}
        </p>
        <p style={{ fontWeight: "400", width: "70%", color: "black" }}>
          {choosePharma?.description}
        </p>
        <div
          style={{
            color: "#1A9FB2",
            fontWeight: "bold",
            lineHeight: ".5rem",
            paddingBottom: "2rem",
          }}
          className="content-wrapper"
        >
          {choosePharma?.dataArray?.map((item, i) => (
            <div className="item" key={i}>
              <img
                src="/HomePage/right.png"
                alt="right"
                style={{ width: "20px", height: "20px" }}
              />
              <p
                style={{
                  fontWeight: "bold",
                  paddingTop: ".7rem",
                }}
              >
                {item?.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          width: "65%",
          margin: "auto",
          marginTop: "3rem",
          marginBottom: "4rem",
        }}
      >
        <div>
          <p style={{ fontWeight: "500" }}>News Update</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
              Latest Healthcare Articles
            </p>
            <p
              style={{
                color: "#1A9FB2",
                padding: ".5rem 1rem",
                border: "1px dotted #1A9FB2",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={() => navigate("/all_news_information")}
            >
              Read All News
            </p>
          </div>
        </div>
        <div className="content-homepage123">
          {news?.slice(0, 4)?.map((item, i) => (
            <div className="content-homepage12334" key={i}>
              <div>
                <img
                  style={{ maxWidth: "130px", width: "auto" }}
                  src={item?.image}
                  alt="image"
                />
              </div>
              <div >
                <p>{item?.title}</p>
                <p style={{ fontWeight: "bold" }}>{item?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
