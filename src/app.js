import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail/detailLoadable';
import "antd/dist/antd.css";


class App extends Component {
    render () {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/detail" component={Detail}/>
                    </Switch>
                </BrowserRouter> 
            </div>
        )
    }
}

export default App;