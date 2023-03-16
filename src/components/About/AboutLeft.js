import React from 'react'
import Button from '../Button/Button'
import { useRouter } from 'next/router'

const AboutLeft = () => {
    const router = useRouter()
  return (
    <div className='xl:w-2/5 md:w-2/5'>
        <h1 className='font-righteous text-3xl font-black'>Get To Know Me!</h1>
        <p className='mt-10 text-neutral-500 pb-10 text-base'>I'm a Frontend Developer passionate about building responsive UI & Web Applications that lead to the success of the overall product. You can check out some of my work in the Projects section.
        <br/><br/>

        I like making music, I also like playing video game, But I also like sharing content related to the stuff that I have learned over the years in Web Development I do this to help other people in the Dev Community. 
        <br /><br />
        
        Feel free to Connect or Follow me on my <a href="https://www.linkedin.com/in/realemmanuel/" className='text-blue-800'>Linkedin</a> where I post useful content related to Web Development and Programming; here's my Twitter, in case you like memes 😜.
        <br /><br />

        I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience, please don't hesitate to contact me.</p>

        <div onClick={() => router.push('/contact')}>
        <Button>Contact me</Button>
        </div>
    </div>
  )
}

export default AboutLeft