import { StatusBar, View } from "react-native";
import { Home } from "../src/screens/Home";
import { styles } from "./styles";

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" backgroundColor="#131016" />
			<Home />
		</View>
	);
}
