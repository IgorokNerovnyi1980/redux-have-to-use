import React from 'react'
import styled from 'styled-components'
import useUser from '../hooks/useUser'
import Button from '../components/Button'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`
const Content = styled.div`
  padding: ${(p) => p.theme.boxPad};
  border: 0.1rem solid ${(p) => p.theme.text};
  border-radius: ${(p) => p.theme.boxRadius};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const Avatar = styled.img`
  width: 10rem;
  margin-right: ${(p) => p.theme.basePad};
  border-radius: 50%;
`

const Themes = () => {
  const { profile, isProfile, onLogout } = useUser()

  return (
    <Wrapper>
      {isProfile ? (
        <>
          <Content>
            <Avatar src={profile.avatar} />
            <div>
              {Object.entries(profile).map((item) =>
                item[0] === 'avatar' ? null : (
                  <p key={item[0]}>
                    {item[0]}: <strong>{item[1]}</strong>
                  </p>
                )
              )}
            </div>
          </Content>
          <Button
            title="Logout"
            style={{ marginTop: '2rem' }}
            onClick={onLogout}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Wrapper>
  )
}

export default Themes
