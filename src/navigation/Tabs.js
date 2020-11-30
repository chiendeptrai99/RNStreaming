import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Active from '../screen/Active'
import Executed from '../screen/Executed'
import Inactive from '../screen/Inactive'
import { NavigationContainer } from '@react-navigation/native';
const Tab = createMaterialTopTabNavigator();


export default function Tabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{
                style: { backgroundColor: '#12141F' },
                labelStyle: { color: '#8A8B92', textTransform: 'none' },
            }}>
                <Tab.Screen name="Active" component={Active} />
                <Tab.Screen name="Executed" component={Executed} />
                <Tab.Screen name="Inactive" component={Inactive} />
            </Tab.Navigator>
        </NavigationContainer >
    );
}