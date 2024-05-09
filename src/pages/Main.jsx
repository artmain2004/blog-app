import React from "react";
import style from "../styles/Main.module.css";
import image from "../assets/main_blog-background.jpg";
import CardItem from "../components/CardItem";

const Main = () => {
  return (
    <div className={style.main_wrapper}>
      <div className={style.main_img}>
        <img src={image} alt="main_img" className={style.main_img} />
        <div className={style.greeting_block}>
          <h2 className={style.greeting_title}>
            Welcome to ArtmainBlog. <br /> Right there you can read my notes.
          </h2>
        </div>
      </div>

      <div className={style.main_posts_wrapper}>
        <div className={style.main_posts}>
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </div>
    </div>
  );
};

export default Main;
