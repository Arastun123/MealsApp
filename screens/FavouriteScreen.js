import { useContext } from "react";
import MealList from "../components/MealsList/MealList";
import { FavoritesContex } from "../store/contex/favorites-contex";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";

function FavouriteScreen() {
    const favoritesMealCtx = useContext(FavoritesContex);

    const favoritesMeals = MEALS.filter(meal => favoritesMealCtx.ids.includes(meal.id));
    
    if (favoritesMeals.length === 0){
        return(
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You no have favorite meals yet.</Text>
            </View>
        )
    }

    return <MealList items={favoritesMeals} />
}

export default FavouriteScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize:18,
        fontWeight: 'bold',
        color: '#fff'
    }
});