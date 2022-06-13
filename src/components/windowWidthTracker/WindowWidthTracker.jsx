import "./WindowWidthTracker.scss";

function WindowWidthTracker() {
    return (
        <h1 className="tracker">
            Window width: {window.innerWidth}
        </h1>
    )
}

export default WindowWidthTracker;