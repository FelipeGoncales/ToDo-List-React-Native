import {TouchableOpacity, Text, View, StyleSheet} from "react-native";
import sizes from "../design/sizes";
import colors from "../design/colors";

function BtnCont({ type, action, numero }) {
    return (
        <TouchableOpacity style={styles.container} onPress={action}>
            <Text style={styles.title}>{ type == 'criadas' ? "Tarefas criadas" : "Concluídas" }</Text>
            <View style={ type == 'criadas' ? styles.bolinhaCriada : styles.bolinhaConcluida}>
                <Text style={ type == 'criadas' ? styles.criadas : styles.concluidas}>{numero}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default BtnCont;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    },
    title: {
        fontSize: sizes.sizeSmall,
        fontWeight: "bold",
        color: colors.gray500,
    },
    bolinhaCriada: {
        borderRadius: sizes.borderRounded,
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: colors.purpleLight,
    },
    bolinhaConcluida: {
        borderRadius: sizes.borderRounded,
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: colors.greenLight,
    },
    criadas: {
        fontWeight: 'bold',
        fontSize: sizes.sizeSmall,
        color: colors.purpleDark,
    },
    concluidas: {
        fontWeight: 'bold',
        fontSize: sizes.sizeSmall,
        color: colors.greenDark,
    }
})