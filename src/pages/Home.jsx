import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import $ from 'jquery';
// Import Swiper styles
import "swiper/css";
import { EffectCoverflow, Navigation } from "swiper";

async function fetchFeatureMatches() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var graphql = JSON.stringify({
        query:
            "query featuredMatches {\r\n  featurematch {\r\n    criclyticsButtonFlags {\r\n      featuredSeriesName\r\n      isFinalFour\r\n      isPlayerIndex\r\n      tourID\r\n      seriesName\r\n      frcStartTime\r\n    }\r\n    IPLpolling {\r\n      name\r\n      isPolling\r\n      display\r\n      isAuctionStarted\r\n      isCompleted\r\n    }\r\n    displayFeatureMatchScoreCard\r\n    seriesID\r\n    currentinningsNo\r\n    currentInningteamID\r\n    currentInningsTeamName\r\n    seriesName\r\n    homeTeamName\r\n    awayTeamName\r\n    toss\r\n    startEndDate\r\n    matchStatus\r\n    matchID\r\n    matchType\r\n    statusMessage\r\n    phaseOfInningFlag\r\n    matchNumber\r\n    venue\r\n    matchResult\r\n    startDate\r\n    playerOfTheMatch\r\n    playerofTheMatchTeamShortName\r\n    playing11Status\r\n    probable11Status\r\n    playerID\r\n    firstInningsTeamID\r\n    secondInningsTeamID\r\n    thirdInningsTeamID\r\n    teamsWinProbability {\r\n      homeTeamShortName\r\n      homeTeamPercentage\r\n      awayTeamShortName\r\n      awayTeamPercentage\r\n      tiePercentage\r\n    }\r\n    fourthInningsTeamID\r\n    matchScore {\r\n      teamShortName\r\n      teamID\r\n      teamFullName\r\n      teamScore {\r\n        inning\r\n        inningNumber\r\n        battingTeam\r\n        runsScored\r\n        wickets\r\n        overs\r\n        runRate\r\n        battingSide\r\n        teamID\r\n        battingTeamShortName\r\n        declared\r\n        folowOn\r\n      }\r\n    }\r\n    teamsWinProbability {\r\n      homeTeamShortName\r\n      homeTeamPercentage\r\n      awayTeamShortName\r\n      awayTeamPercentage\r\n      tiePercentage\r\n    }\r\n    isCricklyticsAvailable\r\n    isLiveCriclyticsAvailable\r\n    isAbandoned\r\n    currentDay\r\n    currentSession\r\n  }\r\n}\r\n",
        variables: {},
    });
    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: graphql,
        redirect: "follow",
    };

    return await fetch("https://apiv2.cricket.com/cricket", requestOptions);
}

function Home(props) {
    const [data, updateData] = useState(null);

    useEffect(() => {
        const fetchData = async () =>
            await fetchFeatureMatches().then((res) => res.json());
        fetchData().then((responseData) => {
            const { featurematch } = responseData.data;

            updateData(featurematch);
        });
    }, []);

    if (data == null) {
        return <h1 className="loading" > Loading... </h1>
    }
    else {
        console.log("Data : ", data);
        return (

            <>

                <div className="main-wrapper">
                    <header>
                        <div className="banner">
                            <div className="banner-slider">
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation={{}}
                                    modules={[EffectCoverflow, Navigation]}
                                    effect={"coverflow"}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    {data.map((item, index) => <SwiperSlide key={index} >     <SwiperSlideCard item={item} /></SwiperSlide>)}
                                    {/* <SwiperSlide>

                                    <SwiperSlideCard />
                                </SwiperSlide>
                             
                                <SwiperSlide>     <SwiperSlideCard /></SwiperSlide>
                                <SwiperSlide>     <SwiperSlideCard /></SwiperSlide> */}

                                </Swiper>
                            </div>
                        </div>
                    </header>
                </div>
            </>
        );
    }
}



