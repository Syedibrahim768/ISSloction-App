import "react-native-gesture-handaler"
import * as React from "react"
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from"./screens/Home"
import ISSlocationScreen from"./screens/ISSlocation"
import Meteor from"./screens/Meteor"
const Stack=createStackNavigator()
 
function App (){
return (
  <NavigationContainer>
    <Stack.Navigator
    
    initialRouteName="Home"
    screenOptions={{
      headerShown:false,
    }}
    >
      <Stack.Screen name="Home" componen={HomeScreen}/>
      <Stack.Screen name="ISSlocation" componen={ISSlocationScreen}/>
      <Stack.Screen name="Meteor" componen={MeteorScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
)
  }















