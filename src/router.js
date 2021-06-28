import React from 'react';
import {
    Route,
    HashRouter,
} from 'react-router-dom';

import ViewLayout from './containers/ViewLayout';
import Gossip from './components/gossip/Gossip'
import Articels from './components/articles/Articles';
import Home from "./containers/Home";
import About from "./containers/About";
import Code from "./containers/Code";
import Computer from "./containers/Computer";
// eslint-disable-next-line
export default () => (
    <HashRouter>
        <ViewLayout>
            <Route path='/' exact component={Home} />
            <Route path='/code' component={Code} />
            <Route path='/timeline' component={Gossip} />
            <Route path='/home' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/computer' component={Computer} />
        </ViewLayout>
    </HashRouter>
)