import styled from 'styled-components';

export const AddressNav = styled.div`
    width: 100%;
    height: 1.4rem;
    padding: 0.2rem 0;
    backgrounf-color: #fff; 
    overflow: hidden;
    border-bottom: 10px solid #eee;
`;

export const InnerTags = styled.div`
    float: left;
    width: 50%;
    height: 100%;
    padding:0 0.2rem;
    border-right: 1px solid #ddd;
    &:last-child{
        border-right: 0;
    }
    i {
        float: left;
        font-size: 0.72rem;
        color: #6aaf08;
        margin-right: 0.2rem;
    }
    .addright {
        float: left;
        font-size: 0.24rem;
        color: #444;
        p {
            height: 0.4rem;
            line-height: 0.4rem;
            b {
                font-size: 0.32rem;
                font-weight: bold;
            }
        }
    }
`;