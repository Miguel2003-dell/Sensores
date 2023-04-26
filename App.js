import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { View } from "react-native";
import BottomTab from '.src/navigation/bottom';

const App = () => {
  return (
    <View>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </View>

  )
}

export default App;
