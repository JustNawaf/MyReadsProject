import logo from "./logo.svg";
import "./css/tailwind.css";
import Init from "./components/Init";
import Book from "./components/Book";

function App() {
  return (
    <div className="App">
      {/* <Init /> */}

      <div className="w-full lg:px-24 lg:py-12">

        {/* Currently Reading */}
        <div className="w-full">
          <h1 className="text-3xl">Currently Reading</h1>
          <div className="my-6 border-none rounded-md flex flex-wrap justify-center w-full bg-red-400">
            {
              [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(() => (<Book />))
            }
          </div>
        </div>

        {/* Want to read */}
        <div className="w-full">
          <h1 className="text-3xl">Want To Read </h1>
          <div className="my-6 border-none rounded-md flex flex-wrap justify-center w-full bg-red-400">
            {
              [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(() => (<Book />))
            }
          </div>
        </div>

        {/* Read */}
        <div className="w-full">
          <h1 className="text-3xl">Read</h1>
          <div className="my-6 border-none rounded-md flex flex-wrap justify-center w-full bg-red-400">
            {
              [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(() => (<Book />))
            }
          </div>
        </div>
        
      </div>


    </div>
  );
}

export default App;
