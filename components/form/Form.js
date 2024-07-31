"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import "./form.scss";

const Form = () => {
  const [showMessage, setShowMessage] = useState(true);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const postEmail = async (data) => {
    try {
      const request = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json; chraset=UTF-8",
          },
        }
      );
      setShowMessage(false);
      if (!request.ok) {
        throw new Error(`Error ${request.status}`);
      }
    } catch (e) {
      throw e;
    } finally {
      reset();
    }
    setTimeout(() => {
      setShowMessage(true);
    }, 1000);
  };

  return (
    <div className="containerForm">
      <h2 className="containerForm_title">Get In Touch</h2>
      {showMessage ? (
        <form className="containerForm_form">
          <input
            type="email"
            placeholder="Your Email"
            className="containerForm_email"
            {...register("yourEmail", {
              required: "this field is requred",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Wrong Email",
              },
            })}
          />
          <button
            // onClick={(e) => postEmail(e)}
            onClick={handleSubmit(postEmail)}
            type="submit"
            className="containerForm_subscribe"
          >
            Subscribe
          </button>
        </form>
      ) : (
        <div
          style={{
            marginTop: 10,
            fontSize: 20,
            color: "red",
            fontWeight: "bold",
          }}
        >
          Your message has been sent
        </div>
      )}
      {errors?.yourEmail && (
        <p className="error">{errors?.yourEmail.message}</p>
      )}

      <p className="containerForm_text">Lore imp sum dolor Amit</p>
    </div>
  );
};
export default Form;
