import { useEffect, useState } from 'react'
import styled from 'styled-components'
import api, { baseURL } from '../../util/api'
import { ModifyButton, EditModal } from '../shared'

const Aboutme = () => {
      const [aboutDetail, setAboutDetail] = useState({})
      const [showModal, setShowModal] = useState(false)
      useEffect(() => {
            api.get("/aboutme")
                  .then((result) => { setAboutDetail(result.data) })
                  .catch((err) => { console.log(err) })
      }, [])

      return (
            <Maindiv>
                  <h1><span>TA</span><span>HEREH</span></h1>
                  <Discription>
                        <img src={baseURL + '/public/' + aboutDetail.photo_src} alt={aboutDetail.photo_alt} />
                        <p>{aboutDetail.description}</p>
                  </Discription>
                  <ModifyButton onClick={() => setShowModal(!showModal)} />
                  <EditModal showModal={showModal} setShowModal={setShowModal}></EditModal>
            </Maindiv >
      )
}

export default Aboutme

const Maindiv = styled.div`
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      h1 {
            font-family: Purple Purse;
            font-style: normal;
            font-weight: normal;
            font-size: 13vw;
            line-height: 225px;
            /* color: ${({ theme: { colors } }) => colors.grey}; */
            span:first-child {
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
      @media (max-width: ${({ theme: { breakPoints } }) => breakPoints.tablet}){
            top: 300px;
      }
      @media (max-width: ${({ theme: { breakPoints } }) => breakPoints.mobile}){
            top: 220px;
            left: 21vw;
      }
      p {
            padding-top: 110px;
            padding-left: 10px;
            width: 37vw;
            height: 238px;
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
            width: 21vw;
            height: 21vw;
            border-radius: 50%;
            border: 3px solid ${({ theme: { colors } }) => colors.grey};
            @media (max-width: ${({ theme: { breakPoints } }) => breakPoints.mobile}){
                  width: 31vw;
                  height: 31vw; 
                  border-color: ${({ theme: { colors } }) => colors.darkGreen};
            }
      }

`