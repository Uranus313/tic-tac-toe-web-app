



function TopPlayers(){
    let topscores = [{name: "A", score:'12'},{name: "A", score:'11'},{name: "A", score:'10'},{name: "A", score:'10'},{name: "A", score:'10'},{name: "A", score:'10'},{name: "A", score:'10'},{name: "A", score:'10'},{name: "A", score:'10'},{name: "A", score:'10'},]
    return(
        <div style={{display: "flex", alignItems:"center", flexDirection:'column',width: "100%", color: "white"}}>
            <h1>Top Scores</h1>
            <div style={{display: "flex",alignItems: "center",width: '100%', flexDirection:'column'}}>
                {topscores.map((item,index) => <div style={{display: 'flex', width : "100%", justifyContent: "space-around"}} key={index}>
                    <p>{item.name}</p>
                    <p>{item.score}</p>
                </div> )}
            </div>
        </div>
    )
}
export default TopPlayers;