var fs = require("fs");

fs.readFile("data.json" , (err , AllDataFromJson) =>
{
    if(err === null){
        const data_list = JSON.parse(AllDataFromJson);
        for (let data of data_list){
            if(data["id_api"] == "BS2_IncomeTotal" || data["id_api"]=="BS2_ExpensesTotal" ){
                fs.appendFile("output.txt" , data["txt"] +':'+ data["value"]+ "\n" , function(err){if(err)console.log(err)});
                console.log(data["txt"] +':'+ data["value"]);
            }
        }
       
    }
    else
    {
        return console.error(err);
    }
});

