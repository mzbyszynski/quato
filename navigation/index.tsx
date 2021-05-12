/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {
  createStackNavigator,
  StackHeaderProps,
} from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import {
  Appbar,
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import AddOpinion from '../screens/AddOpinion';
import Home from '../screens/Home';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ scene }: StackHeaderProps) => (
          <Appbar.Header>
            <Appbar.Content title={scene.descriptor.options.title} />
          </Appbar.Header>
        ),
      }}
    >
      <Stack.Screen name="Home" component={Home} options={{ title: 'QUATO' }} />
      <Stack.Screen
        name="AddOpinion"
        component={AddOpinion}
        options={{ title: 'Add Opinion' }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  );
}

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <PaperProvider
      theme={colorScheme === 'dark' ? PaperDarkTheme : PaperDefaultTheme}
    >
      <NavigationContainer
        linking={LinkingConfiguration}
        theme={
          colorScheme === 'dark' ? NavigationDarkTheme : NavigationDefaultTheme
        }
      >
        <RootNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
