import React from 'react'
import { Link } from 'react-router-dom';
import { RiArrowLeftSLine } from 'react-icons/ri';
import Connect_wallet from '../Header/Connect_wallet';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Eth from './Eth';
import Fcc from '../Landing/Fcc';


function Import() {
    const [value1, setValue1] = React.useState(false)

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
			                                
			                                
                                               {
                                value1 == false ?
                                    <>
                                        <Eth />
                                        <div className="exchange_arrow">
                                            <div onClick={() => setValue1(true)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "100%", transform: "translate3d(0px, 0px, 0px)", contentVisibility: "visible" }}><defs><clipPath id="__lottie_element_402"><rect width="500" height="500" x="0" y="0"></rect></clipPath><clipPath id="__lottie_element_404"><path d="M0,0 L500,0 L500,500 L0,500z"></path></clipPath></defs><g clip-path="url(#__lottie_element_402)"><g transform="matrix(4.5,0,0,4.5,207.25,194.875)" opacity="1" style={{ display: "block" }}><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(226,226,226)" stroke-opacity="1" stroke-width="5.6000000000000005" d=" M28.945999145507812,-27.937000274658203 C28.966999053955078,-9.605999946594238 29.014999389648438,33.75299835205078 29.034000396728516,50.236000061035156"></path></g></g><g transform="matrix(3.1819803714752197,-3.1819803714752197,3.1819803714752197,3.1819803714752197,363.2012939453125,326.5682373046875)" opacity="1" style={{ display: "block" }}><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(226,226,226)" stroke-opacity="1" stroke-width="5.6000000000000005" d=" M-20.548999786376953,-4.929999828338623 C-20.548999786376953,-4.929999828338623 -20.548999786376953,12.746999740600586 -20.548999786376953,12.746999740600586 C-20.548999786376953,12.746999740600586 -2.927000045776367,12.746999740600586 -2.927000045776367,12.746999740600586"></path></g></g><g transform="matrix(-4.5,0,0,-4.5,292.75,305.125)" opacity="1" style={{ display: "block" }}><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(226,226,226)" stroke-opacity="1" stroke-width="5.6000000000000005" d=" M28.945999145507812,-27.937000274658203 C28.966999053955078,-9.605999946594238 29.014999389648438,33.75299835205078 29.034000396728516,50.236000061035156"></path></g></g><g transform="matrix(-3.1819803714752197,3.1819803714752197,-3.1819803714752197,-3.1819803714752197,136.79869079589844,173.43174743652344)" opacity="1" style={{ display: "block" }}><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(226,226,226)" stroke-opacity="1" stroke-width="5.6000000000000005" d=" M-20.548999786376953,-4.929999828338623 C-20.548999786376953,-4.929999828338623 -20.548999786376953,12.746999740600586 -20.548999786376953,12.746999740600586 C-20.548999786376953,12.746999740600586 -2.927000045776367,12.746999740600586 -2.927000045776367,12.746999740600586"></path></g></g><g clip-path="url(#__lottie_element_404)" transform="matrix(1,0,0,1,0,0)" opacity="1" style={{ display: "block" }}></g></g></svg></div>
                                        </div>
                                        <Fcc />

                                    </>
                                    :
                                    <>
                                        <Fcc />
                                        <div className="exchange_arrow">
                                            <div onClick={() => setValue1(false)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "100%", transform: "translate3d(0px, 0px, 0px)", contentVisibility: "visible" }}><defs><clipPath id="__lottie_element_402"><rect width="500" height="500" x="0" y="0"></rect></clipPath><clipPath id="__lottie_element_404"><path d="M0,0 L500,0 L500,500 L0,500z"></path></clipPath></defs><g clip-path="url(#__lottie_element_402)"><g transform="matrix(4.5,0,0,4.5,207.25,194.875)" opacity="1" style={{ display: "block" }}><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(226,226,226)" stroke-opacity="1" stroke-width="5.6000000000000005" d=" M28.945999145507812,-27.937000274658203 C28.966999053955078,-9.605999946594238 29.014999389648438,33.75299835205078 29.034000396728516,50.236000061035156"></path></g></g><g transform="matrix(3.1819803714752197,-3.1819803714752197,3.1819803714752197,3.1819803714752197,363.2012939453125,326.5682373046875)" opacity="1" style={{ display: "block" }}><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(226,226,226)" stroke-opacity="1" stroke-width="5.6000000000000005" d=" M-20.548999786376953,-4.929999828338623 C-20.548999786376953,-4.929999828338623 -20.548999786376953,12.746999740600586 -20.548999786376953,12.746999740600586 C-20.548999786376953,12.746999740600586 -2.927000045776367,12.746999740600586 -2.927000045776367,12.746999740600586"></path></g></g><g transform="matrix(-4.5,0,0,-4.5,292.75,305.125)" opacity="1" style={{ display: "block" }}><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(226,226,226)" stroke-opacity="1" stroke-width="5.6000000000000005" d=" M28.945999145507812,-27.937000274658203 C28.966999053955078,-9.605999946594238 29.014999389648438,33.75299835205078 29.034000396728516,50.236000061035156"></path></g></g><g transform="matrix(-3.1819803714752197,3.1819803714752197,-3.1819803714752197,-3.1819803714752197,136.79869079589844,173.43174743652344)" opacity="1" style={{ display: "block" }}><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(226,226,226)" stroke-opacity="1" stroke-width="5.6000000000000005" d=" M-20.548999786376953,-4.929999828338623 C-20.548999786376953,-4.929999828338623 -20.548999786376953,12.746999740600586 -20.548999786376953,12.746999740600586 C-20.548999786376953,12.746999740600586 -2.927000045776367,12.746999740600586 -2.927000045776367,12.746999740600586"></path></g></g><g clip-path="url(#__lottie_element_404)" transform="matrix(1,0,0,1,0,0)" opacity="1" style={{ display: "block" }}></g></g></svg></div>
                                        </div>
                                        <Eth />


                                    </>

                            }
                                        

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