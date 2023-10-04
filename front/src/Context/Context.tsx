// import {useState, useEffect} from "react";
// import {getUserProfile} from "@/apis";
// import User from "@/components/User/User";
// import {useParams} from "react-router-dom";

// const Context = () => {
//     const [isFetch, setIsFetch] = useState(false);
//     const [portfolioOwner, setPortfolioOwner] = useState<UserState>({});
//     const params = useParams();

//     const fetchPortfolioOwner = async (ownerId: string) => {
//         const res = await getUserProfile("users", ownerId);

//         const ownerData = {...res};

//         setPortfolioOwner(ownerData);

//         setIsFetch(true);
//     };

//     useEffect(() => {
//         if (params.userId) {
//             const ownerId = params.userId;
//             fetchPortfolioOwner(ownerId);
//         } else {
//             const ownerId = user.id;
//             fetchPortfolioOwner(ownerId);
//         }
//     }, [params]);

//     if (!isFetch) {
//         return "loading...";
//     }

//     return (
//         <>
//             <div>
//                 <div>
//                     <User
//                         portfolioOwnerId={portfolioOwner.id as string}
//                         isEditable={!!portfolioOwner.id}
//                     />
//                 </div>
//                 <div>
//                     <div style={{textAlign: "center"}}>
//                         학력 목록, 수상이력 목록, 프로젝트 목록, 자격증 목록
//                         만들기
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Context;
