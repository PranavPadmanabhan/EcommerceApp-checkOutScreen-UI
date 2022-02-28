import { StyleSheet } from "react-native";
import { height, width} from '../../constants/constants'

const styles = StyleSheet.create({
    Header:{
        width:width,
        height:height * 0.08,
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"transparent",
        alignItems:"center",
        paddingLeft:10

    },
    right:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        width:"30%",
        height:"100%"
    }
})

export default styles