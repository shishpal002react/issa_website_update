import { useEffect, useState } from "react";
import "./css/DownloadPage.css";
import { Form } from "react-bootstrap";
import moment from "moment-timezone";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { show_notification } from '../Api_collection/Api';

const DemoPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [hearAboutUs, setHearAboutUs] = useState("");
  const [describe, setDescribe] = useState("");
  const [timeZones, setTimeZones] = useState([]);
  const [contect, setContect] = useState([]);

  // Error
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError,setLastNameError]=useState("");
  const [compantNameError,setCompanyNameError]=useState("");
  const [emailError,setEmailError]=useState("");
  const [phoneNumberError,setPhoneNumberError]=useState("");
  const [hearAboutUsError,setHearAboutUsError]=useState("");
 

  const BaseUrl = "https://issa-backend.vercel.app/api/v1/";

  const data = {
    companyName,
    firstName,
    lastName,
    timeZone,
    email,
    phoneNumber,
    hearAboutUs,
    describe,
  };

  const handleData = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const validateForm = () => {
      // Validate Company Name
      if (companyName.trim() === "") {
        setCompanyNameError("Company Name is required");
        return false;
      }
      if (firstName.trim() === "") {
        setFirstNameError("First name is required");
        return false;
      }
      if (lastNameError.trim() === "") {
        setLastNameError("Last is required");
        return false;
      }
      if (email.trim() === "") {
        setEmailError("Email is required");
        return false;
      }
      if (phoneNumber.trim() === "") {
        setPhoneNumberError("Phone number is required");
        return false;
      }
      if (hearAboutUs.trim() === "") {
        setHearAboutUsError("This is a required");
        return false;
      }
      
  
      setCompanyNameError('');
      setFirstNameError("");
      setLastNameError("");
      setEmailError("");
      setPhoneNumberError("");
      setHearAboutUsError("");
  
      return true;
    };

    try {
      const response = await axios.post(
        `${BaseUrl}DemoRequest/createDemoRequest`,
        data
      );
      show_notification("Form Submit Successfully!", response?.data?.message, "success");
      navigate("/");
    } catch (error) {
      show_notification("Something is Wrong!", error?.response?.data?.message, "danger");
    }
  };



  const contectData = async () => {
    try {
      const response = await axios.get(
        `${BaseUrl}ContactDetails/viewContactDetails`
      );
      setContect(response?.data?.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchTimeZones();
    contectData();
  }, []);

  const navigate = useNavigate();
  const fetchTimeZones = () => {
    const zones = moment.tz.names();
    setTimeZones(zones);
  };

  const timeHandler = (e) => {
    const selectedTimezone = e.target.value;
    setTimeZone(moment().tz(selectedTimezone).format("h:mm A"));
  };

  return (
    <div className="support-page">
      <div className="support-page-container">
        <p>Demo Request Form</p>
      </div>
      <div className="support-page-container2">
        <div className="download-page-container21">
          {/* <p
            style={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              color: "#AF110C",
            }}
          >
            Demo Request (Contact Form)
          </p> */}
          <Form
            style={{ width: "100%", color: "#545454", fontWeight: "bold",marginTop:"1.5rem" }}
            onSubmit={handleData}
          >
            <Form.Group className="mb-3  " controlId="formBasicEmail">
              <Form.Label>Company Name*</Form.Label>
              <Form.Control
                className="border border-dark"
                type="text"
                required
                value={companyName}
                onChange={(e) => {
                  setCompanyName(e.target.value);
                  setCompanyNameError(e.target.value.trim() === "" ? "Company Name is Required" : "");
                }}
              />
              {compantNameError && <Form.Text className="text-danger">{compantNameError}</Form.Text>}
              
            </Form.Group>
            <Form.Group className="mb-3  " controlId="formBasicEmail">
              <Form.Label>Primary Contact - First Name*</Form.Label>
              <Form.Control
                className="border border-dark"
                type="text"
                required
                value={firstName}
                onChange={(e) => {setFirstName(e.target.value);
                  setFirstNameError(e.target.value.trim() === "" ? "First Name is Required" : "")}}
              />
              {firstNameError && <Form.Text className="text-danger">{firstNameError}</Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3  " controlId="formBasicEmail">
              <Form.Label>Primary Contact - Last Name*</Form.Label>
              <Form.Control
                className="border border-dark"
                type="text"
                required
                value={lastName}
                onChange={(e) => {setLastName(e.target.value);
                  setLastNameError(e.target.value.trim() === "" ? "Last Name is Required" : "")}}
              />
              {lastNameError && <Form.Text className="text-danger">{lastNameError}</Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Time Zone*</Form.Label>
              <Form.Select
                onChange={(e) => timeHandler(e)}
                className="border border-dark"
                required
              >
                <option>Select</option>
                {timeZones.map((zone, index) => (
                  <option key={index} value={zone}>
                    {zone}
                  </option>
                ))}
              </Form.Select>
              <p>Current Time: {timeZone}</p>
            </Form.Group>
            <Form.Group className="mb-3  " controlId="formBasicEmail">
              <Form.Label>Email*</Form.Label>
              <Form.Control
                className="border border-dark"
                type="email"
                value={email}
                required
                onChange={(e) => {setEmail(e.target.value);
                  setEmailError(e.target.value.trim() === "" ? "Email Name is Required" : "")}}
              />
              {emailError && <Form.Text className="text-danger">{emailError}</Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3  " controlId="formBasicEmail">
              <Form.Label>Phone Number*</Form.Label>
              <Form.Control
                className="border border-dark"
                type="number"
                value={phoneNumber}
                required
                onChange={(e) => {setPhoneNumber(e.target.value);
                setPhoneNumberError(e.target.value.trim() === "" ? "Phone Number is Required" : "")}}
              />
              {phoneNumberError && <Form.Text className="text-danger">{phoneNumberError}</Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3  " controlId="formBasicEmail">
              <Form.Label>How did you hear about us?*</Form.Label>
              <Form.Control
                className="border border-dark"
                type="text"
                required
                value={hearAboutUs}
                onChange={(e) => {setHearAboutUs(e.target.value);
                  setHearAboutUsError(e.target.value.trim() === "" ? "This is a Required" : "")}}
              />
              {hearAboutUsError && <Form.Text className="text-danger">{hearAboutUsError}</Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3  " controlId="formBasicEmail">
              <Form.Label>
                Please describe what you want to see in the demonstration.
              </Form.Label>
              <Form.Control
                className="border border-dark"
                as="textarea"
                rows={3}
                value={describe}
                onChange={(e) => setDescribe(e.target.value)}
              />
            </Form.Group>
            <button
              // onClick={() => navigate("/")}
              type="submit"
              style={{
                backgroundColor: "#1A9FB2",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                padding: "0.3rem 2.5rem",
              }}
            >
              Sent
            </button>
          </Form>
        </div>

        <div className="support-page-container22">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: ".1rem",
              fontWeight: "bold",
            }}
          >
            <p
              style={{
                color: "#AF110C",
                marginTop: "1rem",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              Contact Information
            </p>
            <p style={{ fontWeight: "bold" }}>
              For more information or to request a demo, please contact us.
            </p>
            <p style={{ color: "#0152A8", textDecoration: "underline" }}>
              {contect?.saleEmail}
            </p>
            <p>{contect?.city}</p>
            <p>{contect?.state}</p>
            <p>{contect?.pincode}</p>
            <p>
              Support/Training :{" "}
              <span style={{ color: "#0152A8", textDecoration: "underline" }}>
                {contect?.technicalSupport}
              </span>
            </p>
            <p style={{ color: "#0152A8", textDecoration: "underline" }}>
              {contect?.teamEmail}
            </p>
            <p>
              Sales/Demo:{" "}
              <span style={{ color: "#0152A8", textDecoration: "underline" }}>
                {contect?.salePhone}
              </span>
            </p>
            <p>Fax: {contect?.supportFax}</p>
            <p
              style={{
                display: "flex",
                gap: "1rem",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <a href={contect?.fb}>
                <img
                  style={{
                    maxWidth: "45px",
                    maxHeight: "45px",
                    width: "auto",
                    height: "auto",
                  }}
                  src="/DemoRequest/fb.png"
                  alt="facebook"
                />
              </a>
              <a href={contect?.twitter}>
                <img
                  style={{
                    maxWidth: "45px",
                    maxHeight: "45px",
                    width: "auto",
                    height: "auto",
                  }}
                  src="/DemoRequest/tw.png"
                  alt="facebook"
                />
              </a>
              <a href={contect?.youtube}>
                <img
                  style={{
                    maxWidth: "45px",
                    maxHeight: "45px",
                    width: "auto",
                    height: "auto",
                  }}
                  src="/DemoRequest/youtube.png"
                  alt="facebook"
                />
              </a>
              <a href={contect?.linkedIn}>
                <img
                  style={{
                    maxWidth: "45px",
                    maxHeight: "45px",
                    width: "auto",
                    height: "auto",
                  }}
                  src="/DemoRequest/in.png"
                  alt="facebook"
                />
              </a>
              <a href={contect?.instagram}>
                <img
                  style={{
                    maxWidth: "45px",
                    maxHeight: "45px",
                    width: "auto",
                    height: "auto",
                  }}
                  src="/DemoRequest/insta.png"
                  alt="facebook"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
