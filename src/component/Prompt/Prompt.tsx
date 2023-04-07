import React, { useState, useEffect, useRef, useContext } from "react";
import './Prompt.css';
import { AiOutlineMenu, AiOutlineSend} from 'react-icons/ai'
import apiClient from '../../service/api';
import { GlobalsContext } from "../../globalContext";
import { Message } from "../Message/Message";
import { getNFT } from "../../service/nft";
import { getTOKEN } from "../../service/token";
import { judge } from "../../service/operation";

const CODE = [
  '/assets',
  '/history'
]

const helloworld = {
  Comment: "Hello! I am Terminal3, an all-in-one chat bot for web3 users. How can I assist you today?"
}

export const Prompt = (): JSX.Element => {

  const global = useContext(GlobalsContext);

  const [value, setValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [messages, setMessages] = useState<any[]>([helloworld]);
  const [isCode, setIsCode] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  async function handleFormSubmit() {
    let assMessage =  {
      token: null,
      nft: null
    };
    if (value) {
      setMessages([...messages, value]);
      setLoading(true)
      console.log({account: global.accountAddress, value})
      if (CODE.indexOf(value) != -1) {
        if (value == "/assets") {
          await getNFT(global.accountAddress).then((res)=> {
            assMessage.nft = res
          })
          await getTOKEN(global.accountAddress).then((res)=>{
            console.log(res)
            assMessage.token = res
          })
          setMessages([...messages, value, {
            Comment: "Here is your assets 😊",
            Action: "assets",
            Parameters: assMessage
          }]);
          setLoading(false)
        } else 
        {

        }
      } else 
      {
        apiClient.chat(global.accountAddress, value).then((res) => {
          setMessages([...messages, value, res])
          // TODO: transfer actions into tx object
          judge(res).then((response)=>{
            setLoading(false)
            console.log(response)
          })
        }).catch((err)=> {
          console.log(err);
          setLoading(false)
        })
      }
      textareaRef.current.scrollTop = 0;
      setValue('');
    }
  }
  const handleValueChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    let value = event.target.value;
    if (value == "/") {
      setIsCode(true)
    } else {
      setIsCode(false)
    }
    setValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (event.key === 'Enter') {
      handleFormSubmit();
      setValue('');
    }
  };

  const handleBlur = (): void => {
    setIsFocused(false);
  };

  const handleClick = (): void => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
    setIsFocused(true);
  };

  const clearMessage = async () => {
    setLoading(true)
    await apiClient.init(global.accountAddress, "").then((res) => {
      console.log({chatres: res})
      setMessages([helloworld])
    })
    setLoading(false)
  }

  function handleCode (code: string) {
    return function(event) {
      event.preventDefault();
      setValue(code)
      setIsCode(false)
    }
  }

  return (
    <div className='prompt-main'>
      {loading && (
        <div className="loading">
          <img src="https://terminal3.s3.us-west-1.amazonaws.com/imgs/loading.gif" style={{width: "40px"}}/>
          <span>Loading</span>
        </div>
      )}
      <div className='chat-header'>
        <AiOutlineMenu style={{position:"absolute", left: "15", fontSize:"30", color:"#565656", cursor:"pointer"}}/>
        <div className='account-info'>
        <div className='network'>
          Ethereum
        </div>
        <img src="https://terminal3.s3.us-west-1.amazonaws.com/imgs/avatar.svg"/>
        </div>
      </div>
      <div className='message-ul'>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            {index % 2 == 1 ? <Message index={index} message={message}/>:
            <Message index={index} message={message?.Comment} back={{action: message?.Action, arg: message?.Parameters}}/>}
          </li>
        ))}
      </ul>
      </div>
    {isCode == true ? 
    <div className='code-select'>
      <div className='select-item' onClick={handleCode("/assets")}>
        <h2>/assets</h2>
        <p>Show my all crypto assets</p>
      </div>
      <div className='select-item'  onClick={handleCode("/history")}>
        <h2>/history</h2>
        <p>My transaction history</p>
      </div>
    </div>: null}
    <div className='prompt' onClick={handleClick}>
        <textarea
          className='prompt-input'
          rows={4}
          value={value}
          onBlur={handleBlur}
          ref={textareaRef}
          onChange={handleValueChange}
          typeof='text'
          onKeyDown={handleKeyDown}
        />
        <AiOutlineSend style={{position: "absolute", top: "40px", right: "20px", color:"white", fontSize:"20", cursor:"pointer"}}
        onClick={handleFormSubmit}/>
    </div>
    <button className='new-chat' onClick={clearMessage}>
        New Chat
    </button>
    </div>
  );
}
