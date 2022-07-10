import React from 'react';
import Nav from '../Navbar/Navbar';
import BasicButtons from '../BasicButton/BasicButton';
import BottomNav from '../BottomNav/BottomNav';
import './Layout.scss';


class Layout extends React.Component {
    render(){
      return (
        <>
          <Nav />
          <BasicButtons />
          <BottomNav />
          <main>{this.props.children}</main>
        </>
      )
    }
  }
  export default Layout;