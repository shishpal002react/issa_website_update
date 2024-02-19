import { useState, useEffect } from "react";
import "./css/DownloadPage.css";
import axios from "axios";
const DownloadPage = () => {
  const [contect, setContect] = useState("");
  const [data,setDate]=useState("")

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

  const Download_logo = async () => {
    try {
      const response = await axios.get(
        `${BaseUrl}DownloadPage/getDownloadPage`
      );
      setDate(response?.data?.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    contectDetail();
    Download_logo();
  }, []);
  return (
    <div className="support-page">
      <div className="support-page-container">
        <p>Downloads</p>
      </div>
      <div className="support-page-container2">
        <div className="download-page-container21">
          <div style={{ border: "1px solid black" }}>
            <div
              style={{
                backgroundColor: "#1A9FB2",
                color: "white",
                display: "flex",
                justifyContent: "space-between",
                padding: "1rem",
                fontWeight: "600",
              }}
            >
              <p style={{ textAlign: "center" }}>OasisNotes CRM / EHR</p>
              <p style={{ textAlign: "center" }}>Download</p>
            </div>
            <div
              style={{
                color: "black",
                display: "flex",
                justifyContent: "space-between",
                padding: "1rem",
                fontWeight: "600",
                alignItems: "center",
              }}
            >
              <p style={{ textAlign: "center" }}>OasisNotes EHR Client</p>
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <a href={data?.window}>
                <img
                  style={{
                    maxWidth: "100px",
                    width: "auto",
                    maxHeight: "80px",
                    height: "auto",
                  }}
                  src="/Downloadpage/windows.png"
                  alt="windows"
                />
                </a>
                <a href={data?.mac}>
                <img
                  style={{
                    maxWidth: "100px",
                    width: "auto",
                    maxHeight: "80px",
                    height: "auto",
                  }}
                  src="/Downloadpage/macos.png"
                  alt="windows"
                />
                </a>
              </p>
            </div>
            <div
              style={{
                color: "black",
                display: "flex",
                justifyContent: "space-between",
                padding: "1rem",
                fontWeight: "600",
                alignItems: "center",
                borderTop: "1px solid black",
              }}
            >
              <p style={{ textAlign: "center" }}>OasisNotes Mobile</p>
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "1.8rem",
                  flexWrap: "wrap",
                }}
              >
                 <a href={data?.android}>
                <img
                  style={{
                    maxWidth: "100px",
                    width: "auto",
                    maxHeight: "80px",
                    height: "auto",
                  }}
                  src="/Downloadpage/android.png"
                  alt="windows"
                />
                </a>
                 <a href={data?.ios}>
                <img
                  style={{
                    maxWidth: "100px",
                    width: "auto",
                    maxHeight: "80px",
                    height: "auto",
                  }}
                  src="/Downloadpage/ios.png"
                  alt="windows"
                />
                </a>
              </p>
            </div>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <div style={{ fontWeight: "400", padding: "1rem" }}>
              <p
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  color: "#1A9FB2",
                  marginBottom: "1rem",
                }}
              >
                Supported Specifications:
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Hardware:</span> Windows or
                Mac computer with a 64-bit processor <br /> <br />{" "}
                <span style={{ fontWeight: "bold" }}>Operating System:</span>{" "}
                64-bit Windows (Windows 10, Windows 11), macOS Big Sur 11.7.5 or
                newer <br /> <span style={{ fontWeight: "bold" }}>Memory:</span>{" "}
                Minimum 2 GB RAM <br />
                <span style={{ fontWeight: "bold" }}>Network:</span> Broadband
                Internet connection <br />
                <span style={{ fontWeight: "bold" }}>Storage:</span> 500 MB
                available space <br /> 
              
                .
              </p>
              {/* <p
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  color: "#1A9FB2",
                  marginBottom: "1rem",
                }}
              >
                Mobile Capabilities:
              </p> */}
              {/* <p style={{ fontWeight: "bold" }}>
                <li>View & Create Contacts </li>{" "}
                <li>View & Create Q-log messages</li>
                <li> View & Create Tasks/Reminders </li>
                <li>View & Create Templates and Simple Notes</li>
                <li> View & Upload Documentation</li>
                <br />
                <p style={{ fontWeight: "bold", fontSize: "1rem" }}>
                  View only:
                </p>
                <li>For Review Tab</li>
                <li>General Log</li>
                <li>Admission Applications</li>
                <li>Medical/Clinical Documentation</li>
                <br />
              </p> */}
            </div>
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

export default DownloadPage;
