	  console.log("entered the script");
    window.addEventListener("load", getData(genFunction));

    function getData(callbackIN) {
      var ref = firebase.database().ref("coordinates");
      ref.once('value').then(function (snapshot) {
        callbackIN(snapshot.val())
	
	  console.log("entered the snapshot");	      
      });
    }

    function genFunction(coordinates) {
      var cdata = [];
	    console.log(JSON.stringify(coordinates));

      var len = Object.keys(coordinates).length;
	    console.log("len o data "+len);
     
	    
	for(var i in coordinates)
	{	
		
		
			cdata.push({
         		 label: coordinates[i]['timestam'],
        	 	 value: coordinates[i]['x_cood']
       			 });	
		
	}


    var firebaseChart = new FusionCharts({
        type: 'area2d',
        renderAt: 'chart-container',
        width: '2500',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "X Coordinaates",
                "subCaption": "X Table",
                "subCaptionFontBold": "0",
                "captionFontSize": "20",
                "subCaptionFontSize": "17",
                "captionPadding": "15",
                "captionFontColor": "#8C8C8C",
                "baseFontSize": "14",
                "baseFont": "Barlow",
                "canvasBgAlpha": "0",
                "bgColor": "#FFFFFF",
                "bgAlpha": "100",
                "showBorder": "0",
                "showCanvasBorder": "0",
                "showPlotBorder": "0",
                "showAlternateHGridColor": "0",
                "usePlotGradientColor": "0",
                "paletteColors": "#991f00",
                "showValues": "0",
                "divLineAlpha": "5",
                "showAxisLines": "1",
                "drawAnchors": "0",
                "xAxisLineColor": "#8C8C8C",
                "xAxisLineThickness": "0.7",
                "xAxisLineAlpha": "50",
                "yAxisLineColor": "#8C8C8C",
                "yAxisLineThickness": "0.7",
                "yAxisLineAlpha": "50",
                "baseFontColor": "#8C8C8C",
                "toolTipBgColor": "#FA8D67",
                "toolTipPadding": "10",
                "toolTipColor": "#FFFFFF",
                "toolTipBorderRadius": "3",
                "toolTipBorderAlpha": "0",
                "drawCrossLine": "1",
                "crossLineColor": "#8C8C8C",
                "crossLineAlpha": "60",
                "crossLineThickness": "0.7",
                "alignCaptionWithCanvas": "1"
            },
            "data": cdata
        }
    });

    firebaseChart.render();

	
	}
	
	
	
	window.addEventListener("load", getData1(genFunction1));

    function getData1(callbackIN) {
      var ref = firebase.database().ref("coordinates");
      ref.once('value').then(function (snapshot) {
        callbackIN(snapshot.val())
      });
    }

    function genFunction1(coordinates) {
      var cdata = [];
      var len = coordinates.length;
      for(var i in coordinates)
	{	
		
		
			cdata.push({
         		 label: coordinates[i]['timestam'],
        	 	 value: coordinates[i]['y_cood']
       			 });	
		
	}


    var firebaseChart1 = new FusionCharts({
        type: 'area2d',
        renderAt: 'chart-container1',
        width: '2500',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Y Coordinates",
                "subCaption": "Y Table",
                "subCaptionFontBold": "0",
                "captionFontSize": "20",
                "subCaptionFontSize": "17",
                "captionPadding": "15",
                "captionFontColor": "#8C8C8C",
                "baseFontSize": "14",
                "baseFont": "Barlow",
                "canvasBgAlpha": "0",
                "bgColor": "#FFFFFF",
                "bgAlpha": "100",
                "showBorder": "0",
                "showCanvasBorder": "0",
                "showPlotBorder": "0",
                "showAlternateHGridColor": "0",
                "usePlotGradientColor": "0",
                "paletteColors": "#cccc00",
                "showValues": "0",
                "divLineAlpha": "5",
                "showAxisLines": "1",
                "drawAnchors": "0",
                "xAxisLineColor": "#8C8C8C",
                "xAxisLineThickness": "0.7",
                "xAxisLineAlpha": "50",
                "yAxisLineColor": "#8C8C8C",
                "yAxisLineThickness": "0.7",
                "yAxisLineAlpha": "50",
                "baseFontColor": "#8C8C8C",
                "toolTipBgColor": "#FA8D67",
                "toolTipPadding": "10",
                "toolTipColor": "#FFFFFF",
                "toolTipBorderRadius": "3",
                "toolTipBorderAlpha": "0",
                "drawCrossLine": "1",
                "crossLineColor": "#8C8C8C",
                "crossLineAlpha": "60",
                "crossLineThickness": "0.7",
                "alignCaptionWithCanvas": "1"
            },
            "data": cdata
        }
    });

    firebaseChart1.render();

	
	}



	window.addEventListener("load", getData2(genFunction2));

    function getData2(callbackIN) {
      var ref = firebase.database().ref("coordinates");
      ref.once('value').then(function (snapshot) {
        callbackIN(snapshot.val())
      });
    }

    function genFunction2(coordinates) {
      var cdata = [];
      var len = coordinates.length;
      for(var i in coordinates)
	{	
		
		
			cdata.push({
         		 label: coordinates[i]['timestam'],
        	 	 value: coordinates[i]['z_cood']
       			 });	
		
	}


    var firebaseChart2 = new FusionCharts({
        type: 'area2d',
        renderAt: 'chart-container2',
        width: '2500',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Z Coordinates",
                "subCaption": "Z table",
                "subCaptionFontBold": "0",
                "captionFontSize": "20",
                "subCaptionFontSize": "17",
                "captionPadding": "15",
                "captionFontColor": "#8C8C8C",
                "baseFontSize": "14",
                "baseFont": "Barlow",
                "canvasBgAlpha": "0",
                "bgColor": "#FFFFFF",
                "bgAlpha": "100",
                "showBorder": "0",
                "showCanvasBorder": "0",
                "showPlotBorder": "0",
                "showAlternateHGridColor": "0",
                "usePlotGradientColor": "0",
                "paletteColors": "#00aaff",
                "showValues": "0",
                "divLineAlpha": "5",
                "showAxisLines": "1",
                "drawAnchors": "0",
                "xAxisLineColor": "#8C8C8C",
                "xAxisLineThickness": "0.7",
                "xAxisLineAlpha": "50",
                "yAxisLineColor": "#8C8C8C",
                "yAxisLineThickness": "0.7",
                "yAxisLineAlpha": "50",
                "baseFontColor": "#8C8C8C",
                "toolTipBgColor": "#FA8D67",
                "toolTipPadding": "10",
                "toolTipColor": "#FFFFFF",
                "toolTipBorderRadius": "3",
                "toolTipBorderAlpha": "0",
                "drawCrossLine": "1",
                "crossLineColor": "#8C8C8C",
                "crossLineAlpha": "60",
                "crossLineThickness": "0.7",
                "alignCaptionWithCanvas": "1"
            },
            "data": cdata
        }
    });

    firebaseChart2.render();

	
    }

