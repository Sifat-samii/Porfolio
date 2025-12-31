'use client'

import AccordionBlock from './AccordionBlock'

const thinkingCards = [
  {
    title: 'How I Frame Problems',
    tldr: 'I start by understanding the system, not just the symptom.',
    deepDive: [
      'Map the context: users, constraints, and existing patterns before proposing solutions.',
      'Ask "why" until I reach first principles, then work backwards to the specific problem.',
      'Separate the problem space from the solution space to avoid premature optimization.',
    ],
  },
  {
    title: 'How I Decide Trade-offs',
    tldr: 'Constraints reveal the most elegant solutions.',
    deepDive: [
      'Make trade-offs explicit: document what we\'re optimizing for and what we\'re sacrificing.',
      'Use time-boxed experiments to validate assumptions before committing to major decisions.',
      'Prioritize based on impact and learning, not just urgency or ease.',
    ],
  },
  {
    title: 'How I Execute with Teams',
    tldr: 'Clarity of direction enables autonomy and speed.',
    deepDive: [
      'Set clear constraints and goals, then let teams find the best path within those bounds.',
      'Create shared understanding through documentation, not just meetings.',
      'Ship incrementally and learn from real usage, not just internal feedback.',
    ],
  },
  {
    title: 'How I Reflect & Improve',
    tldr: 'Learning compounds when we examine what worked and why.',
    deepDive: [
      'Conduct lightweight retrospectives: what worked, what didn\'t, and what to change.',
      'Document decisions and their outcomes to build institutional knowledge.',
      'Treat mistakes as data points, not failures—they reveal system gaps.',
    ],
  },
]

export default function ThinkingSnapshot() {
  return (
    <section className="py-32 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl mb-12 text-white">
          Thinking Snapshot
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {thinkingCards.map((card) => (
            <AccordionBlock
              key={card.title}
              title={card.title}
              tldr={card.tldr}
              deepDive={card.deepDive}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

