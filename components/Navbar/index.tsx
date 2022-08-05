
import tw from "tailwind-styled-components";
import { BiMenu } from 'react-icons/bi'

const Container = tw.div`
    w-full
    flex
    justify-center  
   
    shadow-lg
    shadow-shadow-blue
    bg-white   
`

const Content = tw.div`
    w-full
    max-w-5xl
    flex
    justify-between
    items-center
    p-3

`

const Logo = tw.img`
    h-8
`

const Menu = tw.div`
    w-8
    h-8
    cursor-pointer
`

export default function Navbar(){
    return (
        <Container>
            <Content>
                <Logo src="./p8Wordmark_sm.svg" alt="logo"/>
                <Menu><BiMenu/></Menu>
            </Content>
        </Container>
    )
}