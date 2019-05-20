import React from 'react';
import { Wrapper } from './bannerStyle';
import { connect } from 'react-redux';
import axios from 'axios';
import { getBannerMessage } from './store/actionCreator';

class Banner extends React.Component {
    render () {
        return (
            <div>
                <Wrapper>
                    <img src={this.props.url} alt=""/>
                    <span className="address">{this.props.city}</span>
                    <i>{this.props.visity}张照片</i>
                </Wrapper>
            </div>
        )
    }

    componentDidMount () {
        this.props.getBanner();
    }
}

const mapStateToProps = state => ({
    url: state.banner.url,
    city: state.banner.city,
    visity: state.banner.visity
});

const mapDispatchToProps = dispatch => ({
    getBanner () {
        axios.get('./mock/banner.json').then(function (res){
            const action = getBannerMessage(res.data.data);
            dispatch(action);
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Banner);