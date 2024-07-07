import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable, StyleSheet, Image, Platform } from "react-native";
import MealDetails from "../MealDetails";

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {

    const navigation = useNavigation();

    function selectMealItemHandler() {
        navigation.navigate('MealDetailScreen', {
            mealId: id
        });
    }
    return (
        <View style={styles.mealItem}>
            <Pressable
                style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
                android_ripple={{ color: '#ccc' }}
                onPress={selectMealItemHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    mealItem: {
        margin: 16,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.35,
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    innerContainer: { borderRadius: 8, overflow: 'hidden' },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
    buttonPressed: {
        opacity: .5
    },
});