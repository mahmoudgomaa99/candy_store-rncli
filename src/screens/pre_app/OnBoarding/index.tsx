import {useEffect, useState} from 'react';
import {useRef} from 'react';
import {Animated, FlatList, View} from 'react-native';
import {boarding_data} from './data';
import Item from './Item';
import Paginator from './Paginator';
import {styles} from './styles';
import Svg from '../../../components/atoms/Svg';
import i18n from 'i18n-js';
import {navigateRootNavigation} from '../../../navigators/RootNavigation';
import {useAppDispatch} from '../../../redux/store';
import Boarding from '../../../redux/_Boarding';
import React from 'react';

const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const scrollX = useRef(new Animated.Value(0)).current;
  const sliderRef: any = useRef(null);
  const dispatch = useAppDispatch();

  const onViewItemChanged = useRef(({viewableItems}: any) => {
    setCurrentIndex(
      i18n.locale.includes('ar')
        ? boarding_data.length - 1 - viewableItems[0].index
        : viewableItems[0].index,
    );
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const scrollTo = async () => {
    if (currentIndex < boarding_data.length - 1) {
      sliderRef.current.scrollToIndex({
        index: i18n.locale.includes('ar')
          ? boarding_data.length - currentIndex - 2
          : currentIndex + 1,
      });
    } else {
      dispatch(Boarding.actions.doSetBoardingDone({}));
      navigateRootNavigation('welcome', {});
    }
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 3}}>
        <FlatList
          data={boarding_data}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item}) => <Item item={item} />}
          bounces={false}
          keyExtractor={item => item.id.toString()}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={onViewItemChanged}
          viewabilityConfig={viewConfig}
          ref={sliderRef}
        />
      </View>
      <Paginator data={boarding_data} scrollX={scrollX} />
      <Svg
        name="nextButton"
        percentage={(currentIndex + 1) * (100 / boarding_data.length)}
        onPress={scrollTo}
      />
    </View>
  );
};

export default Index;
