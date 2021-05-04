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
                <Text>{this.props.count}</Text>
                <TouchableOpacity onPress={this.increment} style={styles.Cong} >
                    <Text style={{ width: 50, height: 30, alignItems: 'center' }}>cong</Text>
                </TouchableOpacity>
                <Text></Text>
                <TouchableOpacity onPress={this.decrement} style={styles.Cong} >
                    <Text style={{ width: 50, height: 30, alignItems: 'center' }}>tru</Text>
                </TouchableOpacity>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: "center",
        paddingHorizontal: 10,
        alignItems: 'center',
        paddingBottom: 20
    },
    Cong: {
        backgroundColor: 'red',
        borderColor: 'black',
    }
});

const mapStateToProps = (state) => ({
    count: state.count
});


export default connect(mapStateToProps)(Counter);