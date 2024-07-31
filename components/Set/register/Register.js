import "./register.scss";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Loading from "../loading/Loading";
import Than from "../than/Than";

const Register = ({ showRegister, close, setOverflow }) => {
  const [loading, setLoading] = useState(false);

  const [cont, setCont] = useState(true);

  const content =
    !loading && cont ? (
      <View
        showRegister={showRegister}
        close={close}
        setLoading={setLoading}
        setCont={setCont}
        setOverflow={setOverflow}
      />
    ) : null;
  const load = loading && !cont ? <Loading /> : null;

  return (
    <div
      style={{ display: showRegister ? "" : "none" }}
      className="registerContainer"
    >
      <div className="register">
        {content}
        {load}
      </div>
    </div>
  );
};

const View = ({
  showRegister,
  close,
  setLoading,
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

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );

      if (!response.ok) {
        setLoading(false);
        setCont(true);
        throw new Error("something went wrong");
      }
    } catch (e) {
      throw e;
    }
    setLoading(false);
    setCont(true);
    setOverflow(false);
    close(false);
  };

  return (
    <div className="register_allWrapper">
      <div
        className="register_close"
        onClick={() => {
          close(false);
          setOverflow(false);
          reset();
        }}
      >
        &#x2715;
      </div>
      <div className="register_title">Register</div>
      <form onSubmit={handleSubmit(onSubmit)} className="register_form">
        <div className="register_wrap">
          <label className="register_item">
            Name *
            <input
              type="text"
              placeholder="Full Name *"
              {...register("name", {
                required: "This field is required",
                pattern: "[A-Za-z0-9]",
                minLength: {
                  value: 2,
                  message: "Min 2 symbols",
                },
              })}
            />
          </label>

          {errors?.name && <p className="error">{errors?.name?.message}</p>}
        </div>
        <div className="register_wrap">
          <label className="register_item">
            Email address *
            <input
              type="email"
              placeholder="example@gmail.com"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Wrong email",
                },
              })}
            />
          </label>

          {errors?.email && <p className="error">{errors?.email?.message}</p>}
        </div>
        <div className="register_wrap">
          <label className="register_item">
            Phone number *
            <input
              type="text"
              placeholder="063-000-0000"
              {...register("phone", {
                required: "This field is required",
                pattern: {
                  value: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
                  message: "Wrong phone number",
                },
              })}
            />
          </label>
          {errors?.phone && <p className="error">{errors?.phone?.message}</p>}
        </div>

        <div className="register_wrapper">
          <div className="register_wrapper-item">Sex:</div>
          <hr />

          <select
            name="sex"
            id="sex"
            {...register("sex", {
              required: "choose one",
            })}
            style={{
              appearance: "none",
              marginLeft: 10,
              outline: "none",
              cursor: "pointer",
            }}
          >
            <option></option>
            <option>male</option>
            <option>female</option>
          </select>
          {errors?.sex && <p className="error">{errors?.sex?.message}</p>}
        </div>
        <button className="register_submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
