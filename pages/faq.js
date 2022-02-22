// import { useEffect, useState } from 'react'
import Link from '../src/components/Link'
import Head from "next/head";
import PageTitle from '../src/components/PageTitle';

// ! will be passed to the page component as props

// ! SSR - Server Side Rendering 
// * Esse comando é atualizado sempre que o usuário acessa a página
// * yarn export não funciona pois os dados são sempre atualizados
// * yarn build && yarn start funciona
// * Roda a cada acesso que recebe em prov/buildado
// ? Em modo dev sempre roda a cada acesso
// ! export async function getServerSideProps() {

// ! SSG - Static Site Generation
// * Esse faz "cache" dos resultados para criar páginas estáticas
// * Serve para sites estáticos
// * Roda somente no build time
// ? Em modo dev sempre roda a cada acesso
export async function getStaticProps() {

    const FAQ_URL = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json"

    const faq = await fetch(FAQ_URL)
        .then(resultado => resultado.json())
        .then(resultado => { return resultado })

    return {
        props: {
            testeProps: "Recebendo na página",
            faq
        },
    }
}

export default function FaqPage({ faq }) {

    // const [faq, setFaq] = useState([]);

    // * fetch agora será feito no método getStaticProps
    // * para melhorar um dos fatores de SEO da página
    // * o LCP - Largest Contentful Paint

    // ? Largest Contentful Paint ou Maior Renderização de Conteúdo
    // ? mede o desempenho do carregamento. Para fornecer um boa 
    // ? experiência ao usuário, o LCP deve ocorrer dentro de 
    // ? 2,5 segundos após o início do carregamento da página.

    // useEffect(() => {
    //     fetch(FAQ_URL)
    //         .then(resultado => resultado.json())
    //         .then(setFaq)
    // }, [])

    return <>
        <PageTitle>Faq - Alura Cases Campanha</PageTitle>
        <h1>Alura Cases - FAQ Page</h1>
        <Link href="/">
            Home
        </Link>
        <ul>
            {faq.map(({ answer, question }) => <>
                <li key={question}>
                    <article>
                        <h2>{question}</h2>
                        <p>{answer}</p>
                    </article>
                </li>
            </>)}
        </ul>
    </>
}