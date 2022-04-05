import $ from 'jquery';
import { useEffect, useState } from 'react';
function fetchMiniCard(updateCard) {
    var settings = {
        "url": "https://apiv2.cricket.com/cricket",
        "method": "POST",
        "timeout": 30000,

        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            query: "    query miniScoreCard($matchID: String!) {\r\n    miniScoreCard(matchID: $matchID) {\r\n        isDisplayDugout\r\n        batting {\r\n        matchID\r\n        playerFeedID\r\n        playerName\r\n        \r\n        playerTeam\r\n        sixes\r\n        fours\r\n        runs\r\n        playerOnStrike\r\n        playerDismissalInfo\r\n        }\r\n        bowling {\r\n        matchID\r\n        playerFeedID\r\n        playerName\r\n        playerTeam\r\n        wickets\r\n        maiden\r\n        RunsConceeded\r\n        overs\r\n        economy\r\n        }\r\n        partnership\r\n        oversRemaining\r\n        reviewDetails {\r\n        teamName\r\n        review\r\n        }\r\n        runRate\r\n        rRunRate\r\n        data {\r\n        currentinningsNo\r\n        currentInningteamID\r\n        currentInningsTeamName\r\n        seriesName\r\n        seriesID\r\n        homeTeamName\r\n        awayTeamName\r\n        toss\r\n        startEndDate\r\n        matchStatus\r\n        matchID\r\n        matchType\r\n        statusMessage\r\n        matchNumber\r\n        venue\r\n        matchResult\r\n        startDate\r\n        playerID\r\n        playerOfTheMatch\r\n        playerofTheMatchTeamShortName\r\n        firstInningsTeamID\r\n        secondInningsTeamID\r\n        thirdInningsTeamID\r\n        fourthInningsTeamID\r\n        isCricklyticsAvailable\r\n        isFantasyAvailable\r\n        isLiveCriclyticsAvailable\r\n        isAbandoned\r\n        playing11Status\r\n        probable11Status\r\n        currentDay\r\n        currentSession\r\n        teamsWinProbability {\r\n            homeTeamShortName\r\n            homeTeamPercentage\r\n            awayTeamShortName\r\n            awayTeamPercentage\r\n            tiePercentage\r\n        }\r\n        matchScore {\r\n            teamShortName\r\n            teamID\r\n            teamFullName\r\n            teamScore {\r\n            inning\r\n            inningNumber\r\n            battingTeam\r\n            runsScored\r\n            wickets\r\n            overs\r\n            runRate\r\n            battingSide\r\n            teamID\r\n            battingTeamShortName\r\n            declared\r\n            folowOn\r\n            }\r\n        }\r\n        }\r\n    }\r\n    }\r\n",
            variables: { "matchID": "205392" }
        })
    };

    $.ajax(
        settings,
    )
        .then(response => {
            let { miniScoreCard } = response.data;
            console.log("Resolved", miniScoreCard);
            updateCard(miniScoreCard)
        }).catch(error => {
            console.log("Error", error);
        })
        .done(function (response) {
            console.log("Wait... - >", response);
        });
}


export default function MatchScoreComponent() {
    const [card, updateCard] = useState();
    useEffect(() => {
        fetchMiniCard(updateCard);

    }, []);
    console.log("My Card", card);
    return <div className="container score-container">
        <CriclyticsBar />
        <div className="row">
            <div className="col-sm-6">
                <div className="player-info d-flex align-items-center">
                    <img alt="" srcSet={"https://images.cricket.com/players/61910_headshot_safari.png"} />
                    <div className="player-info-score ">
                        <div className="d-flex flag-player-name">
                            <img alt="" srcSet="https://images.cricket.com/teams/5_flag_safari.png" />
                            <h2>{card?.batting[0].playerName}</h2>

                        </div>
                        <div className="player-scores d-flex justify-content-between align-items-center ">
                            <h3 className="player-team-score">120 <span>(112)</span> </h3>
                            <h3 className="time-with-ball">6s <span>4</span> </h3>
                            <h3 className="time-with-ball">4s <span>6</span> </h3>
                        </div>
                    </div>

                </div>
                <div className="player-info d-flex align-items-center">
                    <img alt="" srcSet="https://images.cricket.com/players/61910_headshot_safari.png" />
                    <div className="player-info-score ">
                        <div className="d-flex flag-player-name">
                            <img alt="" srcSet="https://images.cricket.com/teams/5_flag_safari.png" />
                            <h2>{card?.bowling[0].playerName}</h2>

                        </div>
                        <div className="player-scores d-flex justify-content-between align-items-center ">
                            <h3 className="player-team-score">120 <span>(112)</span> </h3>
                            <h3 className="time-with-ball">6s <span>4</span> </h3>
                            <h3 className="time-with-ball">4s <span>6</span> </h3>
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-sm-6 ">
                <div className="teams-score">

                    <div className="single-team-score">
                        <div className="d-flex justify-content-between team-with-score">
                            <div className="flag-with-name d-flex">
                                <img srcSet="https://images.cricket.com/teams/7_flag_safari.png" alt="" />
                                <h2>South Africa</h2>
                            </div>
                            <div className="team-score-only">
                                <span className="scores">367/10</span>
                                <span className="team-overs">(121.0)</span>
                            </div>

                        </div>

                        <div className="team-player d-flex">
                            <div className="team-palyer-name-score d-flex justify-content-between">
                                <span>Teamba </span>
                                <span>93 </span>
                            </div>
                            <div className="vrt-divider"></div>
                            <div className="team-palyer-name-score d-flex justify-content-between">
                                <span>Teamba </span>
                                <span>93/4 </span>
                            </div>
                        </div>
                    </div>

                    <div className="hzt-divider"></div>




                </div>
            </div>
        </div>
    </div>;
}


function TitleWithArrow() {
    return <div className="grey-bar d-flex justify-content-between">
        <h2>Last 10 Balls</h2>
        <img srcSet="https://www.cricket.com/svgs/RightSchevronBlack.svg" alt="" />
    </div>
}

function CriclyticsBar() {
    return <>
        <div className="black-bar d-flex justify-content-between">
            <h2 className="match-summary">Match Summary</h2>
            <a href="#">
                <img srcSet="https://www.cricket.com/svgs/RightSchevronWhite.svg" alt="" />
            </a>
        </div>

    </>
}


function MatchRecentCompleted() {
    return <div className="player-info-wrapper">
        <div className="row">
            <div className="col-sm-6">
                <TitleWithArrow />
                <div className="live-balls d-flex justify-content-between">
                    <div className="ball">6</div>
                </div>
                <TitleWithArrow />
                <div className="projected-status d-flex justify-content-between">
                    <span>Live</span>
                    <span>Team</span>
                    <span>Projected</span>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="live-player-projections">

                </div>
            </div>
        </div>
    </div>
}

// function CriclynticsBar() {
//     return (
//         <div className="analytics d-flex align-items-center">
//             <img srcSet="https://www.cricket.com/footer/criclytics.svg" alt="" />
//             <h2 className="d-inline-block">Criclytics</h2>
//             <span className="trade-mark">TM</span>
//         </div>
//     );
// } 