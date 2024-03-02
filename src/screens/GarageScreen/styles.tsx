import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#1E1E20",
        alignItems: "center",
        justifyContent: "center",
    },
    cameraBox: {
        position: "relative",
        borderWidth: 2,
        borderColor: "#FFF",
        width: 350,
        height: "80%",
        overflow: "hidden",
        backgroundColor: "#000",
        borderRadius: 15,
    },
    triangleCorner: {
        position: "absolute",
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderTopWidth: 40,
        borderTopColor: "#fff",
        borderRightWidth: 40,
        borderRightColor: "transparent",
    },
    topRight: {
        top: 0,
        right: 0,
        transform: [{ rotate: "90deg" }],
    },
    bottomRight: {
        bottom: 0,
        right: 0,
        transform: [{ rotate: "180deg" }],
    },
    bottomLeft: {
        bottom: 0,
        left: 0,
        transform: [{ rotate: "270deg" }],
    },
});