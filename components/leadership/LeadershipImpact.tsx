'use client'

import { motion } from 'framer-motion'

interface LeadershipItem {
  role: string
  organization: string
  timeframe: string
  impact: string[]
}

const leadershipItems: LeadershipItem[] = [
  {
    role: 'Product Lead',
    organization: 'Internal product team',
    timeframe: '2022–2024',
    impact: [
      'Led cross-functional team in defining product strategy and roadmap for internal tooling platform.',
      'Established decision-making frameworks that improved team alignment and reduced rework.',
    ],
  },
  {
    role: 'Research Coordinator',
    organization: 'User research initiative',
    timeframe: '2021–2023',
    impact: [
      'Coordinated research synthesis across multiple product teams, creating shared understanding of user needs.',
      'Developed research documentation standards that improved knowledge transfer and reduced duplicate work.',
    ],
  },
  {
    role: 'Technical Lead',
    organization: 'Systems architecture project',
    timeframe: '2020–2022',
    impact: [
      'Architected and led implementation of platform that improved system reliability and developer experience.',
      'Mentored junior engineers and established technical standards that scaled across teams.',
    ],
  },
  {
    role: 'Team Lead',
    organization: 'Product development team',
    timeframe: '2019–2021',
    impact: [
      'Managed team of 5 engineers and designers, focusing on clear communication and shared ownership.',
      'Created processes for collaboration that balanced autonomy with alignment.',
    ],
  },
]

export default function LeadershipImpact() {
  return (
    <section className="py-20 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="font-display text-3xl md:text-4xl mb-12 text-white"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Leadership & Extra-curricular Impact
        </motion.h2>

        <div className="space-y-8">
          {leadershipItems.map((item, index) => (
            <motion.div
              key={item.role}
              className="border-l border-white/10 pl-6 md:pl-8 py-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-3">
                <h3 className="font-display text-xl md:text-2xl mb-1 text-white">
                  {item.role}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-white/50 font-light mb-3">
                  <span>{item.organization}</span>
                  <span className="text-white/20">·</span>
                  <span>{item.timeframe}</span>
                </div>
              </div>
              <ul className="space-y-2">
                {item.impact.map((point, i) => (
                  <li
                    key={i}
                    className="text-base text-white/70 font-light leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-stone mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

