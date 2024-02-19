import React, { useEffect } from 'react';
import axios from 'axios'; // Import axios
import { show_notification } from "../Api_collection/Api";
import { useNavigate, useParams } from 'react-router-dom';

function FailPaymentPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const BaseUrl = "https://issa-backend.vercel.app/api/v1/";

  useEffect(() => {
    const verifySubscription = async () => {
      try {
        const res = await axios.post(`${BaseUrl}verifySubscription/${id}`, {
          Status: "Fail"
        });
        show_notification("Payment Fail!", "Payment Fail", "danger");
        navigate("/pricing");
      } catch (error) {
        // Handle error if needed
      }
    };

    verifySubscription(); // Call the async function immediately
  }, [id, navigate, BaseUrl]); // Include dependencies in the dependency array

  return (
    <div style={{ marginTop: "2rem", textAlign: "center", fontSize: "2rem" }}>Payment Fail</div>
  );
}

export default FailPaymentPage;
