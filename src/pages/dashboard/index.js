import React from "react";
import { Link } from "react-router-dom";
import './dashboard.css'

const Dashboard = () => {
    return (
        <div className="d-flex">
            <header>Strong</header>
            <section>
                <Link to="/game">game</Link>
            </section>
        </div>
    )
}

export default Dashboard;
