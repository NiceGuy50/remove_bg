import React from "react";
import "./Bg.css";
import close from "../assets/close.png";
import Download from "../Download/Download";
import { useState } from "react";
import Disp_img from "../Disp_img/Disp_img";
import banner from "../assets/banner.png";
import logo from "../assets/logo.png";

const Bg = () => {
  const [selected_tab, setSelected_tab] = useState();
  const [show_eula, setShow_eula] = useState(false);
  const selected = () => {
    setSelected_tab(!selected_tab);
  };
  function show_popup_eula() {
    setShow_eula(!show_eula);
  }
  return (
    <div>
      <div className="bg_cont">
        <div className="header-title">העלאת תמונה כדי להסיר את הרקע</div>
        <img src={close} className="close_top" />
        <div className="upload_btn">העלאת תמונה</div>
        <div className="content_div">
          <div className="contnent_left">
            <div className="tabs_cont">
              <div
                className={
                  "tabs_text text_bg_no_bg " +
                  (selected_tab == true ? "border_bottom_selected" : "")
                }
                onClick={selected}
              >
                הוסר רקע
              </div>
              <div
                className={
                  "tabs_text text_bg_orig " +
                  (selected_tab != true ? "border_bottom_selected" : "")
                }
                onClick={selected}
              >
                מקורי
              </div>
            </div>
            <div className="content_left_middle">
              {selected_tab == true ? (
                <Disp_img comp_type="no_bg_comp" />
              ) : (
                <Disp_img comp_type="orig_comp" />
              )}
            </div>
            <div className="footer_left_content">
              <div className="footer_text">
                על ידי העלאת תמונה אתה מסכים לתנאים וההגבלות שלנו. אתר זה מוגן
                .וחלים בו מדיניות הפרטיות ותנאי השירות
              </div>
              <button className="footer_btn" onClick={show_popup_eula}>
                תקנון החברה
              </button>
            </div>
          </div>
          <div className="contnent_right">
            <div className="content_right_middle">
              <Download
                title="תמונה חינם"
                desc="תצוגה מקדימה של תמונה"
                btn_text="הורד"
                small_text="איכות טובה עד 0.25 מגה פיקסל"
                comp_side="top"
              />
              <Download
                title="Pro"
                desc="תמונה מלאה"
                btn_text="HD הורד"
                small_text="האיכות הטובה ביותר עד 25 מגה פיקסל"
                comp_side="bottom"
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <img src={banner} className="banner_img" />
          <img src={logo} className="logo_img" />
        </div>
      </div>
      {show_eula ? (
        <>
          <div className="overlay"></div>
          <div className="popup_eula">
            <img src={close} onClick={show_popup_eula} className="popup_img" />
            <div className="popup_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
              tortor at auctor urna. Urna duis convallis convallis tellus id
              interdum velit laoreet. Nulla pellentesque dignissim enim sit amet
              venenatis urna cursus eget. Augue lacus viverra vitae congue. Sit
              amet commodo nulla facilisi nullam vehicula ipsum a arcu. Egestas
              maecenas pharetra convallis posuere morbi leo urna molestie.
              Sollicitudin nibh sit amet commodo nulla facilisi. Neque aliquam
              vestibulum morbi blandit cursus risus at ultrices.
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Bg;
