import {TextInput, View, StyleSheet} from "react-native";
import sizes from "../design/sizes";
import colors from "../design/colors";

function InputSearch() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Busque por tarefas" />
        </View>
    )
}

export default InputSearch;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: sizes.marginHorizontal,
        marginVertical: sizes.sizeMedium,
        height: 60
    },
    input: {
        fontSize: sizes.sizeSmall,
        backgroundColor: colors.gray100,
        borderColor: colors.gray330,
        borderWidth: 2,
        borderRadius: sizes.borderRadius,
        padding: sizes.paddingMedium,
        height: '100%',
        width: '100%'
    }
})