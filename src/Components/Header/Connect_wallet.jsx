import React from 'react';
import meta_mask from '../../Assets/meta_mask.png';
import trust_wallet from '../../Assets/trust_wallet.png';
import math_wallet from '../../Assets/math_wallet.png';
import connect_wallet from '../../Assets/connect_wallet.png';
import safepal_wallet from '../../Assets/safepal_wallet.png';
import { GrCircleQuestion } from 'react-icons/gr';


function Connect_wallet() {
  return (
    <div>
        <div className="overlay9-content">
            <div className="swapbg9">
                <div className="connect_wallet">
                    {/* <!----wallet box 1--> */}
                    <button className="connect_metamast">
                        <div className="wallet_name">
                            <h3>Metamask</h3>
                        </div>
                        <div className="wallet_name">
                            <img src={meta_mask}/>
                        </div>
                    </button>
                    {/* <!----wallet box 2--> */}
                    <button className="connect_metamast">
                        <div className="wallet_name">
                            <h3>TrustWallet</h3>
                        </div>
                        <div className="wallet_name">
                            <img src={trust_wallet}/>
                        </div>
                    </button>
                    {/* <!----wallet box 3--> */}
                    <button className="connect_metamast">
                        <div className="wallet_name">
                            <h3>MathWallet</h3>
                        </div>
                        <div className="wallet_name">
                            <img src={math_wallet}/>
                        </div>
                    </button>
                    {/* <!----wallet box 4--> */}
                    <button className="connect_metamast">
                        <div className="wallet_name">
                            <h3>MathWallet</h3>
                        </div>
                        <div className="wallet_name">
                            <img src={math_wallet}/>
                        </div>
                    </button>
                    {/* <!----wallet box 5--> */}
                    <button className="connect_metamast">
                        <div className="wallet_name">
                            <h3>WalletConnect</h3>
                        </div>
                        <div className="wallet_name">
                            <img src={connect_wallet}/>
                        </div>
                    </button>
                    {/* <!----wallet box 6--> */}
                    <button className="connect_metamast">
                        <div className="wallet_name">
                            <h3>Binance Chain Wallet</h3>
                        </div>
                        <div className="wallet_name">
                            <img src={connect_wallet}/>
                        </div>
                    </button>
                    {/* <!----wallet box 7--> */}
                    <button className="connect_metamast">
                        <div className="wallet_name">
                            <h3>SafePal Wallet</h3>
                        </div>
                        <div className="wallet_name">
                            <img src={safepal_wallet}/>
                        </div>
                    </button>
                    <div className="connect_info">
                        <a href="#"><span className="question_mark"><GrCircleQuestion /></span>Learn how to connect</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Connect_wallet