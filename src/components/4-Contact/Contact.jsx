import "./Contact.css";
import doneAnimation from "../../animation/donne.json";
import contactAnimation from "../../animation/contact.json";
import Lottie from "lottie-react";
import { useForm, ValidationError } from "@formspree/react";
export default function Contact() {
  const [state, handleSubmit] = useForm("xayrejvp");

  return (
    <section className="contact-us" id="contact">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact Me
      </h1>
      {/* <p className="sub-title">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium,
        quo!
      </p> */}
      <div style={{ justifyContent: "space-between" }} className="flex">
        <form className="" onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label required htmlFor="message">
              Your Message:
            </label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button className="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
          {state.succeeded && (
            <p
              className="flex psent"
              style={{
                fontSize: "18px",
                marginTop: "1.7rem",
                textAlign: "center",
              }}
            >
              <Lottie
                loop={false}
                style={{ height: "33px" }}
                animationData={doneAnimation}
              />
              Your message has been sent successfully 👌
            </p>
          )}
        </form>
        <div className="animation ">
          <Lottie
            className="contact-animation"
            style={{ height: "355px" }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
}
