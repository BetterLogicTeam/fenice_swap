import React from 'react'
import { Link } from 'react-router-dom';
import { RiArrowLeftSLine } from 'react-icons/ri';
import Connect_wallet from '../Header/Connect_wallet';


function Migrate() {
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
			                            	    <h1 class="text-3xl">Migrate Uniswap Liquidity</h1>
			                            	    
			                            	
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

export default Migrate