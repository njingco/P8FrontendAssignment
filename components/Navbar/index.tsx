
import tw from "twin.macro";
import { BiMenu } from 'react-icons/bi'

const Container = tw.div`
    w-full
    flex
    justify-center  
    shadow-lg
    bg-white   
`

const Content = tw.div`
    w-full
    max-w-6xl
    flex
    justify-between
    items-center
    p-3
`

const Logo = tw.img`
    h-6
    cursor-pointer
`

const Menu = tw.div`
    cursor-pointer
`

export default function Navbar(){
    return (
        <Container>
            <Content>
                <Logo src="./p8Wordmark_sm.svg" alt="logo"/>
                <Menu><BiMenu size="2rem" color="#3b4f5b" /></Menu>
            </Content>
        </Container>
    )
}