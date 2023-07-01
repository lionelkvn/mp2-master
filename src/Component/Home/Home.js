import './Home.css';
const Home = () => {
    return(
        <div id="Home" class="Home">
            <div class="HomeImage">
                <img src="./slide image.png"/>
            </div>
            <div class='HomeContent'>
                <h1><span class="primary-color">Ink</span><span>novative</span></h1> 
                <h2>Putting your thoughts into prints.</h2>
                <div><a href="#Contact" class="button">Contact Us!</a></div>
            </div>
        </div>
    );
}
export default Home;