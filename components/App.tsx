
import { Appearance, View, StyleSheet, Button, Text, ColorSchemeName, Dimensions, TouchableOpacity } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import DrawerItem from '../constants/DrawerItem';
import ProfileScreen from '../screens/Profile';
import TabContainer from '../screens/TabContainer';

//drawer para menu
const Drawer = createDrawerNavigator();



export default function MainComponent() {
    const scheme = useColorScheme();

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
        <NavigationContainer>

            <Drawer.Navigator

                initialRouteName="Profile"

                screenOptions={{
                    drawerType: "front",
                    drawerActiveTintColor: "#e91e63",
                    drawerItemStyle: { marginVertical: 10 }
                }}
            >
                <Drawer.Screen name="Profile" component={ProfileScreen}></Drawer.Screen>
                <Drawer.Screen name="Tabs" component={TabContainer}></Drawer.Screen>
                {/* {
                    DrawerItem.map(drawer => <Drawer.Screen name={drawer.name} />)
                } */}
                {/* <TabView
                    navigationState={{ index, routes }}
                    renderTabBar={renderTabBar}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={initialLayout}
                /> */}
            </Drawer.Navigator>
        </NavigationContainer>
    );


    // console.log(scheme)
    // return (

    //     <View>

    //         <Text>We are on {scheme} mode!</Text>
    //         {/* content */}
    //         <Button title="Switch Mode" />
    //         <Navigation colorScheme={scheme} />
    //         <StatusBar style="auto" />
    //     </View>
    // );

}
// const styles = StyleSheet.create({
//     text: {
//         marginBottom: 20
//     },
//     container_light: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     text_light: {
//         marginBottom: 20,
//         color: '#000'
//     },
//     container_dark: {
//         flex: 1,
//         backgroundColor: '#121212',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     text_dark: {
//         marginBottom: 20,
//         color: "#fff"
//     }
// });