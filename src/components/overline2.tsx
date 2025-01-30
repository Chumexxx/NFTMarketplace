import styled from "styled-components"
import left from "../assets/Left - Image.svg"
import icon from "../assets/Icon.svg"
import icon2 from "../assets/Icon (1).svg"

const Overline2 = () => {
  return (
    <div>
    <Wrapper>

        <ImageDiv>
            <img src={left} alt="" />
        </ImageDiv>

        <Habitat>
            <H1>
                <h6>OVERLINE</h6>
                <h4>Habitat tristique aliquam in vel scelerisque</h4>
                <p>Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies <br /> dolor feugiat aliquam commodo.</p>
            </H1>

            <H2>
                <H2_1>
                    <img src={icon} alt="" />
                    <h6>Sollicitudin sapien</h6>
                    <p>Cursus fermentum</p>
                </H2_1>

                <H2_2>
                    <img src={icon2} alt="" />
                    <h6>Pulvinar metus</h6>
                    <p>Nunc sed</p>
                </H2_2>
            </H2>

            <Buttons>
                <GetStartedButton> <p>Get Started</p> </GetStartedButton>
                <LearnMoreButton>  <p>Leearn More</p> </LearnMoreButton>
            </Buttons>
        </Habitat>
        
    </Wrapper>
    <Border></Border>
    </div>
  )
}

export default Overline2

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 150px;
    margin-bottom: 100px;
` 

const ImageDiv = styled.div`
    img{
        width: 600px;
    }
`

const Habitat = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const H1 = styled.div`
    width: 400px;

    h6{
        color: #636ab3;
        font-size: 8px;
    }
    p{
        background-color: transparent;
        color: #636ab3;
        font-size: 8px;
    }

    h4{
        font-size: 40px;
        color: white;
        margin-bottom: 0px;
        margin-top: 0px;
    }
`

const H2 = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    gap: 40px;
`
const H2_1 = styled.div`
    img{
        width: 20px;
    }

    h6{
        color: white;
        margin-bottom: 0px;
        margin-top: 0px;
    }

    p{
        background-color: transparent;
        color: #636ab3;
        font-size: 7px;
    }
`

const H2_2 = styled.div`
    img{
        width: 20px;
    }

    h6{
        color: white;
        margin-bottom: 0px;
        margin-top: 0px;
    }

    p{
        background-color: transparent;
        color: #636ab3;
        font-size: 7px;
    }
`

const Buttons = styled.div`
    display: flex;
    gap: 20px;
`

const LearnMoreButton = styled.div`
    color: #636ab3;
    background-color: transparent;
    border-radius: 5px;
    border: 1px solid #262840;
    width: 80px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    p{
        font-size: 8px;
        color: #636ab3;
    }
`

const GetStartedButton = styled.div`
    color: white;
    background-color: #1e28aa;
    border-radius: 5px;
    border: 1px solid #262840;
    width: 80px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    p{
        background-color: transparent;
        font-size: 8px;
    }
`

const Border = styled.div`
    width: 100%;
    border-bottom: 1px solid #3a3b3d;
`
