import React, { useState } from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import Header from '../../components/Header/Header'
import { images } from '../../constants/constants'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'




function Checkout({navigation}) {

  const [shipping, setshipping] = useState('store')

  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.pop()}/>
      <ScrollView style={{paddingBottom:100}} showsVerticalScrollIndicator={false} contentInset={{bottom:100}} >
      <View style={styles.hr}/>
      <View style={[styles.row,styles.box]}>
        <Image style={styles.Image} source={{uri:images[0]}}/>
        <View style={styles.details}>
            <Text style={styles.item}>Product : <Text style={styles.innerText}>Hyperdunk Nike Basketball Shoe</Text></Text>
            <Text style={styles.item}>Color : <Text style={styles.innerText}>Indigo Blue</Text></Text>
            <Text style={styles.item}>Shoe Size : <Text style={styles.innerText}>12</Text></Text>
            <Text style={styles.item}>Shoe width : <Text style={styles.innerText}>Medium</Text></Text>
        </View>
      </View>
      <View style={[styles.hr,{marginVertical:15}]} />
      <View style={[styles.row,styles.shipping]}>
      <Text style={[styles.heading1,{color:"black"}]}>Shippin Method</Text>
      <Icon name='expand-more' color={"black"} size={26}/>
      </View>
      <View style={[styles.hr,{backgroundColor:"grey",marginVertical:10}]} />
        <View style={[styles.row,styles.shipment]}>
          <View style={[styles.checkbox,{backgroundColor:shipping=="store"?"black":"white"}]}/>
          <View style={styles.col}>
          <Text style={styles.item}>Pickup-in store :<Text style={styles.innerText}>Wednesday12-Friday14(EST)</Text></Text>
            <Text style={styles.innerText}>Free</Text>
          </View>
        </View>
      <View style={[styles.hr,{backgroundColor:"grey",marginVertical:10}]} />
        <View style={[styles.row,styles.shipment]}>
          <View style={[styles.checkbox,{backgroundColor:shipping=="standard"?"black":"white"}]}/>
          <View style={styles.col}>
          <Text style={styles.item}>Standard shipping :<Text style={styles.innerText}>Tuesday11-Thursday13(EST)</Text></Text>
            <Text style={styles.innerText}>4.95 USD</Text>
          </View>
        </View>
      <View style={[styles.hr,{backgroundColor:"grey",marginVertical:10}]} />
        <View style={[styles.row,styles.shipment]}>
          <View style={[styles.checkbox,{backgroundColor:shipping=="express"?"black":"white"}]}/>
          <View style={styles.col}>
          <Text style={styles.item}>Express shipping :<Text style={styles.innerText}>Monday10-Tuesday11(EST)</Text></Text>
            <Text style={styles.innerText}>9.99 USD</Text>
          </View>
        </View>
      <View style={[styles.hr,{marginVertical:15}]} />
      <View style={[styles.row,styles.shipping]}>
      <Text style={[styles.heading1,{color:"black"}]}>Shipping Address</Text>
      <Icon name='expand-more' color={"black"} size={26}/>
      </View>
      <View style={[styles.hr,{marginVertical:15}]} />
      <View style={[styles.row,styles.shipping]}>
      <Text style={[styles.heading1,{color:"black"}]}>Billing Address</Text>
      <Icon name='expand-more' color={"black"} size={26}/>
      </View>
      <View style={[styles.hr,{marginVertical:15}]} />
      <View style={[styles.row,styles.shipping]}>
      <Text style={[styles.heading1,{color:"black"}]}>Payment Method</Text>
      <Icon name='expand-more' color={"black"} size={26}/>
      </View>
      <View style={[styles.hr,{marginVertical:15}]} />

      </ScrollView>
      <Pressable style={styles.paymentButton}>
          <Text style={styles.paymentButtonText}>PLACE ORDERS</Text>
      </Pressable>
    </View>
  )
}

export default Checkout