import axios from "axios";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const [contect, setContect] = useState("");
  const navigate = useNavigate();

  const BaseUrl = "https://issa-backend.vercel.app/api/v1/";

  const contectDetail = async () => {
    try {
      const res = await axios.get(
        `${BaseUrl}ContactDetails/viewContactDetails`
      );
      setContect(res.data?.data);
      console.log(res.data?.data, "contect data");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    contectDetail();
  }, []);
  return (
    <>
      <div className="main-container-footer">
        <div className="footer-child"
          // style={{
          //   display: "flex",
          //   flexDirection: "row",
          //   justifyContent: "space-evenly",
          //   width: "80%",
          //   margin: "auto",
          //   fontSize: ".8rem",
          //   flexWrap: "wrap",
            
          // }}
        >
       
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <img
              style={{ maxWidth: "25px", maxHeight: "25px" }}
              src="/HomePage/phone.png"
              alt="phone"
            />
            <p>{contect?.supportPhone}</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
            }}
          >
            <img
              style={{ maxWidth: "25px", maxHeight: "25px", flexWrap: "wrap" }}
              src="/HomePage/message.png"
              alt="phone"
            />
            <p>{contect?.supportEmail}</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
            }}
          >
            <a href={contect?.fb}>
              <img
                style={{ maxWidth: "25px", maxHeight: "25px" }}
                src="/HomePage/Vector.png"
                alt="facebook"
              />
            </a>
            <a href={contect?.instagram}>
              <img
                style={{ maxWidth: "25px", maxHeight: "25px" }}
                src="/HomePage/Vector-1.png"
                alt="facebook"
              />
            </a>
            {/* <a href={contect?.twitter}>
              <img
                style={{ maxWidth: "25px", maxHeight: "25px" }}
                src="/HomePage/Vector-2.png"
                alt="facebook"
              />
            </a> */}
          </div>
        </div>
        <div className="footer-bottom-container">
          <div
            style={{
              width: "100%",
              margin: "auto",
              fontWeight: "500",
              textAlign: "left",
            }}
          >
            <div>
              <img
                onClick={() => navigate("/")}
                src="/logo.png"
                alt="logo"
                style={{
                  // minHeight: "100px",
                  minWidth: "250px",
                  maxWidth: "145px",
                  width: "auto",
                  cursor: "pointer",
                  paddingBottom:"1.5rem",
                  
                }}
              />
            </div>
          </div>
          <div style={{ width: "100%", margin: "auto" }}>
            <div>
              {/* <p onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                Explore
              </p> */}
              <p onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                Home{" "}
              </p>
              <p
                onClick={() => navigate("/about/clinical-advisors")}
                style={{ cursor: "pointer" }}
              >
                About us
              </p>
              <p onClick={() => navigate("/resources")} style={{ cursor: "pointer" }}>
                Testimonials
              </p>
              <p onClick={() => navigate("/all_news_information")} style={{ cursor: "pointer" }}>
                News
              </p>
              <p onClick={() => navigate("/term-condition")} style={{ cursor: "pointer" }}>
              Privacy Policy
              </p>
              <p onClick={() => navigate("/Privacy-policy")} style={{ cursor: "pointer" }}>
              Terms and Conditions
              </p>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              margin: "auto",
            }}
          >
            <div>
              <p>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter email address"
                    style={{ width: "100%", borderRadius: "0px" }}
                  />
                </Form.Group>
              </p>
              <button
                style={{
                  padding: "0.5rem 1.5rem",
                  color: "#1A9FB2",
                  border: "none",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
