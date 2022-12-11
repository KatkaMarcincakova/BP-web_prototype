const dataRadar = {
    labels: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
    ],
    datasets: [{
        label: "Zvládli to",
        data: [22, 22, 9, 10, 21, 25, 28, 27, 29, 29],
        fill: true,
        backgroundColor: "rgba(133, 105, 241, 0.2)",
        borderColor: "rgb(133, 105, 241)",
        pointBackgroundColor: "rgb(133, 105, 241)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(133, 105, 241)",
    }, {
        label: "Nedokončili",
        data: [6, 10, 25, 18, 15, 5, 1, 1, 10, 3],
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
    }, {
        label: "Preskočili",
        data: [12, 8, 4, 12, 4, 8, 8, 12, 1, 8],
        fill: true,
        backgroundColor: "rgba(255, 106, 26, 0.2)",
        borderColor: "rgb(255, 106, 26)",
        pointBackgroundColor: "rgb(255, 106, 26)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 106, 26)",
    }, ],
};

const configRadarChart = {
    type: "radar",
    data: dataRadar,
    options: {},
};

var chartBar = new Chart(
    document.getElementById("chartRadar"),
    configRadarChart
);