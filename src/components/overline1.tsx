import styled from "styled-components"
import right from "../assets/Right - Image.svg"

const Overline1 = () => {
  return (
    <Wrapper>
        <Div1>
            <p>OVERLINE</p>

            <h1>Sapien ipsum sceleriseque convallis fuscue</h1>

            <p>Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>

            <Buttons>
                <Button1>Get started</Button1>
                <Button2>Learn more</Button2>
            </Buttons>

        </Div1>

        <Div2>
            <img src={right} alt="" />
        </Div2>
      
    </Wrapper>
  )
}

export default Overline1

const Wrapper = styled.div`
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Div1 = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    p{
        color: #636ab3;
    }

    h1{
        color: white;
        font-size: 50px;
    }
`

const Div2 = styled.div`

`

const Buttons = styled.div`
    display: flex;
    gap: 30px;
`
const Button1 = styled.div`
    color: white;
    background-color: #2A27C9;
    border: none;
    width: 144px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    cursor: pointer;
`
const Button2 = styled.div`
    color: #636ab3;
    background-color: transparent;
    border: 0.5px solid #262840;
    width: 144px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    cursor: pointer;
`