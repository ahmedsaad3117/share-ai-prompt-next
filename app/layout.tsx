import '@styles/globals.css'

import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
    title: "AI Prompts",
    description: "Discover & Share AI Prompts"
}

const RootLayout = ({ children }: any) => {
    return (
        <html lang='en'>
            <body>
                {/* @ts-ignore */}
                <Provider>

                    <div className='main'>
                        <div className='gradient'></div>
                    </div>

                    <main className='app'>
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout