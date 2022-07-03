import {ScrollView, StyleSheet, Keyboard} from 'react-native';
import {useEffect} from 'react';
import React from 'react';

const SearchScreen = ({navigation}: any) => {
  useEffect(() => {
    const gestureHandler = navigation.addListener('beforeRemove', () => {
      Keyboard.dismiss();
    });
    return () => {
      gestureHandler.remove();
    };
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled"></ScrollView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
