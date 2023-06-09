import React from 'react';
import styled from 'styled-components';
import logoOne from '../assets/logoOne.png';
import logoTwo from '../assets/logoTwo.png' ;
import bgrImage from '../assets/background.jpg';

const Landing = (props) => {
  return (
<Container>
    <Content> 
    <BgImage />
        <CTA>
        <LogoOne src={logoOne} alt = 'LogoOne'/>
        <Signup>GET IT ALL HERE</Signup>
        <Description>
        Get 12 months for the price of 10 when you sign up for an annual Disney+ subscription, compared to paying monthly.
        </Description>
        <LogoTwo src={logoTwo} alt = 'LogoTwo'/>
        </CTA>   
    </Content>
</Container>
    )
}

export default Landing

const Container = styled.section`  
overflow: hidden;  
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;

const Content = styled.div` 
 margin-bottom: 10vw;
 width: 100%;
 position: relative;
 min-height: 100vh;
 box-sizing: border-box;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 padding: 80px  40px;
 height: 100%;

`;

const BgImage = styled.div` 
height: 100%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
position: absolute;
background-color: black;
background-image: url(${bgrImage}); {/*the image is loaded as a url*/}
top: 0;
left: 0;
right: 0;
z-index: -1
`;

const CTA = styled.div`
margin-bottom: 2vw;
max-width: 650px;
display:flex;
flex-direction:column;
flex-wrap: wrap;
justify-content: center;
margin-top: 0;
margin-right: auto;
margin-left: auto;
text-align: center;

`;

const LogoOne = styled.img`
margin-bottom : 12px;
background-color: none;
max-width: 700px;
min-height: 60px;
display: block;
width: 100%;
 
 `;

 const Signup = styled.a`
font-weight: bold;
color: #f9f9f9;
background-color: #0063e5;
margin-bottom: 12px;
width: 100%;
letter-spacing: 1.5px;
font-size: 25px;
padding: 16.5px 0;
border: 1px solid transparent;
border-radius: 4px;

&:hover{
    background-color :#0483ee;
}
`;

const Description = styled.p`
color: hsla(0, 0%, 95.3%, 1);
font-size: 14px;
margin: 0 0 24px;
line-height: 1.5em;
letter-spacing: 1.5;

`;

const LogoTwo = styled.img`
margin-bottom : 20px;
max-width: 700px;
min-height: 60px;
display: inline-block;
vertical-align: bottom;
width: 100%;
`; 
