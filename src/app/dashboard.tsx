import { Text, View } from "react-native";

export default function Dashboard() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dashboard</Text>
        </View>
    );
}

export const styles = {
    container: {
        flex: 1,
        justifyContent: 'center' as 'center',
        alignItems: 'center' as 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold' as 'bold',
    },
};
