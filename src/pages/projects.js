import Header from '@/components/Header/Header'
import React from 'react'
import Head from 'next/head'
import ProjectMain from '@/components/Projects/ProjectMain'
import Footer from '@/components/Footer/Footer'

const projects = () => {
  return (
    <>
    <Head>
        <title>Emmanuel Taiwo - Software Engineer - Projects</title>
        <meta name="description" content="Emmanuel Taiwo - Software Engineer - Projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
    </Head>

      <Header />
      <ProjectMain />
      <Footer />
    </>
  )
}

export default projects