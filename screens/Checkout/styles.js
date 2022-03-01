import { StyleSheet } from "react-native";
import { width,height } from "../../constants/constants";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
    hr:{
        width:width * 0.9,
        height:2,
        backgroundColor:"black",
        marginBottom:10,
        alignSelf:"center"
    },
    row:{
        flexDirection:"row",

    },
    box:{
        width:width,
        height:height*0.15,
        backgroundColor:"white",
        alignSelf:"center",
        justifyContent:"center",
        alignItems:"center"
    },
    Image:{
        width:"40%",
        height:"100%",
        resizeMode:"contain"
    },
    details:{
        flexDirection:"column",
        width:"50%"
    },
    item:{
        color:"black",
        fontSize:16,
        fontWeight:"700"
    },
    innerText:{
        color:"grey",
        fontSize:16,
        fontWeight:"400"
    },
    heading1:{
        marginLeft:20,
        fontSize:18
    },
    shipping:{
        width:width,
        justifyContent:"space-between",
        alignItems:"center",
        paddingRight:20
    },
    shipment:{
        alignItems:"center",
        backgroundColor:"white",
        height:height*0.08,
        paddingRight:10
    },
    checkbox:{
        width:20,
        height:20,
        padding:5,
        backgroundColor:"white",
        borderRadius:100,
        borderColor:"black",
        borderWidth:1,
        marginRight:10,
        marginLeft:10
    
    },
    paymentButton:{
        width:width*0.85,
        height:50,
        backgroundColor:"black",
        alignSelf:"center",
        position:"absolute",
        bottom:20,
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center"
    },
    paymentButtonText:{
        color:"white",
        fontSize:18,
        fontWeight:"700",
        letterSpacing:1
    }
})

export default styles