google.charts.load("current", {packages: ["corechart"]});
google.charts.setOnLoadCallback(drawLesson);
google.charts.setOnLoadCallback(drawScoreType);

function drawLesson() {
    let res = [['Урок', 'Оценка за урок']];

    for (let i = 0; i < lessonString.length; i++) {
        res.push([lessonString[i], lessonValues[i]]);
    }

    var data = google.visualization.arrayToDataTable(res);

    var options = {
        title: 'Средняя оценка',
        hAxis: {title: 'Урок',  titleTextStyle: {color: '#333'}},
        vAxis: {minValue: 0}
    };

    var chart = new google.visualization.AreaChart(document.getElementById('drawLesson'));

    chart.draw(data, options);
}

function drawScoreType() {
    let res = [['Оценка', 'Количество']];

    for (let i = 0; i < scoreTypesString.length; i++) {
        res.push([scoreTypesString[i], scoreTypeValues[i]]);
    }

    var data = google.visualization.arrayToDataTable(res);

    var options = {
        title: 'Количество оценок',
        hAxis: {title: 'Оценка'},
        vAxis: {title: 'Количество', minValue: 0}
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('drawScoreType'));

    chart.draw(data, options);
}