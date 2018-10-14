import React, { Component } from 'react';
import Login from './screens/Login';
import RootStack from './screens/Login';

type Props = {};
export default class App extends Component<Props> {
    render() {
        return <RootStack />;
    }
}