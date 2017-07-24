/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import WeatherForecast from "./WeatherForecast";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';


AppRegistry.registerComponent('Project', () => WeatherForecast);
