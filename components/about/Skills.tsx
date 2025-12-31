'use client'

import { motion } from 'framer-motion'

interface SkillGroup {
  category: string
  skills: string[]
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Product & Strategy',
    skills: [
      'Problem framing',
      'User research',
      'Product strategy',
      'Roadmap planning',
      'Stakeholder alignment',
      'Metrics & analytics',
    ],
  },
  {
    category: 'Technology & Systems',
    skills: [
      'System architecture',
      'API design',
      'Database design',
      'Cloud infrastructure',
      'DevOps practices',
      'Security principles',
    ],
  },
  {
    category: 'Research & Analysis',
    skills: [
      'User interviews',
      'Data analysis',
      'A/B testing',
      'Market research',
      'Competitive analysis',
      'Synthesis & insights',
    ],
  },
  {
    category: 'Creative & Communication',
    skills: [
      'Visual design',
      'Prototyping',
      'Writing & documentation',
      'Presentation',
      'Sound design',
      'Music production',
    ],
  },
]

export default function Skills() {
  return (
    <section className="py-32 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-display text-3xl md:text-4xl mb-16 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
            >
              <h3 className="font-display text-xl md:text-2xl mb-6 text-white">
                {group.category}
              </h3>

              <ul className="space-y-3">
                {group.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    className="text-sm md:text-base text-white/60 font-light"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: groupIndex * 0.1 + skillIndex * 0.05,
                    }}
                  >
                    <span className="inline-block w-2 h-2 bg-accent/50 mr-3" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

