import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import style from "../styles/Form.module.css";
import { useForm } from "react-hook-form";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

import { yupResolver } from "@hookform/resolvers/yup";
import { ThemeContext } from "../components/ThemeMode";
import schema from "../SchemaValidation";

const SignIn = () => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const { isDark } = useContext(ThemeContext);

  const showPassword = () => {
    setPasswordIsVisible(!passwordIsVisible);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className={style.wrapper}>
      <div className={style.form_wrapper}>
        {" "}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={isDark ? style.form_dark : style.form_light}
        >
          <div className={style.form_container}>
            <h1 className={isDark ? style.title_dark : style.title_light}>
              Login
            </h1>

            <div className={style.email_wrapper}>
              <input
                {...register("email")}
                name="email"
                placeholder="Email"
                type="text"
                className={style.input}
              />

              {errors.email && (
                <p className={style.error}>{errors.email.message}</p>
              )}
            </div>

            <div className={style.password_wrapper}>
              <div className={style.password_block1}>
                <input
                  {...register("password")}
                  type={passwordIsVisible ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className={style.input_password}
                />

                {passwordIsVisible ? (
                  <AiOutlineEyeInvisible
                    onClick={showPassword}
                    className={style.eye_password}
                  />
                ) : (
                  <AiOutlineEye
                    onClick={showPassword}
                    className={style.eye_password}
                  />
                )}
              </div>

              {errors.password && (
                <div className="">
                  <p className={style.error}>{errors.password.message}</p>
                </div>
              )}
            </div>

            <button className={style.button}>SIGN IN</button>

            <div className={isDark ? style.suggest_dark : style.suggest_light}>
              Don't have an account?{" "}
              <Link className={style.link} to="/signup">
                Sign up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
