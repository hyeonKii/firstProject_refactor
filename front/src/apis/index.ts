import axios from "axios";
import {FieldValues} from "react-hook-form";

const API = axios.create({
    baseURL: "http://" + window.location.hostname + ":5001",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
    },
});

const getUserInfo = async (endpoint: string) => {
    const {data} = await API.get(endpoint);
    return data;
};

const getUserProfile = async (endpoint: string, params="") => {
    const {data} = await API.get(endpoint + "/" + params);
    return data;
};

const postSignIn = async (endpoint: string, userInfo: FieldValues) => {
    const {data} = await API.post(endpoint, userInfo);
    return data;
};

const postSignUp = async (endpoint: string, userInfo: FieldValues) => {
    const {data} = await API.post(endpoint, userInfo);
    return data;
};

const updateUser = async (endpoint: string, userInfo: FieldValues) => {
    const {data} = await API.put(endpoint, userInfo);
    return data;
};

const getAwards = async (endpoint: string, params="") => {
    const {data} = await API.get(endpoint + "/" + params);
    return data;
};

export {getUserInfo, getUserProfile, postSignIn, postSignUp, updateUser, getAwards};
