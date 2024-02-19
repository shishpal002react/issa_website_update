import React, { useState } from "react";
import "./css/Account.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Account = () => {
  const navigate = useNavigate();

  const [user,setUser]=useState("");
  const [password,setPassword]=useState("")

  const handleSubmit=(e)=>{
    e.preventDefault();
    const data={
      email:user,
      password:password
    }

  }


  return (
    <div>
      <div className="account-page-container1">
        <div
          style={{
            border: "1px solid black",
            backgroundColor: "#D1ECF0",
            marginTop: "3rem",
            marginBottom: "3rem",
          }}
        >
          <p style={{ fontSize: "3.2rem", color: "#1A9FB2", padding: "1rem" }}>
            OasisNotes
          </p>
          <hr style={{ border: "1px solid black" }} />
          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              textAlign: "right",
              paddingRight: "3rem",
            }}
          >
            New Customer Portal
          </p>
          <p
            style={{
              backgroundColor: "#9D0104",
              color: "white",
              fontSize: "1.5rem",
              fontWeight: "bold",
              padding: "1rem",
            }}
          >
            Login
          </p>
          <div className="account-page-container">
            <div style={{ border: "1px solid black",width:"90%",margin:"auto",paddingBottom:"1.5rem" }}>
              <p
                style={{
                  fontSize: "1.5rem",
                  padding: "0.2rem",
                  textAlign: "right",
                  paddingRight: "3rem",
                 
                }}
              >
                Login to existing account:
              </p>

<div >
              <Form style={{width:"85%",margin:"auto",textAlign:"left"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label >Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
     
      <Button
                    
                    style={{
                      padding: "0.5rem 1.5rem",
                      marginTop: "1rem",
                      
                    }}
                    variant="primary"
                    type="submit"
                  >
                    Login
                  </Button>
    </Form>
    </div>

              {/* <Form
                style={{
                  padding: "1rem",
                }}
                onSubmit={handleSubmit}
              >
                <Form.Group
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: "1rem",
                  }}
                  className="mb-3"
                  controlId="formBasicEmail"
                >
                  <Form.Label>
                    User ID <br />
                    (email):
                  </Form.Label>
                  <Form.Control
                    style={{
                      backgroundColor: "#D1ECF0",
                      border: "1px solid black",
                      marginLeft: "1.5rem"
                    }}
                    type="email"
                    value={user}
                    onChange={(e)=>setUser(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    
                    justifyContent: "space-between",
                  }}
                  className="mb-3"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    style={{
                      backgroundColor: "#D1ECF0",
                      border: "1px solid black",
                      marginLeft: "1.5rem",
                    }}
                    type="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </Form.Group>
                <div
                  style={{
                    width: "80%",
                    margin: "auto",
                    paddingBottom: "3rem",
                  }}
                >
                  <Button
                    
                    style={{
                      padding: "0.5rem 1.5rem",
                      marginTop: "1rem",
                    }}
                    variant="primary"
                    type="submit"
                  >
                    Login
                  </Button>
                  <p style={{ color: "black" }}>Forget your password?</p>
                </div>
              </Form> */}
            </div>
            
          </div>
        </div>
        <p style={{ fontWeight: "900", fontSize: "1.2rem",padding:"1rem"
        
         }}>
          By using the portal your agree to the{" "}
          <span style={{ color: "#0152A8", textDecoration: "underline",cursor:"pointer" }} onClick={()=>navigate("/term-condition")}>
            Terms of Use.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Account;



{/* <div
              style={{ border: "1px solid black", backgroundColor: "white",visibility:"hidden" }}
            >
              <Form
                style={{
                  padding: "1rem",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <Form.Group className="mb-1" controlId="formBasicEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Form>
              <Form style={{ padding: "1rem", textAlign: "left" }}>
                <Form.Group className="mb-1" controlId="formBasicEmail">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Form>
              <Form style={{ padding: "1rem", textAlign: "left" }}>
                <Form.Group className="mb-1" controlId="formBasicEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicEmail">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
                <Button
                  onClick={() => navigate("/demo-request")}
                  style={{
                    padding: "0.5rem 1.5rem",
                    marginTop: "1rem",
                    width: "100%",
                  }}
                  variant="primary"
                  Request
                  for
                  Demo
                >
                  Request for Demo
                </Button>
              </Form>
              <p>
                *By submitting this form, you consent to receive calls or texts
                from an automated telephone dialing system. Reply STOP to opt
                out. No purchase is necessary.
              </p>{" "}
              <p>Don't need to  bill insurance?</p>
              <p>Sign up using the button below.</p>{" "}
              <Button
                style={{
                  padding: "0.5rem 1.5rem",
                  marginTop: "1rem",
                  width: "94%",
                  marginBottom: "2rem",
                }}
                variant="primary"
                Request
                for
                Demo
              >
                Request for Demo
              </Button>
            </div> */}