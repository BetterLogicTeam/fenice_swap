import React from 'react';
import { FiSearch } from 'react-icons/fi';
import Carde from '../Explore/Carde';
import Dropdown from 'react-bootstrap/Dropdown';



function Open_market() {
  return (
    <div>
        <section>
			    <div class="container">
			        <div class="row">
			        	<div class="col-md-12 py_0  heading"><br/>
                        <div class="pools">
			                    {/* <!-- Nav pills --> */}
			                    
			                    {/* <!-- Tab panes --> */}
			                    <div class="tab-content">
			                        <div class="container py_0 tab-pane active">
			                            <div class="exchange_tab">
			                                <div class="exchange_wrap pt_5">
			                                    <div class="exchange_hd">
			                                        <h1>Open Market</h1>
			                                        <p>A market made for NFT, where everything is special 😋</p>
			                                       
			                                    </div>
			                                    <div class="exchange_tools">
			                                      
			                                        <a href="" class="btn1">
			                                        	Create 
			                                        </a>

			                                        <a href="" class="btn1">
			                                        	My Artworks 
			                                        </a>
			                                    </div>
			                                </div>
			                                <div class="marge">
			                                 <h5>789 <br/> Items</h5>&nbsp;&nbsp;&nbsp;&nbsp;
			                                 <h5>20,362 USDT <br/> volume traded</h5>
			                                </div>
			                           </div>





			                            </div>
			                        </div>
			                          
			                    </div>
			                </div>
			        </div>
			     <div class="row">
			      	<div class="col-md-10">
			      	  <div class="farm_usd_set farm_input1">
			      	  	<div class="icon_search">
			      	  	<FiSearch />
			      	     </div>
			  	        <input id="Enter_amount" class="input_search" placeholder="Search by token or pair"/>
			  	        </div>
			  	        </div>
			  	         <div class="col-md-2">
			  	    	
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
                 <br/>

                 <Carde />
                 </div>
                 </section>
    </div>
  )
}

export default Open_market