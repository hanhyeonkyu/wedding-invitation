import { Button, IconButton, Modal, Snackbar } from '@material-ui/core';
import { EmailRounded, PhoneRounded } from '@material-ui/icons';
import CountDown from '../comps/CountDown';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import "./Landing.css"
import thekwedding from './thekwedding.png';
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
}));

const tileData = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQcR4xLb_1NKaQImItdLkd2GpmaNAaGIE4vKm24COWn6uzrF88pU2BNnO6GtZIEKOBgZ0&usqp=CAU",
        title: 'Image',
        author: 'author',
        cols: 2,
    }, {
        img: "https://www.gardeningknowhow.com/wp-content/uploads/2020/12/lonely-japanese-cherry.jpg",
        title: 'Image',
        author: 'author',
        cols: 1,
    }, {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlwaE17Jsb6NCfT4mkWeD_RnDfV4N7Rcu3XhsL-Ba1AYjeirt3gX79EMYcHuoPgA2Zzow&usqp=CAU",
        title: 'Image',
        author: 'author',
        cols: 1,
    }, {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdTkDD_QeM9vcMiNr2Y8U7PrdqwCBike6kld_xpYCO0oWAAcjz9jz3e809EiOupoZLV8I&usqp=CAU",
        title: 'Image',
        author: 'author',
        cols: 1,
    }, {
        img: "https://www.gardeningknowhow.com/wp-content/uploads/2020/12/lonely-japanese-cherry.jpg",
        title: 'Image',
        author: 'author',
        cols: 1,
    }

];

const Landing = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [sopen, setSopen] = React.useState(false);
    const [isBride, setIsBride] = React.useState(true)
    const handleOpen = (isBride) => {
        setIsBride(isBride)
        setOpen(true);
    };
    const handleCopy = () => {
        setSopen(true)
    }
    const handleClose = (target) => {
        if (target === 'modal') {
            setOpen(false);
        } else if (target === 'snack') {
            setSopen(false)
        }
    };
    return (
        <div className="wrapper">
            <section className="visual-section">
                <div className="vertical-item-date"><span className="date-string">10</span>月<span className="date-string">24</span>日</div>
                <div className="vertical-item-photo">
                    <img src="http://image.newsis.com/2020/11/01/NISI20201101_0000628102_web.jpg" alt="main" style={{ width: '85vw' }} />
                </div>
                <div className="vertical-item-info">
                    <p className="info-major">한현규 ♥️ 김인혜</p>
                    <p className="info-text">2021. 10. 24. SUN PM 12:10</p>
                    <p className="info-text">더케이웨딩컨벤션 웨딩홀 2층</p>
                </div>
            </section>
            <div className="section-divider" />
            <section className="greeting-section">
                <div className="greeting-tit">" 이제 서로, 평생 함께 "</div>
                <div className="greeting-txt">
                    서로가 마주보며 다져온 사랑을
                    <br />
                    이제 함께 한 곳을 바라보며
                    <br />
                    걸어갈 수 있는 큰 사랑으로
                    <br />
                    키우고자 합니다.
                    <br />
                    저희 두 사람이 사랑의 이름으로
                    <br />
                    지켜나갈 수 있도록
                    <br />
                    앞날을 축복해 주시면
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
                            <IconButton aria-label="phone-call-to-groom">
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
                            <IconButton color="default" aria-label="phone-call-to-bride">
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
                <div className="gallery-tit">" 행복한 날들 "</div>
                <div className={classes.gallarygrid}>
                    <GridList cellHeight={160} className={classes.gridList} cols={3}>
                        {tileData.map((tile, index) => (
                            <GridListTile key={index} cols={tile.cols || 1}>
                                <img src={tile.img} alt={tile.title} />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
                <div className="gallery-txt">
                    두 사람의
                    <br />
                    아름다운 시작을
                    <br />
                    함께 해주세요.
                </div>
            </section>
            <section className="location-section">
                <div className="location-tit">" 함께 가는 길 "</div>
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
                    신랑측 마음 <Button onClick={(e) => handleOpen(false)} style={{ borderRadius: "1rem", marginLeft: '1rem' }} size="large" variant="contained" color="primary">계좌번호 보기</Button>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    신부측 마음 <Button onClick={(e) => handleOpen(true)} style={{ borderRadius: "1rem", marginLeft: '1rem' }} size="large" variant="contained" color="secondary">계좌번호 보기</Button>
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
                            <CopyToClipboard text="카카오뱅크 3333-15-8460877" onCopy={handleCopy}><span><span style={{ color: "#0044bf", textAlign: 'left', fontWeight: 500, textDecorationLine: "underline" }}>카카오뱅크 3333-15-8460877</span><span> ⬅️ Copy</span></span></CopyToClipboard>
                        </div>
                    ) : (
                        <div>
                            <h3>신랑(한현규)에게 마음 보내기</h3>
                            <CopyToClipboard text="카카오뱅크 3333-05-7361141" onCopy={handleCopy}><span><span style={{ color: "#0044bf", textAlign: 'left', fontWeight: 500, textDecorationLine: "underline" }}>카카오뱅크 3333-15-8460877</span><span> ⬅️ Copy</span></span></CopyToClipboard>
                        </div>
                    )}
                </div>
            </Modal>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={sopen}
                onClose={(e) => handleClose("snack")}
                autoHideDuration={2}
                message={"복사됐어요!"}
                key={sopen}
            />
        </div>
    );
}

export default Landing;
