import { View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import colors from "../design/colors";
import sizes from "../design/sizes";

function AddTask() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={"Adicione uma nova tarefa"} />
            <TouchableOpacity style={styles.button}>
                <Image source={require("../assets/add.png")} style={styles.image} />
            </TouchableOpacity>
        </View>
    )
}

export default AddTask;

const styles = StyleSheet.create({
    container: {
        gap: 10,
        flexDirection: "row",
        height: 60,
        marginTop: -30,
        marginHorizontal: sizes.marginHorizontal,
    },
    input: {
        fontSize: sizes.sizeSmall,
        backgroundColor: colors.gray100,
        borderColor: colors.gray330,
        borderWidth: 2,
        borderRadius: sizes.borderRadius,
        padding: sizes.paddingMedium,
        height: '100%',
        width: '80%'
    },
    button: {
        backgroundColor: colors.purpleDark,
        borderRadius: sizes.borderRadius,
        width: 60,
        justifyContent: "center",
        alignItems: "center",
        height: '100%'
    },
    image: {
        width: 25,
        height: 25,
        resizeMode: "contain",
    }
})