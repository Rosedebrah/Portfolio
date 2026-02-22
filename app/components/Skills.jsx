import React from 'react'

const Skills = () => {
  const skillsData = [
    {
      icon: "</>",
      title: "Frontend Development",
      skills: ["Web Development", "Mobile Development", "Responsive Design", "User Research", "Prototyping", "Visual Design", "Wireframing"],
      tools: ["React", "TypeScript", "Vite", "Flutter", "TailwindCSS","Figma","FigJam", "Adobe Illustrator", "Iconify", "Adobe XD", "Canva"]
    },
    {
      icon: "</>",
      title: "Programming",
      skills: ["Web Development", "Mobile Development", "Responsive Design"],
      tools: ["Python", "Javascript","HTML5", "Java", "CSS3"]
    },
    {
      icon: "🎨",
      title: "System and Tools",
      skills: ["User Research", "Prototyping", "Visual Design"],
      tools: ["Figma","FigJam", "Adobe Illustrator", "Iconify", "Adobe XD", "Canva"]
    },
    {
      icon: "💻",
      title: "Operating Systems",
      skills: ["System Administration", "Network Configuration", "Automation"],
      tools: ["Ubuntu", "Kali Linux", "Shell Scripting"]
    }
  ]

  return (
    <div id="skills" className='w-full px-[12%] py-20 bg-white text-black'>
      <h2 className='text-center text-5xl font-Ovo mb-4'>Skills & Expertise</h2>
      <p className='text-center max-w-3xl mx-auto text-gray-400 mb-16 font-Ovo'>
        A comprehensive toolkit built through years of hands-on experience in full-stack development and system architecture.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {skillsData.map((category, index) => (
          <div 
            key={index} 
            className='bg-white border border-zinc-800 rounded-2xl p-8 hover:bg-rose-50 transition-all duration-300 group cursor-pointer'
          >
            <div className='text-4xl mb-6 bg-white w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-rose-50 transition-colors'>
              {category.icon}
            </div>
            <h3 className='text-2xl font-semibold mb-6 font-Ovo'>{category.title}</h3>
            
            {/* Skills Section */}
            {category.skills && category.skills.length > 0 && (
              <div className='mb-4'>
                <div className='flex flex-wrap gap-2'>
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className='px-3 py-1 bg-gray-200 rounded-full text-xs text-gray-700 group-hover:bg-white transition-colors'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tools Section */}
            <div className='flex flex-wrap gap-3'>
              {category.tools.map((tool, toolIndex) => (
                <span 
                  key={toolIndex}
                  className='px-4 py-2 bg-black rounded-full text-sm text-white group-hover:bg-zinc-800 transition-colors'
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills