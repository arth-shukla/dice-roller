import './ThemeSwitches.scss'

function ThemeSwitch({ changeTheme, darkMode, ...rest }) {
    return <button 
        id={darkMode ? "moon-dark-switch" : "sun-dark-switch"}
        class="dark-switch"
        onClick={changeTheme}
        {...rest}
    >
        <div id='targ'></div>
        <div id='cover'></div>
    </button>
}

function ColorSwitch({ changeColor, color, ...rest }) {
    return <button 
        id={(color == 0) ? "default-color-switch" : "pink-color-switch"} 
        class="dark-switch" 
        onClick={changeColor}
        {...rest}
    >
        <div id='targ'></div>
    </button>
}

export { ThemeSwitch, ColorSwitch }