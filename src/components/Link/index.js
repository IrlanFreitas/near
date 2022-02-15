import NextLink from 'next/link'
import LinkEstilizado from '../LinkEstilizado'

export default function Link({ children, href, ...restProps }) {
    return (
        <NextLink href={href} passHref >
            <LinkEstilizado {...restProps}>{children}</LinkEstilizado>
        </NextLink>)
}