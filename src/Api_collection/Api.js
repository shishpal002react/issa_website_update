import axios from "axios";
import { Store } from "react-notifications-component";

const Baseurl = "https://issa-backend.vercel.app/api/v1/";

export const show_notification = (title, message, type) => {
  Store.addNotification({
    title: title,
    message: message,
    type: type,
    insert: "top",
    container: "top-right",
    animationIn: ["animate_animated", "animate_fadeIn"],
    animationOut: ["animate_animated", "animate_fadeOut"],
    dismiss: {
      duration: 3000,
      onScreen: true,
    },
  });
};

export const get_PricingData = async () => {
  try {
    const res = await axios.get(`${Baseurl}Pricing/getPricing`);
    show_notification("Success !", "Singin Successfully", "success");
    return res?.data?.data;
  } catch (e) {
    const msg = e?.response?.data?.message;
    show_notification("Error !", msg, "danger");
  }
};