function SwiperSlideCard(props) {
    let { item } = props;
    const awayTeamWidth = { width: `${getBarWidth(item).awayTeamWidth}%` };
    const homeTeamWidth = { width: `${getBarWidth(item).homeTeamWidth}%` };
    const tieMatchWidth = { width: `${getBarWidth(item).tiePercentage}%` };
    return <div className="slider-card">
        <h3>{item.matchNumber}. {item.seriesName}</h3>
        <div className="d-flex    justify-content-between">
            <div className="d-flex align-items-center icon city-name">
                <span className="icon"> <img srcSet="https://www.cricket.com/svgs/location-icon.svg" alt="" /> </span>
                <span>{item.venue}</span>
            </div>
            <div className="live-title d-flex align-items-center">
                <span className="live-icon d-inline-block">

                </span>
                <span className="live-text">{item.matchStatus}</span>
            </div>
        </div>
        {/* Country Flag */}
        <div className="d-flex flex-column flags-teams">
            <div className="d-flex align-items-center flags-score">
                <div className="d-flex align-items-center flags-items">
                    <img src={`https://images.cricket.com/teams/${item.matchScore[0].teamID}_flag_safari.png`} alt="" />
                    <h3> {item.matchScore[0].teamShortName} </h3>
                </div>
                <div className="scores">

                    <h3 className="d-inline">{item.matchScore[0].teamScore.length == 0 ? new Date(parseInt(item.startDate)).toDateString() : item.matchScore[0].teamScore[0]?.runsScored}</h3>
                    <span className="overs"> {item.matchScore[0].teamScore[0]?.overs} </span>
                </div>
            </div>
            <div className="d-flex align-items-center flags-score flags-items " >
                <img src={`https://images.cricket.com/teams/${item.matchScore[1].teamID}_flag_safari.png`} alt="" />
                <h3> {item.matchScore[1].teamShortName} </h3>
            </div>
        </div>

        <div className="subtitle-container" style={{ padding: (item.matchResult == "" ? 0 : "3px 8px") }}>
            {item.matchResult}
        </div>
        {
            // https://images.cricket.com/players/59429_headshot_safari.png
            item.playerOfTheMatch != "" ?
                <ManOfTheMatchAvatar items={item} />
                :
                <>
                    <div className="percent-text d-flex justify-content-between  ">
                        <div className="d-flex justify-content-between green-bar-text w-100">
                            <span>{item.teamsWinProbability.homeTeamPercentage}%</span>
                            <span>{item.teamsWinProbability.tiePercentage == 0 ? null : item.teamsWinProbability.tiePercentage + '%'}</span>
                        </div>
                        <div className="red-bar-text w-100 text-end">
                            <span>{item.teamsWinProbability.awayTeamPercentage}%</span>
                        </div>

                    </div>
                    <div className="d-flex bars">
                        <div className="green-bar" style={homeTeamWidth}></div>
                        <div className="drawer-bar" style={tieMatchWidth}></div>
                        <div className="red-bar" style={awayTeamWidth} ></div>
                    </div>
                    <div className="percent-text d-flex justify-content-between">
                        <div className="d-flex justify-content-between green-bar-text w-100" >
                            <span>{item.teamsWinProbability.homeTeamShortName}</span>
                            <span>{item.teamsWinProbability.tiePercentage != "0" ? 'Draw' : null}</span>

                        </div>
                        <div className="red-bar-text w-100 text-end">
                            <span>{item.teamsWinProbability.awayTeamShortName}</span>
                        </div>

                    </div>

                </>
        }

    </div>

}



function ManOfTheMatchAvatar(items) {
    const item = items.items;
    const [image, setImage] = useState(`https://images.cricket.com/players/${item.playerID}_headshot_safari.png`);



    return <div className="d-flex mt-3">
        <div className="player-image" style={{ marginRight: 5, width: '2.8rem', height: '2.8rem', borderRadius: '100%', overflow: 'hidden' }}>
            <img srcSet={image} alt="" style={{ width: '100%', height: '100%' }} onError={(e) => {
                console.log("Error In Image");
                setImage("https://www.cricket.com/svgs/Man-of-the-match.svg");
            }} />
        </div>
        <div className="player-title">
            <h3 style={{ margin: 0 }}>{item.playerOfTheMatch}</h3>
            <h3 className="text-muted">Man of the match</h3>
        </div>
    </div>
}


function getBarWidth(item) {
    let { homeTeamPercentage, awayTeamPercentage, tiePercentage } = item.teamsWinProbability;
    const percent = { homeTeamWidth: homeTeamPercentage, awayTeamWidth: awayTeamPercentage, tiePercentage: tiePercentage }

    return percent;
}

export default Home;
