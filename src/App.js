import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import { ExpGreet } from './components/ExportGreet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import Distructor from './components/Distructor'
import Counter2 from './components/Counter2';
import Parent from './components/Parent';
import FunctionClick from './components/FunctionClick';
import EventClick from './components/EventClick';
import EventBind from './components/EventBind';
import EventBind2 from './components/EventBind2';
import ParentComponent from './components/ParentComponent';
import ParentComp2 from './components/ParentComp2';
function App() {
  return (
    <div className="App">
      <ParentComp2/>
      <ParentComponent/>
      <EventBind2/>
      <EventBind/>
      <EventClick/>
      <FunctionClick/>
      <Parent/>
      <Counter2/>
      <Greet name="Ruhul Amin " email="ruhul@gmail.com">
        <p>This is a children props !! ok@ you have to use in a children component the follwing jsx that is  props.children  </p>
      </Greet>
      <Greet name = "Sakib Hasan" email="sakib@gmail.com">
        <button>Button </button>
      </Greet>
      <Greet name="Sajid Hasan" email="sajid@gmail.com" >
       
      </Greet>
      <ExpGreet/>
      <Welcome college="NotreDame College, Dhaka"/>
      <Welcome college="Dhaka College"/>
      <Welcome college="Motijhil Ideal College , Dhaka"/>
      <Hello/>
      <Message  />
      <Counter/>
      <Distructor name= "Ruhul AMin " email="ruhulamin@gmail.com"/>
    </div>
  );
}






export default App;
