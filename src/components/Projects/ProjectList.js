import React from 'react'
import Button from '../Button/Button'
import StackButton from '../Button/StackButton'

const ProjectList = ({ title, description, projectImage, skills }) => {
    const arr = ['Next.js', 'Tailwind']

    const getSkills = () => {
        return skills.map((skill) => {
          return <StackButton key={skill}>{skill}</StackButton>;
        });
      };
    
  return (
    <div className='flex flex-col w-full pb-24'>
        <div className='grid md:grid-cols-2 xl:grid-cols-2 gap-7 xl:gap-16 grid-cols-1'>
            <div>
                <h1 className='font-righteous text-3xl font-black'>{title}</h1>
                <p className='mt-5 mr-5 text-neutral-500'>{description}</p>
                <div className='mt-5 flex gap-3 flex-wrap'>
                        {getSkills()}
                </div>
            </div>

            <div>
                <div className='border-4 p-1 pb-3 border-blue-400 rounded'>
                    <img src={projectImage} alt="" />
                    <div className='grid gap-2 grid-rows-2 xl:grid-cols-2 md:grid-rows-2 mt-5'>
                    <Button>View Demo</Button>
                    <Button>Github Repo</Button>
                    </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default ProjectList