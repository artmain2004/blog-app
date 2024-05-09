import React from "react";
import style from "../styles/Main.module.css";
import image from "../assets/main_blog-background.jpg";
import { ThemeContext } from "../components/ThemeMode";
import { useContext } from "react";

const CardItem = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <>
      <div className={style.card_item}>
        <div className={style.card_item_wrapper}>
          <div className={style.card_img_wrapper}>
            <img src={image} alt="" className={style.card_img} />
          </div>
          <div className={style.card_title}>
            <h4
              className={
                isDark ? style.card_title_dark : style.card_title_light
              }
            >
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </h4>
          </div>
          <div className={style.card_author}>
            <div className={style.author_avatar_wrapper}>
              <img src={image} alt="" className={style.author_avatar} />
            </div>
            <div
              className={
                isDark ? style.author_name_dark : style.author_name_light
              }
            >
              Artsiom Kryvanos
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardItem;
