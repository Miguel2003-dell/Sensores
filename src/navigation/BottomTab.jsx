import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home'
import Sensor from '../screens/Sensor'
import Lecturas from '../screens/Lecturas'

const Tab = createMaterialBottomTabNavigator();

function BottomTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={Sensor} />
            <Tab.Screen name="Settings" component={Lecturas} />
        </Tab.Navigator>
    );
}

export default BottomTab;