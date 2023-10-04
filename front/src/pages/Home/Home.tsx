// import {Dispatch, useContext} from "react";
import {useNavigate} from "react-router-dom";
import ROUTES from "../../constants/routes";
import {Wrapper, Content, HomeButton} from "./Home.style";
// import {DispatchContext} from "@/Context/UserContext";
// import { useQuery } from "@tanstack/react-query";
// import { getUserProfile } from "@/apis";


const Home = () => {
    const navigate = useNavigate();

    // const userState = useContext(UserStateContext);
    // const dispatch = useContext(DispatchContext) as Dispatch<actionType>;

    const isLogin = sessionStorage.getItem("userToken");
    const logout = () => {
        sessionStorage.removeItem("userToken");
        // localStorage.removeItem("access_token");
        
        // dispatch({type: "LOGOUT"});

        navigate("/");
    };

    //test용
    // const {data} = useQuery<UserState>(['userProfile'], () => getUserProfile('/user/current'));
    // console.log(data);

    // useProfileQuery();

    return (
        <Wrapper>
            <Content>
                <h1>Portfolio Service</h1>
                {isLogin ? (
                    <HomeButton type="button" content="Login" onClick={logout}>
                        로그아웃
                    </HomeButton>
                    
                ) : (
                    <HomeButton
                        type="button"
                        content="Login"
                        onClick={() => navigate(ROUTES.LOGIN.PATH)}
                    >
                        로그인
                    </HomeButton>
                )}
                <HomeButton
                    type="button"
                    content="Sign Up"
                    onClick={() => navigate(ROUTES.SIGN_UP.PATH)}
                >
                    회원가입
                </HomeButton>
                <HomeButton
                    type="button"
                    content="UserPage"
                    onClick={() => navigate(ROUTES.PORTFOLIO.PATH)}
                >
                    마이페이지
                </HomeButton>
            </Content>
        </Wrapper>
    );
};
export default Home;
