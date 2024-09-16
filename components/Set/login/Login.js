import "./login.scss";

import Loading from "../loading/Loading";
import Than from "../than/Than";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const Login = ({ showLogin, close, setOverflow }) => {
  const [loading, setLoading] = useState(false);

  const [cont, setCont] = useState(true);

  const load = !cont && loading ? <Loading /> : null;

  const content =
    !loading && cont ? (
      <View
        close={close}
        setLoading={setLoading}
        setCont={setCont}
        showLogin={showLogin}
        setOverflow={setOverflow}
      />
    ) : null;

  return (
    <div
      style={
        showLogin
          ? {
              opacity: "1",
              visibility: "visible",
              transition: ".2s linear",
            }
          : { opacity: "0", visibility: "hidden", transition: ".2s linear" }
      }
      className="loginContainer"
    >
      <div className="login">
        {content}
        {load}
      </div>
    </div>
  );
};

const View = ({
  close,
  setLoading,
  setCont,

  showLogin,
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
    }
    setLoading(false);
    setCont(true);
    setOverflow(false);
    close(false);
  };

  return (
    <div className="login_allWrapper">
      <div
        onClick={() => {
          close(false);
          setOverflow(false);
          reset();
        }}
        className="login_close"
      >
        &#x2715;
      </div>
      <h2 className="login_title">Log in</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="login_form">
        <label className="login_item" htmlFor="login">
          Login *
          <input
            id="login"
            type="text"
            placeholder="Login"
            {...register("login", {
              required: "Please enter your login",
              minLength: {
                value: 5,
                message: "Login must contain at least 5 symbols",
              },
            })}
          />
        </label>
        {errors?.login && <p className="error">{errors?.login?.message}</p>}
        <label className="login_item" htmlFor="password">
          Password *
          <input
            id="password"
            type="text"
            placeholder="Password"
            {...register("password", {
              required: "Please enter your password",
              pattern: {
                value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                message:
                  "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",
              },
            })}
          />
        </label>
        {errors?.password && (
          <p className="error">{errors?.password?.message}</p>
        )}
        <button className="login_submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
