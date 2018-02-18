

var citiesByCountry = [
    {
        text: '富通',
        children: [
            { id: 54, text: '守護168' },
            { id: 77, text: '一生平安' },
            { id: 78, text: '一生平安' }
        ]
    },
    {
        text: '富衛',
        children: [
            { id: 2, text: '危疾全守衛 (優越版)' },
            { id: 9, text: 'Brussels' }
        ]
    },
    {
        text: '中國人壽',
        children: [
            { id: 48, text: '危疾全裕備保險計劃 (強護版)' }
        ]
    },
    {
        text: '大都會',
        children: [
            { id: 58, text: '「健康領航」危疾保障計劃 +「十倍．愛」保障' },
            { id: 158, text: '「健康新思維」危疾保障計劃' }
        ]
    },
    {
        text: '安盛',
        children: [
            { id: 42, text: '康采 II 嚴重疾病保障 (早期+多重附加契約)' }
        ]
    },
    {
        text: '宏利',
        children: [
            { id: 13, text: '活耀人生危疾保' }
        ]
    },
    {
        text: '友邦',
        children: [
            { id: 6, text: '多重智倍保' },
            { id: 7, text: '加裕倍安保（加強版）' },
            { id: 26, text: '多重安心保2' },
            { id: 30, text: 'London' },
            { id: 34, text: 'Manchester' },
            { id: 47, text: 'Sheffield' }
        ]
    },
    {
        text: '安達人壽',
        children: [
            { id: 25, text: '危疾370' }
        ]
    },
    {
        text: 'France',
        children: [
            { id: 35, text: 'Marseille' },
            { id: 40, text: 'Paris' }
        ]
    },
    {
        text: 'Germany',
        children: [
            { id: 5, text: 'Berlin' },
            { id: 8, text: 'Bremen' },
            { id: 12, text: 'Cologne' },
            { id: 14, text: 'Dortmund' },
            { id: 15, text: 'Dresden' },
            { id: 17, text: 'Düsseldorf' },
            { id: 18, text: 'Essen' },
            { id: 19, text: 'Frankfurt' },
            { id: 23, text: 'Hamburg' },
            { id: 24, text: 'Hannover' },
            { id: 27, text: 'Leipzig' },
            { id: 37, text: 'Munich' },
            { id: 50, text: 'Stuttgart' }
        ]
    },
    {
        text: 'Greece',
        children: [
            { id: 3, text: 'Athens' }
        ]
    },
    {
        text: 'Hungary',
        children: [
            { id: 11, text: 'Budapest' }
        ]
    },
    {
        text: 'Ireland',
        children: [
            { id: 16, text: 'Dublin' }
        ]
    },
    {
        text: 'Italy',
        children: [
            { id: 20, text: 'Genoa' },
            { id: 36, text: 'Milan' },
            { id: 38, text: 'Naples' },
            { id: 39, text: 'Palermo' },
            { id: 44, text: 'Rome' },
            { id: 52, text: 'Turin' }
        ]
    },
    {
        text: 'Latvia',
        children: [
            { id: 43, text: 'Riga' }
        ]
    },
    {
        text: 'Lithuania',
        children: [
            { id: 55, text: 'Vilnius' }
        ]
    },
    {
        text: 'Netherlands',
        children: [
            { id: 1, text: 'Amsterdam' },
            { id: 45, text: 'Rotterdam' },
            { id: 51, text: 'The Hague' }
        ]
    },
    {
        text: 'Poland',
        children: [
            { id: 29, text: 'Łódź' },
            { id: 31, text: 'Kraków' },
            { id: 41, text: 'Poznań' },
            { id: 56, text: 'Warsaw' },
            { id: 57, text: 'Wrocław' }
        ]
    },
    {
        text: 'Portugal',
        children: [
            { id: 28, text: 'Lisbon' }
        ]
    },
    {
        text: 'Romania',
        children: [
            { id: 10, text: 'Bucharest' }
        ]
    },
    {
        text: 'Scotland',
        children: [
            { id: 21, text: 'Glasgow' }
        ]
    },
    {
        text: 'Spain',
        children: [
            { id: 4, text: 'Barcelona' },
            { id: 32, text: 'Madrid' },
            { id: 33, text: 'Málaga' },
            { id: 46, text: 'Seville' },
            { id: 53, text: 'Valencia' },
            { id: 59, text: 'Zaragoza' }
        ]
    },
    {
        text: 'Sweden',
        children: [
            { id: 22, text: 'Gothenburg' },
            { id: 49, text: 'Stockholm' }
        ]
    }
];



// 选择器
$('#example-3').selectivity({
    allowClear: true,
    items: citiesByCountry,
    placeholder: '搜公司或产品'
});

$('#example-4').selectivity({
    allowClear: true,
    items: citiesByCountry,
    placeholder: '搜公司或产品'
});

$("#test11").click(function(){
    var one=$("#example-3 div div span").attr("data-item-id");
    var two=$("#example-4 div div span").attr("data-item-id");
    window.location.replace("Compare.html?productone="+one+"&producttwo="+two);
});
