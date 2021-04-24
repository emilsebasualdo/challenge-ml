import myLogo from './assets/Logo_ML.png';
import './App.css';

function App() {
    return ( 
    < div className = "App" >
        <title>Mercado Libre Argentina</title>
        <body>
            <div class="topnav">
            <div class="row">
                <div class="col-1">
                    <img class="LogoMl" alt="Logo" src={myLogo}/>
                </div>
                <div class="col-11 text-center">
                    <input class="search-box" type="text" placeholder="Nunca dejes de buscar"/>
                    <button class="searchButton" onClick="showSearchResults()"></button>
                </div>
            </div>
                
                
                
            </div>
        </body>
    </div>
    );
}

export default App;