import '../styles/main.css'
import type {AppProps} from 'next/app'
import {useState} from 'react'

export default function App({Component, pageProps}: AppProps) {
    const [bgColor, setBgColor] = useState('#fbf4ea')
    return (
        <>
            <Component {...pageProps} stateChangeColor={setBgColor}/>
            <style jsx global>{`
              body {
                background: ${bgColor};
              }
            `}</style>
        </>
    )
}
