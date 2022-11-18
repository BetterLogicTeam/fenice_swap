import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FaTelegram } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';
import { ImFacebook } from 'react-icons/im';
import logo from '../../Assets/logo.png';
import "./Footer.css";


function Footer() {
    return (
        <div>
            <footer className="footer_section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="footer_col1">
                                <img src={logo} />
                                <p>Our community is building a comprehensive decentralized trading platform for the future of finance. Join us!</p>
                                <ul>
                                    <li><a href="https://twitter.com/wonder_swap" target="_blank"><BsTwitter /></a></li>
                                    <li><a href="https://www.facebook.com/profile.php?id=100083933690337" target="_blank"><ImFacebook /></a></li>
                                    <li><a href="https://www.instagram.com/wonderswap/" target="_blank"><BsInstagram /></a></li>
                                    <li><a href="https://t.me/wonderswap_official" target="_blank"><FaTelegram /></a></li>
                                    <li><a href="https://www.youtube.com/channel/UChsKP3LJAlSKOR8QY54kRcg" target="_blank"><BsYoutube /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row footer_rrow">
                                <div className="col-md-3">
                                    <div className="footer_col2">
                                        <h2>Products</h2>
                                        <ul>
                                            <li><a href="#">Liquidity Pools</a></li>
                                            <li><a href="#">Lending</a></li>
                                            <li><a href="#">Launchpad</a></li>
                                            <li><a href="#">Tool</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="footer_col2">
                                        <h2>Help</h2>
                                        <ul>
                                            <li><a href="#">Ask on Discord</a></li>
                                            <li><a href="#">Ask on Twitter</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="footer_col2">
                                        <h2>Developers</h2>
                                        <ul>
                                            <li><a href="#">Github</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="footer_col2">
                                        <h2>Protocol</h2>
                                        <ul>
                                            <li><a href="#">Apply for partnership</a></li>
                                            <li><a href="#">Vesting</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer