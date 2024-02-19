import "./css/Support.css";
import { useState, useEffect } from "react";
import { Link } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SupportPage = () => {
  const navigate=useNavigate();
  const [contect, setContect] = useState("");
  const [question, setQuestion] = useState("");

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

  const questionAwnser = async () => {
    try {
      const res = await axios.get(`${BaseUrl}superAdmin/getAllFaq`);
      setQuestion(res.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    contectDetail();
    questionAwnser();
  }, []);
  return (

    <div className="support-page">
      <div className="support-page-container">
        {/* <p>Support & Training</p> */}
      </div>
      <div className="support-page-container2">
        <div className="support-page-container21">
          {/* <div className="support-page-container211">
            <span>Training Session Link</span>
            <span>
              <img src="/SupportPage/zoom.png" alt="zoom" />
            </span>
          </div> */}
          <div className="support-page-container211">
            <span>OasisNotes Support</span>
            <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
            <div style={{padding: "10px", borderRadius:"18px",color:"white",cursor:"pointer", backgroundColor:"#1A9FB2", fontSize:"12px",width:"70%",textAlign:"center"}} onClick={()=>navigate("/demo-request")}>OasisNotes Support</div>
            </div>
           
          </div>
          <div
            className="support-page-container212"
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            {" "}
            {question?.faq?.map((item, i) => (
              <div key={i}>
                <p
                  style={{
                    color: "#1A9FB2",
                    marginTop: "1rem",
                    borderTop: "1px solid black",
                  }}
                >
                  {/* {question?.title} */}
                </p>

                <p style={{ color: "#AF110C" }}>{item?.question}</p>
                <p style={{ fontSize: "1rem" }}>{item?.answer}</p>
                {/* <hr style={{ width: "50%" }} /> */}
              </div>
            ))}
            {/* <div>
              <p style={{ color: "#1A9FB2" }}>{question?.description}</p>

              <button
                style={{
                  fontSize: "1rem",
                  backgroundColor: "#AF110C",
                  padding: "0.5rem 1.5rem",
                  color: "white",
                  border: "none",
                  borderRadius: "55px",
                }}
              >
                <a
                  href={question?.link}
                  style={{ color: "white", borderBottom: "none" }}
                >
                  Click Here
                </a>
              </button>
            </div> */}
          </div>
        </div>
        <div className="support-page-container22">
          <div>
            <p
              style={{
                color: "#1A9FB2",
                marginTop: "1rem",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              OasisNotes Support
            </p>
            <p style={{ marginBottom: "2rem" }}>
              <span style={{ color: "#1A9FB2", fontWeight: "bold" }}>
                Hours
              </span>
              <br />
              <span style={{ color: "black", fontWeight: "bold" }}>
                {contect?.hours}
              </span>
            </p>
            <p style={{ marginBottom: "2rem" }}>
              <span style={{ color: "#1A9FB2", fontWeight: "bold" }}>
                Technical Support:
              </span>
              <br />
              <span style={{ color: "#AF110C", fontWeight: "bold" }}>
                {contect?.technicalSupport}
              </span>
            </p>
            <p style={{ marginBottom: "2rem" }}>
              <span style={{ color: "#1A9FB2", fontWeight: "bold" }}>
                Schedule Training:
              </span>
              <br />
              <span style={{ color: "#AF110C", fontWeight: "bold" }}>
                {contect?.scheduleTraining}
              </span>
            </p>
            <p style={{ marginBottom: "2rem" }}>
              <span style={{ color: "#1A9FB2", fontWeight: "bold" }}>
                Questions, Suggestions, or Comments:
              </span>
              <br />
              <span style={{ color: "#AF110C", fontWeight: "bold" }}>
                {contect?.teamEmail}
              </span>
            </p>
            <p style={{ marginBottom: "2rem" }}>
              <span style={{ color: "black", fontSize: ".8rem" }}>
                For after hours, emergency support please call:
              </span>
              <br />
              <span style={{ color: "#AF110C", fontWeight: "bold" }}>
                {contect?.emergencyPhone}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
