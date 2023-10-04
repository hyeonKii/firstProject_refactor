// import {
//     useState,
//     useEffect,
//     useReducer,
//     createContext,
//     PropsWithChildren,
//     Dispatch,
// } from "react";
// import {loginReducer} from "@/Context/loginReducer";
// import {getUserInfo} from "@/apis";

// export const UserStateContext = createContext<UserState>({});
// export const DispatchContext = createContext<Dispatch<actionType>>(()=> {});

// const UserContext = ({children}: PropsWithChildren) => {
//     const [userState, dispatch] = useReducer(loginReducer, {user: null});
//     const [isFetch, setIsFetch] = useState(false);

//     const fetchCurrentUser = async () => {
//         try {
//             const res = await getUserInfo("user/current");
//             const currentUser = res.data;
            
//             dispatch({
//                 type: "LOGIN_SUCCESS",
//                 payload: currentUser,
//             });

//             console.log("세션 스토리지에 토큰 존재");
//         } catch {
//             console.log("세션 스토리지에 토큰 없음");
//         }
//         setIsFetch(true);
//     };

//     useEffect(() => {
//         fetchCurrentUser();
//     }, []);

//     if (!isFetch) {
//         return "loading...";
//     }

//     return (
//         <UserStateContext.Provider value={userState}>
//             <DispatchContext.Provider value={dispatch}>
//                 {children}
//             </DispatchContext.Provider>
//         </UserStateContext.Provider>
//     );
// };

// export {UserContext};
