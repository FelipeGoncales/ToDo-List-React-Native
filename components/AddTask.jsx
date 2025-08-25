import { View, StyleSheet, TextInput } from "react-native";
import colors from "../design/colors";

function AddTask(props) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={"Adicione uma nova tarefa"} />
        </View>
    )
}

export default AddTask;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: -22,
        width: "80%",
        gap: 10
    },
    input: {
        fontSize: 16,
        backgroundColor: colors.gray100,
        borderColor: colors.gray330,
        borderWidth: 2,
        borderRadius: 8,
        padding: 18,
        width: "100%",
    }
})