function getAllSmartphone() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/smartphones",
        success: function (foreseen) {
            console.log(foreseen)
            let content = "";
            for (let i = 0; i < foreseen.length; i++) {
                content += `<tr> 
                                <td>${foreseen[i].id}</td> 
                                <td>${foreseen[i].model}</td> 
                                <td>${foreseen[i].price}</td> 
                                <td>${foreseen[i].producer}</td>
                                <td><button onclick="deleteById(${foreseen[i].id})">Delete</button></td>
                            </tr>`;
            }
            document.getElementById("content").innerHTML=content;
        }
    })
}
getAllSmartphone();

function createNewSmartPhone() {
    event.preventDefault();
    let producer = document.getElementById("producer").value;
    let model = document.getElementById("model").value;
    let price = document.getElementById("price").value;
    let newPhone = {
        producer: producer,
        model: model,
        price: price
    };
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(newPhone),
        type: "POST",
        url: "http://localhost:8080/smartphones/create",
        success:function (foreseen){
            getAllSmartphone();
        }
    })
}
function deleteById(id) {
    $.ajax({
        type: "DELETE",
        url: "http://localhost:8080/smartphones/" + id,
        success: function (){
            getAllSmartphone();
        }
    })
}