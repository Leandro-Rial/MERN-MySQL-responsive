import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import CreatePost from './Post/CreatePost';
import History from './Home/History';

const MainPage = () => {
    return (
        <div className="MainPage">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/create" component={CreatePost} />
                <Route path="/history" component={History} />
            </Switch>
        </div>
    )
}

export default MainPage
