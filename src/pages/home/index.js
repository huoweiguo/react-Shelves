import React, { Component } from 'react';
import Banner from '../../components/banner';
import Hot from '../../components/hot';
import { Link } from 'react-router-dom'; 
import { 
    AddressNav,
    InnerTags
} from './homeStyle';

class Home extends Component {
    render () {
        return (
            <div>
                {/**baner */}
                <Banner />

                <AddressNav>
                    <InnerTags>
                        <i className="iconfont">&#xe634;</i>
                        <div className="addright">
                            <p>我在<b>上海</b></p>
                            <p>查看攻略</p>
                        </div>
                    </InnerTags>
                    
                    <InnerTags>
                        <i className="iconfont">&#xe637;</i>
                        <div className="addright">
                            <p>附近<b>客栈</b></p>
                            <p>35个热门</p>
                        </div>
                    </InnerTags>
                </AddressNav>

                {/** hot */}
                <Hot title="热门目的地"  link="./mock/hot.json"/>
                <Hot title="推荐热门客栈" link="./mock/hotel.json"/>

                <Link to="/detail">详情</Link>
            </div>
        )
    }
}

export default Home;