
const Footer = ({length}) => {
    const date=new Date();

  return (
 
    <p className='footer'>{length===1?"Item":"Items"} Length: {length}  <br/> Copyright &copy; {date.getFullYear()}</p>
  );
}

export default Footer;
