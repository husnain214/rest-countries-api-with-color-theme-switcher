import React from 'react'

const Navbar = () => {
    return (
        <nav className = 'elements-bg'>
            <div className = 'container flex'>
                <h1 className = 'fw-800 fs-500 text-color-strong'>Where in the world?</h1>
        
                <div className = 'theme-wrap flex'>
                    <svg 
                        xmlns = 'http://www.w3.org/2000/svg' 
                        fill = 'hsl( var(--theme-svg-fill) )' 
                        viewBox = '0 0 24 24' 
                        strokeWidth = '1.5' 
                        stroke = 'hsl( var(--theme-svg-stroke) )' 
                        className = 'w-6 h-6'
                        height = '2ch'
                        width = '2ch'
                    >
                        <path 
                            strokeLinecap = 'round' 
                            strokeLinejoin = 'round' 
                            d = 'M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z' 
                        />
                    </svg>
                    
                    <p className = 'fw-600 fs-400 text-color-strong'>Dark Mode</p>

                    <input 
                        type = 'checkbox' 
                        name = 'theme-switcher'
                        id = 'theme-switcher'
                        className = 'theme-switcher'    
                    />
                </div>
            </div>
        </nav>
    )
}

export default Navbar