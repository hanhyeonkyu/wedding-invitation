import { Button, IconButton, Modal, Snackbar } from '@material-ui/core';
import { EmailRounded, PhoneRounded } from '@material-ui/icons';
import CountDown from '../comps/CountDown';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import "./Landing.css"
import thekwedding from './thekwedding.png';
import main from "./main.jpeg"
import galary001 from "./galary001.jpeg"
import galary002 from "./galary002.jpeg"
import galary003 from "./galary003.jpeg"
import galary004 from "./galary004.jpeg"
import galary005 from "./galary005.jpeg"
import galary006 from "./galary006.jpeg"
import galary007 from "./galary007.jpeg"
import galary008 from "./galary008.jpeg"
import galary009 from "./galary009.jpeg"
import galary010 from "./galary010.jpeg"
import galary011 from "./galary011.jpeg"
import galary012 from "./galary012.jpeg"
import galary013 from "./galary013.jpeg"
import galary014 from "./galary014.jpeg"
import galary015 from "./galary015.jpeg"
import galary016 from "./galary016.jpeg"

import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';


const useStyles = makeStyles((theme) => ({
    gallarygrid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: "95vw"
    },
    paper: {
        position: 'absolute',
        width: '80vw',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    gpaper: {
        position: 'absolute',
        width: '90vw',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
    }
}));

const tileData = [
    {
        img: galary001,
        title: 'galary001',
        author: 'alex',
        cols: 2,
    }, {
        img: galary002,
        title: 'galary002',
        author: 'alex',
        cols: 1,
    }, {
        img: galary003,
        title: 'galary003',
        author: 'alex',
        cols: 1,
    }, {
        img: galary011,
        title: 'galary011',
        author: 'alex',
        cols: 2,
    }, {
        img: galary004,
        title: 'galary004',
        author: 'alex',
        cols: 1,
    }, {
        img: galary005,
        title: 'galary005',
        author: 'alex',
        cols: 1,
    }, {
        img: galary006,
        title: 'galary006',
        author: 'alex',
        cols: 1,
    }, {
        img: galary007,
        title: 'galary007',
        author: 'alex',
        cols: 1,
    }, {
        img: galary008,
        title: 'galary008',
        author: 'alex',
        cols: 1,
    }, {
        img: galary009,
        title: 'galary009',
        author: 'alex',
        cols: 1,
    }, {
        img: galary010,
        title: 'galary010',
        author: 'alex',
        cols: 1,
    }, {
        img: galary012,
        title: 'galary012',
        author: 'alex',
        cols: 1,
    }, {
        img: galary013,
        title: 'galary013',
        author: 'alex',
        cols: 1,
    }, {
        img: galary014,
        title: 'galary014',
        author: 'alex',
        cols: 1,
    }, {
        img: galary015,
        title: 'galary015',
        author: 'alex',
        cols: 1,
    }, {
        img: galary016,
        title: 'galary016',
        author: 'alex',
        cols: 1,
    }
];

