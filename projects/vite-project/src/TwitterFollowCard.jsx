import { useState } from 'react' 

export function TwitterFollowCard({/*formUser,children, formUserName ,*/children, userName, initialisFollowing}){

   // Estado en React ..
      // devuelve un array de 2 campos [0]-> el valor(true-false) [1]-> para q actualize la variable
    // const [isFollowing, setIsFollowing] = useState(false)
    const [isFollowing, setIsFollowing] = useState(initialisFollowing)

    const text= isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

     
    const handleClick = () =>{
      setIsFollowing(!isFollowing)//cambie el valor contrario del Booleano
    }

    return(
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
          <img
            className='tw-followCard-avatar'
            alt='El avatar de midudev'
            src={`https://unavatar.io/${userName}`}
          />
          <div className='tw-followCard-info'>
           
            {/* <strong>{name}</strong> */}
            {children}

            <span className='tw-followCard-infoUserName'>
            <span className='tw-followCard-infoUserName'>@{userName}</span>
              {/* {formUser} */}
              {/* {formUserName(name)} */}
              </span>
          </div>
        </header>
  
        <aside>
          <button className={buttonClassName} onClick={handleClick}>
            {/* <span >Seguir</span> */}
            <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
          </button>
        </aside>
      </article>
    )
 }