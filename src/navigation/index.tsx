import React from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {RootState} from '../store';
import {SET_COUNTER} from '../redux/counter/action';

const Navigation: React.FC = () => {
  const count = useSelector((state: RootState) => state.counterReducer.value);
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <View>
        <Text>{count}</Text>
        <TouchableOpacity
          onPress={() => {
            dispatch({
              type: SET_COUNTER,
              payload: {
                value: count + 1,
              },
            });
          }}>
          <Text>increment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            dispatch({
              type: SET_COUNTER,
              payload: {
                value: count - 1,
              },
            });
          }}>
          <Text>decrement</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Navigation;
