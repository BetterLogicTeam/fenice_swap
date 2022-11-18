import React from 'react';
import "./Landing.css";
import TabPanel from './TabPanel'



function Landing() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 py_0 offset-md-3 heading"><br />
                        <div className="pools">
                            <TabPanel />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Landing