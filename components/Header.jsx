import colors from "../design/colors";
import Logo from "./Logo";
import AddButton from "./AddTask";
import { View, StyleSheet } from "react-native";
import AddTask from "./AddTask";

function Header() {
    return (
        <View style={styles.container}>
            <Logo />

            <AddTask />
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        height: 200,
        backgroundColor: colors.gray330,
    }
})