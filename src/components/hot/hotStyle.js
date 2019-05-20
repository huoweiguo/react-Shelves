import styled from 'styled-components';

export const ContentWrap = styled.div`
    width: 100%;
    padding: 0.6rem 0.2rem;
`;

export const TitleNav = styled.div`
    width: 100%;
    border-top: 1px solid #eee;
    margin-bottom: 0.5rem;
    span {
        display: block;
        width:40%;
        background-color: #fff;
        font-size: 0.4rem;
        text-align: center;
        margin: -0.2rem auto 0;
    }
`;

export const UlList = styled.ul`
    width: 100%;
    li {
        position: relative;
        height: 1.91rem;
        border-radius: 0.08rem;
        background-color:#f1f1f1;
        overflow: hidden;
        margin-bottom: 0.2rem;
        &:last-child {
            margin-bottom: 0;
        }
        img {
            width: 100%;
            height: 100%;
        }
        h5 {
            position: absolute;
            left: 0.2rem;
            top: 0.2rem;
            color: #fff;
            text-shadow: 1px 1px 1px #333;
            max-height: 0.88rem;
            line-height: 0.48rem;
            height: auto;
            font-size: 0.36rem;
        }
        span {
            position: absolute;
            left: 0.2rem;
            display: block;
            color:#fff;
            text-shadow: 1px 1px 1px #333;
            font-size: 0.24rem;
            &:nth-of-type(1) {
                bottom: 0.6rem;
            }
            &:nth-of-type(2) {
                bottom: 0.2rem;
            }
        }
    }
`;