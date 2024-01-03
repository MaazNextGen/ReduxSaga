import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../store/actions/authActions';

const MainScreen = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const queue = useSelector(state => state.offline);

  const onSubmit = () => {
    dispatch(login({name: 'Maazy' + ' ' + Math.random().toFixed(2)}));
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>OUTBOX PRESENT IN QUEUE {queue.outbox.length}</Text>

      <Text>MainScreen</Text>

      <Text>{auth?.userData?.name}</Text>
      {auth?.isLoading && <ActivityIndicator size={'large'} color="violet" />}

      <TouchableOpacity
        style={{backgroundColor: 'purple', padding: 20}}
        onPress={onSubmit}>
        <Text>TRIGGER</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
