import styled from "styled-components";

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 20rem;
    height: 25rem;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 8px 15px rgba(167, 213, 230, 1);


    & form {
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    & button {
        width: 5rem;
        height: 2rem;
        background: white;

        border: none;
        border-radius: 10px;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

        margin: 20%;
    }
`;

const CommonButton = styled.button`
    width: 5rem;
    height: 2rem;
    background: white;

    border: none;
    border-radius: 10px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

    margin: 10px;
`;

export {Wrapper, Content, CommonButton};
