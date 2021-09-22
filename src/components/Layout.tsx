import Head from 'next/head';

export default function Layout({children, title}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Lukas Tanto Kurniawan Portofolio"/>
            </Head>
            <main>
                <div>
                    {children}
                </div>
            </main>
        </>
    )
};
