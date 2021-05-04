/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStore } from "redux";
import { Provider } from "react-redux";
import Counter from './Counter';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Dimensions,
  useColorScheme, Image,
  View,
  Button,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window');

const products = [

  {
    id: '01',
    title: 'trà nhiệt đới',
    price: '40.000 VND',
    imageUrl: 'https://vcdn-ngoisao.vnecdn.net/2020/08/20/Hinh-1-thay-7234-1597914446.png'
  },
  {
    id: '02',
    title: 'trà sữa toco',
    price: '50.000 VND',
    imageUrl: 'https://media1.nguoiduatin.vn/media/nhap-bai-qc/2018/11/09/tocotoco2.png'

  },
  {
    id: '03',
    title: 'trà sữa toco',
    price: '45.000 VND',
    imageUrl: 'https://media1.nguoiduatin.vn/media/nhap-bai-qc/2018/11/09/tocotoco2.png'

  },
  {
    id: '04',
    title: 'trà sữa toco',
    price: '50.000 VND',
    imageUrl: 'https://media1.nguoiduatin.vn/media/nhap-bai-qc/2018/11/09/tocotoco2.png'

  },
  {
    id: '05',
    title: 'trà sữa toco',
    price: '40.000 VND',
    imageUrl: 'https://media1.nguoiduatin.vn/media/nhap-bai-qc/2018/11/09/tocotoco2.png'

  },
  {
    id: '06',
    title: 'trà sữa toco',
    price: '40.000 VND',
    imageUrl: 'https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_11_08/image001_10.jpg'
  },

];

const initialState = {
  count: 0
};


function reducer(state = initialState, action) {

  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }

};

const store = createStore(reducer);

const App = () => {

  const renderItem = ({ item }) => (
    <View style={styles.wrapItem}>
      <Image source={{ uri: item.imageUrl }} style={{ width: '100%', aspectRatio: 1.5 }} />
      <View style={{ paddingVertical: 10, paddingHorizontal: 12 }}>
        <Text>{item.title}</Text>
        <Text>{item.price}</Text>
        <Icon name="shopping-cart" color="black" size={30} />
        <Button title='Thêm vào Giỏ hàng' />
      </View>
    </View>
  );

  return (
    <View style={styles.Container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 20, paddingTop: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff'
  },


  wrapItem: {
    backgroundColor: '#fff',
    marginLeft: 15,
    width: (width - 45) / 2,
    marginTop: 15,
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  buttonThem: {
    width: 10,
    height: 5,
  }

});

export default App;
