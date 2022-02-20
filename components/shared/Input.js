import styled from 'styled-components'

export const Input = ({ name, children, ...restOfProps }) => {
      return (
            <InputDiv>
                  <label htmlFor={name}>{children}</label>
                  {
                        restOfProps.type === "textarea" ? (
                              <textarea name={name} {...restOfProps} ></textarea>
                        ) :
                              <input name={name} {...restOfProps} />
                  }
            </InputDiv>
      )
}


const InputDiv = styled.div` 
    margin: 10px 0px;
    display: flex;
    justify-content: right;
    align-items: center;
  
    label {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #828282;
        padding-right: 10px;        
    }   

    input,textarea {
      resize: none;
      width: 318px;
      height: 38px;
      background: #FFFFFF;
      border: 1px solid #828282;
      box-sizing: border - box;
      box-shadow: inset 1px 3px 5px #C4C4C4;
      border-radius: 50px;
      padding: 11.2px 16px;
      &[type=file]{
            &::-webkit-file-upload-button {
            display:none;
            }
      }
      &[name=description]{
            /* height:200px;
            width:200px; */
            word-break: break-word;
      }
            /* width: 128px;
            height: 128px; */
            /* border: 1px gray dashed; */
            /* background:no-repeat center gainsboro; */
            /* text-indent: -9999em; */
            /* line-height:3000; */      
    }
`
