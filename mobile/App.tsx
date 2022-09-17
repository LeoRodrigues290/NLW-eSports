import {StatusBar} from "react-native";
import {Background} from "./src/componentes/Background";
import {Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black, useFonts} from '@expo-google-fonts/inter';
import {Home} from "./src/screens/Home";
import {Loading} from "./src/componentes/Loading";

export default function App() {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_900Black
    });

    return (
        <Background>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            {fontsLoaded ? <Home/> :  <Loading/>}

        </Background>
    );
}