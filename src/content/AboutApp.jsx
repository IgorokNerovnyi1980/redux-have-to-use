import React, { useRef } from 'react'
import styled from 'styled-components'
import text from '../lib/aboutApp.config'

const Wraper = styled.div`
  width: 100%;
  padding: ${(p) => p.theme.sidePad};
  font-style: italic;
`
const H1 = styled.p`
  font-size: ${(p) => p.theme.h1};
  margin-bottom: 1rem;
`
const H2 = styled.p`
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: ${(p) => p.theme.h2};
  font-weight: 500;
  color: ${(p) => p.theme.textContrast};
`
const H3 = styled.p`
  margin-top: 1rem;
  margin-left: 0.7rem;
  font-size: ${(p) => p.theme.h3};
  font-weight: 500;
`
const TableContent = styled.p`
  margin-top: 0.7rem;
  font-size: ${(p) => p.theme.h4};
  text-decoration: underline;
  cursor: pointer;
`
const Li = styled.p`
  position: relative;
  margin-left: 2rem;
  margin-top: 0.7rem;
  font-weight: 500;
  font-style: italic;
  ::before {
    position: absolute;
    left: -1.5rem;
    content: '-';
    padding-right: 0.4rem;
  }
`

export default () => {
  const t = text['en'] //for example have to use another language

  const anchor1 = useRef()
  const anchor2 = useRef()
  const anchor3 = useRef()

  const executeScroll = (reff) =>
    reff.current.scrollIntoView({ behavior: 'smooth' })

  return (
    <Wraper>
      <H1>{t.title1}</H1>
      {t.text1.map(({ title, text }, i) => (
        <span key={i}>
          {title && <H3>{title}</H3>}
          {text && <p>{text}</p>}
        </span>
      ))}
      <TableContent onClick={() => executeScroll(anchor1)}>
        {t.tableContentTitle1}
      </TableContent>
      <TableContent onClick={() => executeScroll(anchor2)}>
        {t.tableContentTitle2}
      </TableContent>
      <TableContent onClick={() => executeScroll(anchor3)}>
        {t.tableContentTitle3}
      </TableContent>
      <H2 ref={anchor1}>{t.tableContentTitle1}</H2>
      {t.tableContenttext1.map(({ title, text }, i) => (
        <span key={i}>
          {title && <Li>{title}</Li>}
          {text && <p>{text}</p>}
        </span>
      ))}
      <H2 ref={anchor2}>{t.tableContentTitle2}</H2>
      {t.tableContenttext2.map(({ title, text }, i) => (
        <span key={i}>
          {title && <H3>{title}</H3>}
          {text && <p>{text}</p>}
        </span>
      ))}
      <H2 ref={anchor3}>{t.tableContentTitle3}</H2>
      {t.tableContenttext3.map(({ title, text }, i) => (
        <span key={i}>
          {title && <H3>{title}</H3>}
          {text && <p>{text}</p>}
        </span>
      ))}
    </Wraper>
  )
}
