import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import React from 'react';
import { Appearance, Button, ColorSchemeName, Dimensions, TouchableOpacity } from 'react-native';
import TabTwoScreen from './TabTwoScreen';


const initialLayout = { width: Dimensions.get('window').width };

const renderTabBar = (props: any) => (

  <TabBar
    {...props}
    tabStyle={{ width: 120 }}
    scrollEnabled={true}
    indicatorStyle={{ backgroundColor: 'white', height: 5, borderRadius: 10 }}
  />
);


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' }
  ]);

  const renderScene = SceneMap({
    first: TabOneScreen,
    second: TabTwoScreen,
  });

  return (

    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      {/* <TabView
        navigationState={{ index, routes }}
        renderTabBar={renderTabBar}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
