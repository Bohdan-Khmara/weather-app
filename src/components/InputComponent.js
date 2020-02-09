import React, {useState}from 'react';

const ImputComponent = (props) => {
    const [text, setText] = useState("");
    const [showText, setShowText] = useState(true);

    const handleChangetext = (e) => {
        setText(e.target.value)
    }

    const activate = (e) => {
        setShowText(!showText)
    }

    return (
        <div className='w-100'>
            <input value={text} onChange={handleChangetext} />
            <br></br>

            {showText && <p>{props.title} {text}</p>}

            <button onClick={activate}>{showText ? 'HIDE' : 'SHOW'}</button>
        </div>
    )
}

export default ImputComponent;
