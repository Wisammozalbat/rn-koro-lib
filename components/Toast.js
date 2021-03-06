import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native';

import {KoroModal} from './Modal';

export const KoroToast = (props) => {
    const {time = 4000, position = 'bottom', title = 'KoroToast', style = {}} = props
    const [toast, setToast] = useState(null)
    const [hideStyle, setHideStyle] = useState(null)
    let toastPosition = {}
    // let hideStyle = {}
    if (position == 'bottom'){
        toastPosition = {
            position: 'absolute',
            bottom: 30
        }
    } else if (position == 'top'){
        toastPosition = {
            position: 'absolute',
            top: 30
        }
    } else if (position == 'middle'){
        toastPosition = {
            position: 'absolute',
            top: '50%'
        }
    }

    useEffect(() => visibleHandler(), []);
    useEffect(() => {
        if(!toast){
            setHideStyle({width: 0, height: 0, padding: 0, margin: 0})
        }else{
            setHideStyle(null)
        }
    }, [toast])

    const visibleHandler = () => {
        setToast(
            <Text style={{...style}}>{title}</Text>
        )
        setTimeout(()=>{
            setToast(null)
        }, time)
    }
    
    return (
        <View style={{...styles.toastStyle, ...style, ...toastPosition, ...hideStyle}}>
            {toast}
        </View>    
    )
}

const styles = StyleSheet.create({
    toastStyle:{
        zIndex: 200,
        backgroundColor: '#d4d4d4',
        width: '95%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        padding: 10,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 10,
    }
})