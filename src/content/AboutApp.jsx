import React from 'react'
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
  const t = text['ru'] //for example have to use another language

  return (
    <Wraper>
      <H1>{t.title1}</H1>
      {t.text1.map(({ title, text }) => (
        <>
          {title && <H3 key={title}>{title}</H3>}
          {text && <p key={text}>{text}</p>}
        </>
      ))}
      <TableContent>{t.tableContentTitle1}</TableContent>
      <TableContent>{t.tableContentTitle2}</TableContent>
      <TableContent>{t.tableContentTitle3}</TableContent>
      <H2>{t.tableContentTitle1}</H2>
      {t.tableContenttext1.map(({ title, text }) => (
        <>
          {title && <Li key={title}>{title}</Li>}
          {text && <p key={text}>{text}</p>}
        </>
      ))}
      <H2>{t.tableContentTitle2}</H2>
      {t.tableContenttext2.map(({ title, text }) => (
        <>
          {title && <H3 key={title}>{title}</H3>}
          {text && <p key={text}>{text}</p>}
        </>
      ))}
      <H2>{t.tableContentTitle3}</H2>
      {t.tableContenttext3.map(({ title, text }) => (
        <>
          {title && <H3 key={title}>{title}</H3>}
          {text && <p key={text}>{text}</p>}
        </>
      ))}
    </Wraper>
  )
}
