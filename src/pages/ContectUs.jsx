import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./css/ContactUs.css";
import axios from "axios";

const ContactUs = () => {
  const navigate = useNavigate();
  const [contect, setContect] = useState("");

  const BaseUrl = "https://issa-backend.vercel.app/api/v1/";

  const contectDetail = async () => {
    try {
      const res = await axios.get(
        `${BaseUrl}ContactDetails/viewContactDetails`
      );
      setContect(res.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    contectDetail();
  }, []);

  return (
    <div className="support-page">
      <div className="support-page-container">
        <p style={{ fontSize: "2.1rem" }}>
          <span style={{ fontWeight: "900", fontSize: "2.1rem" }}>Contact</span>{" "}
          Us
        </p>
      </div>
      <div className="contact-us-container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <img src={contect?.image} alt="klsn" />
        </div>
        <div>
          <p style={{ fontWeight: "900", fontSize: "1.5rem", color: "black" }}>
            Support
          </p>
          <div>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <img
                style={{ width: "45px", height: "45px" }}
                src="/ContactUs/call.png"
                alt=""
              />
              <div style={{ fontSize: ".9rem", lineHeight: "1rem" }}>
                <p style={{ fontWeight: "900", lineHeight: "1rem" }}>
                  Call Support 24 x 7
                </p>
                <p>{contect?.supportPhone}</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <img
                style={{ width: "45px", height: "45px" }}
                src="/ContactUs/message.png"
                alt=""
              />
              <div style={{ fontSize: ".9rem", lineHeight: "1rem" }}>
                <p style={{ fontWeight: "900", lineHeight: "1rem" }}>Email</p>
                <p>{contect?.supportEmail}</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <img
                style={{ width: "45px", height: "45px" }}
                src="/ContactUs/phone.png"
                alt=""
              />
              <div style={{ fontSize: ".9rem", lineHeight: "1rem" }}>
                <p style={{ fontWeight: "900", lineHeight: "1rem" }}>Text</p>
                <p>{contect?.supportText}</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <img
                style={{ width: "45px", height: "45px" }}
                src="/ContactUs/printer.png"
                alt=""
              />
              <div style={{ fontSize: ".9rem", lineHeight: "1rem" }}>
                <p style={{ fontWeight: "900", lineHeight: "1rem" }}>Fax</p>
                <p>{contect?.supportFax}</p>
              </div>
            </div>
            <div>
              <button
                style={{
                  padding: "0.5rem 1.5rem",
                  borderRadius: "8px",
                  backgroundColor: "#1C5877",
                  color: "white",
                  fontWeight: "500",
                  border: "none",
                  cursor:"pointer"
                }}
                onClick={()=>navigate("/resources")}
              >
                Access Other Support Resources
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us-container2">
        <p>Intuitive, Accessible, Time-Saving</p>
        <p>
          {" "}
          <span style={{ fontWeight: "normal" }}>The </span> only EMR software
          that actually thinks like a clinician.
        </p>
        <button
          style={{
            padding: "0.5rem 4.5rem",
            borderRadius: "8px",
            backgroundColor: "#1A9FB2",
            color: "white",
            fontWeight: "500",
            border: "none",
          }}
          onClick={() => navigate("/demo-request")}
        >
          Free Trial
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
