import React from 'react';
import {
    Route,
    HashRouter,
} from 'react-router-dom';

import ViewLayout from './containers/ViewLayout';
import MarkDown from './containers/MarkDown';
import Gossip from './components/gossip/Gossip'
import Articels from './components/articles/Articles';

export default () => (
    <HashRouter>
        <ViewLayout>
            <Route path='/' exact component={MarkDown} />
            <Route path='/article' component={Articels} />
            <Route path='/gossip' component={Gossip} />
        </ViewLayout>
    </HashRouter>
)