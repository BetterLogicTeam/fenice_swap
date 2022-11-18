import React from 'react'
import { Link } from 'react-router-dom';
import eth from '../../Assets/eth.jpg';
import { RiArrowLeftSLine } from 'react-icons/ri';
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
import Connect_wallet from '../Header/Connect_wallet';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Import() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
        <section>
			    <div className="container-fluid">
			        <div className="row">
			        	<div className="col-md-6 py_0 offset-md-3 heading"><br/>
			        		 <div className="pools">
			                    {/* <!-- Nav pills --> */}
			                    
			                    {/* <!-- Tab panes --> */}
			                    <div className="tab-content">
			                        <div className="container">
			                            <div className="row">
			                           
			                            	<div className="col-md-12">
			                            		<div className="go">
			                            		<Link to="/"><a href=""><RiArrowLeftSLine /> Go Back</a></Link>

			                            	    </div>
			                            	    <h1 className="text-3xl">Import Pool</h1>
			                            	    <div className="back">

			                            	    
			                            	    <h3 className="heading1">Tip: Use this tool to find pairs that don't automatically appear in the interface</h3>
			                            	    </div>
			                            	    
			                            	
			                                   <div className="exchange_tab">
			                                
			                                
                                            <div className="exch_bg">
                                            <div className="exchange_wrap" style={{ padding: "5px" }}>
                                                <div className="exchange_tools">
                                                    <div className="bnb_btn bnb_position">
                                                        <span className="swap_from">Swap From</span>
                                                        <button onclick="openNav8()">
                                                            <img src={eth} />
                                                            <span><b>ETH</b></span>


                                                            <i className="fa fa-chevron-down"></i>
                                                        </button>

                                                        {/* <!-- Button trigger modal --> */}
                                                        <div type="button" className="btn FaArrowDown btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <IoIosArrowDown />
                                                        </div>

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
                                            </div>
                                        </div>
                                        <div className="exchange_arrow">
                                            {/* <i className="fa fa-sort"></i> */}
                                            <div ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "100%", transform: "translate3d(0px, 0px, 0px)", contentVisibility: "visible" }}><defs><clipPath id="__lottie_element_402"><rect width="500" height="500" x="0" y="0"></rect></clipPath><clipPath id="__lottie_element_404"><path d="M0,0 L500,0 L500,500 L0,500z"></path></clipPath></defs><g clip-path="url(#__lottie_element_402)"><g transform="matrix(4.5,0,0,4.5,207.25,194.875)" opacity="1" style={{ display: "block" }}><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(226,226,226)" stroke-opacity="1" stroke-width="5.6000000000000005" d=" M28.945999145507812,-27.937000274658203 C28.966999053955078,-9.605999946594238 29.014999389648438,33.75299835205078 29.034000396728516,50.236000061035156"></path></g></g><g transform="matrix(3.1819803714752197,-3.1819803714752197,3.1819803714752197,3.1819803714752197,363.2012939453125,326.5682373046875)" opacity="1" style={{ display: "block" }}><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(226,226,226)" stroke-opacity="1" stroke-width="5.6000000000000005" d=" M-20.548999786376953,-4.929999828338623 C-20.548999786376953,-4.929999828338623 -20.548999786376953,12.746999740600586 -20.548999786376953,12.746999740600586 C-20.548999786376953,12.746999740600586 -2.927000045776367,12.746999740600586 -2.927000045776367,12.746999740600586"></path></g></g><g transform="matrix(-4.5,0,0,-4.5,292.75,305.125)" opacity="1" style={{ display: "block" }}><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(226,226,226)" stroke-opacity="1" stroke-width="5.6000000000000005" d=" M28.945999145507812,-27.937000274658203 C28.966999053955078,-9.605999946594238 29.014999389648438,33.75299835205078 29.034000396728516,50.236000061035156"></path></g></g><g transform="matrix(-3.1819803714752197,3.1819803714752197,-3.1819803714752197,-3.1819803714752197,136.79869079589844,173.43174743652344)" opacity="1" style={{ display: "block" }}><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(226,226,226)" stroke-opacity="1" stroke-width="5.6000000000000005" d=" M-20.548999786376953,-4.929999828338623 C-20.548999786376953,-4.929999828338623 -20.548999786376953,12.746999740600586 -20.548999786376953,12.746999740600586 C-20.548999786376953,12.746999740600586 -2.927000045776367,12.746999740600586 -2.927000045776367,12.746999740600586"></path></g></g><g clip-path="url(#__lottie_element_404)" transform="matrix(1,0,0,1,0,0)" opacity="1" style={{ display: "block" }}></g></g></svg></div>
                                        </div>
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
                                            </div>
                                        </div>

                                        <div className="wallet_btn mr_set">
                                            

{/* <!-- Modal --> */}
<Button variant="" className="btn button btn-success d-inline-block ml-auto contact" onClick={handleShow}>
 Connect to a Wallet
      </Button>

      <Modal
      className="modal fade "
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title fs-5">Connect to a Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Connect_wallet />
        </Modal.Body>
      </Modal>
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
			</section>
    </div>
  )
}

export default Import