import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./src/navigation/AppNavigation";
import Toast from "react-native-toast-message";
LogBox.ignoreAllLogs();
export default function App() {
  return (
    <>
        <AppNavigation />
        <Toast />
    </>
  );
}