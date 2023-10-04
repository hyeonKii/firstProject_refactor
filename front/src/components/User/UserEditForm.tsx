// import {FormEvent} from "react";
// import { useState } from "react";
// import {updateUser} from "@/apis";
import {FieldValues, useForm} from "react-hook-form";
import {updateUser} from "@/apis";
import {useMutation} from "@tanstack/react-query";

const UserEditForm = ({user, setIsEdit}: UserProps) => {
    // const [name, setName] = useState(user?.name);

    // const [email, setEmail] = useState(user?.email);

    // const [description, setDescription] = useState(user?.description);

    const {register, handleSubmit} = useForm();

    const handleUpdate = async (userInfo: FieldValues) => {
        const res = await updateUser(`users/${user?.id}`, {
            ...userInfo,
        });

        
        const result = {...res};

        //test
        console.log(result);
        // const updatedUser = res.data;
        // console.log(updatedUser);
        // setUser(updatedUser);
        // setIsEdit(false);
        setIsEdit(false);
        return result;
    };

    const {mutate} = useMutation(handleUpdate);

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit((data) => mutate(data))}>
                    <div>
                        <input
                            type="text"
                            placeholder="이름"
                            // value={user?.name}
                            // onChange={e => setName(e.target.value)}
                            {...register("name", {
                                value: user?.name,
                                onChange: (e) => e.target.value,
                            })}
                        />
                    </div>

                    <div>
                        <input
                            type="email"
                            placeholder="이메일"
                            // value={user?.email}
                            // onChange={(e) => setEmail(e.target.value)}
                            {...register("email", {
                                value: user?.email,
                                onChange: (e) => e.target.value,
                            })}
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="정보, 인사말"
                            // value={user?.description}
                            // onChange={(e) => setDescription(e.target.value)}
                            {...register("description", {
                                value: user?.description,
                                onChange: (e) => e.target.value,
                            })}
                        />
                    </div>

                    <div>
                        <button type="submit">확인</button>
                        <button onClick={() => setIsEdit(false)}>취소</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserEditForm;
