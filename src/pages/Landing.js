import { IconButton } from "@material-ui/core";
import { EmailRounded, PhoneRounded } from "@material-ui/icons";
import CountDown from "../comps/CountDown";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import "./Landing.css";
import thekwedding from "../imgs/thekwedding.png";
import main from "../imgs/main.jpeg";
import galary001 from "../imgs/galary001.jpeg";
import galary002 from "../imgs/galary002.jpeg";
import galary003 from "../imgs/galary003.jpeg";
import galary004 from "../imgs/galary004.jpeg";
import galary005 from "../imgs/galary005.jpeg";
import galary006 from "../imgs/galary006.jpeg";
import galary007 from "../imgs/galary007.jpeg";
import galary008 from "../imgs/galary008.jpeg";
import galary009 from "../imgs/galary009.jpeg";
import galary010 from "../imgs/galary010.jpeg";
import galary011 from "../imgs/galary011.jpeg";
import galary012 from "../imgs/galary012.jpeg";
import galary013 from "../imgs/galary013.jpeg";
import galary014 from "../imgs/galary014.jpeg";
import galary015 from "../imgs/galary015.jpeg";
import galary016 from "../imgs/galary016.jpeg";

import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const useStyles = makeStyles((theme) => ({
  gallarygrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "95vw",
  },
  paper: {
    position: "absolute",
    width: "80vw",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: "1rem 2rem 2rem 2rem",
  },
  gpaper: {
    position: "absolute",
    width: "90vw",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
  },
}));

const carouselData = [
  { src: galary001 },
  { src: galary002 },
  { src: galary003 },
  { src: galary011 },
  { src: galary004 },
  { src: galary005 },
  { src: galary006 },
  { src: galary007 },
  { src: galary008 },
  { src: galary009 },
  { src: galary010 },
  { src: galary012 },
  { src: galary013 },
  { src: galary014 },
  { src: galary015 },
  { src: galary016 },
];

const Landing = () => {
  const classes = useStyles();
  return (
    <div className="wrapper">
      <section className="visual-section" style={{ marginBottom: "10rem" }}>
        {/* <div className="vertical-item-date"><span className="date-string">10</span>???<span className="date-string">24</span>???</div> */}
        <div className="vertical-item-photo">
          <img src={main} alt="main" style={{ width: "85vw" }} />
        </div>
        <div className="vertical-item-info">
          <p className="info-major">????????? ?????? ?????????</p>
          <p className="info-text">2021. 10. 24. ????????? ?????? 12:10</p>
          <p className="info-text">???????????????????????? ????????? 2???</p>
        </div>
      </section>
      <div className="section-divider" />
      <section className="greeting-section">
        <div className="greeting-tit">" ?????? ??????, ?????? ?????? "</div>
        <div className="greeting-txt">
          ?????? ?????? ??? ??????,
          <br />
          ?????? ?????? ??? ?????????
          <br />
          ???????????? ?????????
          <br />
          ?????? ?????? ??? ?????? ?????????
          <br />
          ???????????????.
          <br />
          ????????? ????????? ????????????
          <br />
          ???????????? ??????????????????
          <br />
          ?????????????????????.
        </div>
        <div className="greeting-info">
          (???)????????? ?? ?????????{" "}
          <span className="greeting-info-small">??? ??????</span>{" "}
          <span className="greeting-info-medium">??????</span>
          <br />
          ????????? ?? ????????? <span className="greeting-info-small">
            ??? ??????
          </span>{" "}
          <span className="greeting-info-medium">??????</span>
        </div>
      </section>
      <section className="banner-section">
        <div className="banner-tb">
          <p className="banner-txt">
            ??? ??? ??? &nbsp; ??? ??? ??? &nbsp; ??? ??? ??? ??? ???
          </p>
        </div>
      </section>
      <section className="slsbTel-section">
        <div className="slsbTel-ib">
          <div className="slsbTel-row">
            <div className="slsb-tit">???????????? ????????????</div>
            <div className="slsb-btn">
              <IconButton aria-label="phone-call-to-groom">
                <a href="tel:01057137283">
                  <PhoneRounded color="primary" />
                </a>
              </IconButton>
              <IconButton color="default" aria-label="message-to-groom">
                <a href="sms:01057137283">
                  <EmailRounded color="action" />
                </a>
              </IconButton>
            </div>
          </div>
          <div className="slsbTel-row">
            <div className="slsb-tit">???????????? ????????????</div>
            <div className="slsb-btn">
              <IconButton aria-label="phone-call-to-bride">
                <a href="tel:01020130659">
                  <PhoneRounded color="secondary" />
                </a>
              </IconButton>
              <IconButton color="default" aria-label="message-to-bride">
                <a href="sms:01020130659">
                  <EmailRounded color="action" />
                </a>
              </IconButton>
            </div>
          </div>
        </div>
      </section>
      <div className="section-divider" />
      <section className="timer-section">
        <CountDown date="2021-10-24 12:10" />
      </section>
      <div className="section-divider" />
      <section className="gallery-section">
        <div className="gallery-tit">" Gallery "</div>
        <div className={classes.gallarygrid}>
          <Carousel images={carouselData} style={{ height: 500, width: 800 }} />
        </div>
        <div className="gallery-txt">
          ?????? ??? ?????????
          <br />
          ???????????? ?????????
          <br />
          ?????? ????????????.
        </div>
      </section>
      <section className="location-section">
        <div className="location-tit">" ????????? ??? "</div>
        <div className="location-map-area">
          <div className="location-head">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="location-tit-tit">
                ???????????????????????? ????????? 2???
              </div>
              <div className="location-txt">
                <p>
                  ?????? ????????? ????????? ????????? 178(?????? ????????? ????????? ????????? 1124
                  ???????????????????????? ???????????? 2???)
                </p>
                <p>Tel. 031-224-2030</p>
              </div>
            </div>
            <IconButton aria-label="phone-call-to-weddingcompany">
              <a href="tel:0312242030">
                <PhoneRounded color="secondary" />
              </a>
            </IconButton>
          </div>
          <div id="map_canvas" className="map">
            <div
              style={{
                font: "normal normal 400 12px/normal dotum, sans-serif",
                width: "100%",
                height: "100%",
                color: "#333",
                position: "relative",
              }}
            >
              <div style={{ height: "100%" }}>
                <CopyToClipboard text="??????????????????????????????">
                  <a
                    href="https://map.kakao.com/link/search/??????????????????????????????"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="map"
                      src={thekwedding}
                      width="100%"
                      height="100%"
                      alt="thekweddingconvention_roadmap"
                    />
                  </a>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-divider" />
    </div>
  );
};

export default Landing;
