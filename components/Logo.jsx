import { Image, StyleSheet } from "react-native";

function Logo() {
    return (
        <>
            <Image source={require("../assets/Logo.png")} style={styles.logo} />
        </>
    )
}

export default Logo;

const styles = StyleSheet.create({
    logo: {
        width: 150,
        resizeMode: "contain",
    }
})