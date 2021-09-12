
import JoinUs from "./components/JoinUs";

function App() {
  return (
   
    <div className="struct">
       
      <div>
      <JoinUs btn={"JOIN US"}/>
      <JoinUs btn={"LOGIN"}/>
      <JoinUs btn={"SEARCH"}/>
      <JoinUs btn={"HOME"}/>
      </div>
     
      <div>
      <JoinUs btn={"SETTINGS"}/>
      <JoinUs btn={"CONTACT US"}/>
      <JoinUs btn={"HELP"}/>
      <JoinUs btn={"DOWNLOAD"}/>
      </div>

      </div>
  
   
     
  );
}

export default App;
