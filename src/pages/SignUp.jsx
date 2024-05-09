import React, { useContext } from "react";
import style from "../styles/Form.module.css";
import { useForm } from "react-hook-form";
import schema from "../SchemaValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { ThemeContext } from "../components/ThemeMode";

const SignUp = () => {
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
              Signup
            </h1>
            <div className={style.email_wrapper}>
              <input
                {...register("name")}
                type="text"
                name="name"
                placeholder="Name"
                className={style.input}
              />

              {errors.name && (
                <p className={style.error}>{errors.name.message}</p>
              )}
            </div>
            <div className={style.email_wrapper}>
              <input
                {...register("lastname")}
                type="text"
                name="lastname"
                placeholder="Lastname"
                className={style.input}
              />

              {errors.lastname && (
                <p className={style.error}>{errors.lastname.message}</p>
              )}
            </div>
            <div className={style.email_wrapper}>
              <input
                {...register("email")}
                type="text"
                name="email"
                placeholder="Email"
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
                  className={style.input}
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

            <button className={style.button}>SIGN UP</button>

            <div className={isDark ? style.suggest_dark : style.suggest_light}>
              Already have an account?{" "}
              <Link className={style.link} to="/signin">
                Sign in
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
