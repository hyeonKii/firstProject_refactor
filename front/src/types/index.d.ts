declare type AuthType = string | null;

declare interface UserState {
    user?: UserState;
    ownerId?: string;

    id: string;
    name?: string;
    email?: string;
    description?: string;
    errorMessage?: null;
    token?: string;
}

declare interface OwnerInfo {
    ownerId: string;
}

declare interface UserProps {
    user: UserState | undefined;
    setUser?: Dispatch;
    setIsEdit?: Dispatch<SetStateAction<boolean>>;
}

declare interface actionType {
    type?: string;
    payload?: {
        token?: string;
        id?: string;
        name?: string;
        description?: string;
        errorMessage?: null;
    };
}
