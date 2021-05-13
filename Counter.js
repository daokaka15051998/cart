import React from 'react';
import { connect } from "react-redux";
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import logger from 'redux-logger';

class Counter extends React.Component {

    increment = () => {
        this.props.dispatch({ type: 'INCREMENT', data: this.props.item });
        console.log('test')
    }

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT', data: this.props.item });
        console.log('test2')
    }

    // change_name = () => {
    //     this.props.dispatch({ type: '  CHANGE_NAME' });
    // }

    render() {
        console.log(1111, this.props)
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.increment} style={styles.CongTru} >
                    <Text style={{ width: 50, height: 20, }}>+</Text>
                </TouchableOpacity>
                <Text>Số Lượng : {this.props.cart[this.props.item.id]?.quantity || ''}</Text>
                <TouchableOpacity onPress={this.decrement} style={styles.Tru} >
                    <Text style={{ width: 50, height: 20, }}>-</Text>
                </TouchableOpacity>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        flex: 2,
        justifyContent: "center",
        paddingHorizontal: 10,
        alignItems: 'center',
        borderRadius: 20,
    },
    Cong: {
        borderColor: 'black',
        fontSize: 20,
        paddingLeft: 10,
    },
    Tru: {
        borderColor: 'black',
        fontSize: 20,
        paddingLeft: 10,
    }
});

// const mapStateToProps = (state) => ({
//     count: state.count
// });
function mapStateToProps(state) {
    return { cart: state.cart }
}


export default connect(mapStateToProps)(Counter);