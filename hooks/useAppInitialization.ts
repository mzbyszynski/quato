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
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as Facebook from 'expo-facebook';

const useAppInitialization = () => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [
    credentials,
    setCreddentials,
  ] = React.useState<Facebook.FacebookAuthenticationCredential | null>(null);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    const loadResourcesAndDataAsync = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();

        const [creds] = await Promise.all([
          Facebook.initializeAsync({}).then(() =>
            Facebook.getAuthenticationCredentialAsync(),
          ),
          Font.loadAsync({
            ...Ionicons.font,
            // eslint-disable-next-line global-require
            'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
          }),
        ]);
        setCreddentials(creds);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    };

    loadResourcesAndDataAsync();
  }, []);

  const authControls = React.useMemo(
    () => ({
      login: async () => {
        const result = await Facebook.logInWithReadPermissionsAsync();
        if (result.type === 'success') {
          setCreddentials(result);
        }
      },
    }),
    [],
  );

  return { isLoadingComplete, credentials, authControls };
};

export default useAppInitialization;
