import React, { useState } from 'react'
import { Animated, Image, Pressable, ScrollView, Text, View } from 'react-native'
import Header from '../../components/Header/Header'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'
import { height, images, width } from '../../constants/constants'
import GestureRecognizer from 'react-native-swipe-gestures';
import DropDownPicker from 'react-native-dropdown-picker';


function ProductPage({navigation}) {
    const [selected, setselected] = useState(0)

    const [alignment] = useState(new Animated.Value(0));
    const [sheetVisible, setsheetVisible] = useState(false);
    const [open, setOpen] = useState(false);
    const [display, setDisplay] = useState("none")
    const [value, setValue] = useState(null);
    const [size, setsize] = useState(7)
    const [quantity, setQuantity] = useState(0)
    const [items, setItems] = useState([
        { label: 7, value: 7 },
        { label: 8, value: 8 },
        { label: 9, value: 9 },

    ]);

    const bottomsheetOpen = () => {
        Animated.timing(alignment, {
            toValue: 1,
            duration: 700,
            useNativeDriver: false

        }).start();
        setsheetVisible(true);
        setDisplay("flex")

    }
    const bottomsheetClose = () => {
        Animated.timing(alignment, {
            toValue: 0,
            duration: 700,
            useNativeDriver: false

        }).start();
        setsheetVisible(false);
        setDisplay("none")
    }

    const bottomSheetInterpolate = alignment.interpolate({
        inputRange: [0, 1],
        outputRange: [-height * 0.35 + 100, 0],
    });

    const bottomsheetStyle = {
        bottom: bottomSheetInterpolate
    }

    const colorInterpolation = alignment.interpolate({
        inputRange: [0, 1],
        outputRange: ["black", "white"]
    });



    function onSwipeUp(gestureState) {
        bottomsheetOpen()
    }

    function onSwipeDown(gestureState) {
        bottomsheetClose()
    }
    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };


    return (
        <View style={styles.Container}>
            <View style={[styles.overlay,{display:display,}]} />
            <Header />
            <Text style={styles.name}>Hyperdunk Nike Basketball Shoe</Text>
            <View style={styles.pricing}>
                <Text style={styles.price}>$ 355.99</Text>
                <View style={styles.rating}>
                    <Icon name='star' color={"yellow"} size={20} />
                    <Icon name='star' color={"yellow"} size={20} />
                    <Icon name='star' color={"yellow"} size={20} />
                    <Icon name='star' color={"yellow"} size={20} />
                    <Icon name='star' color={"grey"} size={20} />
                    <Text style={styles.total}>42</Text>
                </View>
            </View>
            <View style={styles.ImageContainer}>
                <Icon onPress={() => {
                    if (selected == 0) {
                        setselected(images.length - 1)
                    }
                    else {
                        setselected(selected - 1)
                    }
                }} name='arrow-back-ios' color={"grey"} size={28}  />
                <View style={styles.column}>
                    <Image source={{ uri: images[selected] }} style={styles.image} />
                    <View style={styles.indicatorContainer}>
                        {
                            images.map((item, index) => (
                                <View key={index} style={[styles.indicator, { backgroundColor: index == selected ? "black" : "grey" }]} />

                            ))
                        }
                    </View>
                </View>
                <Icon onPress={() => {
                    if (selected == images.length - 1) {
                        setselected(0)
                    }
                    else {
                        setselected(selected + 1)
                    }
                }} name='arrow-forward-ios' color={"grey"} size={28} />
            </View>
            <View style={styles.secondHeading}>
                <Text style={styles.heading}>Available colors</Text>
                <View style={styles.icons}>
                    <Icon name='share' color={"black"} size={22} />
                    <Icon name='favorite-border' color={"black"} size={22} />
                </View>
            </View>
            <View style={styles.colorContainer}>
                <View style={[styles.colorbox, { backgroundColor: "yellow" }]} />
                <View style={[styles.colorbox, { backgroundColor: "orange" }]} />
                <View style={[styles.colorbox, { backgroundColor: "red" }]} />
                <View style={[styles.colorbox, { backgroundColor: "navy" }]} />
                <View style={[styles.colorbox, { backgroundColor: "lightblue" }]} />
            </View>
            <Text style={styles.desc}>Keep your sneakers and your head in the game in the Nike Hyperdunk X Mid TB.</Text>
            <GestureRecognizer
                onSwipeUp={(state) => onSwipeUp(state)}
                onSwipeDown={(state) => onSwipeDown(state)}
                config={config}
                style={{ position: "absolute", bottom: 0 }}>


                <Animated.View style={[styles.sheet, bottomsheetStyle, { backgroundColor: colorInterpolation }]} >
                    {
                        sheetVisible ? (
                            <Animated.View>

                                <DropDownPicker
                                    open={open}
                                    value={value}
                                    items={items}
                                    setOpen={setOpen}
                                    setValue={setValue}
                                    setItems={setItems}
                                    onChangeValue={(value) => setsize(value) }
                                    style={{ width: width * 0.8, marginTop: 20,height:35, alignSelf: "center", marginBottom: 25 }}
                                    placeholder='SIZE'
                                    containerStyle={{ width: width * 0.8, alignSelf: "center" }}
                                />
                                <View style={styles.quantity}>
                                    <Text style={styles.color}>COLOR : INDIGO BLUE</Text>
                                    <View style={styles.countContainer}>
                                        <View style={styles.decrease}>
                                            <Icon onPress={() => {
                                                if (quantity !== 0) {
                                                    setQuantity(quantity - 1)
                                                }
                                            }} name='remove' color={"black"} size={22} />
                                        </View>
                                        <Text style={styles.itemCount}>{quantity}</Text>
                                        <View style={styles.add}>
                                            <Icon onPress={() => setQuantity(quantity + 1)} name='add' color={"black"} size={22} />

                                        </View>
                                    </View>
                                </View>
                                <View style={styles.row2}>
                                    <Text style={styles.color}>SIZE :{size}</Text>
                                    <Pressable style={[styles.decrease,{width:70,height:30}]}>
                                        <Text>Delete</Text>
                                    </Pressable>
                                </View>
                                <View style={styles.hr} />
                                <Text style={styles.totalPrice}>Total Cost : $395.99</Text>
                                <View style={styles.ButtonContainer}>
                                    <View style={styles.Button1}>
                                        <Text style={styles.Button1Text}>ADD TO BAG</Text>
                                    </View>
                                    <View style={styles.Button2}>
                                        <Text onPress={() => navigation.navigate("checkout")} style={styles.Button2Text}>BUY NOW</Text>
                                    </View>
                                </View>
                            </Animated.View>
                        ) : (
                            <Text onPress={bottomsheetOpen} style={styles.buyBtn}>BUY NOW</Text>

                        )
                    }
                </Animated.View>

            </GestureRecognizer>
        </View>
    )
}

export default ProductPage