import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";

import { AuthContext } from "../contexts/auth";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

export default function Routes() {
    const { signed, loadin } = useContext(AuthContext);
    const loading = false;

    return signed ? <AppRoutes /> : <AuthRoutes />;
}

// if (loadin) {
//     return (
//         <View>
//             <ActivityIndicator size={"large"} />
//         </View>
//     );
// }
