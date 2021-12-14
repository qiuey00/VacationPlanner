import React from 'react'; 

export default function Header(props) { 
    
    let onClickExplore = (e) => {
        e.preventDefault()
        props.updatePage("explore")
    }
    let onClickSchedule = (e) => {
        e.preventDefault()
        props.updatePage("schedule")
    }

    return (
        <header>
            <nav>
                <ul>
                    <li className={"navLink " + (props.pageTracker === "explore" ? "active" : "")}><a  href="/" onClick={onClickExplore}>Explore</a></li>
                    <li className={"navLink " + (props.pageTracker === "schedule" ? "active" : "")}><a href="/" onClick={onClickSchedule}>Schedule</a></li>
                    <li className="title"><h1 className="title">Vacation Planner</h1></li>
                    <li className={"navLink " + (props.pageTracker === "account" ? "active" : "")}><a href="/">Account</a></li>
                    <li className={"navLink " + (props.pageTracker === "login" ? "active" : "")}><a href="/">Login</a></li>
                </ul>
            </nav>
        </header>
    )
}