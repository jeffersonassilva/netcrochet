import {Html, Head, Main, NextScript} from 'next/document'
import {useState} from 'react'

export default function Document() {
    const [bgColor, setBgColor] = useState('#fbf4ea')
    return (
        <Html lang="pt-BR">
            <Head/>
            <body>
                <Main stateChangeColor={setBgColor}/>
                <NextScript/>
            </body>
        </Html>
    )
}
