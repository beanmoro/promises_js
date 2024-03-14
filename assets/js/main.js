
const apiUrl = 'https://jsonplaceholder.typicode.com/photos';


const getApiData = async (api_url) => {
    try {
        const response = await fetch(api_url);

        const data = await response.json();


        data.slice(0,20).forEach( d =>{

            console.log(`${d.id}.- ${d.title}`);
        });


    } catch (error) {
        console.log(`ERROR: ${error}`);
    }
}


const waitTime = (seconds) =>{

    return new Promise( (resolve, reject) => {
        setTimeout(()=>{

            resolve('Información Enviada');


        }, seconds*1000);

    });
}


const getMessage = async ()=>{

    try {
        const message = await waitTime(3);
        console.log(message);
    } catch (error) {
        console.log(`ERROR: ${error}`);
    }
    
}


getApiData(apiUrl);
getMessage();