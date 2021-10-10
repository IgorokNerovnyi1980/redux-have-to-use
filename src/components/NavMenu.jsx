import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import useRouter from '../hooks/useRouter'
import Tab from './Tab'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const items = useSelector((s) => s.app.navMenu)
  const activeTab = useSelector((s) => s.app.activeTab)

  const handleChange = (id, path) => {
    dispatch({ type: 'CHANGE_TAB', payload: id })
    router.push(path)
  }

  return (
    <Wrapper>
      {items?.length &&
        items.map(({ id, title, path }) => (
          <Tab
            key={id}
            title={title}
            onClick={() => handleChange(id, path)}
            isActive={activeTab === id}
          />
        ))}
    </Wrapper>
  )
}
