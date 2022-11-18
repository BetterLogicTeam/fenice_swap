import React from 'react';
import "./Your_forms.css";
import { FiSearch } from 'react-icons/fi';
import Dropdown from 'react-bootstrap/Dropdown';


function Your_forms() {
	return (
		<div>
			<section className=''>
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
									<div className="icon_search text-white">
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
													<td>xyzaa...69139</td>
													<td>1000</td>
													<td>30</td>
													<td>xyzaa...a262d</td>
													<td>1639586328</td>
												</tr>
												<tr>
													<td>xyzaa...69139</td>
													<td>1000</td>
													<td>30</td>
													<td>xyzaa...a262d</td>
													<td>1639586328</td>
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

export default Your_forms