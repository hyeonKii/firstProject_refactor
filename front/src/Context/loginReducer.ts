// export function loginReducer(userState: UserState, action: actionType) {
//     switch (action.type) {
//         case "LOGIN_SUCCESS":
//             console.log("로그인!");
//             console.log(action.payload);
//             return {
//                 ...userState,
//                 user: action.payload,
//             };
//         case "LOGOUT":
//             console.log("로그아웃!");
//             return {
//                 ...userState,
//                 user: null,
//             };
//         default:
//             return userState;
//     }
// }
