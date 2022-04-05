export default function MatchScoreComponent() {
    return <div className="container score-container">
        <CriclyticsBar />
        <div className="row">
            <div className="col-sm-6">
                <div className="player-info d-flex align-items-center">
                    <img alt="" srcset="https://images.cricket.com/players/61910_headshot_safari.png" />
                    <div className="player-info-score ">
                        <div className="d-flex flag-player-name">
                            <img alt="" srcset="https://images.cricket.com/teams/5_flag_safari.png" />
                            <h2>Will Young</h2>

                        </div>
                        <div className="player-scores d-flex justify-content-between align-items-center ">
                            <h3 className="player-team-score">120 <span>(112)</span> </h3>
                            <h3 className="time-with-ball">6s <span>4</span> </h3>
                            <h3 className="time-with-ball">4s <span>6</span> </h3>
                        </div>
                    </div>

                </div>
                <div className="player-info d-flex align-items-center">
                    <img alt="" srcset="https://images.cricket.com/players/61910_headshot_safari.png" />
                    <div className="player-info-score ">
                        <div className="d-flex flag-player-name">
                            <img alt="" srcset="https://images.cricket.com/teams/5_flag_safari.png" />
                            <h2>Will Young</h2>

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
                        <div className="d-flex team-with-score">
                            <div className="flag-with-name">
                                <img srcSet="https://images.cricket.com/teams/7_flag_safari.png" alt="" />
                                <h2>South Africa</h2>
                            </div>
                            <div className="team-score-only">
                                <span className="scores">367/10</span>
                                <span className="team-overs">(121.0)</span>
                            </div>

                        </div>

                        <div className="team-player">
                            <div className="team-palyer-name-score">
                                <span>Teamba </span>
                            </div>
                        </div>
                    </div>






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