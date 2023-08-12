import "./Contact.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object({
  fullname: yup
    .string()
    .trim()
    .test("two-words", "Fullname must contain at least two words", (value) => {
      if (value) {
        const words = value.split(" ");
        return words.length === 2;
      }
      return false;
    })
    .required(),
  email: yup
    .string()
    .trim()
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
      "Invalid email format"
    )
    .required(),
  message: yup.string().trim().min(10).required(),
});

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3j68bmq",
        "template_8yo4ymp",
        form.current,
        "fP6m-FRlaujoCoTFl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data, e) => {
    sendEmail(e);
    reset();
    toast.success("Message sent successfully!", {
      style: {
        background: "#2c2c6c",
        color: "#fff",
      },
    });
    console.log(data);
  };

  const handleEmailButtonClick = () => {
    const emailAddress = "javidangrbnl@gmail.com";
    const mailtoUrl = `mailto:${emailAddress}`;
    window.open(mailtoUrl);
  };

  return (
    <section id="contact">
      <h2 data-aos="fade-up">Contact Me</h2>
      <div className="contact_form">
        <div className="contact_left" data-aos="zoom-in-right">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <h3>Email</h3>
          <p>javidangrbnl@gmail.com</p>
          <button onClick={handleEmailButtonClick}>Send a message</button>
        </div>
        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          data-aos="zoom-in-left"
        >
          <input
            {...register("fullname")}
            placeholder="Your fullname"
            name="fullname"
          />
          <p>{errors.fullname?.message}</p>
          <input {...register("email")} placeholder="Your email" name="email" />
          <p>{errors.email?.message}</p>
          <textarea
            rows="7"
            {...register("message")}
            placeholder="Your message"
            name="message"
          />
          <p>{errors.message?.message}</p>
          <input type="submit" value="Send Message" />
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
