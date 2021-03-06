import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Home from './pages/home';
import BlogArticle from './pages/BlogArticle/Form';
import BlogHome from './pages/BlogHome';
import About from './pages/about';




function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Route exact path="/" component={Home} />
        <Route exact path="/blogpost" component={BlogArticle} />
        <Route exact path="/bloghome" component={BlogHome} />
        <Route exact path="/about" component={About} />
         {/* <Route exact path="/joblistings" component={JobListings} />
        <Route exact path="/login" component={Login} />  */}

         }

       <div>
       <Footer />
       </div>
       </div>
    </Router>
  
 
    
  );
}

export default App;
