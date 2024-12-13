import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
    return (
        <Tabs screenOptions = {{
            tabBarActiveTintColor: "#ffd33d",
        }}>
            <Tabs.Screen name='index' options={{ headerTitle : 'Home Page', tabBarIcon: ({ focused, color }) => (
                <Ionicons name={focused ? "home-sharp": "home-outline"} size={28} color={color} />
            )}} />
            <Tabs.Screen name='about' options={{headerTitle : 'About Page', tabBarIcon: ({focused, color}) => (
                <Ionicons name={focused ? "information-circle":"information-circle-outline"} size={28} color={color}/>
            )}} />
            <Tabs.Screen name='contact' options={{headerTitle : 'Contact Page', tabBarIcon: ({focused, color}) => (
                <Ionicons name={focused ? "call":"call-outline"} size={28} color={color} />
            )}} />
        </Tabs>
    )
}