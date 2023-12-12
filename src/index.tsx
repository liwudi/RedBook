import React, {useEffect, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import commonStyles from './styles/common';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// redux 使用
import {useAppSelector, useAppDispatch} from './store/hooks';
import {updateUserInfo} from './store/userSlice';
// import {useSelector} from 'react-redux';
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
function HomeScreen({navigation, route}) {
  const [list, setList] = useState<Array<string>>([]);
  useEffect(() => {
    if (route.params?.post) {
      //
      // ToastExample.show(route.params?.post, ToastExample.LONG);
      setList([...list, route.params?.post]);
    }
  }, [route.params?.post]);
  return (
    <View style={commonStyles.center}>
      {list.map(item => (
        <Text>{item}</Text>
      ))}
      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost')}
      />
    </View>
  );
}
function SettingScreen(props): JSX.Element {
  return (
    <View style={commonStyles.center}>
      <Text>SettingScreen: {JSON.stringify(props.navigation)}</Text>
      <Button title="go back" />
    </View>
  );
}
function CreatePostScreen({navigation, route}) {
  const [postText, setPostText] = useState('');
  // 使用数据
  const useInfo = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  return (
    <>
      <TextInput
        multiline
        placeholder="what is on your mind"
        style={{height: 200, padding: 10, backgroundColor: 'white'}}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          navigation.navigate({
            name: 'Home',
            params: {post: postText},
            merge: true,
          });
        }}
      />
      <Button
        title="跳转Home,SettingScreen"
        onPress={() => {
          navigation.navigate('Home', {
            screen: 'SettingScreen',
          });
        }}
      />
      <View>
        <Text>User信息：{JSON.stringify(useInfo)}</Text>
        <Button
          title="updateUserInfo"
          onPress={() =>
            dispatch(
              updateUserInfo({
                username: '李武帝',
                age: 32,
                userAvatar: 'XXX',
              }),
            )
          }
        />
      </View>
    </>
  );
}
function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={HomeScreen} />
      <Tab.Screen name="SettingScreen" component={SettingScreen} />
    </Tab.Navigator>
  );
}
function AppDefault(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CreatePost">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CreatePost"
          component={CreatePostScreen}
          initialParams={{itemId: 42}}
          options={{title: 'CreatePost'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppDefault;
