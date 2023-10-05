import './App.css';

function App() {
  return (
    <div className="background">
      <h1 className="centered-heading">ENABLERS</h1>

      <div className="container">


        <div className ="box">
          <div className="box-content">
            <div className="icon">
              <img src="search123.png" alt="Icon" />
            </div>
            <div className="text">
              <h1>Overview</h1>
              <p className="p1">Cloud Migration encompasses the movement of a clients digital<br></br>assets,services,databases..</p>
            </div>
            <div className="button">
              <a href="#">More</a>
            </div>
          </div>
        </div>


        <div className ="box">
          <div className="box-content">
            <div className="icon">
              <img src="teamwork123.png" alt="Icon" className='img-second' />
            </div>
            <div className="text">
              <h1>Know Your <br></br>Leadership Team</h1>
              <p className="p2">The "think-tank" of the MIMO practice within Software Engineering that drives the overall growth of this...</p>
            </div>
            <div className="button">
              <a href="#">More</a>
            </div>
          </div>
        </div>


        <div className ="box">
          <div className="box-content">
            <div className="icon">
              <img src="transfer123.png" alt="Icon" />
            </div>
            <div className="text">
              <h1>Migration Playbook</h1>
              <p className="p3">The playbook provides a step by step view of the activities required to migrate an application...</p>
            </div>
            <div className="button">
              <a href="#">More</a>
            </div>
          </div>
        </div>


      </div>

    </div>
  );
}

export default App;
