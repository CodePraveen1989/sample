import Navbar from "./Navbar";
import List from "./List";


function App() {
    return (
        <>
            <Navbar title="using fragments" />
            <div className="container">

                <List title="Cars"
                    items={['toyota', 'honda', 'audi', 'bmw', 'mistubushi', 'holdan']}
                />


            </div>

        </>

    );
}

export default App;