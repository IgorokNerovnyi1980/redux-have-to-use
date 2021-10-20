import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import useRouter from '../hooks/useRouter'
import Tab from './Tab'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default () => {
  const router = useRouter()
  const items = useSelector((s) => s.navMenu)

  const handleChange = (path) => {
    router.push(path)
  }

  return (
    <Wrapper>
      {items?.length &&
        items.map(({ id, title, path }) => (
          <Tab
            key={id}
            title={title}
            onClick={() => handleChange(path)}
            isActive={path === router.pathname}
          />
        ))}
    </Wrapper>
  )
}
