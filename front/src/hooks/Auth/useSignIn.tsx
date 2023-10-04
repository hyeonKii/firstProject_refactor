import {postSignIn} from "@/apis";
// import {FormEvent} from "react";
import {useNavigate} from "react-router-dom";
import ROUTES from "../../constants/routes";
import {FieldValues} from "react-hook-form";
// import {Dispatch, useContext} from "react";
// import { DispatchContext } from "@/Context/UserContext";

const useSignIn = () => {
    const navigate = useNavigate();
    // const dispatch = useContext(DispatchContext) as Dispatch<actionType>;

    const handleSignIn = async (userInfo: FieldValues) => {
        try {
            const res = await postSignIn("user/login", userInfo);
            
            //test용
            const user = {...res};
            console.log(user);

            const jwtToken = res.token;
            sessionStorage.setItem("userToken", jwtToken);

            // dispatch({
            //     type: "LOGIN_SUCCESS",
            //     payload: user,
            // });

            navigate(ROUTES.HOME.PATH);
        } catch (err) {
            console.log("로그인 실패");
        }
    };

    return {handleSignIn};
};

export default useSignIn;
