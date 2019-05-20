import React, { Component } from 'react';
import { LoadContent } from './loadingStyle'; 
import { Skeleton } from 'antd';

class Loading extends Component {
    render () {
        return (
            <LoadContent>
                <Skeleton active title></Skeleton>
            </LoadContent>
        )
    }
}

export default Loading;