import './Dashboard.css'
function Dashboard(){
    return(
         <div className="dashboard">
        <header>
            <h1>Where in the world</h1>

            <div className="right">
                <button type="button">
                    <i className="ri-moon-line"></i> DarkMode
                 </button>
            </div>
        </header>
      
        <main className="main-content">
            <div className="subarea">
                <div className="search-container">
                    <i className="ri-search-line"></i>
                        <input 
                            type="text" 
                            placeholder="Search for a country..."
                        />
                </div>
                <select>
                    <option value="" disabled>Filter By Region</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                </select>
            </div>
               
        </main>
    </div>
    )
   
}
export default Dashboard;