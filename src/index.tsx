import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ToastExample from './utils/ToastExample';
import Wxpay from './utils/Wxpay';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

async function pressEvent() {
  let isSupported = await Wxpay.isSupported();
  ToastExample.show(JSON.stringify(isSupported), ToastExample.SHORT);
}
function gotoPage(props) {
  //
  props.navigation.navigate('Details', {
    itemId: 86,
    otherParams: 'anything you want here',
  });
}
function HomeScreen({navigation, route}) {
  return <View></View>;
}
function App(props): JSX.Element {
  console.log(props);
  return (
    <View>
      <Text>测试字体：</Text>
      <Text style={styles.fontStyle}>广场12334阿里妈妈字体</Text>
      <View>
        <Text onPress={pressEvent}>测试微信支付</Text>
      </View>
      <View>
        <Text onPress={() => gotoPage(props)}>测试路由跳转</Text>
      </View>
    </View>
  );
}
function DetailsScreen(props) {
  // let params = JSON.stringify(props.route.params.itemId);
  let params = JSON.stringify(props);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>11111</Text>
      <View>
        <Text>Props:</Text>
        <Text>{params}</Text>
      </View>
    </View>
  );
}

function AppDefault(): JSX.Element {
  const linking = {
    prefixes: ['https://mychat.com', 'mychat://'],
    config: {
      screens: {
        Home: 'feed/:sort',
      },
    },
  };
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={App} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{itemId: 42}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  fontStyle: {
    fontFamily: 'AlimamaDaoLiTi',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default AppDefault;
