const axios = require('axios');

async function getData(){
    try {
        const blob = await axios.get('http://www.espncricinfo.com/ci/engine/match/1157752.json'); 
        console.log("data successfully fetched");
        // console.log('innings', blob.data.innings[0].runs);
        const i1 = blob.data.innings[0].runs;
        const w1 = blob.data.innings[1].runs;
        const w2 = blob.data.innings[2].runs;
        console.log("Runs scored by India in first inning : "+ i1);
        console.log("Runs scored by West Indies in first inning : "+ w1);
        console.log("India enforced a follow-on");
        console.log("Runs scored by West Indies in second inning : "+ w2);
    } catch (error) {
        console.log("error fetching");
    }   
}
getData();
