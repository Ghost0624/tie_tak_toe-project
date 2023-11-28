import React from "react";
import { Link } from "react-router-dom";
import './dashboard.css'

const Dashboard = () => {
    return (
        <div className="d-flex flex-column">
            <header>
                <h1>Ghost</h1>
            </header>
            <section className="d-flex flex-row">
                <div className="page-section">
                    <Link className="page" to="/shop">Shop</Link>
                    <Link className="page" to="/blog">Blog</Link>
                    <Link className="page" to="/chat">Chatting</Link>
                </div>
                <div className="other-section d-flex flex-row">
                    <Link className="rest" to="/rest">Rest</Link>
                </div>
            </section>
        </div>
    )
}

export default Dashboard;
