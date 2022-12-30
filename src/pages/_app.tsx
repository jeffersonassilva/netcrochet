import '../styles/main.css'
import type {AppProps} from 'next/app'
import {useState} from 'react'
import Link from 'next/link'

export default function App({Component, pageProps}: AppProps) {
    const [bgColor, setBgColor] = useState('#fbf4ea')
    return (
      <>
        <header className='px-20 py-10 flex justify-between absolute top-0 w-full'>
              {/*<img src="logo.png" alt="logo" width="50px" />*/}
              <div className='text-yellow-900 text-2xl font-thin'>
                  <Link href='/'>
                      <span className=''>net</span>
                      <span className='font-medium'>Crochet</span>
                  </Link>
              </div>
              <ul className='flex gap-10'>
                  <li><Link href="/" className='font-medium text-yellow-900 hover:text-yellow-900'>Home</Link></li>
                  <li><Link href="/sobre" className='font-medium text-yellow-900 hover:text-yellow-900'>Sobre</Link></li>
                  <li><Link href="/contato" className='font-medium text-yellow-900 hover:text-yellow-900'>Contato</Link></li>
              </ul>
          </header>
          <div className='w-full'>
              <div className='flex justify-between px-20 w-full'>
                  <div className=''>
                      <h1 className="text-5xl leading-tight text-yellow-900">
                          Bonito,<br/>muito macio,<br/>e aconchegante!<br/>
                      </h1>
                      <p className='mt-4 font-thin text-yellow-900 max-w-md'>
                          Todos os nossos produtos são feitos manualmente,
                          podendo ter características personalizadas sob encomenda.
                      </p>
                      <div className='flex gap-4 mt-10'>
                          <Link href="/">
                              <div className='bg-black text-white px-4 py-2'>Cachecol</div>
                          </Link>
                          <Link href="/touca">
                              <div className='bg-black text-white px-4 py-2'>Touca</div>
                          </Link>
                          <Link href="/meia">
                              <div className='bg-black text-white px-4 py-2'>Meia</div>
                          </Link>
                      </div>
                  </div>
                  <div className=''>
                  <Component {...pageProps} stateChangeColor={setBgColor}/>
                    <style jsx global>{`
                      body {
                        background: ${bgColor};
                      }
                    `}</style>
                  </div>
              </div>
          </div>
        </>
    )
}
