import {postSignUp} from "@/apis";
// import {FormEvent} from "react";
import {useNavigate} from "react-router-dom";
import ROUTES from "../../constants/routes";
import {FieldValues} from "react-hook-form";

const useSignUp = () => {
    const navigate = useNavigate();
    const handleSignUp = async (userInfo: FieldValues) => {
        await postSignUp("user/register", userInfo);
        navigate(ROUTES.LOGIN.PATH);
    };

    return {handleSignUp};
};

export default useSignUp;
