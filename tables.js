fetch("./parsedData.json")
    .then(resp => resp.json())
    .then(data => {
        let tableData = []
        for (key in data) {
            tableData = [...tableData, {time: key, value: data[key]}];
        }
        const table1 = new Tabulator("#table1", {
            data: tableData,
            height:"300px",
            layout:"fitColumns",
            columns:[ //Define Table Columns
                {title:"Time", field:"time"},
                {title:"Value", field:"value", formatter: "progress", formatterParams: { legend: true }},
            ],
    
        });

    });

fetch("./parsedData1.json")
.then(resp => resp.json())
.then(data => {
    let tableData = []
    
    for (key in data) {
        tableData = [...tableData, {time: key, value: data[key]}];
    }

    const table2 = new Tabulator("#table2", {
        data: tableData,
        height:"300px",
        layout:"fitColumns",
        columns: [ //Define Table Columns
            {title:"Time", field:"time"},
            {title:"Value", field:"value",  formatter: "progress", formatterParams: { legend: true }},
        ],
        });
    });

fetch("./parsedData2.json")
.then(resp => resp.json())
.then(data => {
    let tableData = []
    for (key in data) {
        tableData = [...tableData, {time: key, value: data[key]}];
    }
    const table3 = new Tabulator("#table3", {
        data: tableData,
        height:"300px",
        layout:"fitColumns",
        columns:[ //Define Table Columns
            {title:"Time", field:"time"},
            {title:"Value", field:"value",  formatter: "progress", formatterParams: { legend: true }},
        ],
    
    });

});