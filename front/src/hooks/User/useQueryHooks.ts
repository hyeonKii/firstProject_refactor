import {getAwards, getUserProfile} from "@/apis";
import {useQuery} from "@tanstack/react-query";

const useProfileQuery = (): UserState => {
    const {data} = useQuery(
        ["userProfile"],
        () => getUserProfile("user/current"),
        // {staleTime: 5000 * 60}
    );
    return data ;
};

const useOwnerIdQuery = (ownerId: string) => {
    const {data} = useQuery<UserState>(["ownerId"], () =>
        getUserProfile("users", ownerId)
    );
    return data;
};

const useAwardsQuery = (ownerId: string) => {
    const {data} = useQuery(['awards'], () => getAwards('awards', ownerId));
    return data;
}

// typescript 특성상 타입도 props가 존재
// 따라서 하위 컴포넌트에 prop을 내려줄 때 적절한 타입 지정이 필요
// usequery는 실시간으로 데이터를 캐싱하기에 이를 적절히 캐싱하여 어떻게 프롭스로 전달하고
// 받아올지 로직 생각

export {useProfileQuery, useOwnerIdQuery, useAwardsQuery};
