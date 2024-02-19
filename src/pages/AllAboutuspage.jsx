import "./css/SingleBlogPage.css";
import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

const AllAboutuspage = () => {
  const [data, setData] = useState("");

  const BaseUrl = "https://issa-backend.vercel.app/api/v1/";

  const aboutUs = async () => {
    try {
      const res = await axios.get(`${BaseUrl}AboutUs/getAboutUs`);
      setData(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    aboutUs();
  }, []);
  return (
    <div>
      <div className="Single-blog-page-container">
        <div className="Single-blog-page-container-rk">
          <p
            style={{
              fontSize: "2.8rem",
              fontWeight: "900",
              textAlign: "center",
            }}
          >
            Our About Page
          </p>
          <img src={data?.image} alt="Blog" />
          <p
            style={{
              fontWeight: "bold",
              color: "black",
              fontSize: "1.5rem",
              marginTop: "1rem",
            }}
          >
            {data?.title}
          </p>
          <p style={{ fontSize: "1rem", lineHeight: "1rem", color: "#545454" }}>
            {data?.description}
          </p>
          {data?.info?.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{
                  maxWidth: "40px",
                  maxHeight: "40px",
                  width: "auto",
                  marginRight: "10px",
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
              <p style={{ fontWeight: "bold", color: "black" }}>{item?.name}</p>
            </div>
          ))}
          <div style={{ marginTop: "20px" }}>
            {data?.cate?.map((item, i) => (
              <div key={i}>
                <img src={item?.image} alt="" />
                <p>{item?.name}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AllAboutuspage;
