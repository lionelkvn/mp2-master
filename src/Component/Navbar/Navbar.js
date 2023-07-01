import './Navbar.css';
import { Anchor } from 'antd';

const { Link } = Anchor;

const Navbar = () => {
    return(
        <div id="Navbar" className="container">
            <h1><span class="primary-color">Ink</span><span>novative</span></h1>       
            <div className="Navbar">
                <Anchor direction="horizontal" targetOffset="60">
                <Link href="#Home" title="Home"/>
                <Link href="#About" title="About" />
                <Link href="#Services" title="Services" />
                <Link href="#Portfolio" title="Portfolio" />
                <Link href="#Contact" title="Contact" />
                </Anchor>
            </div>
        </div>
    );
}
export default Navbar;



