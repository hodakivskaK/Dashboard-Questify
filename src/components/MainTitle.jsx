import s from './MainTitile.module.css'

export const MainTitle = () => {

  const str  = 'JavaScript is awesome'.split(' ');


  const userA = {
    name: 'Mango',
    age: 5,
    };
    
    const userB = {
    ...userA,
    age: 10,
    happy: true,
    };
    
    console.log(userB);    
    

    return (
      <div className={s.main}>
         {null}
        <button>btn</button>
        <span>{str}</span>
        <a href="">link</a>
        <article>article</article>
       
    

      </div>
    );
  };
  