const regions = {
  "KR": [[874, 198], [876, 200], [876, 203], [874, 205], [877, 208], [873, 212], [873, 216], [879, 222], [882, 224], [883, 229], [883, 232], [880, 236], [877, 237], [871, 226], [873, 225], [871, 223], [867, 222], [865, 216], [863, 213], [863, 210], [867, 206], [870, 206], [872, 200]],
  "BR1": [[286, 371], [291, 370], [295, 375], [300, 375], [307, 368], [302, 366], [302, 362], [308, 365], [312, 360], [312, 367], [317, 373], [333, 368], [337, 370], [339, 367], [343, 361], [345, 362], [346, 371], [343, 377], [354, 377], [375, 384], [395, 394], [394, 408], [381, 420], [383, 424], [383, 444], [377, 454], [369, 453], [356, 462], [356, 472], [349, 487], [333, 478], [342, 465], [338, 462], [339, 457], [333, 450], [327, 450], [328, 445], [325, 442], [327, 436], [324, 429], [318, 428], [315, 422], [302, 417], [300, 408], [296, 408], [287, 412], [284, 406], [281, 407], [279, 409], [273, 403], [274, 396], [281, 391], [284, 391], [288, 380], [285, 376]],
  "TR1": [[580, 231], [582, 231], [586, 232], [586, 233], [587, 235], [593, 234], [598, 230], [604, 230], [608, 234], [617, 234], [619, 232], [624, 233], [627, 233], [627, 237], [631, 240], [630, 245], [632, 247], [611, 250], [609, 253], [607, 253], [607, 251], [606, 250], [605, 253], [599, 254], [593, 250], [591, 249], [592, 253], [589, 255], [581, 253], [582, 249], [581, 247], [579, 248], [577, 247], [578, 244], [577, 240], [579, 238], [585, 238], [581, 236], [580, 233]],
  "NA1": [[157, 177], [160, 177], [163, 180], [164, 175], [243, 188], [254, 195], [259, 195], [265, 200], [268, 205], [271, 209], [264, 220], [267, 223], [284, 218], [294, 211], [308, 211], [308, 205], [313, 204], [314, 205], [314, 214], [302, 220], [304, 226], [303, 227], [292, 229], [280, 241], [281, 250], [273, 252], [262, 261], [259, 269], [261, 277], [262, 279], [258, 285], [254, 285], [252, 278], [253, 274], [253, 268], [251, 265], [237, 264], [237, 268], [230, 268], [222, 264], [210, 273], [207, 280], [201, 277], [199, 264], [196, 263], [192, 267], [189, 265], [187, 256], [169, 254], [161, 247], [152, 247], [151, 241], [146, 238], [142, 212], [156, 181]],
  "EUW1": [[542, 184], [542, 192], [545, 195], [541, 196], [537, 199], [542, 204], [547, 205], [551, 208], [550, 212], [542, 214], [540, 215], [542, 217], [538, 218], [538, 222], [542, 227], [548, 233], [555, 237], [556, 239], [553, 239], [553, 243], [551, 247], [547, 248], [547, 252], [539, 248], [542, 246], [545, 245], [549, 244], [549, 240], [546, 237], [540, 236], [536, 231], [533, 227], [531, 229], [532, 233], [532, 238], [532, 242], [529, 244], [527, 241], [527, 237], [529, 235], [529, 229], [530, 225], [526, 225], [525, 227], [518, 228], [514, 227], [512, 229], [512, 232], [504, 240], [504, 244], [500, 250], [490, 253], [485, 253], [482, 251], [475, 252], [476, 248], [475, 245], [477, 243], [478, 232], [478, 229], [480, 226], [483, 226], [498, 226], [501, 221], [501, 216], [490, 206], [497, 205], [498, 202], [496, 199], [487, 202], [486, 199], [493, 196], [491, 195], [489, 195], [490, 192], [486, 191], [477, 194], [473, 193], [475, 189], [476, 185], [476, 182], [479, 182], [481, 180], [485, 179], [488, 181], [487, 186], [490, 188], [493, 187], [494, 181], [490, 181], [488, 178], [489, 174], [486, 175], [489, 167], [493, 164], [494, 167], [500, 169], [497, 174], [502, 186], [506, 187], [507, 191], [505, 194], [506, 196], [502, 198], [502, 202], [504, 203], [508, 199], [512, 197], [513, 193], [515, 189], [519, 187], [523, 186], [525, 185], [526, 181], [530, 181], [532, 184], [536, 182], [539, 183]],
  "EUN1": [[527, 181], [530, 180], [536, 181], [541, 184], [543, 188], [543, 194], [542, 196], [537, 199], [542, 203], [547, 204], [551, 207], [549, 211], [542, 214], [541, 218], [542, 222], [545, 222], [547, 226], [554, 229], [559, 232], [560, 238], [562, 242], [569, 245], [565, 247], [567, 252], [571, 254], [571, 250], [573, 245], [569, 241], [568, 238], [570, 238], [574, 237], [574, 236], [578, 236], [579, 232], [583, 230], [583, 225], [586, 220], [588, 217], [591, 213], [596, 214], [593, 216], [596, 219], [600, 221], [602, 217], [605, 215], [600, 214], [604, 211], [610, 208], [613, 205], [613, 197], [602, 196], [596, 188], [590, 187], [591, 183], [586, 175], [579, 174], [578, 171], [575, 165], [575, 160], [579, 157], [576, 155], [576, 152], [583, 143], [575, 124], [576, 118], [572, 117], [572, 112], [575, 109], [574, 106], [568, 103], [560, 104], [560, 106], [556, 104], [552, 105], [552, 109], [550, 108], [544, 112], [542, 113], [543, 116], [540, 117], [534, 131], [531, 133], [532, 136], [532, 138], [528, 136], [522, 141], [523, 144], [517, 146], [515, 150], [518, 164], [520, 166], [529, 162], [531, 158], [532, 163], [537, 171], [538, 178], [541, 178], [541, 175], [547, 173], [547, 166], [553, 158], [548, 153], [547, 148], [550, 143], [554, 140], [556, 134], [560, 130], [564, 130], [565, 132], [558, 142], [557, 149], [560, 154], [563, 155], [573, 153], [572, 157], [569, 158], [565, 161], [566, 164], [567, 166], [567, 169], [562, 168], [558, 171], [559, 173], [558, 177], [557, 179], [553, 180], [548, 181], [546, 183], [545, 183], [540, 181], [531, 179], [531, 175], [530, 167], [525, 173], [525, 178]]
};

