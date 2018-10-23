/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import RootStack from './screens';
import ImageSelector from './screens';
import IndexPage from './screens';
type Props = {};
export default class App extends Component<Props> {
  render() {
    return <RootStack />;
  }
}

