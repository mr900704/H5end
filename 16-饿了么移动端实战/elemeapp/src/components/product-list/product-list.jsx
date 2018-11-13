import React, {Component} from 'react';
import { Carousel } from 'antd';
import {Link} from "react-router-dom";
//引入样式
import './product-list.scss';
import '../../publicstyle/publicstyle.css';
import Axios from "axios";
class Plist extends Component {
    state={
        data:[]
    }
    componentDidMount(){
        Axios.get("http://47.100.98.54:9019/api/category").then((res)=>{
            // console.log(res.data.data)
            this.setState({
                data:res.data.data
            })
        })
    }

    render() {
        return (
            <div className="shop-banner">
                    {/*引入轮播图组件*/}
                    <Carousel >
                        <ul className="shop-list">
                            {this.state.data.length>0&&this.state.data.map((item,index)=>{
                                if(index>=10){
                                    return false
                                }
                                if(index<10){
                                    return (
                                        <li key={index}>
                                            <Link to={`/productlist/list${index}`}>
                                                <img src={item.img} alt={item.title}/>
                                                <p >{item.title}</p>
                                            </Link>
                                        </li>

                                    )
                                }

                            })}
                        </ul>
                        <ul className="shop-list">
                            {this.state.data.length>0&&this.state.data.map((item,index)=>{
                                if(index<10){
                                    return false
                                }
                                if(index>=10){
                                    return (
                                        <li key={index}>
                                            <Link to={`/productlist/list${index}`}>
                                                <img src={item.img} alt={item.title}/>
                                                <p >{item.title}</p>
                                            </Link>
                                        </li>
                                    )
                                }
                            })}
                        </ul>

                    </Carousel>

            </div>
        );
    }
}

export default Plist;