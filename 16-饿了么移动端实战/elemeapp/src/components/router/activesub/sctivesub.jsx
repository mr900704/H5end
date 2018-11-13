import React, {Component} from 'react';
import './activitysub.scss';
import {NavLink} from "react-router-dom";

class  Activitymsg extends Component {
    render() {
        return (
            <div className="activitymsg">
                {/*1、A*/}
                <div className="flowertit">
                    <img src={require("../../../static/img/activity/activitysub/f1.webp")} alt="标题"/>
                </div>
                {/*2、油画系插画*/}

                <div className="flowerdiy">
                <img src={require("../../../static/img/activity/activitysub/f2.webp")} alt="油画系插花"/>
                </div>
                {/*3插画视频*/}
                <div className="flowervideo">
                    <video src={"https://app-builder-resource.oss-cn-shanghai.aliyuncs.com/prod/uploadcfjnq0i878.mp4"}controls={true} autoPlay muted></video>
                </div>
                {/*4、凹凸有致*/}

                <div className="floweraotu">
                    <img src={require("../../../static/img/activity/activitysub/f3.webp")} alt="凹凸有志"/>
                </div>
                {/*5\售卖活动*/}
                <div className="sale">
                    <div className="box">
                        <NavLink to="/activity/flower1" activeClassName={"active"}>
                            <span>5.5</span>
                            <span>单身玫瑰</span>
                        </NavLink>
                        <NavLink to="/activity/flower2" activeClassName={"active"}>
                            <span>礼品花</span>
                            <span>高端表白线</span>
                        </NavLink>
                        <NavLink to="/activity/flower3" activeClassName={"active"}>
                            <span>日常花</span>
                            <span>韩系混搭范</span>
                        </NavLink>
                        <NavLink to="/activity/flower3" activeClassName={"active"}>
                            <span>日常花</span>
                            <span>韩系混搭范</span>
                        </NavLink>
                    </div>

                </div>
                {/*6\精选好点、店*/}

                <div className="good">
                    <img src={require("../../../static/img/activity/activitysub/f6.webp")} alt="精选好店"/>
                </div>
                {/*7活动规则*/}
                <div className="description">
                    <img src={require("../../../static/img/activity/activitysub/88.webp")} alt="说明说明"/>

                </div>


            </div>
        );
    }
}

export default Activitymsg;