import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function IconButton({ icon, color, onPress }) {
    return <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
        android_ripple={{color: '#333'}}
    >
        <Ionicons name={icon} size={24} color={color} />
    </Pressable>
}

export default IconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7,
    }
});