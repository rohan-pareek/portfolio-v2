import React from 'react';
import skills from '../data/skills.json';

const Skills = (props) => {
  return (
    <section className='grid grid-cols-1 gap-4 place-items-center items-center my-10'>
      {skills.map((skill, index) => (
        <div key={`${skill.name}-${index}`} className = "w-64 h-64 p-4 border rounded-full flex flex-col shadow-lg items-center my-2">
          <img src={skill.image} alt={skill.name} className = "w-36 h-36 object-contain cover mb-5" />
          <p className='text-xl uppercase'>{skill.name}</p>
          <p className='text-sm text-gray-500'>Exp: {skill.exp}</p>
        </div>

      ))}
    </section>
  )
}

export default Skills;