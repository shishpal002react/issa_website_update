import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/BlogPage.css";
import { Form } from "react-bootstrap";
import axios from "axios";

const NewsAllPages = () => {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);
  const [news, setNews] = useState([]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const BaseUrl = "https://issa-backend.vercel.app/api/v1/";

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
    getNewsData();
  }, []);

  return (
    <div className="support-page">
      <div className="support-page-container">
        <p style={{ fontSize: "2.8rem", fontWeight: "900" }}>Our News Page</p>
      </div>
      <div className="blog-page-container-rk">
        <div className="blog-page-container1">
          <div className="blog-page-container112">
            {news?.map((item, i) => (
              <div className="blog-page-container11" key={i}>
                <img src={item?.image} alt="Blog" />
                <p
                  style={{
                    fontWeight: "900",
                    fontSize: "1.5rem",
                    color: "#254C69",
                  }}
                >
                  {item?.title}
                </p>

                <p
                  style={{
                    fontSize: ".8rem",
                    lineHeight: "1rem",
                    color: "#545454",
                  }}
                >
                  {new Date(item?.createdAt).toLocaleDateString()} |{" "}
                  <span style={{ color: "#1A9FB2" }}>0 Comments</span>
                </p>
                <p>{item?.description}</p>
                {/* <p
                  onClick={() =>
                    navigate(`/resources/blog/description/${item?._id}`)
                  }
                  style={{
                    color: "#1A9FB2",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Read More
                </p> */}
              </div>
            ))}

            <div style={{ display: "flex", justifyContent: "center" }}>
              {/* <Stack spacing={2}>
               
                <Pagination count={10} page={page} onChange={handleChange} />
              </Stack> */}
            </div>
          </div>
          <div>
            <p>
              To get our monthly newsletter,share your email address Thanks, and
              welcome!
            </p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Email <span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <p>
              <span style={{ color: "red", marginTop: "1rem" }}>*</span> =
              required field
            </p>
            <button
              type="submit"
              style={{
                backgroundColor: "#B8BCC2",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                padding: "0.5rem 1.5rem",
              }}
              className="blog-page-button"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAllPages;
