/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView source={{uri: 'https://beliy-store-v2.vercel.app/'}} />
    </SafeAreaView>
  );
}

export default App;
