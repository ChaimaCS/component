import React, { Component } from "react";
import FullName from "./FullName";
import image from "./chaima.jpg";



class ProfilePhoto extends Component {

render() {
    return (
        <div className="pic">
    <div className="clearfix">
        <div className="row">
            <div className="col-md-4 animated fadeIn">
            <div className="card">
                <div className="card-body">
                <div className="avatar">
                    <img src={image} className="card-img-top" alt=""/>
                </div>
                <h5 className="card-title"> <FullName/> </h5>
                    <p className="card-text">
                    Phone number: 
                    <br />
                    <span className="phone"> +216 27784868</span>
                    </p>
                </div>
            </div>
            </div>
        </div>
        </div>

        
            </div>
    );
}
}

export default ProfilePhoto;