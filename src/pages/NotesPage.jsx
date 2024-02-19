import { useEffect, useState } from "react";
import "./css/NotesPage.css";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
const NotesPage = () => {
  const [notes, setNotes] = useState([]);
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

  const getSupportNotes = async () => {
    try {
      const res = await axios.get(
        `${BaseUrl}OasisNotesSupport/getOasisNotesSupport`
      );
      setNotes(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSupportNotes();
    contectDetail();
  }, []);
  return (
    <div className="support-page">
      <div
        style={{
          padding: "2rem 0rem",
          height: "auto",
          fontWeight: "500",
          fontSize: "1.5rem",
        }}
        className="support-page-container"
      >
        <p>How can we help you today?</p>
        <div
          style={{
            display: "flex",
            borderRadius: "0px",
            width: "60%",
          }}
        >
          <Form.Control
            style={{
              borderRadius: "8px 0px 0px 8px",
            }}
            type="text"
            placeholder="Enter your search term here"
          />{" "}
          <Button
            style={{
              borderRadius: "0px 8px 8px 0px",
              backgroundColor: "#545454",
              color: "white",
              height: "2.9rem",
              padding: "0rem 1.8rem",
            }}
          >
            Search
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            borderRadius: "0px",
            width: "60%",
            flexWrap: "wrap",
            alignItems: "center",
            marginTop: "1rem",
            fontSize: "1rem",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: ".5rem" }}>
            <img
              style={{
                maxWidth: "25px",
                maxHeight: "25px",
                width: "auto",
                height: "auto",
              }}
              src="../../OasisNotesPage/add.png"
              alt="add"
            />
            <p>New support ticket</p>
          </div>
          <div style={{ display: "flex", gap: ".5rem" }}>
            <img
              style={{
                maxWidth: "25px",
                maxHeight: "25px",
                width: "auto",
                height: "auto",
              }}
              src="../../OasisNotesPage/document.png"
              alt="add"
            />
            <p>Check ticket status</p>
          </div>
          <div style={{ display: "flex", gap: ".5rem" }}>
            <img
              style={{
                maxWidth: "25px",
                maxHeight: "25px",
                width: "auto",
                height: "auto",
              }}
              src="../../OasisNotesPage/call.png"
              alt="add"
            />
            <p>{contect?.supportPhone}</p>
          </div>
        </div>
      </div>
      <div className="notes-page-container2">
        <div className="notes-page-container21">
          {notes?.map((item, i) => (
            <div
              key={i}
              style={{
                padding: "1rem",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  paddingTop: "2.5rem",
                }}
              >
                {item?.title}
              </p>
              <p style={{ paddingBottom: "3rem" }}>{item?.description}</p>{" "}
            </div>
          ))}
        </div>
        <div style={{ marginTop: "2.5rem" }}>
          <p style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
            Recent articles
          </p>
          <p>
            {notes?.slice(0, 5)?.map((item, i) => (
              <li key={i}>{item?.title} </li>
            ))}
          </p>
        </div>
      </div>
      <div
        style={{
          padding: "2rem 0rem",
          height: "auto",
          fontWeight: "500",
          fontSize: "1.2rem",
        }}
        className="support-page-container"
      >
        <p>Contact Us :{contect?.supportPhone}</p>
      </div>
      <div
        style={{
          backgroundColor: "#222222",
          color: "white",
          display: "grid",
          placeItems: "center",
          textAlign: "center",
          fontWeight: "400",
        }}
      >
        <p style={{ paddingTop: ".5rem" }}>
          @ 2023 Themes by Helpdesk Theme . All rights reserved
        </p>
      </div>
    </div>
  );
};

export default NotesPage;
