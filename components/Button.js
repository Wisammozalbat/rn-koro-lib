import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native';
import {KoroIcon} from './Icon'

export const KoroButton = (props) =>{

    let disabledStyle = null
    let { onPress, onPressIn, onPressOut, onLongPress, title = '', disabled, 
        buttonStyle, textStyle, touchColor, disabledBackgroundColor, disabledColor, icon } = props;

    const [backgroundColor, setBackgroundColor] = useState(buttonStyle.backgroundColor);

    if (!touchColor) touchColor = "rgba(10,38,255,0.8)";
    if (disabled) {
        disabledStyle = {
            backgroundColor: disabledBackgroundColor  || 'grey',
        }
        textStyle.color = disabledColor || 'black'
    }else{
        disabledStyle = null
    }

    const onPressInHandler = () =>{
        setBackgroundColor(touchColor);
        if (onPressIn){
            onPressIn();
        }
    }

    const onPressOutHandler = () =>{
        setBackgroundColor(props.buttonStyle.backgroundColor);
        if (onPressOut){
            onPressOut();
        }
    }

    return (
        <TouchableWithoutFeedback {...props} onPressIn={onPressInHandler} onPressOut={onPressOutHandler} 
            onPress={onPress} onLongPress={onLongPress} disabled={disabled}>
            <View style={{...styles.container, ...buttonStyle, backgroundColor: backgroundColor, ...disabledStyle}}>
                <KoroIcon icon={icon}/>
                <Text style={{ ...styles.text, ...textStyle }}>{ title }</Text>
            </View >
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: 'blue',
        minWidth: 100,
        padding: 10,
        overflow: 'hidden'
    },
    text: {
        fontSize: 15,
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'normal'
    }
})