import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 3.2rem;
    background-color: gray;
    img {
        width: 100%;
        height: 100%;
    }
    .address {
        position: absolute;
        left:0;
        top: 50%;
        width: 100%;
        display: block;
        text-align: center;
        color: #fff;
        font-size: 0.56rem;
        transfrom: translate(-50%, -50%);
    }
    i {
        position: absolute;
        right: 0.2rem;
        bottom: 0.1rem;
        color: #fff;
        font-size: 0.24rem;
    }
`;