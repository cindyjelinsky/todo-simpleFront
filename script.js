const url = "http://localhost:5000/task/user/1"

function hideLoader(){
    document.getElementById("loading").style.display = "none";
}

function show(tasks){

    let tab = ` <thead>
                    <th scoope="col">#</th>
                    <th scoope="col">Description</th>
                    <th scoope="col">Username</th>
                    <th scoope="col">User Id</th>
                <thead/>`;
    
        for(let task of tasks){
            tab += ` <tr>
                        <td scoope="row">${task.id}</td>
                        <td>${task.description}</td>
                        <td >${task.user.username}</td>
                        <td >${task.user.id}</td>
                    </tr>`;
        }

    document.getElementById("tasks").innerHTML = tab;
          
}

async function getApi(url){
    const response  = await fetch(url,{method:"GET"});

    let data = await response.json();
    console.log(data);
    if(response)
        hideLoader();
    show(data);
}

getApi(url);