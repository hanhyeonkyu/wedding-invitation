import { IconButton } from '@material-ui/core';
import { EmailRounded, PhoneRounded } from '@material-ui/icons';
import CountDown from '../comps/CountDown';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import "./Landing.css"

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
    return (
        <div className="wrapper">
            <section className="visual-section">
                <div className="vertical-item-date"><span className="date-string">10</span>月<span className="date-string">24</span>日</div>
                <div className="vertical-item-photo">
                    <img src="https://lh3.googleusercontent.com/proxy/cMpOLBNmzRQqUh0gZDnN6J2RqIR5Eak8wKItmxl3R-fbc_bpoLi1tiOCf7n8MBPuJ0Dfzecz2WGcjwqL1JohWcn4a6JKrL_MkwnwWkyCKZ1HanI-OA" alt="main" style={{ width: '85vw' }} />
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
                    김준수 · 이장모 <span className="greeting-info-small">의 장녀</span> <span className="greeting-info-medium">인혜</span>
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
                        {tileData.map((tile) => (
                            <GridListTile key={tile.img} cols={tile.cols || 1}>
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
                                {/* <a href="https://map.kakao.com/?urlX=510720.0&amp;urlY=1124069.0&amp;itemId=26497843&amp;q=%EC%84%9C%EC%9A%B8%EC%88%B2A%ED%83%80%EC%9B%8C&amp;srcid=26497843&amp;map_type=TYPE_MAP&amp;from=roughmap" target="_blank">
                                    <img className="map" src="//t1.daumcdn.net/roughmap/imgmap/e4a136bdc0a737dd8c6a0812eebdb5fa1bfe55660e458c000633c51c83b13def" width="100%" height="100%">
								</a> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="link">
                        <ul>
                            <li>
                                <a href="javascript:pcAlert();" className="tmap">티맵</a>
                            </li>
                            <li>
                                <a href="javascript:pcAlert();" className="kakaonavi">카카오내비</a>
                            </li>
                            <li>
                                <a href="javascript:pcAlert();" className="navermap">네이버지도</a>
                            </li>
                            <li>
                                <a href="javascript:pcAlert();" className="kakaomap">카카오맵</a>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </section>
        </div>
    );
}

export default Landing;
