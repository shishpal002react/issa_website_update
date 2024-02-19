import { useParams } from "react-router-dom";
import "./css/SingleBlogPage.css";
import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
const SingleBlogPage = () => {
  const { id } = useParams();
  const [data, setData] = useState("");

  const BaseUrl = "https://issa-backend.vercel.app/api/v1/";

  const getSingleBlogData = async () => {
    try {
      const res = await axios.get(`${BaseUrl}Blog/getIdBlog/${id}`);
      setData(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleBlogData();
  }, []);
  return (
    <div>
      <div className="Single-blog-page-container">
        <div className="Single-blog-page-container-rk">
          <img src={data?.image} alt="Blog" />
          <p
            style={{
              fontWeight: "bold",
              color: "black",
              fontSize: "1.5rem",
              marginTop: "1rem",
            }}
          >
            {data?.title}
          </p>
          <p style={{ fontSize: "1rem", lineHeight: "1rem", color: "#545454" }}>
            {data?.description}
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1rem",
              color: "black",
              fontWeight: "bold",
            }}
          >
            Decoding Genetic Testing for Psychiatric Medication Choice
          </p>
          <p style={{ fontSize: "1rem", lineHeight: "1rem", color: "#545454" }}>
            The integration of psychiatry genetic testing could herald a new era
            of precision medicine in psychiatry.The foundation of genetic
            testing for psychiatric medication rests on identifying specific
            genetic markers, known as alleles, that are key to treatment
            success. These markers, often linked to drug metabolism enzymes ,
            neurotransmitter receptors and cellular signaling pathways, provide
            a glimpse into the patient's unique pharmacogenetic profile.
            Clinicians must decode the complex interplay between genetic markers
            and treatment outcomes, making sense of the Clinicians must decode
            the complex interplay between genetic markers and treatment
            outcomes, making sense of the probabilities and tendencies that
            genetic information provides. With this knowledge, mental health
            professionals can tailor their treatment strategies, adjusting
            medication dosages and selecting drugs that align with a patient's
            genetic predispositions
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1rem",
              color: "black",
              fontWeight: "bold",
            }}
          >
            What Is Genetic Testing for Psychiatric Medications Choice?
          </p>
          <p style={{ fontSize: "1rem", lineHeight: "1rem", color: "#545454" }}>
            By exploring the patient's genetic blueprint, mental health
            professionals can tailor treatment plans with unparalleled
            precision,leading to more effective interventions and improved
            patient outcomes.
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1rem",
              color: "black",
              fontWeight: "bold",
              marginTop: "2rem",
            }}
          >
            Understanding the Process
          </p>
          <p>
            Genetic testing comprehensively  examines specific genes linked to
            drug metabolism , neurotransmitter pathways and receptor
            interactions. By scrutinizing these genetic markers, mental health
            professionals can decipher how an individual's body processes
            medications, influences neurotransmitter activity and modulates
            responses to treatment. This knowledge empowers clinicians to make
            informed decisions about medication selection, dosage optimization
            and potential side effect management.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1rem",
              color: "black",
              fontWeight: "bold",
              marginTop: "2rem",
            }}
          >
            Guiding Treatment Decisions
          </p>
          <p>
            The value of genetic testing becomes particularly evident in its
            ability to guide treatment decisions in cases that have historically
            posed challenges. Individuals who exhibit treatment resistance or
            severe side effects can benefit immensely from these insights.
            Clinicians can identify genetic markers that may contribute to poor
            medication response or adverse reactions, enabling them to explore
            alternative treatment options more efficiently. For patients with
            complex comorbidities, genetic testing can elucidate potential
            interactions between different medications, enhancing treatment
            planning and minimizing risks.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1rem",
              color: "black",
              fontWeight: "bold",
              marginTop: "2rem",
            }}
          >
            Minimizing Trial and Error
          </p>
          <p>
            A significant advantage of genetic testing is its potential to
            expedite the trial-and-error process commonly associated with
            psychiatric medication selection. Clinicians can bypass the
            uncertainty often accompanying finding the right medication
            fit.Instead of subjecting patients to a series of trial medications,
            each accompanied by its side effects and potential failures, genetic
            testing helps mental health professionals identify medications more
            likely to be effective.
          </p>
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <p>Start Your free Trial Today</p>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>*First</Form.Label>
            <Form.Control className="border border-dark" type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>*Last</Form.Label>
            <Form.Control className="border border-dark" type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>*Email</Form.Label>
            <Form.Control className="border border-dark" type="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>*Phone</Form.Label>
            <Form.Control className="border border-dark" type="number" />
          </Form.Group>
          <Form.Group
            style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
            className="mb-3 "
            controlId="formBasicEmail"
          >
            <Form.Check />{" "}
            <Form.Label>
              By checking this box you agree to
              <span style={{ color: "#0000EE" }}>
                {" "}
                ICANotes Terms of Service, Privacy Policy
              </span>
              and
              <span style={{ color: "#0000EE" }}>
                {" "}
                Business Associate Agreement
              </span>
            </Form.Label>
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
              width: "100%",
            }}
            className="blog-page-button"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
