import {useProfileQuery} from "@/hooks/User/useQueryHooks";
import User from "@/pages/User/User";
// import { useQueryClient } from "@tanstack/react-query";
// import Awards from "@/components/Award/Awards";

const Portfolio = () => {
    // const queryClient = useQueryClient();
    // queryClient.invalidateQueries(['userProfile']);

    const fetchedUser = useProfileQuery();
    const ownerId = fetchedUser?.id;

    return (
        <>
            <div>
                <div>
                    <User ownerId={ownerId}/>
                </div>
                <br />
                <br />
                <br />
                <div>
                    <div>
                        <div>학력목록</div>
                        {/* <Awards ownerId={ownerId} /> */}
                        <div>수상목록</div>
                        <div>프로젝트목록</div>
                        <div>자격증목록</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
