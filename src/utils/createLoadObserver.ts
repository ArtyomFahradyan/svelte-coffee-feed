const createLoadObserver = (handler: () => void) => {
  let waiting = 0

  return (el: HTMLImageElement) => {
    waiting++
    el.addEventListener('load', () => {
      waiting--
      if (waiting === 0) {
        handler()
      }
    })
  }
}

export default createLoadObserver;