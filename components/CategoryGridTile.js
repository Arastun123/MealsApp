import { Pressable, Text, View, StyleSheet, Platform } from "react-native";
import { useNavigation } from '@react-navigation/native'
function CategoryGridTile({ title, color, onPress, navigation }) {
    const navigatoin = useNavigation();
    return (
        <View style={styles.gridItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}
                onPress={onPress}
            >
                <View style={[styles.innerContainer, {backgroundColor: color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .25,
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    button: {
        flex: 1,
    },
    buttonPressed:{
        opacity: .5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    }
});