import "./email.scss";

import { useState } from "react";
import { useForm } from "react-hook-form";

import Loading from "../loading/Loading";
import Than from "../than/Than";

const Email = ({ showEmail, close, setOverflow }) => {
  const [loading, setLoading] = useState(false);
  const [thank, setThank] = useState(false);
  const [cont, setCont] = useState(true);

  const load = loading && !thank & !cont ? <Loading /> : null;
  const than = !loading && !cont && thank ? <Than /> : null;
  const content =
    !loading && cont && !thank ? (
      <View
        close={close}
        setLoading={setLoading}
        showEmail={showEmail}
        setThank={setThank}
        setCont={setCont}
        setOverflow={setOverflow}
      />
    ) : null;

  return (
    <div
      style={
        showEmail
          ? {
              opacity: "1",
              visibility: "visible",
              transition: ".2s linear",
            }
          : { opacity: "0", visibility: "hidden", transition: ".2s linear" }
      }
      className="emailContainer"
    >
      <div className="email">
        {content}
        {load}
        {than}
      </div>
    </div>
  );
};

const View = ({
  close,
  setLoading,
  showEmail,
  setThank,
  setCont,
  setOverflow,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    setCont(false);
    try {
      setLoading(true);
      const request = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );
      if (!request.ok) {
        setLoading(false);
        setCont(true);
        throw new Error("Some error");
      }

      reset();
    } catch (e) {
      throw e;
      setOverflow(false);
    }
    setLoading(false);
    setCont(false);
    setThank(true);

    setTimeout(() => {
      setCont(true);
      setThank(false);
      setOverflow(false);
      close(false);
    }, 1000);
  };

  return (
    <div className="email_allWrapper">
      <div
        onClick={() => {
          close(false);
          setOverflow(false);
          reset();
        }}
        className="email_close"
      >
        &#x2715;
      </div>
      <h2 className="email_title">Message</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="email_form">
        <input
          className="email_emailInput"
          type="email"
          value="example@gmail.com"
          readOnly
        />
        <input
          type="text"
          className="email_emailInput"
          placeholder="Your email"
          {...register("clientEmail", {
            required: "This field is required",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Wrong email",
            },
          })}
        />
        {errors?.clientEmail && (
          <p className="error">{errors?.clientEmail?.message}</p>
        )}
        <textarea
          className="email_textareaInput"
          id="message"
          placeholder="Your message.."
          {...register("message", {
            required: "This field is required",
            minLength: {
              value: 2,
              message: "Min 2 symbols",
            },
          })}
        ></textarea>
        {errors?.message && <p className="error">{errors?.message.message}</p>}
        <button className="email_sendButton">Send</button>
      </form>
    </div>
  );
};

export default Email;
