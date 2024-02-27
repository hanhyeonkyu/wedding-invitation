import { Box, IconButton } from "@mui/material";
import { EmailRounded, PhoneRounded } from "@mui/icons-material";
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
import CountDown2 from "../comps/CountDown2";

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
  return (
    <div className="wrapper">
      <section className="visual-section" style={{ marginBottom: "10rem" }}>
        {/* <div className="vertical-item-date"><span className="date-string">10</span>月<span className="date-string">24</span>日</div> */}
        <div className="vertical-item-photo">
          <img src={main} alt="main" style={{ width: "85vw" }} />
        </div>
        <div className="vertical-item-info">
          <p className="info-major">한현규 ♥️ 김인혜</p>
          <p className="info-text">2021. 10. 24. 일요일 오후 12:10</p>
          <p className="info-text">더케이웨딩컨벤션 웨딩홀 2층</p>
        </div>
      </section>
      <div className="section-divider" />
      <section className="greeting-section">
        <div className="greeting-tit">" 이제 서로, 평생 함께 "</div>
        <div className="greeting-txt">
          가을 햇살 한 줄기,
          <br />
          산들 바람 한 점에도
          <br />
          하하호호 웃으며
          <br />
          함께 걸을 수 있는 사람을
          <br />
          만났습니다.
          <br />
          오셔서 저희의 산책길을
          <br />
          축복으로 물들여주시면
          <br />
          감사하겠습니다.
        </div>
        <div className="greeting-info">
          (故)한백희 · 장인숙{" "}
          <span className="greeting-info-small">의 장남</span>{" "}
          <span className="greeting-info-medium">현규</span>
          <br />
          김동연 · 김순비 <span className="greeting-info-small">
            의 장녀
          </span>{" "}
          <span className="greeting-info-medium">인혜</span>
        </div>
      </section>
      <section className="banner-section">
        <div className="banner-tb">
          <p className="banner-txt">
            소 중 한 &nbsp; 당 신 을 &nbsp; 초 대 합 니 다
          </p>
        </div>
      </section>
      <section className="slsbTel-section">
        <div className="slsbTel-ib">
          <div className="slsbTel-row">
            <div className="slsb-tit">신랑에게 연락하기</div>
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
            <div className="slsb-tit">신부에게 연락하기</div>
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
        <CountDown2 />
      </section>
      <div className="section-divider" />
      <section className="gallery-section">
        <div className="gallery-tit">" Gallery "</div>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            overflow: "hidden",
            backgroundColor: "#ffffff",
          }}
        >
          <Carousel images={carouselData} style={{ height: 500, width: 800 }} />
        </Box>
        <div className="gallery-txt">
          저희 두 사람의
          <br />
          아름다운 시작을
          <br />
          함께 해주세요.
        </div>
      </section>
      <section className="location-section">
        <div className="location-tit">" 오시는 길 "</div>
        <div className="location-map-area">
          <div className="location-head">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="location-tit-tit">
                더케이웨딩컨벤션 웨딩홀 2층
              </div>
              <div className="location-txt">
                <p>
                  경기 수원시 팔달구 권광로 178(경기 수원시 팔달구 인계동 1124
                  한국교직원공제회 경기회관 2층)
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
                <CopyToClipboard text="더케이웨딩컨벤션수원">
                  <a
                    href="https://map.kakao.com/link/search/더케이웨딩컨벤션수원"
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
