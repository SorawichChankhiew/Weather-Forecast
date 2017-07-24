/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    date,
    TouchableHighlight,
    button,
    Picker
} from 'react-native';

export default class WeatherForecast extends Component {

    state = {
        name: 'Somewhere',
        weather: '',
        icon: 'openweathermap.org/img/w/10d.png',
        temp: 0,
        date: "", unit: "°C",  
    };
    _log() {
        console.log(this.state);
    }

    _Background_1() {
        backgroundColor: '#D3FFCE'
    }
    _Background_2() {
        backgroundColor: '#FFB6C1'
    }


    _handleName(event) {
        //console.log(event);
        var name = event.nativeEvent.text;
        var appid = '49b745799ce58d0b327e512ecb70ce08';
        var units = ""
        
        if(this.state.unit === "°C"){
            units = "metric"
        } else if(this.state.unit === "°F"){
            units = "imperial"
        }

        fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + name + '&appid=' + appid + '&units=' + units)
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON);
                this.setState({
                    name: name,
                    weather: [responseJSON.list[0].weather[0].main,
                    responseJSON.list[8].weather[0].main,
                    responseJSON.list[16].weather[0].main,
                    responseJSON.list[24].weather[0].main,
                    responseJSON.list[32].weather[0].main,],

                    icon: ['openweathermap.org/img/w/' + responseJSON.list[0].weather[0].icon + '.png',
                    'openweathermap.org/img/w/' + responseJSON.list[8].weather[0].icon + '.png',
                    'openweathermap.org/img/w/' + responseJSON.list[16].weather[0].icon + '.png',
                    'openweathermap.org/img/w/' + responseJSON.list[24].weather[0].icon + '.png',
                    'openweathermap.org/img/w/' + responseJSON.list[32].weather[0].icon + '.png',
                    ],
                    temp: [responseJSON.list[0].main.temp,
                    responseJSON.list[8].main.temp,
                    responseJSON.list[16].main.temp,
                    responseJSON.list[24].main.temp,
                    responseJSON.list[32].main.temp,],

                    date: [responseJSON.list[0].dt,
                    responseJSON.list[8].dt,
                    responseJSON.list[16].dt,
                    responseJSON.list[24].dt,
                    responseJSON.list[32].dt,]

                });
                console.loge(this.state.weather);
            })
            .catch((error) => {
                console.warn(error);
            });
        this.setState({
            name: name,
        }, //this._log
        );

    } 
    _handlePicker(itemValue, itemIndex) {
        this.setState({
            unit: itemValue
        }, this._log);

    }

    render() {
        return (

            <View style={styles.container}>

                <Text style={{ fontSize: 18, color: "green" }}>
                    Where Are You?
                    </Text>

                <Picker style={{width:100, height:50}}
            selectedValue={this.state.unit}
            onValueChange={(itemValue, itemIndex) => this._handlePicker(itemValue, itemIndex) }>
            <Picker.Item label="°C" value="°C" />
            <Picker.Item label="°F" value="°F" />
        </Picker>

            <TextInput style={{ width: 150, height: 50 }}
                onSubmitEditing={(event) => this._handleName(event)} />
            <View style={styles.all}>
                <View style={styles.DAY1}>
                    <Text style={{ fontSize: 12, textAlign: 'center' }}
                    >TO DAY</Text>
                    <Text style={styles.welcome}>
                        {this.state.name}
                    </Text>

                    <Text style={styles.welcome}>
                        {this.state.temp[0]}
                    </Text>

                    <Text style={{ fontSize: 12, textAlign: 'center' }}>
                        {this.state.weather[0]}
                    </Text>
                    <Text>
                        {this.state.date[0]}
                    </Text>
                    <Image
                        source={{ uri: 'http://' + this.state.icon[0] }}
                        style={{ width: 40, height: 40, borderWidth: 1, marginLeft: 25 }}
                    />
                </View>

                <View style={styles.DAY1}>
                    <Text style={{ fontSize: 12, textAlign: 'center' }}
                    >TOMORROW</Text>
                    <Text style={styles.welcome}>
                        {this.state.name}
                    </Text>

                    <Text style={styles.welcome}>
                        {this.state.temp[1]}
                    </Text>

                    <Text style={{ fontSize: 12, textAlign: 'center' }}>
                        {this.state.weather[1]}
                    </Text>
                    <Text>
                        {this.state.date[1]}
                    </Text>
                    <Image
                        source={{ uri: 'http://' + this.state.icon[1] }}
                        style={{ width: 40, height: 40, borderWidth: 1, marginLeft: 25 }}
                    />
                </View>

                <View style={styles.DAY1}>
                    <Text style={{ fontSize: 12, textAlign: 'center' }}
                    >DAY 3</Text>
                    <Text style={styles.welcome}>
                        {this.state.name}
                    </Text>

                    <Text style={styles.welcome}>
                        {this.state.temp[2]}
                    </Text>

                    <Text style={{ fontSize: 12, textAlign: 'center' }}>
                        {this.state.weather[2]}
                    </Text>
                    <Text>
                        {this.state.date[2]}
                    </Text>
                    <Image
                        source={{ uri: 'http://' + this.state.icon[2] }}
                        style={{ width: 40, height: 40, borderWidth: 1, marginLeft: 25 }}
                    />
                </View>

                <View style={styles.DAY1}>
                    <Text style={{ fontSize: 12, textAlign: 'center' }}
                    >DAY 4</Text>
                    <Text style={styles.welcome}>
                        {this.state.name}
                    </Text>

                    <Text style={styles.welcome}>
                        {this.state.temp[3]}
                    </Text>

                    <Text style={{ fontSize: 12, textAlign: 'center' }}>
                        {this.state.weather[3]}
                    </Text>
                    <Text>
                        {this.state.date[3]}
                    </Text>
                    <Image
                        source={{ uri: 'http://' + this.state.icon[3] }}
                        style={{ width: 40, height: 40, borderWidth: 1, marginLeft: 25 }}
                    />
                </View>
                <View style={styles.DAY1}>
                    <Text style={{ fontSize: 12, textAlign: 'center' }}
                    >DAY 5</Text>
                    <Text style={styles.welcome}>
                        {this.state.name}
                    </Text>

                    <Text style={styles.welcome}>
                        {this.state.temp[4]}
                    </Text>

                    <Text style={{ fontSize: 12, textAlign: 'center' }}>
                        {this.state.weather[4]}
                    </Text>
                    <Text>
                        {this.state.date[4]}
                    </Text>
                    <Image
                        source={{ uri: 'http://' + this.state.icon[4] }}
                        style={{ width: 40, height: 40, borderWidth: 1, marginLeft: 25 }}
                    />
                </View>

            </View>
            <View>
                <TouchableHighlight onPressIn={() => this._Background_1()}>
                    <View style={[styles.button, { backgroundColor: 'green' }]}>
                        <Text style={styles.textbutton}>
                            THEME 1
                                </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPressIn={() => this._Background_2()}>
                    <View style={[styles.button, { backgroundColor: 'green' }]}>
                        <Text style={styles.textbutton}>
                            THEME 2
                            </Text>
                    </View>
                </TouchableHighlight>


            </View> 
            </View >
        );
    }
}
const moreStyles = StyleSheet.create({
    name: {
        color: '#0000ff'
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },

    all: {
        flexDirection: 'row'
    },
    welcome: {
        fontSize: 10,
        textAlign: 'center',
        margin: 10,
    },
    DAY1: {
        borderWidth: 0.8,
        width: 90,
        height: 190,
    }
});