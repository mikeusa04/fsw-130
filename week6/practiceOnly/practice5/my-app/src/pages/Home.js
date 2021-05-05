import React from "react"

function Home() {
    return (
        <div className='container'>
            <div className="header">
                 <h1>Movies & TV Shows</h1>
                 <h3>Add Your Favorite Movies and Tv Shows</h3>
            </div>

                <div className="list">
                     <ul>
                        <li>Game Of Thrones</li>
                         <li>The God Fther</li>
                         <li>Sex In The City</li>
                         <li>Star Wars</li>
                         <li>Lord Of The Ring</li>
                         <li>The Last Kingdom</li>
                    </ul>
                 </div>
                    <div className="logo"></div>
        </div>
    )
}

export default Home