import React from 'react';
import { connect } from "react-redux";
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Counter extends React.Component {

    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    }

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.increment} style={styles.CongTru} >
                    <Text style={{ width: 50, height: 20, }}>+</Text>
                </TouchableOpacity>
                <Text>Số Lượng : {this.props.count}</Text>
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

const mapStateToProps = (state) => ({
    count: state.count
});


export default connect(mapStateToProps)(Counter);