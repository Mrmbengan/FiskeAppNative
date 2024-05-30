import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";

const FishingMethodDetailScreen = ({ route }: any) => {
    const { method } = route.params;

    const renderEquipment = (equipment: { [key: string]: any }) => {
        return Object.entries(equipment).map(([key, value]) => {
            if (typeof value === "object") {
                return (
                    <View key={key} style={styles.equipmentContainer}>
                        <Text style={styles.equipmentTitle}>{key}</Text>
                        {renderEquipment(value)}
                    </View>
                );
            }
            return (
                <View key={key} style={styles.equipmentContainer}>
                    <Text style={styles.equipmentTitle}>{key}</Text>
                    <Text>{value}</Text>
                </View>
            );
        });
    };

    return (
        <ScrollView style={styles.container}>
            <Header />
            <Text style={styles.title}>{method.name}</Text>
            <Text style={styles.description}>{method.description}</Text>
            <Text style={styles.sectionTitle}>Utrustning:</Text>
            {renderEquipment(method.equipment)}
            {method.tips && (
                <>
                    <Text style={styles.sectionTitle}>Tips:</Text>
                    {Object.entries(method.tips).map(([key, value]) => (
                        <View key={key} style={styles.equipmentContainer}>
                            <Text style={styles.equipmentTitle}>{key}</Text>
                            <Text>{value as string}</Text>
                        </View>
                    ))}
                </>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#f5f5f5",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 10,
    },
    equipmentContainer: {
        marginBottom: 10,
    },
    equipmentTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default FishingMethodDetailScreen;
