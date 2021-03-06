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
import { ApolloProvider } from '@apollo/client';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useAppInitialization from './hooks/useAppInitialization';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import AuthControlsContext from './AuthControlContext';
import useApolloClient from './hooks/useApolloClient';

const App = () => {
  const {
    isLoadingComplete,
    credentials,
    authControls,
    userId,
  } = useAppInitialization();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <AuthControlsContext.Provider value={authControls}>
      <SafeAreaProvider>
        <Navigation
          colorScheme={colorScheme}
          credentials={credentials}
          userId={userId}
        />
        <StatusBar />
      </SafeAreaProvider>
    </AuthControlsContext.Provider>
  );
};

export default () => {
  const client = useApolloClient();
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};
