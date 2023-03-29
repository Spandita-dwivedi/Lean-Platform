import Head from 'next/head'
import Image from 'next/image'
import FirstFormcomp from '../components/FirstForm/FirstForm'
import SecondFormcomp from '../components/SecondForm/SecondForm'
import styles from '@/styles/Home.module.scss'


export default function Home() {
  return (
    <>
    <Head>
      <title>Lean-platform</title>
      </Head>
     <FirstFormcomp/>
     
    </>
  )
}
