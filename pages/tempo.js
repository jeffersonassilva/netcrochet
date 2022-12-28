import Link from 'next/link';
import {useEffect, useState} from "react";

function Tempo(props) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (<div>
        <h1>Tempo</h1>
        <Link href="/">Voltar para a página home</Link>
        <p>{dynamicDateString} (dinâmico)</p>
        <p>{props.staticDateString} (estático)</p>
    </div>)
}

export function getStaticProps() {
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        },
        revalidate: 60
    }
}

export default Tempo
