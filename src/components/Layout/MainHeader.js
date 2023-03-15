import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import winwin from '../../assests/win.jpg'
const MainHeader = (props) => {
  return (
    <header className={classes.header}>
    <img style={{width:'20%', height:'90%'}}src={winwin} alt='A table full of delicious food!' />  

      {/* <h1>ReduxCart</h1> */}
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
