var flag1 = true;

var option2 = {
    title: {
        left: 'center',
        text: 'Senzor 2'
    },
    tooltip: {
        trigger:'axis'
    },
    legend: {},
    xAxis: {},
    yAxis: {
        boundaryGap: [0, '30%']
    },
    series: {},

    dataZoom: [{
        type: 'inside',
        start: 0,
        end: 10
    }, {
    //     start: 0,
    //     end: 10,
         handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
         handleSize: '50%',
         handleStyle: {
             color: '#fff',
             shadowBlur: 3,
             shadowColor: 'rgba(0, 0, 0, 0.6)',
             shadowOffsetX: 2,
             shadowOffsetY: 2
         }
    }]
};
var myChart2 = echarts.init(document.getElementById('main2'));

fetch("./parsedData1.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        console.log(data);
        option2.xAxis = {boundaryGap: false, data:Object.keys(data)};                                   // keys = Object.keys(data);
        option2.series ={
            type: 'line',
            smooth: true,
            showSymbol: true,
            itemStyle: {
                color: 'rgb(249,247,245)'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(133, 211, 230)'
                }, {
                    offset: 1,
                    color: 'rgb(172, 83, 227)'
                }])
            },
            data: Object.values(data)
        };
        
        console.log(option2.xAxis);
        console.log(option2.series);
        myChart2.setOption(option2);
    })

setInterval(function () {
    if(flag1){
        flag1 = false;
        option2.dataZoom = [{
            // type: 'inside',
            // start: 0,
            // end: 10
        }, {
            start: 0,
            end: 10//,
            // handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            // handleSize: '50%',
            // handleStyle: {
            //     color: '#fff',
            //     shadowBlur: 3,
            //     shadowColor: 'rgba(0, 0, 0, 0.6)',
            //     shadowOffsetX: 2,
            //     shadowOffsetY: 2
            //}
        }];
    }else{
        option2.dataZoom = [{}];
    }
    
    fetch("./parsedData1.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        console.log(data);
        option2.xAxis = {boundaryGap: false, data:Object.keys(data)};                                   // keys = Object.keys(data);
        option2.series ={
            type: 'line',
            smooth: true,
            showSymbol: true,
            itemStyle: {
                color: 'rgb(249,247,245)'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(133, 211, 230)'
                }, {
                    offset: 1,
                    color: 'rgb(172, 83, 227)'
                }])
            },
            data: Object.values(data)
        };

        console.log(option2.xAxis);
        console.log(option2.series);
        myChart2.setOption(option2);
    })
}, 10000);
