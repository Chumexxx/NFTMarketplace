import Header from './static/header'
import styled, {keyframes} from 'styled-components'
import frame1 from './../assets/Frame.svg'
import frame2 from './../assets/Frame (1).svg'
import ritter from './../assets/Ritter Sport.svg'
import nike from './../assets/Nike.svg'
import adidas from './../assets/Adidas.svg'
import holland from './../assets/New Holland.svg'
import { FaSearch } from "react-icons/fa";
import rec1 from './../assets/Square 01.svg'
import rec2 from './../assets/Square 02.svg'
import rec3 from './../assets/Square 03.svg'
import rec4 from './../assets/Square 04.svg'
import rec5 from './../assets/Square 05.svg'
import rec6 from './../assets/Square 06.svg'

const Hero = () => {
  return (
    <div>
       <Header/>
       <Wrapper>

        {/* <OrbitPath size={100}>
            <OrbitingRecs rotationDuration={20}>
                <Rec src={rec1} size={120} top="0%" left="50%" />
            </OrbitingRecs>
        </OrbitPath> */}
{/* 
        <OrbitPath size={250}>
            <OrbitingRecs rotationDuration={30}>
                <Rec src={rec2} size={120} top="0%" left="50%" />
            </OrbitingRecs>
        </OrbitPath> */}

        {/* <OrbitPath size={400}>
            <OrbitingRecs rotationDuration={40}>
                <Rec src={rec3} size={120} top="0%" left="50%" />
            </OrbitingRecs>
        </OrbitPath> */}

        {/* <OrbitPath size={550}>
            <OrbitingRecs rotationDuration={40}>
                <Rec src={rec4} size={120} top="0%" left="50%" />
            </OrbitingRecs>
        </OrbitPath> */}

        {/* <OrbitPath size={700}>
            <OrbitingRecs rotationDuration={40}>
                <Rec src={rec5} size={120} top="0%" left="50%" />
            </OrbitingRecs>
        </OrbitPath> */}

        {/* <OrbitPath size={850}>
            <OrbitingRecs rotationDuration={40}>
                <Rec src={rec6} size={120} top="0%" left="50%" />
            </OrbitingRecs>
        </OrbitPath> */}

        <DivBox>
            <p>NON FUNGIBLE TOKENS</p>
            <NFT>
                <New>
                    <h1>A new NFT</h1>
                    <img src={frame1} alt="" />
                </New>

                <Experience>
                    <img src={frame2} alt="" />
                    <h1>Experience</h1>
                </Experience>
            </NFT>

            <p>Discover, collect and sell</p>

        </DivBox>

        <InputDiv>
            <input placeholder='Items, collections and creators      |   Category' type="text" />
            <FaSearch color='blue'/>
        </InputDiv>

        <IconsDiv>
            <img src={ritter} alt="" />
            <img src={nike} alt="" />
            <img src={adidas} alt="" />
            <img src={holland} alt="" />
        </IconsDiv>
       </Wrapper>
    </div>
  )
}

export default Hero

const Wrapper = styled.div`
    width: 100%;
    margin-top: 50px;
    height: 90vh;
    position: relative;
    overflow: hidden;
    /* display: flex;
    align-items: center;
    justify-content: center; */
`

const OrbitPath = styled.div<{ size: number }>`
    position: absolute;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const rotate = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const OrbitingRecs = styled.div<{ rotationDuration: number }>`
    position: absolute;
    width: 100%;
    height: 100%;
    animation: ${rotate} ${props => props.rotationDuration}s linear infinite;
    top: 50%;
    left: 50%;
`;

const Rec = styled.img<{ size: number; top: string; left: string }>`
    position: absolute;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    background-color: ${props => props.color};
    border-radius: 50%;
    top: ${props => props.top};
    left: ${props => props.left};
    transform: translate(-50%, -50%);
    transition: transform 0.3s ease;

    &:hover {
        transform: translate(-50%, -50%) scale(1.2);
        box-shadow: 0 0 30px rgba(255, 255, 255, 0.4);
  }
`;

const DivBox = styled.div`
    position: relative;
    z-index: 10;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    p{
        color: #636ab3;
        font-size: 20px;
        line-height: 0px;
    }
`

const NFT = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
`

const New = styled.div`
    display: flex;
    gap: 10px;
        h1{
        color: white;
        font-size: 80px;
        line-height: 0px;
        margin-bottom: 0px;
    }
`
const Experience = styled.div`
    display: flex;
    margin-left: 80px;
    gap: 10px;
        h1{
        color: white;
        font-size: 80px;
        line-height: 0px;
    }
`

const InputDiv = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;

    input{
        border-radius: 10px;
        width: 600px;
        height: 20px;
        padding: 30px;
        background-color: white;
        color: black;
    }
`

const IconsDiv = styled.div`
    position: relative;
    z-index: 10;
    margin-top: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 115px;
    background-color: transparent;
`