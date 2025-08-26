import {View, Image, StyleSheet, Text} from "react-native";
import sizes from "../design/sizes";
import colors from "../design/colors";

function TasksEmpty() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/prancheta.png')} style={styles.image} />
            <View style={styles.containerText}>
                <Text style={styles.textBold}>Você ainda não tem tarefas cadastradas</Text>
                <Text style={styles.textLight}>Crie tarefas e organize seus itens a fazer</Text>
            </View>
        </View>
    )
}

export default TasksEmpty;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        gap: 15,
        marginTop: sizes.paddingBig,
    },
    image: {
        width: 60,
        height: 60,
        resizeMode: "contain",
    },
    containerText: {
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
    },
    textBold: {
        fontWeight: "bold",
        fontSize: sizes.sizeSmall,
        color: colors.gray500,
    },
    textLight: {
        fontSize: sizes.sizeSmall,
        color: colors.gray500,
    }
})