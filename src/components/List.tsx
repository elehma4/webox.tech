import clsx from 'clsx'

import { Border } from '@/components/Border'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

export function List({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <FadeInStagger>
      <ul role="list" className={clsx('text-base text-neutral-600', className)}>
        {children}
      </ul>
    </FadeInStagger>
  )
}

export function ListItem({
  children,
  title,
  invert
}: {
  children: React.ReactNode
  title?: string
  invert?: boolean
}) {
  return (
    <li className="group mt-10 first:mt-0">
      <FadeIn>
        <Border invert className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
          {title && (
            <strong className={clsx(
              'font-semibold',
              invert ? 'text-white' : 'text-neutral-950',
            )}>{`${title}. `}</strong>
          )}
          <text className={clsx(invert ? 'text-white' : 'text-neutral-950')}>
            {children}
          </text>
        </Border>
      </FadeIn>
    </li>
  )
}