const Landing = () => {
    const classes = useStyles();
    const [gopen, setGopen] = React.useState(false);
    const handleClose = (target) => {
        if (target === 'modal') {
            setOpen(false);
        } else if (target === 'snack') {
            setSopen(false)
        } else if (target === 'galary') {
            setGopen(false)
        }
    };
    const neutralizeBack = (callback) => {
        window.history.pushState(null, "", window.location.href);
        window.onpopstate = () => {
            window.history.pushState(null, "", window.location.href);
            callback('galary');
        };
    };
    const [open, setOpen] = React.useState(false);
    const [imag, setImg] = React.useState(galary001)
    const [sopen, setSopen] = React.useState(false);
    const [isBride, setIsBride] = React.useState(true)
    const handleOpen = (isBride) => {
        setIsBride(isBride)
        setOpen(true);
    };
    const handleGalary = (img) => {
        setImg(img)
        setGopen(true)
        neutralizeBack(handleClose)
    }
    const handleCopy = () => {
        setSopen(true)
    }

    return (
        <div className="wrapper">
            <section className="visual-section" style={{ marginBottom: "10rem" }}>
                {/* <div className="vertical-item-date"><span className="date-string">10</span>月<span className="date-string">24</span>日</div> */}
                <div className="vertical-item-photo">
                    <img src={main} alt="main" style={{ width: '85vw' }} />
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
                    (故)한백희 · 장인숙 <span className="greeting-info-small">의 장남</span> <span className="greeting-info-medium">현규</span>
                    <br />
                    김동연 · 김순비 <span className="greeting-info-small">의 장녀</span> <span className="greeting-info-medium">인혜</span>
                </div>
            </section>
            <section className="banner-section">
                <div className="banner-tb">
                    <p className="banner-txt">소 중 한 &nbsp; 당 신 을 &nbsp; 초 대 합 니 다</p>
                </div>
            </section>
            <section className="slsbTel-section">
                <div className="slsbTel-ib">
                    <div className="slsbTel-row">
                        <div className="slsb-tit">신랑에게 연락하기</div>
                        <div className="slsb-btn">
                            <IconButton aria-label="phone-call-to-groom">
                                <a href="tel:01057137283"><PhoneRounded color="primary" /></a>
                            </IconButton>
                            <IconButton color="default" aria-label="message-to-groom">
                                <a href="sms:01057137283"><EmailRounded color="action" /></a>
                            </IconButton>
                        </div>
                    </div>
                    <div className="slsbTel-row">
                        <div className="slsb-tit">신부에게 연락하기</div>
                        <div className="slsb-btn">
                            <IconButton aria-label="phone-call-to-bride">
                                <a href="tel:01020130659"><PhoneRounded color="secondary" /></a>
                            </IconButton>
                            <IconButton color="default" aria-label="message-to-bride">
                                <a href="sms:01020130659"><EmailRounded color="action" /></a>
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
                    <GridList cellHeight={160} className={classes.gridList} cols={3}>
                        {tileData.map((tile, index) => (
                            <GridListTile key={index} cols={tile.cols || 1}>
                                <img src={tile.img} alt={tile.title} onClick={(e) => handleGalary(tile.img)} />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
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
                        <div style={{ display: 'flex', flexDirection: "column" }}>
                            <div className="location-tit-tit">더케이웨딩컨벤션 웨딩홀 2층</div>
                            <div className="location-txt">
                                <p>경기 수원시 팔달구 권광로 178(경기 수원시 팔달구 인계동 1124 한국교직원공제회 경기회관 2층)</p>
                                <p>Tel. 031-224-2030</p>
                            </div>
                        </div>
                        <IconButton aria-label="phone-call-to-weddingcompany">
                            <a href="tel:0312242030"><PhoneRounded color="secondary" /></a>
                        </IconButton>
                    </div>
                    <div id="map_canvas" className="map">
                        <div style={{ font: "normal normal 400 12px/normal dotum, sans-serif", width: "100%", height: "100%", color: "#333", position: "relative" }}>
                            <div style={{ height: "100%" }}>
                                <CopyToClipboard text="더케이웨딩컨벤션수원" onCopy={handleCopy}>
                                    <a href="https://map.kakao.com/link/search/더케이웨딩컨벤션수원" target="_blank" rel="noreferrer">
                                        <img className="map" src={thekwedding} width="100%" height="100%" alt="thekweddingconvention_roadmap" />
                                    </a >
                                </CopyToClipboard>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="section-divider" />
            <section className="money-section">
                <div style={{ marginBottom: '1rem' }}>
                    신랑측에게 마음 보내기 <Button onClick={(e) => handleOpen(false)} style={{ borderRadius: "1rem", marginLeft: '1rem' }} size="large" variant="contained" color="primary">계좌번호 보기</Button>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    신부측에게 마음 보내기 <Button onClick={(e) => handleOpen(true)} style={{ borderRadius: "1rem", marginLeft: '1rem' }} size="large" variant="contained" color="secondary">계좌번호 보기</Button>
                </div>
            </section>
            <Modal
                open={open}
                onClose={(e) => handleClose("modal")}
            >
                <div style={{ top: `30%`, left: `30%`, transform: `translate(-30%, -30%)`, textAlign: 'left', borderRadius: "2rem", backgroundColor: "aliceblue", borderColor: "aliceblue" }} className={classes.paper}>
                    {isBride ? (
                        <div>
                            <h3>신부(김인혜)에게 마음 보내기</h3>
                            <CopyToClipboard text="신한 110-424-549126" onCopy={handleCopy}><span><span style={{ color: "#0044bf", textAlign: 'left', fontWeight: 500, textDecorationLine: "underline" }}>카카오뱅크 3333-15-8460877</span><span> ⬅️ Copy</span></span></CopyToClipboard>
                            <h3>혼주(김순비)에게 마음 보내기</h3>
                            <CopyToClipboard text="농협 235100-56-030476" onCopy={handleCopy}><span><span style={{ color: "#0044bf", textAlign: 'left', fontWeight: 500, textDecorationLine: "underline" }}>농협 235100-56-030476</span><span> ⬅️ Copy</span></span></CopyToClipboard>
                        </div>
                    ) : (
                        <div>
                            <h3>신랑(한현규)에게 마음 보내기</h3>
                            <CopyToClipboard text="카카오뱅크 3333-05-7361141" onCopy={handleCopy}><span><span style={{ color: "#0044bf", textAlign: 'left', fontWeight: 500, textDecorationLine: "underline" }}>카카오뱅크 3333-15-8460877</span><span> ⬅️ Copy</span></span></CopyToClipboard>
                            <h3>혼주(장인숙)에게 마음 보내기</h3>
                            <CopyToClipboard text="국민은행 603701-04-131030" onCopy={handleCopy}><span><span style={{ color: "#0044bf", textAlign: 'left', fontWeight: 500, textDecorationLine: "underline" }}>국민은행 603701-04-131030</span><span> ⬅️ Copy</span></span></CopyToClipboard>
                        </div>
                    )}
                </div>
            </Modal>
            <Modal
                open={gopen}
                onClose={(e) => handleClose("galary")}
            >
                <div style={{ top: `40%`, left: `32%`, transform: `translate(-30%, -30%)`, textAlign: 'left', backgroundColor: "aliceblue", borderColor: "aliceblue" }} className={classes.gpaper}>
                    <img src={imag} alt={"galary"} width={"100%"} />
                </div>
            </Modal>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={sopen}
                onClose={(e) => handleClose("snack")}
                autoHideDuration={1500}
                message={"복사됐어요!"}
                key={sopen}
            />
        </div>
    );
}

export default Landing;
