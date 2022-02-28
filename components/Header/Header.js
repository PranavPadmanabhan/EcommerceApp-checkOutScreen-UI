import React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import Fa from 'react-native-vector-icons/FontAwesome5'
import styles from './styles'

function Header() {
  return (
    <View style={styles.Header}>
        <Icon name='west' color={'black'} size={30}/>
        <View style={styles.right}>
            <EvilIcon name='search' color={"black"} size={30}/>
            <Fa  name="shopping-bag" color={"black"}  size={22}/>
        </View>
    </View>
  )
}

export default Header