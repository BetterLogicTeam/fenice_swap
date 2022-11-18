import React from 'react';
import { FiSearch } from 'react-icons/fi';
import Carde from './Carde';
import Dropdown from 'react-bootstrap/Dropdown';



function Explore() {
	return (
		<div>
			<section>
				<div className="container">
					<div className="row">
						<div className="col-md-12 py_0  heading"><br />
							<div className="pools">
								{/* <!-- Nav pills --> */}

								{/* <!-- Tab panes --> */}
								<div className="tab-content">
									<div className="container py_0 tab-pane active">
										<div className="exchange_tab">
											<div className="exchange_wrap pt_5">
												<div className="exchange_hd">
													<h1>Explore</h1>
													<p>A market made for NFT, where everything is special 😋</p>

												</div>
												<div className="exchange_tools">

													<a href="" className="btn1">
														Create
													</a>

													<a href="" className="btn1">
														My Artworks
													</a>
												</div>
											</div>
											<h3>1,038,055 Items</h3>

										</div>





									</div>
								</div>

							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-10">
							<div className="farm_usd_set farm_input1">
								<div className="icon_search">
									<FiSearch />
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
					<br />


					<Carde />
				</div>
			</section>
		</div>
	)
}

export default Explore