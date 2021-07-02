import Head from "next/head";
import React from 'react'
import Link from "next/link";

const index = ({children}) => {
    return (
        <div>
            <Head>
                
          <link
            rel="preload"
            href="/fonts/EBGaramond/EBGaramond-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/EBGaramond/EBGaramond-Medium.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
            <h1>Authenticated Page</h1>
            <div>{children}</div>
        </div>
    )
}

export default index

