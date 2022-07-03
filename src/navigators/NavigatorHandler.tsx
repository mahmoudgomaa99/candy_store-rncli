import React, {useCallback, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import User from '../redux/user';
import useTokens from '../hooks/useTokens';
import {
  navigationRef,
  isReadyRef,
  navigateRootNavigation,
} from './RootNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Main_Naigator from './Main_Naigator';
import PreAppNavigator from './PreAppNavigator';
import {NavigationContainer} from '@react-navigation/native';
import NeedsInternetConnection from '../screens/NeedsInternetConnection';
import Search_Text_Input from '../components/molecules/Search_Text_Input';
import SplashScreen from '../screens/pre_app/SplashScreen';
import BoardingScreen from '../screens/pre_app/OnBoarding';
import {selectIsSplashDone} from '../redux/_splash';
import {selectIsBoardingDone} from '../redux/_Boarding';

const NavigatorHandler = () => {
  const currentUser = useSelector(User.selectors.currentUser);
  const isSplashDoneSelector = useSelector(selectIsSplashDone);
  const {isLoading} = useTokens();
  const [isNavigationLoading, setIsNavigationLoading] = useState(true);
  const isBoardingDone = useSelector(selectIsBoardingDone);
  const setIsReady = useCallback(() => {
    (isReadyRef as any).current = true;
    setIsNavigationLoading(false);
  }, []);

  const renderSwitch = useCallback(() => {
    if (!isSplashDoneSelector) return <SplashScreen />;
    if (!isBoardingDone) return <BoardingScreen />;
    if (currentUser) {
      return (
        <>
          <Search_Text_Input
            onPress={() => navigateRootNavigation('Search', {})}
          />
          <Main_Naigator />
        </>
      );
    } else return <PreAppNavigator />;
  }, [
    isLoading,
    isNavigationLoading,
    currentUser,
    isBoardingDone,
    isSplashDoneSelector,
  ]);

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef} onReady={setIsReady}>
        <NeedsInternetConnection>{renderSwitch()}</NeedsInternetConnection>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default NavigatorHandler;
