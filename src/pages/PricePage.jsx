import { useEffect, useState } from "react";
import "./css/PricePage.css";
import axios from "axios";
import { get_PricingData } from "../Api_collection/Api.js";
import Accordion from "react-bootstrap/Accordion";

// payment gateway
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function MyVerticallyCenteredModal(props) {
  const [email, setEmail] = useState("");
  const [subscriptionId, setSubscriptionId] = useState("");

  const [textData,setTextData]=useState("")

  const BaseUrl = "https://issa-backend.vercel.app/api/v1/";

  useEffect(() => {
    if (props.show === true) {
      setSubscriptionId(props.subscriptionId);
      setTextData(props.textData);
    }
  });

  const handlePost = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${BaseUrl}takeSubscription/${subscriptionId}`,
        {
          email,
        }
      );
      console.log(res, "payment data");
      window.location.href = res.data.session.url;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
         
        >
          <div  style={{
            display: "flex",
            alignItems: "center",
            flexDirection:"column",
            justifyContent: "center",
            width: "100%",
          }}>
            <div>
              <img
                src="/logo.png"
                alt="logo"
                style={{
                  // minHeight: "100px",
                  minWidth: "200px",
                  maxWidth: "120px",
                  width: "auto",
                  cursor: "pointer",
                  paddingBottom: "1.5rem",
                }}
              />
            </div>
            <div>
            <p style={{fontSize:"16px",fontWeight:"bold"}}>
            {textData}
        </p>
            </div>
          </div>
        </Modal.Title>
        
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handlePost}>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label style={{ fontSize: "1rem" }}>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            style={{ marginTop: "1.5rem" }}
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const PricePage = () => {
  // model
  const [modalShow, setModalShow] = useState(false);
  const [subscriptionId, setSubscriptionId] = useState("");

  //inner text
  const [textData,setTextData]=useState("");

  const [pricing, setPricing] = useState([]);
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState(0);
  const [showFpq, setShowFpq] = useState(false);
  const [fpq, setFpq] = useState("");
  const [view, setView] = useState("");

  const BaseUrl = "https://issa-backend.vercel.app/api/v1/";

  const getPricingData = async () => {
    try {
      const res = await axios.get(`${BaseUrl}Pricing/getPricing`);
      setPricing(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPricingFpq = async () => {
    try {
      const res = await axios.get(`${BaseUrl}Pricing/getPricingFAQ`);
      setFpq(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserPost = async () => {
    try {
      const res = await axios.post(`${BaseUrl}Pricing/calculatePricing`, {
        noOfUser: user,
      });
      setUserData(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // setPricing(get_PricingData());
    getPricingData();
    getPricingFpq();
  }, []);

  const buttonStyle = {
    marginTop: "1rem",
    marginBottom: "1rem",
    padding: "0.2rem 1rem",
    borderRadius: "55px",
    backgroundColor: "#AF110C",
    color: "white",
    border: "none",
    fontSize: "1rem",
  };
  return (
    <div className="support-page">
      <div className="support-page-container">
        <p>Pricing</p>
      </div>
      <div className="pricing-page-container">
        <p
          style={{
            textAlign: "center",
            fontSize: "1.4rem",
            fontWeight: "700",
            color: "#555",
            lineHeight: "2rem",
            fontStyle: "italic",
          }}
        >
          {fpq?.heading}
        </p>

        <div className="pricing-page-container2">
          {pricing?.map((item, i) => (
            <>
              <div
                key={i}
                className="pricing-child-block"
              >
                <p
                  style={{
                    textAlign: "center",
                    backgroundColor: "#1A9FB2",
                    color: "white",
                    padding: "0.8rem",
                    fontWeight: "500",
                    fontSize: "1.5rem",
                  }}
                >
                 {`Plan ${i+1}`}
                </p>
                <div
                  style={{
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1.3rem",
                      color: "#1A9FB2",
                      lineHeight: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    ${item?.perUser}/ Month
                  </p>
                  {/* <p
                    style={{
                      fontSize: ".8rem",
                      fontWeight: "bold",
                      color: "#AF110C",
                    }}
                  >
                    PER MONTH
                  </p> */}

                  {/* <p style={{fontSize:"16px",fontWeight:"bold",width:"80%",margin:"auto",textAlign:"center"}}>
            The first three-month charge will be ${item?.perUser*3} as the initial payment, after which ${item?.perUser} will be automatically charged every month.
        </p> */}

                  <button
                    style={{
                      alignItems: "center",
                      marginTop: "1rem",
                      cursor: "pointer",
                      // backgroundColor: "#1A9FB2",#555
                      backgroundColor: "#555",
                      outline: "none",
                      padding: "10px",
                      border: "none",
                      color: "white",
                      borderRadius: "5px",
                      minWidth: "40%",
                    }}
                    onClick={() => {
                      setModalShow(true);
                      setSubscriptionId(item._id);
                      setTextData(`Plan ${i+1} is ${item?.perUser*3} for the first 3 months and then ${item?.perUser} every month.`)
                    }} 
                  >
                    Subscribe Now
                  </button>

                  {/* <p
                    style={{
                      color: "#1A9FB2",
                      alignItems: "center",
                      marginTop: "1rem",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      view === item._id ? setView("") : setView(item._id)
                    }
                  >
                    View more
                  </p> */}

                  <div style={{ marginTop: "2rem"}}>
                    {item?.details?.map((data, i) => (
                      <ul
                        key={i}
                        style={{
                          // textAlign: "center",
                          width: "90%",
                          margin: "auto",
                          // paddingBottom: "1.5rem",
                          fontWeight: "bold",
                          paddingTop: "1rem",
                          // lineHeight:"1.5rem"
                        }}
                      >
                        <li>{data}</li>
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        {/* <div
          style={{
            width: "78%",
            margin: "auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "1rem",
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "#AF110C",
            flexWrap: "wrap",
          }}
        >
          <p>Unlimited User (You can add unlimited BHT's, Nurses, Behavioral Health Professionals, and other contractors)  </p>
          <p>Unlimited Data</p>
          <p>Unilimited Training/ Support</p>
          <p>Tracking Tools for Residents and employee's</p>
          <p style={{ paddingRight: "2%" }}>Appointment Tracking and reminder</p>
          <p>Medication Administration Record</p>
          <p>Administration Tracking</p>
        </div> */}
        {/* <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <button style={buttonStyle} onClick={() => setShowFpq(!showFpq)}>
            Billing FAQs
          </button>
          {showFpq && (
            <div className="container d-flex justify-content-center align-items-center">
              <div className="col-md-8">
                {fpq?.faqs?.map((item, i) => (
                  <Accordion defaultActiveKey="0" key={i}>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header style={{ fontSize: "14px" }}>
                        {item?.question}
                      </Accordion.Header>
                      <Accordion.Body style={{ fontSize: "14px" }}>
                        {" "}
                        {item?.answer}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                ))}
              </div>
            </div>
          )}

     
        </div> */}
        {/* <div style={{ width: "60%", margin: "auto", textAlign: "center" }}>
          <p
            style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#AF110C" }}
          >
            {fpq?.title}
          </p>
          <p style={{ fontSize: "1.2rem", textAlign: "center" }}>
            {fpq?.description}
          </p>
        </div> */}
        {/* <div className="price-calculator-page">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>Number of User</p>
            <img
              style={{ width: "45px" }}
              src="/PricingPage/users.png"
              alt=""
            />
            <input
              type="text"
              style={{
                border: "1px solid black",
                minWidth: "140px",
                maxWidth: "145px",
                maxHeight: "40px",
                width: "auto",
                height: "auto",
                marginTop: "1rem",
                textAlign: "center",
                outline: "none",
              }}
              value={user}
              onChange={(e) => setUser(e.target.value)}
            ></input>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
      
            <button
              style={{
                fontSize: "1.2rem",
                backgroundColor: "#26427E",
                padding: ".5rem 1rem",
                color: "white",
                fontWeight: "bold",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "1.5rem",
              }}
              onClick={getUserPost}
            >
              Calculate
            </button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>Total</p>
            <p
              style={{
                border: "none",
                minWidth: "140px",
                maxWidth: "145px",
                minHeight: "60px",
                maxHeight: "60px",
                width: "auto",
                height: "auto",
                marginTop: "1rem",
                textAlign: "center",
                backgroundColor: "#DDDDDD",
                display: "grid",
                placeItems: "center",
                fontWeight: "bold",
              }}
            >
              {userData}
            </p>
          </div>
        </div> */}
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        subscriptionId={subscriptionId}
        textData={textData}
      />
    </div>
  );
};

export default PricePage;
