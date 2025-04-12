import React, {useState} from 'react'

const ThemeMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <>
        <div style={{
            background: darkMode?"#222":"#FFF",
            padding: "20px",
            color: darkMode?"#fff":"#222"
        }}>
            <h2>{darkMode?"Dark":"Light"} Mode</h2>
            <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
        </div>
        </>
    )
}

export default ThemeMode