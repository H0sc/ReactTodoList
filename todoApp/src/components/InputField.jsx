import { useState } from "react"

export default function InputField () {
    const [inputVal, setInputVal] = useState("")
    const [inputDisplay, setInputDisplay] = useState("")

    function handleInput (e) {
        setInputVal(e.target.value)
    }

    function handleClick () {
        setInputVal("")
    }

    return (
        <div className="">
            <input type="text" value={inputVal} onChange={handleInput} />
            <input type="button" value="Add to List" onClick={handleClick} />
        </div>
    )
}