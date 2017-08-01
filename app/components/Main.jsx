var React = require('react');
var Nav = require('Nav');

var Main = ({children}) => {
   return(
      <div>
         <div>
            <div>
               <Nav />
               <p>Main.jsx Rendered</p>
               { children }
            </div>
         </div>
      </div>
   );
}

module.exports = Main;
