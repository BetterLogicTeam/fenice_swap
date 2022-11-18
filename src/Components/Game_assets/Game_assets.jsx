import React from 'react'
import Carde from '../Explore/Carde'

function Game_assets() {
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
                                                    <h1>Game Assets</h1>
                                                    <p>A market made for NFT, where everything is special 😋</p>

                                                </div>
                                                <div className="exchange_tools">

                                                    <a href="" className="btn1">
                                                        My Artworks
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="marge">
                                                <h5>789 <br /> Items</h5>&nbsp;&nbsp;&nbsp;&nbsp;
                                                <h5>20,362 USDT <br /> volume traded</h5>
                                            </div>
                                        </div>





                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                        <Carde />
                </div>
            </section>
        </div>
    )
}

export default Game_assets