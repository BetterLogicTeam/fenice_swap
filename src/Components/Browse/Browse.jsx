import React from 'react';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import meta_mask from '../../Assets/meta_mask.png';
import trust_wallet from '../../Assets/trust_wallet.png';
import math_wallet from '../../Assets/math_wallet.png';
import connect_wallet from '../../Assets/connect_wallet.png';
import safepal_wallet from '../../Assets/safepal_wallet.png';
import { GrCircleQuestion } from 'react-icons/gr';
import Connect_wallet from '../Header/Connect_wallet';



function Browse() {
  return (
    <div>
        <section>
			    <div class="container-fluid">
			        <div class="row">
			        	<div class="col-md-6 py_0 offset-md-3 heading"><br/>
			        		 <div class="pools">
			                    {/* <!-- Nav pills --> */}
			                    
			                    {/* <!-- Tab panes --> */}
			                    <div class="tab-content">
			                        <div class="container">
			                            <div class="row">
			                           
			                            	<div class="col-md-12">
			                            		<div class="go">
			                            		<Link to="/"><a href=""><RiArrowLeftSLine /> Go Back</a></Link>
			                            	    </div>
			                            	    <h1 class="text-3xl">My Liquidity Positions</h1>
			                            	    <div class="back">

			                            	    <h3 class="heading">Liquidity Provider Rewards</h3>
			                            	    <h3 class="heading1">Liquidity providers earn a 0.25% fee on all trades proportional to their share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity</h3>
			                            	    </div>
			                            	    
			                            	
			                                    {/* <button class=" btn-success1" onclick="openNav9()">Connect to a Wallet</button> */}
                                                <button type="button" className="btn-success1" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                Connect to a Wallet
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content contennt">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Connect to a Wallet </h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <Connect_wallet />
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
			</section>
    </div>
  )
}

export default Browse