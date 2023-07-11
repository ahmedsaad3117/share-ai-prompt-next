import '@styles/globals.css'

export const metadata = {
    title: "AI Prompts",
    description: "Discover & Share AI Prompts"
}

const RootLayout = ({children} : any) => {
    return (
        <html lang='en'>
            <body>
                <div className='main'>
                    <div className='gradient'></div>
                </div>

                <main className='app'>
                    {/* @ts-ignore */}
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout