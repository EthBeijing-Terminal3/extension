import React, { useState, useEffect, useRef } from 'react';
import './Prompt.css';
import { AiOutlineMenu, AiOutlineSend} from 'react-icons/ai'


export const Prompt = (): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [messages, setMessages] = useState([]);
  const [isCode, setIsCode] = useState<boolean>(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    console.log(messages)
  }, [messages])
  function handleFormSubmit() {
    if (value) {
      console.log(value)
      setMessages([...messages, value]);
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
    if (inputRef.current) {
      inputRef.current.focus();
    }
    setIsFocused(true);
  };

  const clearMessage = (): void => {
    setMessages([])
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
      <div className='chat-header'>
        <AiOutlineMenu style={{position:"absolute", left: "15", fontSize:"30", color:"#565656"}}/>
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
            <div className='message-item'>
              <img src={index%2 == 1 ? "https://terminal3.s3.us-west-1.amazonaws.com/imgs/Group+9.svg":"https://terminal3.s3.us-west-1.amazonaws.com/imgs/message-avatar.svg"} style={{paddingRight:"10px"}}/>
              {message}
            </div>
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
          ref={inputRef}
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
