import { StyleSheet, Text, View } from "react-native"


const styles = StyleSheet.create({
    review:{
        fontSize:30,
        fontFamily:'OpenSans-Regular'
    }
})
const DetailScreen=()=>{
    return(
        <View>
            <Text style={styles.review}>
                Detail Screen google
            </Text>
        </View>
    )
}

export default DetailScreen;