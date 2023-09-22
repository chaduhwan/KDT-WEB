import { useState } from 'react'

export default function ToggleFunc() {
    const [Status, setStatus] = useState(false);


    const handleToggle = () => {
        if (Status === false) {
            setStatus(true)
        } else {
            setStatus(false)
        }
    }

    return (
        <div>
            <button onClick={handleToggle}>토글</button>
            <p>{Status && '보여라'}</p>
        </div>
    )
}