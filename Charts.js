AmCharts.makeChart("chartdiv",
				{
					"type": "pie",
					"angle": 20.7,
					"balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
					"depth3D": 15,
					"labelTickAlpha": 0,
					"titleField": "category",
					"valueField": "column-1",
					"fontSize": 18,
					"theme": "default",
					"allLabels": [],
					"balloon": {},
					"legend": {
						"enabled": true,
						"align": "center",
						"markerType": "circle"
					},
					"titles": [
						{
							"id": "Title-1",
							"text": "1. Do you know how to create a website?"
						}
					],
					"dataProvider": [
						{
							"category": "Yes",
							"column-1": "1"
						},
						{
							"category": "No",
							"column-1": "9"
						}
					]
				}
            );
            AmCharts.makeChart("chartdiv2",
            {
                "type": "pie",
                "angle": 20.7,
                "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
                "depth3D": 15,
                "innerRadius": "40%",
                "baseColor": "#5B0082",
                "groupedColor": "#FFFFFF",
                "titleField": "category",
                "valueField": "column-1",
                "fontSize": 18,
                "allLabels": [],
                "balloon": {
                    "fillAlpha": 0,
                    "shadowAlpha": 0
                },
                "legend": {
                    "enabled": true,
                    "align": "center",
                    "markerType": "circle"
                },
                "titles": [
                    {
                        "id": "Title-1",
                        "text": "2. Do you know any of those companies specialized in web development?"
                    }
                ],
                "dataProvider": [
                    {
                        "category": "https://www.startsmarter.co.uk/",
                        "column-1": "10"
                    },
                    {
                        "category": "https://dsgnone.com/",
                        "column-1": "0"
                    },
                    {
                        "category": "https://focusondigital.co.uk/",
                        "column-1": "10"
                    },
                    {
                        "category": "something else",
                        "column-1": "30"
                    },
                    {
                        "category": "None of them",
                        "column-1": "50"
                    }
                ]
            }
        );
        AmCharts.makeChart("chartdiv3",
				{
					"type": "pie",
					"angle": 20.7,
					"balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
					"depth3D": 15,
					"baseColor": "#009AFF",
					"titleField": "category",
					"valueField": "column-1",
					"fontSize": 18,
					"allLabels": [],
					"balloon": {},
					"legend": {
						"enabled": true,
						"align": "center",
						"markerType": "circle"
					},
					"titles": [
						{
							"id": "Title-1",
							"text": "3. Would you like to have your own website, or blog?"
						}
					],
					"dataProvider": [
						{
							"category": "Yes",
							"column-1": "3"
						},
						{
							"category": "No",
							"column-1": "7"
						}
					]
				}
            );
            AmCharts.makeChart("chartdiv4",
            {
                "type": "pie",
                "angle": 20.7,
                "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
                "depth3D": 15,
                "innerRadius": "40%",
                "baseColor": "#FF8000",
                "titleField": "category",
                "valueField": "column-1",
                "fontSize": 18,
                "allLabels": [],
                "balloon": {},
                "legend": {
                    "enabled": true,
                    "align": "center",
                    "markerType": "circle"
                },
                "titles": [
                    {
                        "id": "Title-1",
                        "text": "4. Do you know any of those website platforms for web development?"
                    }
                ],
                "dataProvider": [
                    {
                        "category": "WordPress",
                        "column-1": "2"
                    },
                    {
                        "category": "wix.com",
                        "column-1": "3"
                    },
                    {
                        "category": "duda.co",
                        "column-1": "1"
                    },
                    {
                        "category": "something else",
                        "column-1": "2"
                    },
                    {
                        "category": "none of them ",
                        "column-1": "2"
                    }
                ]
            }
        );
        AmCharts.makeChart("chartdiv5",
        {
            "type": "pie",
            "angle": 20.7,
            "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
            "depth3D": 15,
            "innerRadius": "40%",
            "baseColor": "#008000",
            "titleField": "category",
            "valueField": "column-1",
            "fontSize": 18,
            "allLabels": [],
            "balloon": {},
            "legend": {
                "enabled": true,
                "align": "center",
                "markerType": "circle"
            },
            "titles": [
                {
                    "id": "Title-1",
                    "text": "5. How much money does it cost to create 5 pages website? On the average?"
                }
            ],
            "dataProvider": [
                {
                    "category": "300£",
                    "column-1": "1"
                },
                {
                    "category": "500£",
                    "column-1": "8"
                },
                {
                    "category": "700£",
                    "column-1": "1"
                }
            ]
        }
    );
    AmCharts.makeChart("chartdiv6",
				{
					"type": "pie",
					"angle": 20.7,
					"balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
					"depth3D": 15,
					"baseColor": "#AA05BA",
					"outlineThickness": 0,
					"titleField": "category",
					"valueField": "column-1",
					"fontSize": 18,
					"allLabels": [],
					"balloon": {},
					"legend": {
						"enabled": true,
						"align": "center",
						"markerType": "circle"
					},
					"titles": [
						{
							"id": "Title-1",
							"text": "6. What you prefer more, to see on the website?"
						}
					],
					"dataProvider": [
						{
							"category": "Style, design, animation",
							"column-1": "6"
						},
						{
							"category": "Content, explanation, publications",
							"column-1": "4"
						}
					]
				}
            );
            AmCharts.makeChart("chartdiv7",
            {
                "type": "pie",
                "angle": 20.7,
                "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
                "depth3D": 15,
                "baseColor": "#29398F",
                "outlineThickness": 0,
                "titleField": "category",
                "valueField": "column-1",
                "fontSize": 18,
                "allLabels": [],
                "balloon": {},
                "legend": {
                    "enabled": true,
                    "align": "center",
                    "markerType": "circle"
                },
                "titles": [
                    {
                        "id": "Title-1",
                        "text": "7. Do you think websites are now a company's face?"
                    }
                ],
                "dataProvider": [
                    {
                        "category": "Yes",
                        "column-1": "9"
                    },
                    {
                        "category": "No",
                        "column-1": "1"
                    }
                ]
            }
        );