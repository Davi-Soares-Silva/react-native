import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, AntDesign, Foundation } from '@expo/vector-icons';

import Home from './pages/Home';
import ComingSoon from './pages/ComingSoon';
import colors from './styles/colors';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator
      tabBarOptions={{
        style: {
          height: 60,
          backgroundColor: colors.gray,
          borderTopWidth: 0,
          // justifyContent: 'center',
          alignItems: 'center',
        },
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 4,
          maxWidth: 90,
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 16,
        },
        labelStyle: {
          fontFamily: 'roboto_400',
          fontSize: 9,
          marginTop: 8
        },
        inactiveTintColor: colors.tab,
        activeTintColor: colors.black,
        }
      }
    >
      <Screen 
        name="Início" 
        component={Home} 
        options={{
          tabBarIcon: ({ size, focused })=>{
            return(
              <Foundation
                name="home"
                size={size}
                color={focused ? colors.black : colors.tab}
              />
            )
          }
        }}

      />
      <Screen name="Buscar" component={ComingSoon} options={{
          tabBarIcon: ({ size, focused })=>{
            return(
              <AntDesign
                name="search1"
                size={size}
                color={focused ? colors.black : colors.tab}
              />
            )
          }
        }}/>
      <Screen name="Sua Biblioteca" component={ComingSoon} options={{
          tabBarIcon: ({ size, focused })=>{
            return(
              <Ionicons
                name="library-outline"
                size={size}
                color={focused ? colors.black : colors.tab}
              />
            )
          }
        }}/>
    </Navigator>
  </NavigationContainer>
);

export default Routes;
