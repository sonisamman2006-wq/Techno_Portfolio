import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Services from "./Component/Services/Services";
import Portfolio from "./Component/Portfolio/Portfolio";
import About from "./Component/About/About";
import Reviews from "./Component/Reviews/Reviews";
import Blog from "./Component/Blog/Blog";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Note from "./Component/Note/Note";

function App(){
  // const [value, setValue] = useState("");

  // const handleChange = () => {
  //   console.log(inpuRef.current.value);
  //   setValue(inputRef.current.value);
  // };
  // const username = "Samman";
  // const age = 19;
  // const array = [4,5,6,7,8,9];

  return (
    // <Note />
    // <>
    //   <input type="text" ref={inpuRef} onChange={handleChange}/>
    //   <h1>Accessing Data : {value}</h1>
    // </>
    // <UserContext.Provider value={{ username, age}}>
    //   <Parent/>
    //   <GrandChild/>
    // </UserContext.Provider>
    // <div>
    // <h1>State Value : {value}</h1>
    // <button onClick={() => setValue(value + 1)}>Increment</button>
    // <button onClick={() => setValue(value - 1)}>Decrement</button>
    // <button onClick={() => setValue(10)}>Reset</button>
    // </div>
// const App = () => {
//   return (
//     <div>
//     <h1>
//       Sharing Data from App Component to About component
//     </h1>
//     <About>
//       {name}
//       {age} {"This is child jsx"}
//     </About>
//     </div>
//   );2 
// };

    <>
     <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Reviews />
      <Blog />
      <Contact />
      <Footer />
      <Note />
    </>

// const App = () => {
//   let name = "Samman";
//   let age = 50;
//   let array = [5, 2, 6, 4, 7, 9, 10];
//   return (
//     <div>
//     <About fname={name} studentAge={age} numbers={array}/>
//       <Footer/>
//     </div>
  // const name = "Samman";
  // let students = {
  //   id: 101,
  //   name: "Samman",
  //   roll: 2001,
  //   age: 20,
  //   courses: "B.tech",
  //   place: "Udaipur",
  // };
  // let array = [5,2,6,4,7,9,10];

  // const SumTwoDigits = (a,b) => {
  //   let c;
  //   return a + b;  
  // };
  // return( 
  //   <div>
  //     <h1>Hello {name}</h1>
  //     <br/>
  //     {students.course}
  //     <br/>
  //     {array[2] - array[0]}
  //     <br/>
  //     {SumTwoDigits(10,20)}
  //   </div>
  );
}    
export default App;