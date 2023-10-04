// import {useState} from "react";
// import Award from "./Award";
// import AwardAddForm from "./AwardAddForm";
// import {useAwardsQuery} from "@/hooks/User/useQueryHooks";
const Awards = (OwnerInfo: OwnerInfo) => {
    // const [awards, setAwards] = useState([]);
    // const [isAdding, setIsAdding] = useState(false);

    // const AwardResults = useAwardsQuery(OwnerInfo.ownerId);
    
    console.log(OwnerInfo.ownerId);

    return (
        <div>
            <div>
                <div>수상이력</div>
                {/* <button onClick={() => setIsAdding(true)}>+</button> */}
            </div>
        </div>
    );
};

export default Awards;
