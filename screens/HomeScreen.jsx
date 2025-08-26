import {View, StyleSheet, ScrollView} from "react-native";
import Header from "../components/Header";
import BtnCont from "../components/BtnCont";
import AddTask from "../components/AddTask";
import TasksEmpty from "../components/TasksEmpty";
import sizes from "../design/sizes";
import colors from "../design/colors";
import SearchInput from "../components/SearchInput";
import Card from "../components/Card";

function HomeScreen() {
    return (
        <ScrollView style={styles.father}>
            <Header />

            <AddTask />

            <View style={styles.container}>
                <BtnCont type={"criadas"} numero={10} />
                <BtnCont type={"concluidas"} numero={3} />
            </View>

            <SearchInput />

            <Card />

        </ScrollView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: sizes.marginHorizontal,
        marginTop: sizes.paddingLarge,
        paddingBottom: sizes.paddingMedium,
        borderBottomWidth: 2,
        borderBottomColor: colors.gray330,
    },
    father: {
        paddingBottom: 50
    }
})