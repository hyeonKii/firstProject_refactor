import {Wrapper, Content, CommonButton} from "../Login/Login.style";
import SignUpForm from "@/components/Auth/SignUp/SignUpForm";
import {useNavigate} from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();

    return (
        <>
            <CommonButton
                type="button"
                content="이전페이지"
                onClick={() => navigate(-1)}
            >
                이전페이지
            </CommonButton>
            <Wrapper>
                <Content>
                    <h1>회원가입</h1>
                    <SignUpForm />
                </Content>
            </Wrapper>
        </>
    );
};

export default SignUp;
