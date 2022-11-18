import React from 'react';
import bnb from '../../Assets/bnb.png';
import eth1 from '../../Assets/eth1.jpg';
import sushi from '../../Assets/sushi.jpg';
import wbtr from '../../Assets/wbtr.jpg';
import mim from '../../Assets/mim.jpg';
import spell from '../../Assets/spell.webp';
import ice from '../../Assets/ice.webp';
import usdc from '../../Assets/usdc.jpg';
import usdt from '../../Assets/usdt.jpg';
import dai from '../../Assets/dai.png';
import frax from '../../Assets/frax.webp';
import ADA from '../../Assets/ADA.png';
import ALPHA from '../../Assets/ALPHA.png';
import arrow_down from '../../Assets/arrow_down.png';
import ATM from '../../Assets/ATM.png';
import ATOM from '../../Assets/ATOM.png';
import BAKE from '../../Assets/BAKE.png';
import bLBT from '../../Assets/bLBT.png';
import ANKR from '../../Assets/ANKR.png';
import wbnb from '../../Assets/wbnb.png';
import { IoIosArrowDown } from 'react-icons/io';

function Fcc() {
  return (
    <div>
        <div className="exch_bg mb-4">

<div className="exchange_wrap" style={{ padding: "5px" }}>
    <div className="exchange_tools">
        <div className="bnb_btn bnb_position">
            <p className="swap_from">Swap To (FCC):</p>


            <button type="button" className="btn min_wth FaArrowDown btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="bnbRotate"></div>
                <span className="selct_tkn">Select a token</span>
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content contennt">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Select a token </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="overlay8-content text-left">
                                <div className="swapbg8">
                                    <div className="select_token">
                                        <div className="select_input">
                                            <input type="text" placeholder="Search name or paste address" className="eeRXNx" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="para">
                                            <p>Common bases</p>

                                        </div>
                                        <div className="eth">
                                            <div className="eth_img">
                                                <img src={eth1} /> ETH
                                            </div>
                                            <div className="eth_img">
                                                <img src={sushi} /> SUSHI
                                            </div>
                                            <div className="eth_img">
                                                <img src={wbtr} /> WBTR
                                            </div>
                                            <div className="eth_img">
                                                <img src={mim} />  MIM
                                            </div>
                                            <div className="eth_img">
                                                <img src={spell} />  SPELL
                                            </div>


                                        </div>

                                        <div className="eth">
                                            <div className="eth_img">
                                                <img src={ice} /> ICE
                                            </div>
                                            <div className="eth_img">
                                                <img src={usdc} /> USDC
                                            </div>
                                            <div className="eth_img">
                                                <img src={usdt} /> USDT
                                            </div>
                                            <div className="eth_img">
                                                <img src={dai} />  DAI
                                            </div>
                                            <div className="eth_img">
                                                <img src={frax} />  FRAX
                                            </div>


                                        </div>


                                        <div className="chose_token">

                                            <div className="token_name">Token Name</div>
                                            <div className="token_arrow"> <img src={arrow_down} /> </div> </div> <div className="all_token scroll_track">
                                            {/* <!----token list 1----> */}
                                            <div className="token_list">
                                                <div className="token_icon">
                                                    <h2><img src={bnb} />BNB</h2>
                                                </div>
                                                <div className="token_list"></div>
                                            </div>
                                            {/* <!----token list 2----> */}
                                            <div className="token_list">
                                                <div className="token_icon">
                                                    <h2><img src={ADA} />ADA</h2>
                                                </div>
                                                <div className="token_list"></div>
                                            </div>
                                            {/* <!----token list 3----> */}
                                            <div className="token_list">
                                                <div className="token_icon">
                                                    <h2><img src={ALPHA} />ALPHA</h2>
                                                </div>
                                                <div className="token_list"></div>
                                            </div>
                                            {/* <!----token list 4----> */}
                                            <div className="token_list">
                                                <div className="token_icon">
                                                    <h2><img src={ANKR} />ANKR</h2>
                                                </div>
                                                <div className="token_list"></div>
                                            </div>
                                            {/* <!----token list 5----> */}
                                            <div className="token_list">
                                                <div className="token_icon">
                                                    <h2><img src={ATM} />ATM</h2>
                                                </div>
                                                <div className="token_list"></div>
                                            </div>
                                            {/* <!----token list 6----> */}
                                            <div className="token_list">
                                                <div className="token_icon">
                                                    <h2><img src={ATOM} />ATOM</h2>
                                                </div>
                                                <div className="token_list"></div>
                                            </div>
                                            {/* <!----token list 7----> */}
                                            <div className="token_list">
                                                <div className="token_icon">
                                                    <h2><img src={BAKE} />BAKE</h2>
                                                </div>
                                                <div className="token_list"></div>
                                            </div>
                                            {/* <!----token list 8----> */}
                                            <div className="token_list">
                                                <div className="token_icon">
                                                    <h2><img src={bLBT} />bLBT</h2>
                                                </div>
                                                <div className="token_list"></div>
                                            </div>
                                            {/* <!----token list 9----> */}
                                            <div className="token_list">
                                                <div className="token_icon">
                                                    <h2><img src={usdt} />USDT</h2>
                                                </div>
                                                <div className="token_list"></div>
                                            </div>
                                            {/* <!----token list 10----> */}
                                            <div className="token_list">
                                                <div className="token_icon">
                                                    <h2><img src={wbnb} />WBNB</h2>
                                                </div>
                                                <div className="token_list"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="exchange_hd ex_font width_fluid mt_14M">
        <input type="number" className="input_set" placeholder="0.0" />
    </div>
</div>
</div>

    </div>
  )
}

export default Fcc