export default function MatchScoreComponent() {
    return <div className="container score-container">
        <div className="black-bar d-flex justify-content-between">
            <h2 className="match-summary">Match Summary</h2>
            <a href="#">
                <img srcSet="https://www.cricket.com/svgs/RightSchevronWhite.svg" alt="" />
            </a>
        </div>
        <section className="d-flex player-detail">
            <div className="players-info">
                <div className="d-flex align-items-center">
                    <div className="player-img"> <img alt="" srcset="https://images.cricket.com/players/70291_headshot_safari.png" /> </div>
                    <div className="player-team-score">
                        <div className="d-flex player-name">
                            <img srcSet="https://images.cricket.com/teams/2_flag_safari.png" alt="" />
                            <h3>Muhammad Ajmal Joy</h3>
                        </div>

                    </div>
                    <div className="test">
                        <div className="d-flex total-scores">
                            <h2>137(326)</h2>
                            <span> & </span>
                            <h2>4(9)</h2>
                        </div>
                    </div>
                </div>

            </div>
            <div className="teams-info">

            </div>
            <div></div>
        </section>
    </div>;
}

function CriclynticsBar() {
    return (
        <div className="analytics d-flex align-items-center">
            <img srcSet="https://www.cricket.com/footer/criclytics.svg" alt="" />
            <h2 className="d-inline-block">Criclytics</h2>
            <span className="trade-mark">TM</span>
        </div>
    );
} 