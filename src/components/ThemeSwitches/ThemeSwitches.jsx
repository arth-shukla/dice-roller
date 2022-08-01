import './ThemeSwitches.scss'

function LightDarkSwitch({ setThemeMode, isMoon, ...rest }) {
    return <button 
        id={isMoon ? "moon-dark-switch" : "sun-dark-switch"}
        class="dark-switch"
        onClick={() => {
            setThemeMode()
        }}
        {...rest}
    >
        <div id='targ'></div>
        <div id='cover'></div>
    </button>
}

function LightColorSwitch({ setThemeMode, isDefault, ...rest }) {
    return <button 
        id={isDefault ? "default-color-switch" : "pink-color-switch"} 
        class="dark-switch" 
        onClick={() => {
            setThemeMode()
        }}
        {...rest}
    >
        <div id='targ'></div>
    </button>
}

export { LightDarkSwitch, LightColorSwitch }