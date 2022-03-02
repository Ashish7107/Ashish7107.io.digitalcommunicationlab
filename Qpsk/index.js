function formSubmit(e) {
  e.preventDefault();
  //const xVaules = document.getElementById('xValues').value;
  const yValues = document.getElementById("yValues").value;

  //console.log({xVaules});
  console.log({ yValues });

  //const x = xVaules.split(',').map((e) => parseInt(e));
  const y = yValues.split(",").map((e) => parseInt(e));
  let j = [];
  for (let i = 0; i < y.length + 1; i++) {
    j.push(i);
  }
  console.log({ j });

  // console.log({x});
  console.log({ y });

  data = [0, 1, 0, 1, 1, 1, 0, 0, 1, 1]; //data taken from user

  data_NZR = [];

  for (let i = 0; i < data.length; i++) {
    data_NZR[i] = 2 * data[i] - 1;
  }
  console.log({ data_NZR });

  let s_p_data = [];
  let var1 = 0;
  let var2 = 0;

  // creating two dimensional array
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < data.length; j++) {
      s_p_data[i] = [];
    }
  }

  for (var z = 0; z < 1; z++) {
    for (let k = 0; k < data.length; k++) {
      if (k % 2 == 0) {
        s_p_data[0][var1] = data_NZR[k];
        var1 = var1 + 1;
      } else {
        s_p_data[1][var2] = data_NZR[k];
        var2 = var2 + 1;
      }
    }
  }
  console.log({ s_p_data });

  //some predifined values
  let br = 1000000;
  let f = br;
  T = 1 / br;
  t = [];
  for (let Tvar = T / 99; Tvar <= T; Tvar = Tvar + T / 99) {
    t.push(Tvar);
  }
  console.log({ t });

  //QPSK MODULATION
  let y_mod = [];
  let y_in = [];
  let y_qd = [];

  for (let modVar = 0; modVar < data.length / 2; modVar++) {
    for (let modvar1 = 0; modvar1 < t.length; modvar1++) {
      let temp = Math.cos(2 * Math.PI * f * t[modvar1]);
      y1 = s_p_data[0][modVar] * temp;
      y_in.push(y1);
    }
    for (let modvar2 = 0; modvar2 < t.length; modvar2++) {
      let temp = Math.sin(2 * Math.PI * f * t[modvar2]);
      y2 = s_p_data[1][modVar] * temp;
      y_qd.push(y2);
    }
  }
  for (let modVAr3 = 0; modVAr3 < y_qd.length; modVAr3++) {
    y_mod.push(y_in[modVAr3] + y_qd[modVAr3]);
  }

  let Tx_sign = y_mod;
  let tt = [];
  let temp_size = (T * data.length) / 2;

  for (let modVAr4 = T / 99; modVAr4 <= temp_size; modVAr4 = modVAr4 + T / 99) {
    tt.push(modVAr4);
  }
  console.log({ tt });

  var trace0 = {
    x: j,
    y: y,
    mode: "lines+markers",
    name: "hv",
    line: { shape: "hv" },
    type: "scatter",
    showgrid: false,
  };
  var layout0 = {
    grid: { rows: 3, columns: 1, pattern: "line" },
    xaxis: { title: "'time(sec)   10(-6)'" },
    yaxis: { title: "amplitude(volt)" },
    title: "information before transmitting",
  };
  var data0 = [trace0];
  Plotly.newPlot("myDiv0", data0, layout0);

  var trace3 = {
    x: tt,
    y: y_in,

    name: "hv",

    type: "scatter",
    showgrid: false,
  };

  var data3 = [trace3];

  var layout3 = {
    grid: { rows: 3, columns: 1, pattern: "line" },
    xaxis: { title: "'time(sec)'" },
    yaxis: { title: "amplitude(volt)" },
    title: "wave form for Quadrature component ",
  };

  Plotly.newPlot("myDiv3", data3, layout3);

  var trace1 = {
    x: tt,
    y: y_qd,

    name: "hv",

    type: "scatter",
    showgrid: false,
  };

  var data = [trace1];

  var layout = {
    grid: { rows: 3, columns: 1, pattern: "line" },
    xaxis: { title: "'time(sec)'" },
    yaxis: { title: "amplitude(volt)" },
    title: "wave form for Quadrature component ",
  };

  Plotly.newPlot("myDiv", data, layout);

  var trace2 = {
    x: tt,
    y: Tx_sign,
    name: "hv",

    type: "scatter",
    showgrid: false,
  };
  var layout2 = {
    grid: { rows: 3, columns: 1, pattern: "line" },
    xaxis: { title: "'time(sec)'" },
    yaxis: { title: "amplitude(volt)" },
    title: "QPSK Modulated Signal",
  };
  var data2 = [trace2];
  Plotly.newPlot("myDiv2", data2, layout2);
  var trace5 = {
    x: j,
    y: y,
    mode: "lines+markers",
    name: "hv",
    line: { shape: "hv" },
    type: "scatter",
    showgrid: false,
  };
  var layout5 = {
    grid: { rows: 3, columns: 1, pattern: "line" },
    xaxis: { title: "'time(sec)   10(-6)'" },
    yaxis: { title: "amplitude(volt)" },
    title: "Information After Recieving",
  };
  var data5 = [trace5];
  Plotly.newPlot("myDiv5", data5, layout5);
}

const form = document.getElementById("form");

form.addEventListener("submit", formSubmit);
