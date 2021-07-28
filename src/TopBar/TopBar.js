import "../App.css"

const TopBar = () => {
    return (<>
        <header>
            <div id="Maindivheader">
                <a href="./Stories">
                    <div>
                        <div>EDYODA</div>
                        <p>Stories</p>
                    </div>
                </a>
                <div id="MaindivHeaderSubDiv">
                    <ul id="uldiv1">
                        <li>
                            <div>
                                <div>Explore Categories<span><img style={{paddingLeft: "8px"}} alt="Dropdown Icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg==" /></span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul id="uldiv2">
                        <div>
                            <p>EdYoda is free learning and knowledge <br /> sharing platform for techies</p>
                        </div>
                        <div >
                            <button style={{ width: "auto", fontSize: "0.75em", padding: "0.5em 2em", margin: "0px 1em 0px 0px", boxShadow: "none" }}>Go To Main Website</button>
                        </div>
                    </ul>
                </div>
            </div>
        </header>
    </>)
}

export default TopBar;