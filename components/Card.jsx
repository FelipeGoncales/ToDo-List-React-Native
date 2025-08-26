import {View, StyleSheet, TouchableOpacity, Text, Image} from "react-native";
import sizes from "../design/sizes";
import colors from "../design/colors";

function Card() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.check}></TouchableOpacity>
            <Text style={styles.title}>Lorem ipsum dolor sit amet lorem ipsun dolor sit amet</Text>
            <TouchableOpacity>
                <Image style={styles.deleteIcon} source={require('../assets/lixo.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: sizes.marginHorizontal,
        padding: sizes.paddingMedium,
        gap: 12,
        backgroundColor: colors.gray330,
        borderColor: colors.gray400,
        borderWidth: 1,
        marginBottom: sizes.paddingMedium,
        borderRadius: sizes.borderRadius,
        alignItems: "center",
        justifyContent: "center"
    },
    check: {
        borderRadius: sizes.borderRounded,
        width: 16,
        height: 16,
        borderWidth: 2,
        borderColor: colors.purpleBase
    },
    title: {
        color: colors.gray600,
        textAlign: "left",
        width: '80%'
    },
    deleteIcon: {
        width: 21,
        height: 21,
        resizeMode: "contain",
    }

})