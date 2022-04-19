// index.html
import  React  from 'react';
import { useState } from 'react'
import ReactDOM from "react-dom";
import ReactWordcloud from 'react-wordcloud';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

function Header({ title }) {
  return <h1>{title ? title : 'Covid-19 Fake News Hot Words'}</h1>
}

const words = [
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 11,
  },
  {
    text: 'thought',
    value: 16,
  },
  {
    text: 'bad',
    value: 17,
  },
]

function SimpleWordcloud() {
  // a sub-optimal way to solve the problem with SSR
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    setShow(true)
  }, [])
  return show && (
    <ReactWordcloud words={words} />
  )
}

export default function HomePage() {

  const [likes, setLikes] = useState(0)

  function handleClick() {
    setLikes(likes + 1)
  }

  return (
    <div>
      <Header/>

      <SimpleWordcloud/>
      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  )
}