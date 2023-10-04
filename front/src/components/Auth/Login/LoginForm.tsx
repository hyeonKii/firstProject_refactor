import {useForm} from "react-hook-form";
import useSignIn from "@/hooks/Auth/useSignIn";

const LoginForm = () => {
    const {handleSignIn} = useSignIn();
    const {register, handleSubmit} = useForm();

    return (
        <form onSubmit={handleSubmit(data => handleSignIn(data))}>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                placeholder="이메일을 입력해 주세요"
                autoComplete="off"
                {...register('email')}
            />

            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                minLength={8}
                placeholder="비밀번호를 입력해 주세요"
                autoComplete="off"
                {...register('password')}
            />

            <button type="submit" content="로그인">
                로그인
            </button>
        </form>
    );
};

export default LoginForm;
