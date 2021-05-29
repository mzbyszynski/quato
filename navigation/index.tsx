/*
 * Copyright (C) 2021  Marc Zbyszynski
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import * as React from 'react';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {
  createStackNavigator,
  StackHeaderProps,
} from '@react-navigation/stack';
import { ColorSchemeName } from 'react-native';
import {
  Appbar,
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import * as Facebook from 'expo-facebook';
import AddOpinion from '../screens/AddOpinion';
import Home from '../screens/Home';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import Login from '../screens/Login';
import { User } from '../graphqlTypes';

interface RootNavigatorProps {
  credentials: Facebook.FacebookAuthenticationCredential | null;
  userId?: User["_id"];
}
interface NavigationProps extends RootNavigatorProps {
  colorScheme: ColorSchemeName;
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = ({ credentials, userId }: RootNavigatorProps) => (
  <Stack.Navigator
    screenOptions={{
      header: ({ scene }: StackHeaderProps) => (
        <Appbar.Header>
          <Appbar.Content title={scene.descriptor.options.title} />
        </Appbar.Header>
      ),
    }}
  >
    {credentials == null ? (
      <Stack.Screen name="Login" component={Login} />
    ) : (
      <>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'QUATO' }}
        />
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
      </>
    )}
  </Stack.Navigator>
);

const Navigation = ({ colorScheme, credentials, userId }: NavigationProps) => (
  <PaperProvider
    theme={colorScheme === 'dark' ? PaperDarkTheme : PaperDefaultTheme}
  >
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={
        colorScheme === 'dark' ? NavigationDarkTheme : NavigationDefaultTheme
      }
    >
      <RootNavigator credentials={credentials} userId={userId} />
    </NavigationContainer>
  </PaperProvider>
);

export default Navigation;
