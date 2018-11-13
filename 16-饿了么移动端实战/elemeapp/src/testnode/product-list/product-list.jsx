import React, {Component} from 'react';
import { Carousel } from 'antd';
import {Link} from "react-router-dom";
import Axios from "axios";
//引入样式

import './product-list.scss';
import '../../publicstyle/publicstyle.css';
class Plist extends Component {
    constructor(){
        super()
        this.state={
            list:[]
        }
    }

    componentDidMount(){
        //自己的接口不对
        // Axios.get('http://47.105.76.238:6666/api/shop').then((res)=>{
        //     console.log(res)
        //     this.setState({
        //         list:res.data
        //     })
        // })
        Axios.get('http://47.105.76.238:6010/api/category').then((res)=>{
            console.log(res)
            this.setState({
                list:res.data
            })
        })



    }
    render() {
        return (
            <div className="shop-banner">
                    {/*引入轮播图组件*/}
                    <Carousel effect="fade">
                        {/*第一页*/}
                        <ul className="shop-list">
                            {this.state.list.map( (item,index)=> {
                                return(
                                    <li key={index}>
                                        <Link  to={`/productlist/list${index}`}>
                                            <img src={item.img} alt={item.title}/>
                                            <p >{item.title}</p>
                                        </Link>
                                    </li>
                                )
                            })}




                        </ul>
                        {/*第二页*/}
                        <ul className="shop-list">

                        </ul>

                    </Carousel>

            </div>
        );
    }
}

export default Plist;