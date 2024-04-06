import { React, useRef, useState } from "react";
import "./Disp_img.css";
import img_bg from "../assets/Original.jpg";
const Disp_img = (props) => {
  const inputElement = useRef();
  const focusInput = () => {
    inputElement.current.click();
  };

  return (
    <div className="disp_img_cont ">
      <div>
        {props.comp_type != "orig_comp" ? (
          <>
            <div className="top_text">
              אל תשכח להוריד את הקבצים שלך, הם ימחקו אוטומטית כשתצא מהדף
            </div>
            <input type="color" ref={inputElement} className="color_input" />
            <button className="color_btn" onClick={focusInput}>
              צבע רקע
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
      <div>
        <img
          src={img_bg}
          className={
            "img_bg " + (props.comp_type === "orig_comp" ? "original" : "")
          }
        />
      </div>
    </div>
  );
};

export default Disp_img;
