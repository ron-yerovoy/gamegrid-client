import React from 'react';
import HomeHeader from '../components/HomePageHeader';
import BurgerMenu from '../components/BurgerMenu';

const HomeLayout = ({children}) => {
  return (
    <div>
       
       <HomeHeader /> 
      <div className='flex'>
        <BurgerMenu />{children}</div>
      
      
    </div>
  );
}

export default HomeLayout;
