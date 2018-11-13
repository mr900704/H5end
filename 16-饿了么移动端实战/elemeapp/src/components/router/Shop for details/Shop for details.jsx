import React, {Component} from 'react';
import './ShopDetails.scss';
import {NavLink} from "react-router-dom";
import { Tabs } from 'antd';
class ShopDetails extends Component {
    render() {
        const TabPane = Tabs.TabPane;
        return (
            <div className="shopDetails">
                {/*1、头部*/}
                <div className="head">
                    <img src={require("../../../static/img/ShopDetails/fff.webp")} alt="shoplogo"/>
                    
                </div>
                {/*2、标题部分*/}
                <div className="title">
                    {/*2.1名称*/}
                    <h2>东池便当(高新店)<span className="iconfont icon-youla"></span></h2>
                    {/*2.2分数*/}
                    <div className="cont">
                        <span>评分4.9</span>
                        <span>月售509单</span>
                        <span>蜂鸟转送24分钟</span>
                    </div>
                    {/*2.3优惠*/}
                    <div className="preferential">
                        <div className="mreduce">
                            <span className="reduce">满减</span>
                            <span>满10减8</span>
                            <span>满35减15</span>
                            <span>满88减40</span>
                        </div>
                        <div className="morepreferential">15个优惠<span className="iconfont icon-xiala1"></span></div>
                    </div>
                    {/*2.4公告*/}

                    <div className="notice">
                        公告：风行台湾的盒餐，原滋原味呈现！
                    </div>

                </div>
                {/*3分类区块:用户选择*/}
            {/*<div className="top"></div>*/}
                <Tabs defaultActiveKey="1" >
                    <TabPane tab="点餐" key="1">
                        {/*点餐*/}
                        <div className="left"></div>
                        <div className="right">
                            {/*分类*/}
                            <dl className="hotSale">
                                <dd>
                                    <span className="tit">热销</span>
                                    <span className="more">大家喜欢吃，才叫真好吃</span>
                                </dd>
                                {/*1**************/}
                                <dt>
                                    <img src={require("../../../static/img/ShopDetails/fan.webp")} alt="食物"/>
                                    <div className="content">
                                        <h2>脆皮鸡腿饭</h2>
                                        <span>东池台式特色套餐，每日更换时间</span>
                                        <span>月售 <i>123</i>分，好评率100%</span>
                                        <div className="sale"> <span>6.5折</span> 每单限10分优惠</div>
                                        <div className="price">
                                            <span className="now"><b>￥</b>20</span>
                                            <span className="yuanjia"><b>￥</b>40</span>
                                            <div className="but">
                                                <span className="iconfont icon-minus"></span>
                                                <span>1 </span>
                                                <span className="iconfont icon-tianjia"></span>
                                            </div>

                                        </div>
                                    </div>
                                </dt>
                                {/*2**************/}
                                <dt>
                                    <img src={require("../../../static/img/ShopDetails/fan.webp")} alt="食物"/>
                                    <div className="content">
                                        <h2>脆皮鸡腿饭</h2>
                                        <span>东池台式特色套餐，每日更换时间</span>
                                        <span>月售 <i>123</i>分，好评率100%</span>
                                        <div className="sale"> <span>6.5折</span> 每单限10分优惠</div>
                                        <div className="price">
                                            <span className="now"><b>￥</b>20</span>
                                            <span className="yuanjia"><b>￥</b>40</span>
                                            <div className="but">
                                                <span className="iconfont icon-minus"></span>
                                                <span>1 </span>
                                                <span className="iconfont icon-tianjia"></span>
                                            </div>

                                        </div>
                                    </div>
                                </dt>
                            </dl>
                        </div>


                    </TabPane>
                    <TabPane tab="评分" key="2">评分</TabPane>
                    <TabPane tab="商家" key="3">商家</TabPane>
                </Tabs>
                {/*4、购物车*/}
                <div className="car">
                    <div className="num">
                        <div className="carimg">
                            <span className="iconfont icon-gouwuche1">
                                <span className="totle">1</span>
                            </span>

                        </div>
                        <div className="other">
                            <span>￥ <b>50</b></span>
                            <span>配送费15</span>
                        </div>
                    </div>
                    <div className="go">
                        去结算
                    </div>

                </div>



            </div>
        );
    }
}

export default ShopDetails ;