import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { darkMode } from '../../pages/_app'

type ExampleProps = {
  children: React.ReactNode
}

export const ExampleResizable: React.FC<ExampleProps> = (props) => {
  let containerRef = React.createRef<HTMLDivElement>()
  let x = useMotionValue(0)
  let constraintsRef = React.createRef<HTMLDivElement>()
  let handleRef = React.createRef<HTMLDivElement>()

  React.useEffect(() => {
    const observer = new window.ResizeObserver(() => {
      x.set(0)
    })
    // @ts-ignore
    observer.observe(containerRef.current)
    return () => {
      observer.disconnect()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return(
    <div ref={containerRef} className="relative">
      <motion.div className={`w-full lg:w-auto rounded-md ${darkMode ? 'dark:bg-slate-800' : 'bg-slate-200'} px-3 py-3`} style={{ marginRight: useTransform(x, (x) => {
        if (x < 0 && x > -420) return -x
        else if (x > -1) return 0
      }) }}>
        {props.children}
      </motion.div>
      <div
        ref={constraintsRef}
        className="absolute inset-y-0 left-80 ml-4 pointer-events-none"
        style={{ right: '-1.375rem' }}>
        <motion.div
          ref={handleRef}
          drag="x"
          _dragX={x}
          dragMomentum={false}
          dragElastic={0}
          dragConstraints={constraintsRef}
          className="pointer-events-auto absolute top-1/2 right-0 -mt-4 p-2 hidden md:block cursor-ew-resize"
          style={{ x }}
          onDragStart={() => {
            document.documentElement.classList.add('dragging-ew')
          }}
          onDragEnd={() => {
            document.documentElement.classList.remove('dragging-ew')
          }}
        >
          <div className="w-1.5 h-8 bg-slate-500 rounded-full" />
        </motion.div>
      </div>
    </div>
  )
}
