import {View, StyleSheet, TouchableOpacity, Text, Image} from "react-native";
import sizes from "../design/sizes";
import colors from "../design/colors";

function Card({
    concluido = false,
    texto = "",
    fnExcluir,
    fnConcluir
  }
)
{
    return (
        <View style={!concluido ? styles.container : styles.containerChecked}>
            <TouchableOpacity style={!concluido ? styles.check : styles.checkChecked} onPress={fnConcluir}>
                {
                    concluido ? (
                        <Image source={require('../assets/check.png')} style={styles.checkIcon}></Image>
                    ) : null
                }
            </TouchableOpacity>
            <Text style={!concluido ? styles.title : styles.titleChecked}>{texto}</Text>
            <TouchableOpacity onPress={fnExcluir}>
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
    containerChecked: {
        flexDirection: "row",
        marginHorizontal: sizes.marginHorizontal,
        padding: sizes.paddingMedium,
        gap: 12,
        backgroundColor: "white",
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
    checkChecked: {
        borderRadius: sizes.borderRounded,
    },
    checkIcon: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
        backgroundColor: 'white',
        borderRadius: sizes.borderRounded,
        borderWidth: 2,
        borderColor: colors.greenBase
    },
    title: {
        color: colors.gray600,
        textAlign: "left",
        width: '80%'
    },
    titleChecked: {
        color: colors.gray500,
        textAlign: "left",
        width: '80%',
        textDecorationLine: 'line-through'
    },
    deleteIcon: {
        width: 21,
        height: 21,
        resizeMode: "contain",
    }

})