import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsQuestionCircleFill } from 'react-icons/bs';
import bnb from '../../Assets/bnb.png';
import ADA from '../../Assets/ADA.png';
import Dropdown from 'react-bootstrap/Dropdown';
import pin from '../../Assets/pin.jpg';



function All_forms() {
    return (
        <div>
            <section>
                <div className="your_forms">

                    <div className="container-fluid set_nav_width">
                        <div className="row">
                            <div className="col-md-12 py_0 heading"><br />
                                <div className="pools">
                                    {/* <!-- Nav pills --> */}

                                    {/* <!-- Tab panes --> */}
                                    <div className="tab-content">
                                        <div className="container-fluid set_nav_width">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="flex">
                                                        <div className="top_pading">
                                                            <h1 className="farm">Farm Menu</h1>
                                                            <p className="farm1">Earn fees and rewards by depositing and staking your tokens to the platform.</p>
                                                        </div>
                                                        <div className="bottom">
                                                            <button className="btn-success1">
                                                                Apply for Farm Pairs
                                                            </button>
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

                <div className="input_section">

                    <div className="container-fluid set_nav_width">
                        <div className="row">
                            <div className="col-md-10">
                                <div className="farm_usd_set farm_input1">
                                    <div className="icon_search">
                                        <FiSearch className='text-white' />
                                    </div>
                                    <input id="Enter_amount" className="input_search" placeholder="Search by token or pair" />
                                </div>
                            </div>
                            <div className="col-md-2">

                                <Dropdown>
                                    <Dropdown.Toggle variant="" className='text-white your_farms_drop' id="dropdown-basic">
                                        Your Farms
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className='menu_2'>
                                        <Dropdown.Item href="#/action-1">All Farms</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Kashi Farms</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Wireswap Farms</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="farm_history">

                                    <div className="table-responsive">
                                        <table className="table table-borderless">
                                            <thead>
                                                <tr className="line">
                                                    <th className="head">Pool</th>
                                                    <th className="head">TVL <i className="fa fa-angle-down"></i></th>
                                                    <th className="head">Rewards</th>
                                                    <th className="head">APR</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="line">
                                                    <td>
                                                        <div className="main_div">
                                                            <div className="img_set">
                                                                <img className="imgagess" src={bnb} /><img className="imgagess1" src={ADA} />
                                                            </div>
                                                            <div className="">
                                                                <h1 className="icon_logo">

                                                                    BNB
                                                                    /
                                                                    ADA
                                                                </h1>
                                                                <p className="icon_logo1">
                                                                    WireSwap Farm
                                                                </p>
                                                            </div>
                                                        </div>

                                                    </td>

                                                    <td className="top_paddding">$93,495,969</td>
                                                    <td><span className="top_paddding1">2574 </span><img className="img_small" src={pin} /></td>

                                                    <td className="icon_logo">8.37%  <BsQuestionCircleFill />
                                                        <p className="annu">
                                                            annualized
                                                        </p>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
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

export default All_forms