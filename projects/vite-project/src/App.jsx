// import {useState} from 'react'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import './App.css'

const users = [
    {
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: true
    },
    {
      userName: 'pheralb',
      name: 'Pablo H.',
      isFollowing: false
    },
    {
      userName: 'PacoHdezs',
      name: 'Paco Hdez',
      isFollowing: true
    },
    {
      userName: 'TMChein',
      name: 'Tomas',
      isFollowing: false
    }
  ]

export function App(){
    // const format = (userName) => `@${userName}`
    // const formatUser = <span>@midudev</span>
    // const [name, setName] = useState('pheralb')

    // console.log('render name: ', name);
    
    return(
//    <> contenido sin ninguna etiqueta

<section className='App'>
{
  users.map(({ userName, name, isFollowing }) => (
    <TwitterFollowCard
      key={userName}/* algo unico como id de BD*/
      userName={userName}
      initialIsFollowing={isFollowing}
    >
      {name}
    </TwitterFollowCard>
  ))
}
</section>
    
//    </>

    )
}