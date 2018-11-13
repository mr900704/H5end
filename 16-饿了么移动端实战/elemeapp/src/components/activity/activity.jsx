import React, {Component} from 'react';
import './activity.scss';
//引入组件
import { Carousel} from 'antd';
import {Link} from "react-router-dom";
//引入样式
import '../../publicstyle/publicstyle.css';
import Axios from "axios/index";
class Activity extends Component {

    state={
        activity:[]
    }
    componentDidMount(){
        //获取抢购的数据
        Axios.get('http://47.100.98.54:9019/api/promotion').then((res)=>{
            this.setState({
                activity: res.data.data
            })
        })
    }
    render() {
        console.log(this.state.activity);
        return (
            <div className="activity mt01rem plr04rem">


                <Carousel autoplay>
                    {
                        this.state.activity.map((item,index)=>{
                            return(
                                <Link to={"/api/promotionSub:"+item.id} key={index}>
                                    <img src={item.img} alt={item.id}/>
                                </Link>
                            )

                        })
                    }


                </Carousel>,

            </div>
        );
    }
}

export default Activity;