const regionModifier = {
  "wards": {
    "KR": 0.07 / 10,
    "BR1": 1.0 / 10,
    "TR1": 0.25 / 10,
    "NA1": 1.0 / 10,
    "EUW1": 0.4 / 10,
    "EUN1": 0.5 / 10
  },
  "kills": {
    "KR": 0.07 / 10,
    "BR1": 1.0 / 10,
    "TR1": 0.25 / 10,
    "NA1": 1.0 / 10,
    "EUW1": 0.4 / 10,
    "EUN1": 0.5 / 10
  },
  "teemos": {
    "KR": 1,
    "BR1": 1,
    "TR1": 1,
    "NA1": 1,
    "EUW1": 1,
    "EUN1": 1
  },
  "yasuos": {
    "KR": 1,
    "BR1": 1,
    "TR1": 1,
    "NA1": 1,
    "EUW1": 1,
    "EUN1": 1
  }
}

function isPointInsidePolygon(point, vs) {
  var x = point[0], y = point[1];

  var inside = false;
  for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
    var xi = vs[i][0], yi = vs[i][1];
    var xj = vs[j][0], yj = vs[j][1];

    var intersect = ((yi > y) != (yj > y))
      && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }

  return inside;
}

function findRandomPoint(polygon) {
  var minX = 100000, maxX = -1, minY = 100000, maxY = -1;
  for (var i = 0; i < polygon.length; i++) {
    var point = polygon[i];
    if (point[0] < minX) {
      minX = point[0];
    }
    if (point[0] > maxX) {
      maxX = point[0];
    }
    if (point[1] < minY) {
      minY = point[1];
    }
    if (point[1] > maxY) {
      maxY = point[1];
    }
  }

  while (true) {
    var x = Math.floor(Math.random() * maxX + minX);
    var y = Math.floor(Math.random() * maxY + minY);
    if (isPointInsidePolygon([x, y], polygon)) {
      return {'x': x, 'y': y};
    }
  }
}

let data = {
  // "wards": {
  //   "KR": 0,
  //   "BR1": 0,
  //   "TR1": 0,
  //   "NA1": 0,
  //   "EUW1": 0,
  //   "EUN1": 0
  // }
};


let minOfDay = 0;
let fetchingInterval = 60000;
let fetchingIntervalId;
let canvasId;
let date = '20170816';
const baseUrl = 'https://halloffame.leagueoflegends.co.kr';

