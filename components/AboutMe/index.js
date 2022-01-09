import React from 'react'
import styled from 'styled-components'
// import localimage from './02.jpg'

const Aboutme = () => {
      return (
            <Maindiv>
                  <h1><span>TA</span><span>HEREH</span></h1>
                  <Discription>
                        <img src="./img/02.jpg" alt="" />
                        <p>For over 12 years, Tahereh Najafi has been a noteworthy sewing teacher in private institutions.
                              You may know her work as the sewing teacher and dressmaker but she’s also credited with Ministry of Culture organization.
                              Tahereh has been honored with many prizes at the Fashion Festival in Iran.
                              She holds bachelor degree in fashion design.</p>
                  </Discription>
                  {/* <CircleDiv src="./aboutphotos.jpg"></CircleDiv> */}
            </Maindiv>
      )
}

export default Aboutme


// const Maindiv = styled.div`
//       width: 70%;
//       height: 100vh;
//       background-color: lightcoral;
//       display: flex;
//       justify-content: center;
//       margin: 100px 15% 0 15%;
//       position: relative;
//       h1 {
//             font-size: 100px;
//             color: ${()};

//             font-family: Purple Purse;
//             font-style: normal;
//             font-weight: normal;
//             font-size: 180px;
//             line-height: 225px;

//       }
// `

const Maindiv = styled.div`
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      h1 {
            /* font-size: 100px;
            color: ${({ theme: { colors } }) => colors.grey};
            font-family: Purple Purse;
            font-style: normal;
            font-weight: normal;
            font-size: 180px;
            line-height: 225px;
 */

            /* position: absolute; */
            /* width: 1122px; */
            /* height: 187px; */
            /* left: calc(50% - 1122px/2);
            top: 267px; */

            font-family: Purple Purse;
            font-style: normal;
            font-weight: normal;
            font-size: 13vw;
            line-height: 225px;

            color: ${({ theme: { colors } }) => colors.grey};

            /* mix-blend-mode: multiply; */
            span:first-child{
                  margin-right: 14vw;
                  @media (max-width: ${({ theme: { breakPoints } }) => breakPoints.mobile}){
                        margin-right: 27vw;
                  }
            }
      @media (max-width: ${({ theme: { breakPoints } }) => breakPoints.mobile}){
            padding-top: 100px;
      }
}
`



const Discription = styled.div`
      display: flex;      
      flex-direction: row ;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 250px;
      left: 26vw;
      /* top: 19%; */
      @media (max-width: ${({ theme: { breakPoints } }) => breakPoints.tablet}){
                        top: 300px;
      }
      @media (max-width: ${({ theme: { breakPoints } }) => breakPoints.mobile}){
            top: 220px;
            left: 21vw;
      }


      p {
            /* width: 600px; */
            /* position: absolute; */
            /* margin-top: -150px; */
            padding-top: 110px;
            padding-left: 10px;
            width: 37vw;
            height: 238px;
            /* left: calc(50% - 600px/2 + 241px);
            top: 454px; */

            font-family: Roboto;
            font-size: 1.3vw;
            font-style: normal;
            font-weight: normal;
            line-height: 3vw;
            letter-spacing: -0.03em;

            color: rgba(14, 49, 15, 0.63);
            @media (max-width: ${({ theme: { breakPoints } }) => breakPoints.mobile}){
                  line-height: 20px;
                  width:43vw;
                  font-size: 14px;

            }


      }
      img {
            /* position: absolute; */
            width: 21vw;
            height: 21vw;
            /* left: calc(50% - 438px/2 - 246px);
            top: 282px; */
            /* background: ${localimage}; */
            border-radius: 50%;
            border: 3px solid ${({ theme: { colors } }) => colors.grey};
            @media (max-width: ${({ theme: { breakPoints } }) => breakPoints.mobile}){
                  width: 31vw;
                  height: 31vw; 
                  border-color: ${({ theme: { colors } }) => colors.darkGreen};
            }
      }

`
