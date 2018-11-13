import React, { Component } from 'react';
//引入模块
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

//引入样式
import './App.scss';

//引入组件
import Layout from "./components/layout/layout";
import Search from "./components/router/search/search";
import Home from "./components/home/home";
import Productlistmsg from "./components/router/productlistmsg/productlistmsg";
import Activitymsg from "./components/router/activesub/sctivesub";
import Find from "./components/router/footer/ffind";
import My from "./components/router/footer/my";
import ShopDetails from "./components/router/Shop for details/Shop for details";
import Purchasesub from "./components/router/purchasesub/purchasesub";


class App extends Component {
    render() {
        return (
            //设置路由：当用户访问近页面需要在一个地方加载
            <Router>
                <Switch>
                    <Layout>
                        <Switch>
                            <Route exact path="/" component={Home}></Route>
                            <Route exact path="/search" component={Search}></Route>
                            <Route exact path="/productlist/list:id" component={Productlistmsg}></Route>
                            <Route exact path="/api/promotionSub:id" component={Activitymsg}></Route>
                            {/*<Route exact path="/api/promotionSub:id" component={Find}></Route>*/}
                            <Route exact path="/foot/find" component={Find}></Route>
                            <Route exact path="/foot/my" component={My}></Route>
                            <Route exact path="/food/ShopDetails" component={ShopDetails}></Route>
                            <Route exact path="/api/scarebuySub:id" component={Purchasesub}></Route>
                        </Switch>

                    </Layout>
                </Switch>

            </Router>

        );
    }
}

export default App;
