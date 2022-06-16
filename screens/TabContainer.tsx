import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Dimensions, ScrollView } from "react-native";
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';
import TabOneScreen from './TabOneScreen';
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

export default function TabContainer() {
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
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <ScrollView>


            <TabView
                navigationState={{ index, routes }}
                renderTabBar={renderTabBar}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
            />


        </ScrollView>
        /* </View> */
    );
}