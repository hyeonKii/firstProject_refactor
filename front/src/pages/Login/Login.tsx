import {Wrapper, Content, CommonButton} from "./Login.style";
import LoginForm from "@/components/Auth/Login/LoginForm";
import {useNavigate} from "react-router-dom";

const Login = () => {
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
                    <h1>로그인</h1>
                    <LoginForm />
                </Content>
            </Wrapper>
        </>
    );
};

export default Login;
