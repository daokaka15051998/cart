/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStore, applyMiddleware } from "redux";
import Counter from './Counter';
import { Provider } from "react-redux";
import { logger, createLogger } from 'redux-logger';


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

const { height, width } = Dimensions.get('window');
// chieu rong can bang voi man hinh cua dien thoai

const products = [

  {
    id: '01',
    title: 'Trà nhiệt đới',
    price: '40.000 VND',
    imageUrl: 'https://vcdn-ngoisao.vnecdn.net/2020/08/20/Hinh-1-thay-7234-1597914446.png'
  },
  {
    id: '02',
    title: 'Trà sữa toco',
    price: '50.000 VND',
    imageUrl: 'https://media1.nguoiduatin.vn/media/nhap-bai-qc/2018/11/09/tocotoco2.png'

  },
  {
    id: '03',
    title: 'Trà đào',
    price: '45.000 VND',
    imageUrl: 'https://otavietnam.com/wp-content/uploads/2020/04/tra-sua-bac-giang-7.jpg'

  },
  {
    id: '04',
    title: 'Trà sữa toco',
    price: '50.000 VND',
    imageUrl: 'https://cdn-www.vinid.net/2020/09/8cb97047-tr%C3%A0-s%E1%BB%AFa-pozaa-tea-%C6%B0u-%C4%91%C3%A3i.jpg'

  },
  {
    id: '05',
    title: 'Trà sữa toco',
    price: '40.000 VND',
    imageUrl: 'https://d1sag4ddilekf6.cloudfront.net/compressed/merchants/5-CZAKTANKLNNXRJ/hero/7a7b18bd0d2a48ae8cb145edc0ba6937_1615741564084754767.png'

  },
  {
    id: '06',
    title: 'Trà sữa toco',
    price: '40.000 VND',
    imageUrl: 'https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_11_08/image001_10.jpg'
  },

];

const initialState = {
  // count: 0,
  cart: {
    '01': {
      id: '01',
      title: 'Trà nhiệt đới',
      price: '40.000 VND',
      imageUrl: 'https://vcdn-ngoisao.vnecdn.net/2020/08/20/Hinh-1-thay-7234-1597914446.png',
      quantity: 1
    },
    '02': {
      id: '02',
      title: 'Trà nhiệt đới',
      price: '40.000 VND',
      imageUrl: 'https://vcdn-ngoisao.vnecdn.net/2020/08/20/Hinh-1-thay-7234-1597914446.png',
      quantity: 1
    }
  },
  user: {
    name: 'dao'
  }
};

function reducer(state = initialState, action) {

  var { data } = action;

  var { cart } = state;

  // ...state, cart: {
  //   ...cart, [data.id]: {
  //     ...cart[data.id], quantity: cart[data.id].quantity - 1
  //   }
  // }

  switch (action.type) {
    // action.type lay thong tin tu ben ham increment counter
    case 'INCREMENT':
      return {
        ...state, cart: {
          ...cart, [data.id]: {
            ...cart[data.id], quantity: cart[data.id].quantity + 1
          }
        }
      };
    case 'DECREMENT':
      return {
        ...state, cart: {
          ...cart, [data.id]: {
            ...cart[data.id], quantity: cart[data.id].quantity - 1
          }
        }
      };
    case 'CHANGE_NAME': {
      return {
        ...state, user: { ...state.user, name: "pro" }
      }
    }
    default:
      return state;
  }

};
// const logger = createLogger({
// });

const store = createStore(reducer, applyMiddleware(logger));

const App = () => {

  const renderItem = ({ item }) => (

    <View style={styles.wrapItem}>
      <Image source={{ uri: item.imageUrl }} style={{ width: '100%', aspectRatio: 1.5 }} />
      <View style={{ paddingVertical: 10, paddingHorizontal: 12 }}>
        <Text style={{ marginLeft: 30, fontWeight: 'bold' }}  >{item.title}</Text>
        <Text style={{ marginLeft: 30, marginBottom: 5 }} >{item.price}</Text>
        <Icon name="shopping-cart" color="black" size={25} style={{ marginLeft: 50, marginBottom: 5 }} />
        <Counter item={item} />
      </View>
    </View>
  );

  return (

    <Provider store={store} >
      <View style={styles.Container}>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={{ paddingBottom: 20, paddingTop: 20 }}
        />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#ffff'
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
