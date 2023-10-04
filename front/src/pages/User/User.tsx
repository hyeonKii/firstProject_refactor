import {useState} from "react";
import UserEditForm from "@/components/User/UserEditForm";
import UserCard from "@/components/User/UserCard";
import {useQueryClient} from "@tanstack/react-query";


const User = (OwnerInfo: OwnerInfo) => {
    const [isEdit, setIsEdit] = useState(false);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const profile = await getUserProfile("/user/current");
    //         setUser(profile);
    //     };
    //     fetchData();
    // });
    console.log(OwnerInfo.ownerId);

    const cache = useQueryClient();
    const user = cache.getQueryData<UserState>(["userProfile"]);

    return (
        <div>
            {isEdit ? (
                <UserEditForm user={user} setIsEdit={setIsEdit} />
            ) : (
                <UserCard user={user} setIsEdit={setIsEdit} />
            )}
        </div>
    );
};

export default User;
