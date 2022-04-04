export default function MatchScoreComponent() {
    return <div className="container score-container">
        <CriclyticsBar />
        <div className="player-info-wrapper">
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
            <div className="analytics d-flex align-items-center">
                <img srcSet="https://www.cricket.com/footer/criclytics.svg" alt="" />
                <h2 className="d-inline-block">Criclytics</h2>
                <span className="trade-mark">TM</span>
            </div>
            <a href="#">
                <img srcSet="https://www.cricket.com/svgs/RightSchevronWhite.svg" alt="" />
            </a>
        </div>

    </>
}
