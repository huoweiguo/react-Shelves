import React, {Component} from 'react';
import axios from 'axios';
import {
    ContentWrap,
    TitleNav,
    UlList
} from './hotStyle';

class Hot extends Component {

    constructor (props) {
        super (props);
        this.state = {
            list: []
        };
    }

    render () {
        return (
            <div>
                <ContentWrap>
                    <TitleNav><span>{this.props.title}</span></TitleNav>
                    <UlList>
                        {  
                            this.state.list.map(function (item, index) {
                                return (
                                    <li key={item.id}>
                                        <img src={item.url} alt=""/>
                                        <h5>{item.title}</h5>
                                        <span>{item.avaue}条线路</span>
                                        <span>{item.aticle}篇攻略 {item.hotel}家住宿</span>
                                    </li>
                                )
                            })
                        }
                    </UlList>


                </ContentWrap>
            </div>
        )
    }

    componentDidMount () {
        this.getHotList();
    }

    getHotList () {
        const _this = this;
        axios.get(_this.props.link).then(function (res) {
            const dataList = res.data.data.list;
            _this.setState( _=> ({
                list: dataList
            }));
        }).catch(function (err) {
            console.log(err);
        });
    }
}


export default Hot;

