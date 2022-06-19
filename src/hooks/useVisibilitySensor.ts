import { useState, useEffect } from 'react'

export interface IVisibilitySensor {
  ref: React.MutableRefObject<HTMLElement | null>
}

export const useVisibilitySensor = (props: IVisibilitySensor) => {
  const [visible, setVisible] = useState(false)
  const [asd, setAsd] = useState()

  useEffect(() => {
    const intersectionCallBack: IntersectionObserverCallback = (entries) => {
      if (entries[0]?.isIntersecting) {
        if (visible) return
        setVisible(true)
      }
    }

    const intersectionOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 1.0,
    }

    const intersection = new IntersectionObserver(intersectionCallBack, intersectionOptions)
    if (props.ref.current instanceof HTMLElement) {
      intersection.observe(props.ref.current as any)
    }
  }, [])

  const reset = () => {
    setVisible(false)
  }

  return { visible, reset }
}
