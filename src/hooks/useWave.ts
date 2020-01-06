import * as React from 'react'

type UseWaveArg = (color?: string) => [boolean, React.Dispatch<React.SetStateAction<boolean>>]

const useWave: UseWaveArg = (color) => {
  const [wave, setWave] = React.useState(false)
  let timeout: NodeJS.Timeout = null

  React.useEffect(() => {
    !!color && document.documentElement.style.setProperty('--waveColor', color)
  }, [color])

  React.useEffect(() => {
    clearInterval(timeout)

    if (wave) {
      timeout = global.setInterval(() => {
        setWave(false)
      }, 1100)
    }

    return () => {
      clearInterval(timeout)
    }
  }, [wave])

  return [wave, setWave]
}

export default useWave
