import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Landing from './Landing'

class Navbar extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar" role="navigation" aria-label="main navigation">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="/">
                                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Logo"/>
                            </a>

                            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>

                        <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-start">
                            <Link className="navbar-item" to="/">
                                Home
                            </Link>

                            <Link className="navbar-item" to="/top-100-movies">
                                Top 100 Movies
                            </Link>

                            <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link" href="#">
                                More
                            </a>

                            <div className="navbar-dropdown">
                                <Link className="navbar-item" to="/about">
                                    About
                                </Link>
                                <Link className="navbar-item" to="/contact">
                                    Contact
                                </Link>
                                <hr className="navbar-divider"/>
                                <a className="navbar-item" href="https://github.com/iamashraful" target="_blank">
                                    Report an issue
                                </a>
                            </div>
                            </div>
                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                            <div className="buttons">
                                <Link className="button is-primary" to="/signup">
                                    <strong>Sign up</strong>
                                </Link>
                                <Link className="button is-light" to="/login">
                                    Log in
                                </Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </nav>

                    {/* Defining Route */}
                    <Route path="/" exact component={Landing} />
                    <Route path="/about/" component={Landing} />
                    <Route path="/contact/" component={Landing} />
                </div>
            </Router>
        )
    }
}

export default Navbar