import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import CommentForm from '../CommentForm/controller';
import CounterForm from '../CounterForm/controller';
import NewsForm from '../NewsForm/controller';
import AjaxDemoCausalityChain from '../AjaxDemoCausalityChain/controller';
import RouterForm from '../RouterForm/controller';
import HomeApp from '../HomeApp/HomeApp';
import Todo from '../Todo/controller';
import MultiPartition from '../MultiPartition/controller';

// Import MonitorComponent last so that component initialization is not included
import MonitorComponent from '../MonitorComponent/controller';

export const HOMEROUTE = '/';
export const CAUSALITYCHAINROUTE = '/causalitychain';
export const NEWSROUTE = '/newscausalityredux';
export const COUNTERROUTE = '/counterformcausalityredux';
export const COMMENTSROUTE = '/commentboxcausalityredux';
export const ROUTERDEMOROUTE = '/routerdemo';
export const TODODEMOROUTE = '/tododemo';
export const MULTIPARTITIONROUTE = '/multipartition';

const MainApp = () =>
    <div>
        <MonitorComponent />
        <Switch>
            <Route exact path={HOMEROUTE} component={HomeApp} />
            <Route path={CAUSALITYCHAINROUTE} component={AjaxDemoCausalityChain} />
            <Route path={NEWSROUTE} component={NewsForm} />
            <Route path={COUNTERROUTE} component={CounterForm} />
            <Route path={COMMENTSROUTE} component={CommentForm} />
            <Route path={TODODEMOROUTE} component={Todo} />
            <Route path={MULTIPARTITIONROUTE} component={MultiPartition} />
            <Route path={ROUTERDEMOROUTE} component={RouterForm} />
            <Redirect to={HOMEROUTE} />
        </Switch>
    </div>;   

export default MainApp;
