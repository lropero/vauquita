import { debounce } from 'lodash'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import { updateDimensions } from 'vauquita/store/utils'

const getDimensions = () => ({
  height: window.innerHeight,
  width: window.innerWidth
})

const useDimensions = () => {
  const dispatch = useDispatch()

  const [dimensions, setDimensions] = useState(getDimensions())

  useEffect(() => {
    const handleResize = debounce(() => setDimensions(getDimensions()), 100)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    dispatch(updateDimensions(dimensions))
  }, [dimensions])
}

export default useDimensions
