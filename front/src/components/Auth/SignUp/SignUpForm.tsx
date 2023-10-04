import {useForm} from "react-hook-form";
import useSignUp from "@/hooks/Auth/useSignUp";

const SignUpForm = () => {
    const {handleSignUp} = useSignUp();
    const {register, handleSubmit} = useForm();

    return (
        <form onSubmit={handleSubmit(data => handleSignUp(data))}>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                placeholder="이메일을 입력해 주세요"
                autoComplete="off"
                {...register("email")}
            />

            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                minLength={8}
                placeholder="비밀번호를 입력해 주세요"
                autoComplete="off"
                {...register("password")}
            />

            <label htmlFor="Name">Name</label>
            <input
                type="name"
                id="name"
                minLength={2}
                placeholder="이름을 입력해 주세요"
                autoComplete="off"
                {...register("name")}
            />

            <button type="submit" content="로그인">
                로그인
            </button>
        </form>
    );
};

export default SignUpForm;
