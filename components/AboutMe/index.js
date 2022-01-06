import React from 'react'
import styled from 'styled-components'
// import localimage from './02.jpg'

const Aboutme = () => {
      return (
            <Maindiv>
                  <h1><span>TA</span><span>HEREH</span></h1>
                  <Discription>
                        <Avatar />
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
//             color: #C9D2CA;

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
            color: #C9D2CA;
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

            color: #C9D2CA;

            /* mix-blend-mode: multiply; */
            span:first-child{
                  margin-right: 18vw;
                  @media (max-width: ${({ theme: { breakPoints } }) => breakPoints.mobile}){
                        margin-right: unset;
                  }
            }
}
`



const Discription = styled.div`
      display: flex;      
      flex-direction: row ;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 28%;
      left: 21vw;
      p {
            /* width: 600px; */
            /* position: absolute; */
            padding-top: 100px;
            padding-left: 10px;
            width: 37vw;
            height: 238px;
            /* left: calc(50% - 600px/2 + 241px);
            top: 454px; */

            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 1.3vw;
            line-height: 34px;
            text-align: justify;
            letter-spacing: -0.03em;

            color: rgba(14, 49, 15, 0.63);

      }

`
const Avatar = styled.div`
      /* position: absolute; */
      width: 30vw;
      height: 30vw;
      /* left: calc(50% - 438px/2 - 246px);
      top: 282px; */
      /* background: ${localimage}; */
      border-radius: 50%;
      border: 3px solid #C9D2CA;
      `
