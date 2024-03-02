import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: 15,
    },
    logoContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 200,
        resizeMode: "contain",
    },
    imageLogo: {
        flex: 1,
        width: "65%",
        resizeMode: "contain",
    },
    detailContainer: {
        alignItems: "center",
    },
    carBrand: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "400",
        fontStyle: "italic",
    },
    carModel: {
        color: "#fff",
        fontSize:20,
        fontWeight: "700",
        textAlign: "center",
    },
    image: {
        flex: 1,
        width: "100%",
        resizeMode: "contain",
    },
    priceLabelContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 10,
        paddingBottom: 20,
    },
    priceLabel: {
        color: "#FFF",
        fontSize: 22,
        fontWeight: "700",
    },
});