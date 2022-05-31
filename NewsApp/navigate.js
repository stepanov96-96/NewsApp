import React from 'react';
import Main from './components/Main';
import FullInfo from './components/FullInfo';
import Contacts from './components/FullInfo';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate(){
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name = "Main"
                component = {Main}
                options = {
                    {
                        title: 'main page',
                        headerStyle: { backgroundColor: '#FA8072', height: 90},
                        headerTitleStyle: {position: 'absolute', right: -225 },

                    }
                }
            />

            <Stack.Screen 
                name = "FullInfo"
                component = {FullInfo}
                options = {
                    {
                        title: 'FullInfo',
                        headerStyle: { backgroundColor: '#FA8072', height: 90},
                        headerTitleStyle: {position: 'absolute', right: -160 },
                    }
                }
            />
            <Stack.Screen 
                name = "Contacts"
                component = {Contacts}
                options = {
                    {
                        title: 'Contacts',
                        headerStyle: { backgroundColor: '#FA8072', height: 90},
                        headerTitleStyle: {position: 'absolute', right: -160 },
                    }
                }
            />
        </Stack.Navigator>
    </NavigationContainer>;
}