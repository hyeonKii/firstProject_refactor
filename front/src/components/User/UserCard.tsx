// import { getUserProfile } from "@/apis";
// import { useQuery } from "@tanstack/react-query";

import {useProfileQuery} from "@/hooks/User/useQueryHooks";
import {useNavigate} from "react-router-dom";

const UserCard = ({user, setIsEdit}: UserProps) => {
    const navigate = useNavigate();

    // const {data} = useQuery<UserState>(['user'],() => getUserProfile('/user/current'));
    // const user = data;
    // console.log(user);

    const reUser = useProfileQuery();
    reUser !== user ? (user = reUser) : user;

    return (
        <div className="mb-2 ms-3 mr-5" style={{width: "18rem"}}>
            <div>
                <div className="justify-content-md-center">
                    <img
                        style={{width: "10rem", height: "8rem"}}
                        className="mb-3"
                        src="http://placekitten.com/200/200"
                        alt="랜덤 고양이 사진 (http://placekitten.com API 사용)"
                    />
                </div>
                <div>{user?.name}</div>
                <div>{user?.email}</div>
                <div>{user?.description}</div>

                <div>
                    <div className="mt-3 text-center text-info">
                        <div>
                            <button onClick={() => setIsEdit(true)}>
                                편집
                            </button>
                        </div>
                    </div>
                </div>

                <a
                    className="mt-3"
                    href="#"
                    onClick={() => navigate(`/users/${user?.id}`)}
                >
                    포트폴리오
                </a>
            </div>
        </div>
    );
};

export default UserCard;
