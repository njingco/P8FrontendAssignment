import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import tw from "tailwind-styled-components";
import CreditExperience from './CreditExperience';

const Page = tw.div`
  w-full
  flex-col
  justify-center
  bg-light-blue
  flex
  justify-center
  items-center
`

const Container = tw.div`
  w-full
  max-w-5xl
  h-screen
  p-3
  mt-12
`

const Home: NextPage = () => {
  return (
    <Page>
      <Navbar/>
      <Container>
        <CreditExperience/>
      </Container>
    </Page>
    
  )
}

export default Home