const lolSatellite = {
  init: function (selectedMinOfDay = 0) {
    const self = this;
    minOfDay = selectedMinOfDay;
    this.fetchData(self);
    fetchingIntervalId = setInterval(function () {
      self.fetchData(self)
    }, fetchingInterval);
  },

  fetchData: function (self) {
    //0~1439
    if (minOfDay > 1439) return;

    canvasId = minOfDay;
    document.getElementById('slider').value = minOfDay;

    // wards
    $.ajax({
      url: `${baseUrl}/lol/satellite/v1/ward-count?date=${date}&minOfDay=${minOfDay}`
    }).done(function (serverResponseData) {
      self.pushDataAndRun("wards", serverResponseData);
      console.log(serverResponseData)
    });

    // kills
    $.ajax({
      url: `${baseUrl}/lol/satellite/v1/kill-count?date=${date}&minOfDay=${minOfDay}`
    }).done(function (serverResponseData) {
      self.pushDataAndRun("kills", serverResponseData);
    });

    // champion (teemo 17)
    $.ajax({
      url: `${baseUrl}/lol/satellite/v1/champ-count?date=${date}&minOfDay=${minOfDay}&championId=17`
    }).done(function (serverResponseData) {
      self.pushDataAndRun("teemos", serverResponseData);
    });

    // champion (yasuo 157)
    $.ajax({
      url: `${baseUrl}/lol/satellite/v1/champ-count?date=${date}&minOfDay=${minOfDay}&championId=157`
    }).done(function (serverResponseData) {
      self.pushDataAndRun("yasuos", serverResponseData);
    });

    self.updateTimer();
    minOfDay++;
  },

  pushDataAndRun: function (dataType, serverResponseData) {
    const self = this;
    let tempObj = {};
    serverResponseData.forEach(function (regionData) {
      tempObj[regionData.region] = Math.floor(regionData.count * regionModifier[dataType][regionData.region]);
    });
    data[dataType] = tempObj;
    self.addPoints(dataType);
  },

  addPoints: function (dataType) {
    const self = this;
    const canvas = document.getElementsByClassName(dataType)[0];
    canvas.classList.add(`${dataType}-${canvasId}`);
    for (const region in data[dataType]) {
      self.addPointDoms(region, dataType, data[dataType][region], canvas);
    }
  },

  updateTimer: function() {
    let sec = 0;
    clearInterval(this.timerUpdateInterval);
    let update = function () {
      let hour = Math.floor(minOfDay / 60);
      if (hour < 10) hour = '0' + hour;
      let min = minOfDay % 60;
      if (min < 10) min = '0' + min;
      let secString = (sec < 10) ? '0'+sec : sec;
      let timerString = date.substring(0, 4) + '.' + date.substring(4, 6) + '.' + date.substring(6, 8) + ' ' + hour + ':' + min + ':' + secString + ' UTC';
      document.getElementsByClassName('timer')[0].innerHTML = timerString;
      sec++;
    };
    update();
    this.timerUpdateInterval = setInterval(update, 1000);
  },

  addPointDoms: function (region, dataType, count, canvas) {
    let i = 0;
    for (i; i < count; i++) {
      canvas && setTimeout(function () {
        const light = document.createElement('span');
        const top = Math.floor(Math.random() * 100);
        const left = Math.floor(Math.random() * 100);
        const xy = findRandomPoint(regions[region]);
        let size = Math.floor(Math.random() * 3 + 1);
        if(dataType === 'teemos' || dataType === 'yasuos'){
          size = '20';
        }
        light.setAttribute('style', `top:${xy.y}px; left:${xy.x}px; width:${size}px; height:${size}px`);
        canvas.appendChild(light);
        setTimeout(function () {
          light.remove();
        }, 2000);
      }, Math.floor(Math.random() * fetchingInterval))
    }
  },

  addSliderEvent: function () {
    $('#slider').on('change', function () {
      if(minOfDay === this.value) return false;
      clearInterval(fetchingIntervalId);

      for (dataKey in data) {
        const canvas = document.getElementsByClassName(`${dataKey}-${canvasId}`)[0];
        const newCanvas = document.createElement('div');
        newCanvas.style.display = canvas.style.display;
        canvas && document.getElementsByClassName(`${dataKey}-${canvasId}`)[0].remove();
        newCanvas.classList.add(dataKey);
        document.getElementById('map').appendChild(newCanvas);
      }
      lolSatellite.init(this.value);
    })
  },

  toggleLegend(dataType) {
    let display = document.getElementsByClassName(dataType)[0].style.display;

    if (display === 'none') {
      document.getElementsByClassName(dataType)[0].style.display = '';
      document.getElementsByClassName(`legend-item legend-${dataType}`)[0].getElementsByClassName('checkbox')[0].classList.add('checked');
    } else {
      document.getElementsByClassName(dataType)[0].style.display = 'none';
      document.getElementsByClassName(`legend-item legend-${dataType}`)[0].getElementsByClassName('checkbox')[0].classList.remove('checked');
    }
  },

  addTooltipEvent: function() {
    // setInterval()
    let mapElement = $('#map');
    mapElement.on('mousemove', function(e) {
      let x = e.clientX - mapElement[0].offsetLeft;
      let y = e.clientY - mapElement[0].offsetTop;
      for(region in regions) {
        if (isPointInsidePolygon([x, y], regions[region])) {
          let tooltipElement = document.getElementsByClassName('tooltip')[0];

          tooltipElement.style.left = x + 7 + "px";
          tooltipElement.style.top = y + 15 + "px";
          tooltipElement.style.display = '';

          let html = "";
          html += `<strong>${region.replace(/1/g, '')}</strong>`;
          html += `${Math.floor(data['wards'][region]/regionModifier['wards'][region])} Wards<br>`;
          html += `${Math.floor(data['kills'][region]/regionModifier['kills'][region])} Kills<br>`;
          html += `${Math.floor(data['teemos'][region]/regionModifier['teemos'][region])} Teemos<br>`;
          html += `${Math.floor(data['yasuos'][region]/regionModifier['yasuos'][region])} Yasuos<br>`;

          tooltipElement.innerHTML = html;
          return;
        }
      }
      document.getElementsByClassName('tooltip')[0].style.display = 'none';
    });
  }
}

lolSatellite.init();
lolSatellite.addSliderEvent();
lolSatellite.addTooltipEvent();

