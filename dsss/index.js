function formSubmit(e) {
    e.preventDefault();
    //const xVaules = document.getElementById('xValues').value;
    const yValues = document.getElementById('yValues').value;

    //console.log({xVaules});
    console.log({yValues});

    //const x = xVaules.split(',').map((e) => parseInt(e));
    const y = yValues.split(',').map((e) => parseInt(e));
    let j=[];
    for (let i = 0;i<y.length+1;i++){
        j.push(i);   

    }
    console.log({j});

   // console.log({x});
    console.log({y});

    
      var N=y.length;
		var x_inp=y;
		var Tb = 0.000001;
		var Ac = 5;
		var mc=2;
		var nb= 99;
		var fc= mc*(1/Tb);
		var fi1=0;
		var fi2=180;
		
		
		console.log({x_inp});
		
		let t2= [];
		for ( let i=Tb/nb;i<=Tb;i=i+(Tb/nb)){
			t2.push(i);
		  
		
		
		
		};
		
		console.log("value of t2");
		console.log(t2);
		
		
		
		
		let t3=[];
		for ( let i=Tb/nb;i<=Tb*N;i=i+(Tb/nb)){
			t3.push(i);
		  
		
		
		
		};
		
		console.log("value of t3");
		console.log(t3);
		
		
		
		
		let x_mod=[];
		for (let k=0; k<N;k++){
		  
		  if(x_inp[k]==1){
			for (let m=0 ; m<t2.length;m++){
			  let temp= Math.cos(2*(Math.PI)*fc*t2[m]);
			
			  x_mod.push(temp*Ac);
		
			}
		  }
		  else{
			for (let m=0 ; m<t2.length;m++){
			  let temp= Math.cos(2*(Math.PI)*fc*t2[m]+Math.PI);
			
			  x_mod.push(temp*Ac);
		
			}
		  }
		
		  }
		
		console.log("value of mod");
		console.log(x_mod);
		let x_carrier=[];
		for (let w=0; w<N;w++){
		  
		  if(x_inp[w]==1||x_inp[w]==0){
			for (let m=0 ; m<t2.length;m++){
			  let temp= Math.sin(2*(Math.PI)*fc*t2[m]);
			
			  x_carrier.push(temp);
		
			}
		  }
		}



    var trace0 = {
      x:j ,
      y: y,
      mode: 'lines+markers',
      name: 'hv',
      line: {shape: 'hv'},
      type: 'scatter',
      showgrid:false

	 
  
  
    };
    var layout0 = {
		  grid: {rows: 3, columns: 1, pattern: 'line'},
      xaxis: { title: "'time(sec)   10(-6)'"},
  yaxis: { title: "amplitude(volt)"},
      title: "transmitting information as digital signal"
		};
    var data0 = [trace0];
    Plotly.newPlot('myDiv0', data0, layout0);




	var trace3 = {
		x: t3,
		y: x_carrier,
		
		name: 'hv',
		
		type: 'scatter',
	    showgrid:false

	  };
  
	  
	  
	  
	  var data3 = [trace3];
	  
	  var layout3 = {
		grid: {rows: 3, columns: 1, pattern: 'line'},
	    xaxis: { title: "'time(sec)'"},
        yaxis: { title: "amplitude(volt)"},
	    title: "Carrier Wave"
	  };
	  
	  Plotly.newPlot('myDiv3', data3, layout3);




		
		var trace1 = {
		  x: t3,
		  y: x_mod,
		  
          name: 'hv',
          
		  type: 'scatter',
      showgrid:false

		};
    
		
		
		
		var data = [trace1];
		
		var layout = {
		  grid: {rows: 3, columns: 1, pattern: 'line'},
      xaxis: { title: "'time(sec)'"},
  yaxis: { title: "amplitude(volt)"},
      title: "waveform for binary PSK modulation coresponding binary information"
		};
		
		Plotly.newPlot('myDiv', data, layout);



    var trace2 = {
      x:j ,
      y: y,
      mode: 'lines+markers',
      name: 'hv',
      line: {shape: 'hv'},
      type: 'scatter'
    };
    var layout2 = {
		  grid: {rows: 3, columns: 1, pattern: 'line'},
      xaxis: { title: "'time(sec)'"},
  yaxis: { title: "amplitude(volt)"},
      title: "recived information as digital signal after binary PSK demodulation"
		};
    var data2 = [trace2];
    Plotly.newPlot('myDiv2', data2, layout2);
		
}

const form = document.getElementById('form');

form.addEventListener('submit',formSubmit);




  




