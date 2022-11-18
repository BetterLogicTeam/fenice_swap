import * as React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import "./Landing.css";
import { RiSettings5Fill } from 'react-icons/ri';
import Connect_wallet from '../Header/Connect_wallet';
import Fcc from './Fcc';
import Bnb from './Bnb';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Connact to a Wallet
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Connect_wallet />
            </Modal.Body>
        </Modal>
    );
}


function TabPanel(props) {



    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {

    const [value1, setValue1] = React.useState(false)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [modalShow, setModalShow] = React.useState(false);


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>

            <TabPanel value={value} index={0}>
                <div className="tab-content">
                    <div className="container py_0 tab-pane active">
                        <div className="exchange_tab">
                            <div className="exchange_wrap ennline pt_5">
                                <div className="exchange_hd">
                                    <ul className="nav nav-pills pool_tab" role="tablist">
                                        <li className="nav-item">
                                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                                    <Tab className="nav-link active" label="Swap" {...a11yProps(0)} />
                                                    <Tab className="nav-link " label="Liquidity" {...a11yProps(1)} />
                                                </Tabs>
                                            </Box>
                                        </li>
                                    </ul>
                                </div>
                                <div className="exchange_tools seting">
                                    <div className="tools_img">
                                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5215 0.618164L12.6818 1.57302L15.933 4.37393V13.2435C15.9114 13.6891 15.5239 14.0498 15.0502 14.0286C14.6196 14.0074 14.2751 13.6679 14.2536 13.2435V7.28093C14.2536 6.21998 13.3923 5.37122 12.3158 5.37122H11.8421V2.67641C11.8421 1.61546 10.9808 0.766697 9.90428 0.766697H1.93779C0.861242 0.766697 0 1.61546 0 2.67641V18.4421C0 18.9089 0.387559 19.2909 0.861242 19.2909H10.9808C11.4545 19.2909 11.8421 18.9089 11.8421 18.4421V6.64436H12.3158C12.6818 6.64436 12.9617 6.92021 12.9617 7.28093V13.2435C13.0048 14.4105 13.9737 15.3017 15.1579 15.2805C16.2775 15.2381 17.1818 14.3469 17.2248 13.2435V3.80102L13.5215 0.618164ZM9.66744 8.89358H2.17464V3.10079H9.66744V8.89358Z" fill="#7CFF6B"></path></svg><span className="price_set"></span>
                                    </div>
                                    <div className="tools_img" onclick="openNav10()">

                                        <span data-bs-toggle="modal" data-bs-target="#exampleModal3">
                                            <RiSettings5Fill />
                                        </span>

                                        {/* <!-- Modal --> */}
                                        <div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content contennt">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Settings </h1>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div class="overlay10-content">
                                                            <div class="swapbg10">
                                                                <div class="dead_line">
                                                                    <p style={{ color: "black" }}>
                                                                        Slippage tolerance
                                                                    </p>
                                                                    <div class="seting_rate">
                                                                        <div class="all_setting">
                                                                            <div class="setting_button">
                                                                                <button class="btn seting_btn_bg">0.1%</button>
                                                                            </div>
                                                                            <div class="setting_button">
                                                                                <button class="btn seting_btn_bg jPlCZV">0.5%</button>
                                                                            </div>
                                                                            <div class="setting_button">
                                                                                <button class="btn seting_btn_bg">1%</button>
                                                                            </div>
                                                                        </div>
                                                                        <div class="setting_input">
                                                                            <input class="eqxqaX" type="number" placeholder="0.5%" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="dead_line">
                                                                    <p style={{ color: "black" }}>
                                                                        Transaction deadline
                                                                    </p>
                                                                    <div class="seting_rate">
                                                                        <div class="setting_input set2">
                                                                            <input class="eqxqaX" type="number" placeholder="0.5%" />
                                                                            <div style={{ color: "#fff" }}>Minutes</div>
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
                                    <div className="tools_img" onclick="openNav11()">
                                        <i className="fa fa-clock-o"></i>
                                    </div>
                                </div>
                            </div>
                            {
                                value1 == false ?
                                    <>
                                        <Bnb />
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
                                        <Bnb />


                                    </>

                            }


                            <div className="wallet_btn mt-3">
                                <Button variant="" className="btn button btn-success d-inline-block ml-auto contact" onClick={() => setModalShow(true)}>
                                    Unlock Wallet
                                </Button>

                                <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>




                <div className="tab-content">
                    <div className="container py_0 tab-pane active">
                        <div className="exchange_tab">
                            <div className="exchange_wrap ennline pt_5">
                                <div className="exchange_hd">
                                    <ul className="nav nav-pills pool_tab" role="tablist">
                                        <li className="nav-item">
                                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                                    <Tab className="nav-link " label="Swap" {...a11yProps(0)} />
                                                    <Tab className="nav-link active" label="Liquidity" {...a11yProps(1)} />
                                                </Tabs>
                                            </Box>
                                        </li>
                                    </ul>
                                </div>
                                <div className="exchange_tools seting">
                                    <div className="tools_img">
                                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5215 0.618164L12.6818 1.57302L15.933 4.37393V13.2435C15.9114 13.6891 15.5239 14.0498 15.0502 14.0286C14.6196 14.0074 14.2751 13.6679 14.2536 13.2435V7.28093C14.2536 6.21998 13.3923 5.37122 12.3158 5.37122H11.8421V2.67641C11.8421 1.61546 10.9808 0.766697 9.90428 0.766697H1.93779C0.861242 0.766697 0 1.61546 0 2.67641V18.4421C0 18.9089 0.387559 19.2909 0.861242 19.2909H10.9808C11.4545 19.2909 11.8421 18.9089 11.8421 18.4421V6.64436H12.3158C12.6818 6.64436 12.9617 6.92021 12.9617 7.28093V13.2435C13.0048 14.4105 13.9737 15.3017 15.1579 15.2805C16.2775 15.2381 17.1818 14.3469 17.2248 13.2435V3.80102L13.5215 0.618164ZM9.66744 8.89358H2.17464V3.10079H9.66744V8.89358Z" fill="#7CFF6B"></path></svg><span className="price_set"></span>
                                    </div>
                                    <div className="tools_img" onclick="openNav10()">
                                        <span data-bs-toggle="modal" data-bs-target="#exampleModal3">
                                            <RiSettings5Fill />
                                        </span>

                                        {/* <!-- Modal --> */}
                                        <div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content contennt">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Settings </h1>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div class="overlay10-content">
                                                            <div class="swapbg10">
                                                                <div class="dead_line">
                                                                    <p style={{ color: "black" }}>
                                                                        Slippage tolerance
                                                                    </p>
                                                                    <div class="seting_rate">
                                                                        <div class="all_setting">
                                                                            <div class="setting_button">
                                                                                <button class="btn seting_btn_bg">0.1%</button>
                                                                            </div>
                                                                            <div class="setting_button">
                                                                                <button class="btn seting_btn_bg jPlCZV">0.5%</button>
                                                                            </div>
                                                                            <div class="setting_button">
                                                                                <button class="btn seting_btn_bg">1%</button>
                                                                            </div>
                                                                        </div>
                                                                        <div class="setting_input">
                                                                            <input class="eqxqaX" type="number" placeholder="0.5%" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="dead_line">
                                                                    <p style={{ color: "black" }}>
                                                                        Transaction deadline
                                                                    </p>
                                                                    <div class="seting_rate">
                                                                        <div class="setting_input set2">
                                                                            <input class="eqxqaX" type="number" placeholder="0.5%" />
                                                                            <div style={{ color: "#fff" }}>Minutes</div>
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
                                    <div className="tools_img" onclick="openNav11()">
                                        <i className="fa fa-clock-o"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="wallet_btn mr_set">
                                <a href=""> <button className="btn button btn-success">Add Liquidity +</button></a>
                            </div>

                            <div className="">
                                <div className="exchange_hd my_5">
                                    <b style={{ color: "#fff" }}>Your Liquidity</b>
                                    <b><span style={{ float: "right", color: "rgb(116, 155, 216)" }}><i className="fa fa-question-circle"></i></span>  </b>

                                </div>

                                <span color="textDisabled" className="sc-giYglK dSrmWk">Connect a wallet to view your liquidity.</span>

                                <div>
                                    <span color="#07162d" font-size="14px" className="sc-giYglK hhnuQi" style={{ padding: "0.5rem , 0px" }}>Don't see a pool you joined? <a id="import-pool-link" className="links" href="find.html">Import it.</a></span><br />
                                    <span color="#07162d" font-size="14px" className="sc-giYglK hhnuQi" style={{ padding: "0.5rem  ,0px" }}>Or, if you staked your LP tokens in a farm, unstake them to see them here.</span>
                                </div>
                            </div>
                        </div>


                    </div>



                </div>
            </TabPanel>
        </Box>
    );
}






























