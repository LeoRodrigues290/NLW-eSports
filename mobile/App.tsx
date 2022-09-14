import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello World!</Text>
            <Button title={'Send 1'} />
            <StatusBar style="auto"/>
        </View>
    );
}
interface ButtonProps{
    title: string;
}

function Button(props: ButtonProps){
    return (
        <TouchableOpacity>
            <Text style={styles.button}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        color: 'white',
        fontSize: 22,
    },

    button: {
        color: 'purple',
        backgroundColor: 'white',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 60,
        paddingRight: 60,
    }
});
