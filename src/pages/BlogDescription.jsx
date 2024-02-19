import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./css/BlogPage.css";
import { Form } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "axios";
const BlogDescription = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [page, setPage] = React.useState(1);
  const [blog, setBlog] = useState([]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const BaseUrl = "https://issa-backend.vercel.app/api/v1/";

  const getCategoryData = async () => {
    try {
      const res = await axios.get(`${BaseUrl}Blog/getBlog`);
      setBlog(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategoryData();
  }, []);

  return (
    <div className="support-page">
      <div className="support-page-container">
        <p style={{ fontSize: "2.8rem", fontWeight: "900" }}>Our All Blog</p>
      </div>
      <div className="blog-page-container-rk">
        <div className="blog-page-container1">
          <div className="blog-page-container112">
            {blog?.map((item, i) => (
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
                <p>{item?.description}.</p>
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

export default BlogDescription;
