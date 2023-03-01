import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import 'react-native-gesture-handler';

import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';

import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components';
import * as Font from 'expo-font';
import { AuthProvider, useAuth } from './src/hooks/auth';
import Routes from './src/routes';

export default function App() {
  const [appIsLoading, setAppIsLoading] = useState(true);
  const { userStorageLoading } = useAuth();

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Poppins_400Regular,
          Poppins_500Medium,
          Poppins_700Bold,
        });

        
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsLoading(false);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (!appIsLoading && !userStorageLoading) {
      await SplashScreen.hideAsync();
    }
  }, [appIsLoading, userStorageLoading]);

  if (appIsLoading) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </View>
  );
}
