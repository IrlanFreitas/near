import Head from "next/head";

export default function PageTitle({ children }) {
    return <Head>
        <title>{children}</title>
    </Head>
}