import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    let activeClassName = "navActive"

    return (
        <div>
            <div className="sidebar">
                <div className="id">
                    <div className="idContent">
                        <img src={"./media/billGates.jpg"} alt="profil-pic"/>
                        <h3>Kevin Mas</h3>
                    </div>
                </div>

                <div className="navigation">
                    <ul>
                        <li>
                            <NavLink to={'/'} className={({isActive}) => (isActive ? activeClassName : undefined)}>
                                <i className="fas fa-home"/>
                                <span>Accueil</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/competences'}
                                     className={({isActive}) => (isActive ? activeClassName : undefined)}>
                                <i className="fas fa-mountain"/>
                                <span>Compétences</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/portfolio'} className={({isActive}) => (isActive ? activeClassName : undefined)}>
                                <i className="fas fa-images"/>
                                <span>Portfolio</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/contact'} className={({isActive}) => (isActive ? activeClassName : undefined)}>
                                <i className="fas fa-address-book"/>
                                <span>Contact</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                    <ul>
                        <li>
                            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-codepen"/>
                            </a>
                        </li>
                    </ul>
                    <div className="signature">
                        <p>Mk-development - 2022</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;