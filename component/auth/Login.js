import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const SingUp = () => {
    navigation.navigate("Sign Up");
  };
  const SignIn = () => {
    navigation.navigate("Home");
  };

  console.log("Đã vào Login");
  return (
    <View style={styles.tieude}>
      <View style={styles.header}>
        <View style={styles.login}>
          <Text style={styles.ten}>ĐĂNG NHẬP</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={{ margin: 20 }}>
          <View>
            <Text style={{ color: "black", fontSize: 17, fontWeight: "bold" }}>
              Username
            </Text>

            <View
              style={{
                flexDirection: "row",
                borderBottomColor: "grey",
                backgroundColor: "#EBF5FB",
                marginTop: 5,
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 15,
                }}
              >
                <Icon name="user" size={18} />
              </View>
              <View style={{ flex: 1 }}>
                <TextInput
                  placeholder={"Nhập username"}
                  style={{ padding: 15, fontSize: 16 }}
                  onChangeText={(txt) => {
                    setusername(txt);
                  }}
                />
              </View>
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={{ color: "black", fontSize: 17, fontWeight: "bold" }}>
              Password*
            </Text>

            <View
              style={{
                flexDirection: "row",
                borderBottomColor: "grey",
                backgroundColor: "#EBF5FB",
                marginTop: 5,
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 15,
                }}
              >
                <Icon name="lock" size={18} />
              </View>
              <View style={{ flex: 1 }}>
                <TextInput
                  secureTextEntry={true}
                  placeholder={"Nhập password"}
                  style={{ padding: 15, fontSize: 16 }}
                  onChangeText={(txt) => {
                    setpassword(txt);
                  }}
                />
              </View>
            </View>
          </View>

          <View style={{ alignItems: "flex-end" }}>
            <Text
              style={{
                marginTop: 10,
                color: "black",
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Forgot password?
            </Text>
          </View>

          <View style={{ justifyContent: "center", padding: 7 }}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={SignIn}
              style={{
                backgroundColor: "#5BC0F8",
                padding: 16,
                width: "100%",
                alignItems: "center",
                marginVertical: 10,
                borderRadius: 20,
                
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={{ marginLeft: 6 }}>Don't have an account? </Text>
        <TouchableOpacity style={styles.signup} onPress={SingUp}>
          <Text style={{ fontWeight: "bold", fontSize: 15, color: "#0008C1" }}>
            CREATE ACCOUNT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tieude: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
  ten: {
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
    marginTop: 50,
  },
  header: {
    flex: 1,
    marginVertical: 20,
  },
  login: {
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    marginBottom: 100,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  signup: {
    padding: 20,
  },
  face: {
    width: 40,
    height: 40,
    padding: 10,
    backgroundColor: "#4267B2",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  twitter: {
    width: 40,
    height: 40,
    padding: 10,
    backgroundColor: "#1DA1F2",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  gg: {
    width: 40,
    height: 40,
    padding: 10,
    backgroundColor: "#FF0000",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
});
