import './App.css';
import Contact from './pages/Contact';
import Shirt from './pages/Title';
function App() {
  return (
    <div>
      <section id="header">
    <nav>
        <a href=""><img src="https://cdn.dribbble.com/users/883011/screenshots/10080344/media/67309535ffcf9ac33e254446fd43674d.png"/> </a>
            <div class="nav-links"><br/><br/>
                <ul>
                    <li><a href="/" >Home</a></li>
                    <li><a href="#header1">Sale</a></li>
                    <li><a href="#header3">Purchase</a></li>
                    <li><a href="#header4">Contact</a></li>
                </ul>
           </div>
    </nav>
<div class ="title">
    <br/><br/><h1>FASHION HUB </h1><br/>
    <p>
        India's largest MEN'S WEAR
    </p><br/><br/><br/><br/>
    <a href="https:/www.google.com" target="_blank" >VISIT US TO KNOW MORE</a>
</div>
    
</section>
{/* About Section */}
<section id="header1">
    <nav>
        <div class="headertext">
               <h2>
               Recent sale and offers(DISCOUNT)
                </h2><br/>
                <div class="img2">
                    <div>
                    <img src="https://tse4.mm.bing.net/th?id=OIP.yKBdoFELUBfnGfeWe5TTNQHaJo&pid=Api&P=0" alt="" />
                    <h1>PETER ENGLAND</h1>
                    </div>
                    <div>
                    <img src="https://tse4.mm.bing.net/th?id=OIP.4R__tB1o-ZnH3FY7ua4fTAHaHa&pid=Api&P=0" alt="" />
                    <h1>CLASSIC POLO</h1><br/><br/>
                    </div>
                    <div>
                        <img className="dress1" src="https://tse4.mm.bing.net/th?id=OIP.bMtCdBgXDQXXt5GH7PcTjwHaHa&pid=Api&P=0" alt=""/>"
                        <h1>BALMAIN PARIS</h1>
                    </div>
                    <div>
                        <img className="dress" src="https://tse4.mm.bing.net/th?id=OIP.70NSq2KPSMv3WoCSiiVuBAHaHa&pid=Api&P=0" alt=""/>
                        <h1>NETPLAY</h1>
                 </div>
                
                </div>
                <h6>Various brands are available with unexpected offers 💯<br/>      
                </h6><br/>
          <h6> <i>NOTE: Online payment also available</i><br/><br/></h6> 
            <div>
                <a class="slots" href="https:/www.google.com" target="_blank">SHOP NOW</a>
            </div> 
        </div>
    </nav>
</section>
   <Shirt/>    
    <Contact/>
    </div>
  );
}

export default App;
