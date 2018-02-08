var scripts =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_styl__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_slider_slider__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_slider_slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_slider_slider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_standart_button_standart_button__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_standart_button_standart_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_standart_button_standart_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controller_controller__ = __webpack_require__(4);





Object(__WEBPACK_IMPORTED_MODULE_3__controller_controller__["a" /* run */])();


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

//slider

var sliderChange = function(element){
    var value = element.value;
    element.previousSibling.innerText = value;

    var width = element.parentElement.clientWidth-20;
    var min = element.attributes.min.value;
    var max = element.attributes.max.value;
    element.previousSibling.style.left = width/(max-min)*(value-min)-8.75+'px';
};
window.sliderInput = function (event) {
    sliderChange(event.target);
};
var sliderInit = function () {
    var elements = document.querySelectorAll('input.slider');
    for(var i=0; i<elements.length; i++){
        sliderChange(elements[i]);
    }
}();

//slider-percentage
var sliderPercentageChange = function(element){
    var value = element.value;

    var width = element.parentElement.clientWidth-20;
    var min = element.attributes.min.value;
    var max = element.attributes.max.value;
    element.previousSibling.style.width = width/(max-min)*(value-min)+1+'px';
};
window.sliderPercentageInput = function (event) {
    sliderPercentageChange(event.target);
};
var sliderPercentageInit = function(){
    var elements = document.querySelectorAll('input.slider-percentage');
    for(var i=0; i<elements.length; i++){
        sliderPercentageChange(elements[i]);
    }
}();

/***/ }),
/* 3 */
/***/ (function(module, exports) {

//ripple effect
document.buttonClick = function (event) {
  //console.log(event.screenY,event.pageY,event.y,event);
  var div = document.createElement('div');
  div.id = 'ripple';
  div.style.top = event.pageY-25+'px';
  div.style.left = event.pageX-25+'px';

  document.body.appendChild(div);
  setTimeout(function(){document.body.removeChild(div)}, 550);
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return run; });
/* unused harmony export init */
/* unused harmony export board */
/* unused harmony export table */
/* unused harmony export controls */
/* unused harmony export fps */
/* unused harmony export buttonsDisable */
/* unused harmony export slidersChange */
/* unused harmony export anim */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_model__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_view__ = __webpack_require__(6);
//'use strict';



var board,table,controls,fps;
var tableSetCell = function(event) {
    var target = event.target;
    if (target.tagName != 'TD') return;
    var j = target.cellIndex;
    var i = target.parentElement.sectionRowIndex;
    board.setCell(i,j);
    //target.classList.toggle("live");
};
var buttunsOnclick = function (event) {
    //console.log('oncklick target = ',event.target.innerText);
    var target = event.target;
    if (target.tagName != 'BUTTON') return;
    switch (target.innerHTML) {
        case 'start':
            //console.log('test start');
            board.start();
            buttonsDisable();
            anim();
            break;
        case 'pause':
            //console.log('test pause');
            board.stop();
            buttonsDisable();
            break;
        case 'clear':
            board.clear();
            buttonsDisable();
            Object(__WEBPACK_IMPORTED_MODULE_1__view_view__["b" /* repainter */])(board, table);
    };
};
var buttonsDisable = function () {
    var buttons = document.getElementsByTagName('BUTTON');
    //console.log(buttons);
    for(var i=0; i<buttons.length; i++){
        var button = buttons[i];
        if (button.innerHTML == 'start'){
            if (board.running) button.disabled = true;
            else button.disabled = false;
        };
        if (button.innerHTML == 'pause'){
            if (board.running) button.disabled = false;
            else button.disabled = true;
        };
    };
};
var slidersChange = function (event){
    var target = event.target;
    //console.log(event);
    //console.log(event.target.parentElement.previousElementSibling.innerText);
    if (target.tagName != 'INPUT') return;
    var value = target.valueAsNumber;
    //console.dir(value);
    switch(target.parentElement.previousElementSibling.innerText) {
        case 'speed':
            fps = value;
            break;
        case 'width':
            board.resize(board.m,value);
            Object(__WEBPACK_IMPORTED_MODULE_1__view_view__["a" /* newTable */])(board,table);
            break;
        case 'height':
            board.resize(value,board.n);
            Object(__WEBPACK_IMPORTED_MODULE_1__view_view__["a" /* newTable */])(board,table);
    };
};

var init = function () {
    {
        board = new __WEBPACK_IMPORTED_MODULE_0__model_model__["a" /* Board */](100, 100);
        table = document.getElementById('board');
        controls = document.getElementById('controls');
        fps = 10;
    }
    Object(__WEBPACK_IMPORTED_MODULE_1__view_view__["a" /* newTable */])(board, table);//начальная отрисовка
    table.onclick = tableSetCell;
    controls.onclick = buttunsOnclick;
    controls.onchange = slidersChange;
};

var anim = function(callback){//останавливается и вызывет аргумент, когда матрица перестает меняться
    //console.log('anim started');
    var oldMatrix;
    loop();
    function loop() {
        setTimeout(function() {
            if(board.running) {
                requestAnimationFrame(loop);//не блокирует поток!
                //console.log('test');
                board.worker();
                Object(__WEBPACK_IMPORTED_MODULE_1__view_view__["b" /* repainter */])(board, table);
                /*
                if (oldMatrix == board.matrix) {//если матрица не меняется, ссылка остаетя актуальной
                    board.stop();
                    buttonsDisable();
                }
                else oldMatrix = board.matrix;*/
            }
            else {
                //console.log('anim stopped');
                if(callback) callback();
            }
        }, 1000 / fps);
    };
};

var run = function () {
    init();
    buttonsDisable();
    //console.log('run() started');
};



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Board; });
/* unused harmony export Square */

let Square = function (z = 0, v = 0) {
    this.z = z;
    this.v = v;
};
Square.prototype = {
    stepZ : function () {
        this.z += this.v;
    },
    stepV : function (a) {
        this.v += a;
    },
    area : function () {
        console.log('area');
    }

};
var cell1 = function (matrix,i,j) {
    var max = 1;
    var s;
    if(matrix[i-1]) {
        //s = matrix[i - 1][j - 1]; if (s && (s.z >max)) max = s.z;
        s = matrix[i - 1][j]; if (s && (s.z >max)) max = s.z;
        //s = matrix[i - 1][j + 1]; if (s && (s.z >max)) max = s.z;
    }
    s = matrix[i][j-1]; if (s && (s.z >max)) max = s.z;
    s = matrix[i][j+1]; if (s && (s.z >max)) max = s.z;

    if(matrix[i+1]) {
        //s = matrix[i + 1][j - 1]; if (s && (s.z >max)) max = s.z;
        s = matrix[i + 1][j]; if (s && (s.z >max)) max = s.z;
        //s = matrix[i + 1][j + 1]; if (s && (s.z >max)) max = s.z;
    }
    if(matrix[i][j].z>max) max = matrix[i][j].z-1;
    return new Square(max-1);
};
var cell2 = function (matrix,i,j) {
  var count = 0;//живые соседи
  const oldCell = matrix[i][j];
  const newCell = new Square(oldCell.z,oldCell.v);
  
  if(matrix[i-1]) {
    if (matrix[i - 1][j - 1]) count+=matrix[i - 1][j - 1].z;
    if (matrix[i - 1][j]) count+=matrix[i - 1][j].z;
    if (matrix[i - 1][j + 1]) count+=matrix[i - 1][j + 1].z;
  }
  if (matrix[i][j-1]) count+=matrix[i][j-1].z;
  if (matrix[i][j+1]) count+=matrix[i][j+1].z;
  
  if(matrix[i+1]) {
    if (matrix[i + 1][j - 1]) count+=matrix[i + 1][j - 1].z;
    if (matrix[i + 1][j]) count+=matrix[i + 1][j].z;
    if (matrix[i + 1][j + 1]) count+=matrix[i + 1][j + 1].z;
  }
  
  let a;
  a = Math.round(count/8-oldCell.z);
  
  if (oldCell.z == 0) a += 0;
  else{
    if (oldCell.z > 0) a += -1;
    else a += 1;
  }
  if (newCell.v < 0) newCell.v += 1;
  else{
    if (newCell.v > 0) newCell.v -= 1;
  }
  
  newCell.stepV(a);
  newCell.stepZ();
  return newCell;
};
var cell3 = function (matrix,i,j) {
  var count = 0;//живые соседи
  const oldCell = matrix[i][j];
  const newCell = new Square(oldCell.z,oldCell.v);
  
  if(matrix[i-1]) {
    if (matrix[i - 1][j - 1]) count+=matrix[i - 1][j - 1].z;
    if (matrix[i - 1][j]) count+=matrix[i - 1][j].z;
    if (matrix[i - 1][j + 1]) count+=matrix[i - 1][j + 1].z;
  }
  if (matrix[i][j-1]) count+=matrix[i][j-1].z;
  if (matrix[i][j+1]) count+=matrix[i][j+1].z;
  
  if(matrix[i+1]) {
    if (matrix[i + 1][j - 1]) count+=matrix[i + 1][j - 1].z;
    if (matrix[i + 1][j]) count+=matrix[i + 1][j].z;
    if (matrix[i + 1][j + 1]) count+=matrix[i + 1][j + 1].z;
  }
  
  let a;
  a = Math.round(count/8-oldCell.z);
  
  newCell.stepV(a);
  newCell.stepZ();
  return newCell;
};
var cell4 = function (matrix,i,j) { //по обьему
  var count = 0;//живые соседи
  const oldCell = matrix[i][j];
  const ct = function (ceil) {
    if (ceil) return Math.floor(ceil.z / 9);
    return 0;
  };
  
  if (matrix[i-1]) {
    count += ct(matrix[i - 1][j - 1]);
    count += ct(matrix[i - 1][j]);
    count += ct(matrix[i - 1][j + 1]);
  }
  count += ct(matrix[i][j-1]);
  count += ct(matrix[i][j+1]);
  
  if (matrix[i+1]) {
    count += ct(matrix[i + 1][j - 1]);
    count += ct(matrix[i + 1][j]);
    count += ct(matrix[i + 1][j + 1]);
  }
  
  const value = count + (oldCell.z % 9) + ct(oldCell);
  
  return new Square(value, oldCell.v);
};

//конструктор
var Board = function(m,n) {
    //матрица m на n
    this.matrix = [];
    this.running = false;//для циклической обработки
    this.m = m;//строки
    this.n = n;//столбцы

    for(var i=0; i<m; i++){
        var line = [];
        for(var j=0; j<n; j++){
            line.push(new Square());
        }
        this.matrix.push(line);
    }
};
//методы
Board.prototype = {
    resize : function (m,n) {
        this.running = false;
        var matrix = this.matrix;
        var o = matrix.length;
        var p = matrix[0].length;
        //console.log('resize',o,p,' to ',m,n);
        if(p > n){//убираем столбцы
            for(var i=0; i<o; i++){
                matrix[i].splice(n-1,p-n);//изменить length?
            }
        }
        if(p < n){//добавляем столбцы
            for(var i=0; i<o; i++){
                for(var j=p; j<n; j++){
                    matrix[i].push(new Square());
                }
            }
        }
        if(o > m){//убираем строки
            matrix.splice(m-1,o-m);//изменить length?
        }
        if(o < m){//добавляем строки
            for(var i=o; i<m; i++){
                var line = [];
                for(var j=0; j<n; j++){
                    line.push(new Square());
                }
                matrix.push(line.slice());
            }
        }
        this.m = m;
        this.n = n;
    },
    stop : function () {
        this.running = false;
    },
    clear : function () {
        this.running = false;
        for(var i=0; i<this.m; i++){
            for(var j=0; j<this.n; j++){
                this.matrix[i][j] = new Square();
            }
        }
    },
    start : function () {
        this.running = true;
    },
    worker : function () {
        //обход всех ячеек с записью нового состояния
        var newMatrix = [];
        var flag = false;//изменмлась ли матрица?
        for(var i=0; i<this.matrix.length; i++){
            var newLine = [];
            for(var j=0; j<this.matrix[0].length; j++){
                var cell = this.cell(i,j);
                newLine.push(cell);
                if(cell != this.matrix[i][j]) flag = true;
            }
            newMatrix.push(newLine);
        }
        this.matrix = newMatrix;
        //console.log(this.matrix)
    },
    cell : function (i,j) {
        //вычисляет новое состояние клетки
        //соседи за пределами поля считаются мертвыми

        return cell2(this.matrix,i,j);
    },
    setCell : function (i,j) {
        this.matrix[i][j].z += 1000;
        console.log(this.matrix[i][j].v,this.matrix[i][j].z);
    }
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export painter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return newTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return repainter; });
//'use strict';
//color
var getColor = function (value) {
    var g = 125+10*Math.ceil(value / 8);
    if (g > 255) g = 255;
    if (g < 0) g = 0;
    return 'rgb('+g.toString(10)+',' + g.toString(10)+',' + g.toString(10)+')';
};

//отрисовка матрицы
var painter = function (board,tableWidth) {
    //заполнение тела таблицы
    var matrix = board.matrix;
    var m = matrix.length;
    var n = matrix[0].length;
    //console.log(m,n);
    var width = tableWidth/n;
    var height = width;

    var tbody = document.createElement('tbody');
    for(var i=0; i<m; i++){
        var tr = document.createElement('tr');
        for(var j=0; j<n; j++){
            var  td = document.createElement('td');
            td.style.width = width+'px';
            td.style.height = height+'px';
            td.style.backgroundColor = getColor(0);
            //if(matrix[i][j]) td.className = 'live';
            tr.appendChild(td);
        };
        tbody.appendChild(tr);
    };
    return tbody;
};

var newTable = function (board,table) {
    //для  создания и ресайза таблицы
    var tbody = painter(board,table.clientWidth);
    if(table.children.length) table.replaceChild(tbody, table.children[0]);
    else table.appendChild(tbody);
};

var repainter = function (board,table) {
    //изменение класса у ячеек таблицы
    var matrix = board.matrix;
    var tbody = table.children[0];
    var m = matrix.length;
    var n = matrix[0].length;
    //console.log(m,n);

    for(var i=0; i<m; i++){
        for(var j=0; j<n; j++){//строка
            var td = tbody.children[i].children[j];
            td.style.backgroundColor = getColor(matrix[i][j].z);
        };
    };
};


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDA2M2I0MTU2NTFlODc5OGNkZjYiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdGFuZGFydC1idXR0b24vc3RhbmRhcnQtYnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbnRyb2xsZXIvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9tb2RlbC9tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi92aWV3L3ZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7O0FBRVk7QUFDWjs7Ozs7OztBQ0xBLHlDOzs7Ozs7QUNBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QixLQUFLO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLG9CQUFvQixVQUFVO0FBQzlCLHdCQUF3QixVQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0Esd0JBQXdCLHlCQUF5QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDeE5BO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsS0FBSztBQUNyQjtBQUNBLG9CQUFvQixLQUFLO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixLQUFLO0FBQ3JCLG9CQUFvQixLQUFLLE1BQU07QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDAwNjNiNDE1NjUxZTg3OThjZGY2IiwiaW1wb3J0ICcuL2luZGV4LnN0eWwnXHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3NsaWRlci9zbGlkZXInXHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3N0YW5kYXJ0LWJ1dHRvbi9zdGFuZGFydC1idXR0b24nXHJcblxyXG5pbXBvcnQge3J1bn0gZnJvbSAnLi9jb250cm9sbGVyL2NvbnRyb2xsZXInXHJcbnJ1bigpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vc2xpZGVyXHJcblxyXG52YXIgc2xpZGVyQ2hhbmdlID0gZnVuY3Rpb24oZWxlbWVudCl7XHJcbiAgICB2YXIgdmFsdWUgPSBlbGVtZW50LnZhbHVlO1xyXG4gICAgZWxlbWVudC5wcmV2aW91c1NpYmxpbmcuaW5uZXJUZXh0ID0gdmFsdWU7XHJcblxyXG4gICAgdmFyIHdpZHRoID0gZWxlbWVudC5wYXJlbnRFbGVtZW50LmNsaWVudFdpZHRoLTIwO1xyXG4gICAgdmFyIG1pbiA9IGVsZW1lbnQuYXR0cmlidXRlcy5taW4udmFsdWU7XHJcbiAgICB2YXIgbWF4ID0gZWxlbWVudC5hdHRyaWJ1dGVzLm1heC52YWx1ZTtcclxuICAgIGVsZW1lbnQucHJldmlvdXNTaWJsaW5nLnN0eWxlLmxlZnQgPSB3aWR0aC8obWF4LW1pbikqKHZhbHVlLW1pbiktOC43NSsncHgnO1xyXG59O1xyXG53aW5kb3cuc2xpZGVySW5wdXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIHNsaWRlckNoYW5nZShldmVudC50YXJnZXQpO1xyXG59O1xyXG52YXIgc2xpZGVySW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LnNsaWRlcicpO1xyXG4gICAgZm9yKHZhciBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIHNsaWRlckNoYW5nZShlbGVtZW50c1tpXSk7XHJcbiAgICB9XHJcbn0oKTtcclxuXHJcbi8vc2xpZGVyLXBlcmNlbnRhZ2VcclxudmFyIHNsaWRlclBlcmNlbnRhZ2VDaGFuZ2UgPSBmdW5jdGlvbihlbGVtZW50KXtcclxuICAgIHZhciB2YWx1ZSA9IGVsZW1lbnQudmFsdWU7XHJcblxyXG4gICAgdmFyIHdpZHRoID0gZWxlbWVudC5wYXJlbnRFbGVtZW50LmNsaWVudFdpZHRoLTIwO1xyXG4gICAgdmFyIG1pbiA9IGVsZW1lbnQuYXR0cmlidXRlcy5taW4udmFsdWU7XHJcbiAgICB2YXIgbWF4ID0gZWxlbWVudC5hdHRyaWJ1dGVzLm1heC52YWx1ZTtcclxuICAgIGVsZW1lbnQucHJldmlvdXNTaWJsaW5nLnN0eWxlLndpZHRoID0gd2lkdGgvKG1heC1taW4pKih2YWx1ZS1taW4pKzErJ3B4JztcclxufTtcclxud2luZG93LnNsaWRlclBlcmNlbnRhZ2VJbnB1dCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgc2xpZGVyUGVyY2VudGFnZUNoYW5nZShldmVudC50YXJnZXQpO1xyXG59O1xyXG52YXIgc2xpZGVyUGVyY2VudGFnZUluaXQgPSBmdW5jdGlvbigpe1xyXG4gICAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQuc2xpZGVyLXBlcmNlbnRhZ2UnKTtcclxuICAgIGZvcih2YXIgaT0wOyBpPGVsZW1lbnRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBzbGlkZXJQZXJjZW50YWdlQ2hhbmdlKGVsZW1lbnRzW2ldKTtcclxuICAgIH1cclxufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vcmlwcGxlIGVmZmVjdFxyXG5kb2N1bWVudC5idXR0b25DbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gIC8vY29uc29sZS5sb2coZXZlbnQuc2NyZWVuWSxldmVudC5wYWdlWSxldmVudC55LGV2ZW50KTtcclxuICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGl2LmlkID0gJ3JpcHBsZSc7XHJcbiAgZGl2LnN0eWxlLnRvcCA9IGV2ZW50LnBhZ2VZLTI1KydweCc7XHJcbiAgZGl2LnN0eWxlLmxlZnQgPSBldmVudC5wYWdlWC0yNSsncHgnO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XHJcbiAgc2V0VGltZW91dChmdW5jdGlvbigpe2RvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGl2KX0sIDU1MCk7XHJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3N0YW5kYXJ0LWJ1dHRvbi9zdGFuZGFydC1idXR0b24uanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8ndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQge0JvYXJkfSBmcm9tICcuLi9tb2RlbC9tb2RlbCdcclxuaW1wb3J0IHtuZXdUYWJsZSxyZXBhaW50ZXJ9IGZyb20gJy4uL3ZpZXcvdmlldydcclxudmFyIGJvYXJkLHRhYmxlLGNvbnRyb2xzLGZwcztcclxudmFyIHRhYmxlU2V0Q2VsbCA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgaWYgKHRhcmdldC50YWdOYW1lICE9ICdURCcpIHJldHVybjtcclxuICAgIHZhciBqID0gdGFyZ2V0LmNlbGxJbmRleDtcclxuICAgIHZhciBpID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQuc2VjdGlvblJvd0luZGV4O1xyXG4gICAgYm9hcmQuc2V0Q2VsbChpLGopO1xyXG4gICAgLy90YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcImxpdmVcIik7XHJcbn07XHJcbnZhciBidXR0dW5zT25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgLy9jb25zb2xlLmxvZygnb25ja2xpY2sgdGFyZ2V0ID0gJyxldmVudC50YXJnZXQuaW5uZXJUZXh0KTtcclxuICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICBpZiAodGFyZ2V0LnRhZ05hbWUgIT0gJ0JVVFRPTicpIHJldHVybjtcclxuICAgIHN3aXRjaCAodGFyZ2V0LmlubmVySFRNTCkge1xyXG4gICAgICAgIGNhc2UgJ3N0YXJ0JzpcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygndGVzdCBzdGFydCcpO1xyXG4gICAgICAgICAgICBib2FyZC5zdGFydCgpO1xyXG4gICAgICAgICAgICBidXR0b25zRGlzYWJsZSgpO1xyXG4gICAgICAgICAgICBhbmltKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3BhdXNlJzpcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygndGVzdCBwYXVzZScpO1xyXG4gICAgICAgICAgICBib2FyZC5zdG9wKCk7XHJcbiAgICAgICAgICAgIGJ1dHRvbnNEaXNhYmxlKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2NsZWFyJzpcclxuICAgICAgICAgICAgYm9hcmQuY2xlYXIoKTtcclxuICAgICAgICAgICAgYnV0dG9uc0Rpc2FibGUoKTtcclxuICAgICAgICAgICAgcmVwYWludGVyKGJvYXJkLCB0YWJsZSk7XHJcbiAgICB9O1xyXG59O1xyXG52YXIgYnV0dG9uc0Rpc2FibGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdCVVRUT04nKTtcclxuICAgIC8vY29uc29sZS5sb2coYnV0dG9ucyk7XHJcbiAgICBmb3IodmFyIGk9MDsgaTxidXR0b25zLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICB2YXIgYnV0dG9uID0gYnV0dG9uc1tpXTtcclxuICAgICAgICBpZiAoYnV0dG9uLmlubmVySFRNTCA9PSAnc3RhcnQnKXtcclxuICAgICAgICAgICAgaWYgKGJvYXJkLnJ1bm5pbmcpIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGVsc2UgYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoYnV0dG9uLmlubmVySFRNTCA9PSAncGF1c2UnKXtcclxuICAgICAgICAgICAgaWYgKGJvYXJkLnJ1bm5pbmcpIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBlbHNlIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbn07XHJcbnZhciBzbGlkZXJzQ2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KXtcclxuICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAvL2NvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgIC8vY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5pbm5lclRleHQpO1xyXG4gICAgaWYgKHRhcmdldC50YWdOYW1lICE9ICdJTlBVVCcpIHJldHVybjtcclxuICAgIHZhciB2YWx1ZSA9IHRhcmdldC52YWx1ZUFzTnVtYmVyO1xyXG4gICAgLy9jb25zb2xlLmRpcih2YWx1ZSk7XHJcbiAgICBzd2l0Y2godGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5pbm5lclRleHQpIHtcclxuICAgICAgICBjYXNlICdzcGVlZCc6XHJcbiAgICAgICAgICAgIGZwcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd3aWR0aCc6XHJcbiAgICAgICAgICAgIGJvYXJkLnJlc2l6ZShib2FyZC5tLHZhbHVlKTtcclxuICAgICAgICAgICAgbmV3VGFibGUoYm9hcmQsdGFibGUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdoZWlnaHQnOlxyXG4gICAgICAgICAgICBib2FyZC5yZXNpemUodmFsdWUsYm9hcmQubik7XHJcbiAgICAgICAgICAgIG5ld1RhYmxlKGJvYXJkLHRhYmxlKTtcclxuICAgIH07XHJcbn07XHJcblxyXG52YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHtcclxuICAgICAgICBib2FyZCA9IG5ldyBCb2FyZCgxMDAsIDEwMCk7XHJcbiAgICAgICAgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQnKTtcclxuICAgICAgICBjb250cm9scyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250cm9scycpO1xyXG4gICAgICAgIGZwcyA9IDEwO1xyXG4gICAgfVxyXG4gICAgbmV3VGFibGUoYm9hcmQsIHRhYmxlKTsvL9C90LDRh9Cw0LvRjNC90LDRjyDQvtGC0YDQuNGB0L7QstC60LBcclxuICAgIHRhYmxlLm9uY2xpY2sgPSB0YWJsZVNldENlbGw7XHJcbiAgICBjb250cm9scy5vbmNsaWNrID0gYnV0dHVuc09uY2xpY2s7XHJcbiAgICBjb250cm9scy5vbmNoYW5nZSA9IHNsaWRlcnNDaGFuZ2U7XHJcbn07XHJcblxyXG52YXIgYW5pbSA9IGZ1bmN0aW9uKGNhbGxiYWNrKXsvL9C+0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdGC0YHRjyDQuCDQstGL0LfRi9Cy0LXRgiDQsNGA0LPRg9C80LXQvdGCLCDQutC+0LPQtNCwINC80LDRgtGA0LjRhtCwINC/0LXRgNC10YHRgtCw0LXRgiDQvNC10L3Rj9GC0YzRgdGPXHJcbiAgICAvL2NvbnNvbGUubG9nKCdhbmltIHN0YXJ0ZWQnKTtcclxuICAgIHZhciBvbGRNYXRyaXg7XHJcbiAgICBsb29wKCk7XHJcbiAgICBmdW5jdGlvbiBsb29wKCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmKGJvYXJkLnJ1bm5pbmcpIHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTsvL9C90LUg0LHQu9C+0LrQuNGA0YPQtdGCINC/0L7RgtC+0LohXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCd0ZXN0Jyk7XHJcbiAgICAgICAgICAgICAgICBib2FyZC53b3JrZXIoKTtcclxuICAgICAgICAgICAgICAgIHJlcGFpbnRlcihib2FyZCwgdGFibGUpO1xyXG4gICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgIGlmIChvbGRNYXRyaXggPT0gYm9hcmQubWF0cml4KSB7Ly/QtdGB0LvQuCDQvNCw0YLRgNC40YbQsCDQvdC1INC80LXQvdGP0LXRgtGB0Y8sINGB0YHRi9C70LrQsCDQvtGB0YLQsNC10YLRjyDQsNC60YLRg9Cw0LvRjNC90L7QuVxyXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25zRGlzYWJsZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBvbGRNYXRyaXggPSBib2FyZC5tYXRyaXg7Ki9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2FuaW0gc3RvcHBlZCcpO1xyXG4gICAgICAgICAgICAgICAgaWYoY2FsbGJhY2spIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDAwIC8gZnBzKTtcclxuICAgIH07XHJcbn07XHJcblxyXG52YXIgcnVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaW5pdCgpO1xyXG4gICAgYnV0dG9uc0Rpc2FibGUoKTtcclxuICAgIC8vY29uc29sZS5sb2coJ3J1bigpIHN0YXJ0ZWQnKTtcclxufTtcclxuZXhwb3J0IHtydW4saW5pdCxib2FyZCx0YWJsZSxjb250cm9scyxmcHMsYnV0dG9uc0Rpc2FibGUsc2xpZGVyc0NoYW5nZSxhbmltfVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbnRyb2xsZXIvY29udHJvbGxlci5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcclxubGV0IFNxdWFyZSA9IGZ1bmN0aW9uICh6ID0gMCwgdiA9IDApIHtcclxuICAgIHRoaXMueiA9IHo7XHJcbiAgICB0aGlzLnYgPSB2O1xyXG59O1xyXG5TcXVhcmUucHJvdG90eXBlID0ge1xyXG4gICAgc3RlcFogOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy56ICs9IHRoaXMudjtcclxuICAgIH0sXHJcbiAgICBzdGVwViA6IGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgdGhpcy52ICs9IGE7XHJcbiAgICB9LFxyXG4gICAgYXJlYSA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYXJlYScpO1xyXG4gICAgfVxyXG5cclxufTtcclxudmFyIGNlbGwxID0gZnVuY3Rpb24gKG1hdHJpeCxpLGopIHtcclxuICAgIHZhciBtYXggPSAxO1xyXG4gICAgdmFyIHM7XHJcbiAgICBpZihtYXRyaXhbaS0xXSkge1xyXG4gICAgICAgIC8vcyA9IG1hdHJpeFtpIC0gMV1baiAtIDFdOyBpZiAocyAmJiAocy56ID5tYXgpKSBtYXggPSBzLno7XHJcbiAgICAgICAgcyA9IG1hdHJpeFtpIC0gMV1bal07IGlmIChzICYmIChzLnogPm1heCkpIG1heCA9IHMuejtcclxuICAgICAgICAvL3MgPSBtYXRyaXhbaSAtIDFdW2ogKyAxXTsgaWYgKHMgJiYgKHMueiA+bWF4KSkgbWF4ID0gcy56O1xyXG4gICAgfVxyXG4gICAgcyA9IG1hdHJpeFtpXVtqLTFdOyBpZiAocyAmJiAocy56ID5tYXgpKSBtYXggPSBzLno7XHJcbiAgICBzID0gbWF0cml4W2ldW2orMV07IGlmIChzICYmIChzLnogPm1heCkpIG1heCA9IHMuejtcclxuXHJcbiAgICBpZihtYXRyaXhbaSsxXSkge1xyXG4gICAgICAgIC8vcyA9IG1hdHJpeFtpICsgMV1baiAtIDFdOyBpZiAocyAmJiAocy56ID5tYXgpKSBtYXggPSBzLno7XHJcbiAgICAgICAgcyA9IG1hdHJpeFtpICsgMV1bal07IGlmIChzICYmIChzLnogPm1heCkpIG1heCA9IHMuejtcclxuICAgICAgICAvL3MgPSBtYXRyaXhbaSArIDFdW2ogKyAxXTsgaWYgKHMgJiYgKHMueiA+bWF4KSkgbWF4ID0gcy56O1xyXG4gICAgfVxyXG4gICAgaWYobWF0cml4W2ldW2pdLno+bWF4KSBtYXggPSBtYXRyaXhbaV1bal0uei0xO1xyXG4gICAgcmV0dXJuIG5ldyBTcXVhcmUobWF4LTEpO1xyXG59O1xyXG52YXIgY2VsbDIgPSBmdW5jdGlvbiAobWF0cml4LGksaikge1xyXG4gIHZhciBjb3VudCA9IDA7Ly/QttC40LLRi9C1INGB0L7RgdC10LTQuFxyXG4gIGNvbnN0IG9sZENlbGwgPSBtYXRyaXhbaV1bal07XHJcbiAgY29uc3QgbmV3Q2VsbCA9IG5ldyBTcXVhcmUob2xkQ2VsbC56LG9sZENlbGwudik7XHJcbiAgXHJcbiAgaWYobWF0cml4W2ktMV0pIHtcclxuICAgIGlmIChtYXRyaXhbaSAtIDFdW2ogLSAxXSkgY291bnQrPW1hdHJpeFtpIC0gMV1baiAtIDFdLno7XHJcbiAgICBpZiAobWF0cml4W2kgLSAxXVtqXSkgY291bnQrPW1hdHJpeFtpIC0gMV1bal0uejtcclxuICAgIGlmIChtYXRyaXhbaSAtIDFdW2ogKyAxXSkgY291bnQrPW1hdHJpeFtpIC0gMV1baiArIDFdLno7XHJcbiAgfVxyXG4gIGlmIChtYXRyaXhbaV1bai0xXSkgY291bnQrPW1hdHJpeFtpXVtqLTFdLno7XHJcbiAgaWYgKG1hdHJpeFtpXVtqKzFdKSBjb3VudCs9bWF0cml4W2ldW2orMV0uejtcclxuICBcclxuICBpZihtYXRyaXhbaSsxXSkge1xyXG4gICAgaWYgKG1hdHJpeFtpICsgMV1baiAtIDFdKSBjb3VudCs9bWF0cml4W2kgKyAxXVtqIC0gMV0uejtcclxuICAgIGlmIChtYXRyaXhbaSArIDFdW2pdKSBjb3VudCs9bWF0cml4W2kgKyAxXVtqXS56O1xyXG4gICAgaWYgKG1hdHJpeFtpICsgMV1baiArIDFdKSBjb3VudCs9bWF0cml4W2kgKyAxXVtqICsgMV0uejtcclxuICB9XHJcbiAgXHJcbiAgbGV0IGE7XHJcbiAgYSA9IE1hdGgucm91bmQoY291bnQvOC1vbGRDZWxsLnopO1xyXG4gIFxyXG4gIGlmIChvbGRDZWxsLnogPT0gMCkgYSArPSAwO1xyXG4gIGVsc2V7XHJcbiAgICBpZiAob2xkQ2VsbC56ID4gMCkgYSArPSAtMTtcclxuICAgIGVsc2UgYSArPSAxO1xyXG4gIH1cclxuICBpZiAobmV3Q2VsbC52IDwgMCkgbmV3Q2VsbC52ICs9IDE7XHJcbiAgZWxzZXtcclxuICAgIGlmIChuZXdDZWxsLnYgPiAwKSBuZXdDZWxsLnYgLT0gMTtcclxuICB9XHJcbiAgXHJcbiAgbmV3Q2VsbC5zdGVwVihhKTtcclxuICBuZXdDZWxsLnN0ZXBaKCk7XHJcbiAgcmV0dXJuIG5ld0NlbGw7XHJcbn07XHJcbnZhciBjZWxsMyA9IGZ1bmN0aW9uIChtYXRyaXgsaSxqKSB7XHJcbiAgdmFyIGNvdW50ID0gMDsvL9C20LjQstGL0LUg0YHQvtGB0LXQtNC4XHJcbiAgY29uc3Qgb2xkQ2VsbCA9IG1hdHJpeFtpXVtqXTtcclxuICBjb25zdCBuZXdDZWxsID0gbmV3IFNxdWFyZShvbGRDZWxsLnosb2xkQ2VsbC52KTtcclxuICBcclxuICBpZihtYXRyaXhbaS0xXSkge1xyXG4gICAgaWYgKG1hdHJpeFtpIC0gMV1baiAtIDFdKSBjb3VudCs9bWF0cml4W2kgLSAxXVtqIC0gMV0uejtcclxuICAgIGlmIChtYXRyaXhbaSAtIDFdW2pdKSBjb3VudCs9bWF0cml4W2kgLSAxXVtqXS56O1xyXG4gICAgaWYgKG1hdHJpeFtpIC0gMV1baiArIDFdKSBjb3VudCs9bWF0cml4W2kgLSAxXVtqICsgMV0uejtcclxuICB9XHJcbiAgaWYgKG1hdHJpeFtpXVtqLTFdKSBjb3VudCs9bWF0cml4W2ldW2otMV0uejtcclxuICBpZiAobWF0cml4W2ldW2orMV0pIGNvdW50Kz1tYXRyaXhbaV1baisxXS56O1xyXG4gIFxyXG4gIGlmKG1hdHJpeFtpKzFdKSB7XHJcbiAgICBpZiAobWF0cml4W2kgKyAxXVtqIC0gMV0pIGNvdW50Kz1tYXRyaXhbaSArIDFdW2ogLSAxXS56O1xyXG4gICAgaWYgKG1hdHJpeFtpICsgMV1bal0pIGNvdW50Kz1tYXRyaXhbaSArIDFdW2pdLno7XHJcbiAgICBpZiAobWF0cml4W2kgKyAxXVtqICsgMV0pIGNvdW50Kz1tYXRyaXhbaSArIDFdW2ogKyAxXS56O1xyXG4gIH1cclxuICBcclxuICBsZXQgYTtcclxuICBhID0gTWF0aC5yb3VuZChjb3VudC84LW9sZENlbGwueik7XHJcbiAgXHJcbiAgbmV3Q2VsbC5zdGVwVihhKTtcclxuICBuZXdDZWxsLnN0ZXBaKCk7XHJcbiAgcmV0dXJuIG5ld0NlbGw7XHJcbn07XHJcbnZhciBjZWxsNCA9IGZ1bmN0aW9uIChtYXRyaXgsaSxqKSB7IC8v0L/QviDQvtCx0YzQtdC80YNcclxuICB2YXIgY291bnQgPSAwOy8v0LbQuNCy0YvQtSDRgdC+0YHQtdC00LhcclxuICBjb25zdCBvbGRDZWxsID0gbWF0cml4W2ldW2pdO1xyXG4gIGNvbnN0IGN0ID0gZnVuY3Rpb24gKGNlaWwpIHtcclxuICAgIGlmIChjZWlsKSByZXR1cm4gTWF0aC5mbG9vcihjZWlsLnogLyA5KTtcclxuICAgIHJldHVybiAwO1xyXG4gIH07XHJcbiAgXHJcbiAgaWYgKG1hdHJpeFtpLTFdKSB7XHJcbiAgICBjb3VudCArPSBjdChtYXRyaXhbaSAtIDFdW2ogLSAxXSk7XHJcbiAgICBjb3VudCArPSBjdChtYXRyaXhbaSAtIDFdW2pdKTtcclxuICAgIGNvdW50ICs9IGN0KG1hdHJpeFtpIC0gMV1baiArIDFdKTtcclxuICB9XHJcbiAgY291bnQgKz0gY3QobWF0cml4W2ldW2otMV0pO1xyXG4gIGNvdW50ICs9IGN0KG1hdHJpeFtpXVtqKzFdKTtcclxuICBcclxuICBpZiAobWF0cml4W2krMV0pIHtcclxuICAgIGNvdW50ICs9IGN0KG1hdHJpeFtpICsgMV1baiAtIDFdKTtcclxuICAgIGNvdW50ICs9IGN0KG1hdHJpeFtpICsgMV1bal0pO1xyXG4gICAgY291bnQgKz0gY3QobWF0cml4W2kgKyAxXVtqICsgMV0pO1xyXG4gIH1cclxuICBcclxuICBjb25zdCB2YWx1ZSA9IGNvdW50ICsgKG9sZENlbGwueiAlIDkpICsgY3Qob2xkQ2VsbCk7XHJcbiAgXHJcbiAgcmV0dXJuIG5ldyBTcXVhcmUodmFsdWUsIG9sZENlbGwudik7XHJcbn07XHJcblxyXG4vL9C60L7QvdGB0YLRgNGD0LrRgtC+0YBcclxudmFyIEJvYXJkID0gZnVuY3Rpb24obSxuKSB7XHJcbiAgICAvL9C80LDRgtGA0LjRhtCwIG0g0L3QsCBuXHJcbiAgICB0aGlzLm1hdHJpeCA9IFtdO1xyXG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7Ly/QtNC70Y8g0YbQuNC60LvQuNGH0LXRgdC60L7QuSDQvtCx0YDQsNCx0L7RgtC60LhcclxuICAgIHRoaXMubSA9IG07Ly/RgdGC0YDQvtC60LhcclxuICAgIHRoaXMubiA9IG47Ly/RgdGC0L7Qu9Cx0YbRi1xyXG5cclxuICAgIGZvcih2YXIgaT0wOyBpPG07IGkrKyl7XHJcbiAgICAgICAgdmFyIGxpbmUgPSBbXTtcclxuICAgICAgICBmb3IodmFyIGo9MDsgajxuOyBqKyspe1xyXG4gICAgICAgICAgICBsaW5lLnB1c2gobmV3IFNxdWFyZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tYXRyaXgucHVzaChsaW5lKTtcclxuICAgIH1cclxufTtcclxuLy/QvNC10YLQvtC00YtcclxuQm9hcmQucHJvdG90eXBlID0ge1xyXG4gICAgcmVzaXplIDogZnVuY3Rpb24gKG0sbikge1xyXG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBtYXRyaXggPSB0aGlzLm1hdHJpeDtcclxuICAgICAgICB2YXIgbyA9IG1hdHJpeC5sZW5ndGg7XHJcbiAgICAgICAgdmFyIHAgPSBtYXRyaXhbMF0ubGVuZ3RoO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ3Jlc2l6ZScsbyxwLCcgdG8gJyxtLG4pO1xyXG4gICAgICAgIGlmKHAgPiBuKXsvL9GD0LHQuNGA0LDQtdC8INGB0YLQvtC70LHRhtGLXHJcbiAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpPG87IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBtYXRyaXhbaV0uc3BsaWNlKG4tMSxwLW4pOy8v0LjQt9C80LXQvdC40YLRjCBsZW5ndGg/XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocCA8IG4pey8v0LTQvtCx0LDQstC70Y/QtdC8INGB0YLQvtC70LHRhtGLXHJcbiAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpPG87IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGo9cDsgajxuOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdHJpeFtpXS5wdXNoKG5ldyBTcXVhcmUoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobyA+IG0pey8v0YPQsdC40YDQsNC10Lwg0YHRgtGA0L7QutC4XHJcbiAgICAgICAgICAgIG1hdHJpeC5zcGxpY2UobS0xLG8tbSk7Ly/QuNC30LzQtdC90LjRgtGMIGxlbmd0aD9cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobyA8IG0pey8v0LTQvtCx0LDQstC70Y/QtdC8INGB0YLRgNC+0LrQuFxyXG4gICAgICAgICAgICBmb3IodmFyIGk9bzsgaTxtOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpbmUgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvcih2YXIgaj0wOyBqPG47IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS5wdXNoKG5ldyBTcXVhcmUoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBtYXRyaXgucHVzaChsaW5lLnNsaWNlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubSA9IG07XHJcbiAgICAgICAgdGhpcy5uID0gbjtcclxuICAgIH0sXHJcbiAgICBzdG9wIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIGNsZWFyIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPHRoaXMubTsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKHZhciBqPTA7IGo8dGhpcy5uOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXRyaXhbaV1bal0gPSBuZXcgU3F1YXJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc3RhcnQgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICB3b3JrZXIgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy/QvtCx0YXQvtC0INCy0YHQtdGFINGP0YfQtdC10Log0YEg0LfQsNC/0LjRgdGM0Y4g0L3QvtCy0L7Qs9C+INGB0L7RgdGC0L7Rj9C90LjRj1xyXG4gICAgICAgIHZhciBuZXdNYXRyaXggPSBbXTtcclxuICAgICAgICB2YXIgZmxhZyA9IGZhbHNlOy8v0LjQt9C80LXQvdC80LvQsNGB0Ywg0LvQuCDQvNCw0YLRgNC40YbQsD9cclxuICAgICAgICBmb3IodmFyIGk9MDsgaTx0aGlzLm1hdHJpeC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHZhciBuZXdMaW5lID0gW107XHJcbiAgICAgICAgICAgIGZvcih2YXIgaj0wOyBqPHRoaXMubWF0cml4WzBdLmxlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgIHZhciBjZWxsID0gdGhpcy5jZWxsKGksaik7XHJcbiAgICAgICAgICAgICAgICBuZXdMaW5lLnB1c2goY2VsbCk7XHJcbiAgICAgICAgICAgICAgICBpZihjZWxsICE9IHRoaXMubWF0cml4W2ldW2pdKSBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuZXdNYXRyaXgucHVzaChuZXdMaW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tYXRyaXggPSBuZXdNYXRyaXg7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLm1hdHJpeClcclxuICAgIH0sXHJcbiAgICBjZWxsIDogZnVuY3Rpb24gKGksaikge1xyXG4gICAgICAgIC8v0LLRi9GH0LjRgdC70Y/QtdGCINC90L7QstC+0LUg0YHQvtGB0YLQvtGP0L3QuNC1INC60LvQtdGC0LrQuFxyXG4gICAgICAgIC8v0YHQvtGB0LXQtNC4INC30LAg0L/RgNC10LTQtdC70LDQvNC4INC/0L7Qu9GPINGB0YfQuNGC0LDRjtGC0YHRjyDQvNC10YDRgtCy0YvQvNC4XHJcblxyXG4gICAgICAgIHJldHVybiBjZWxsMih0aGlzLm1hdHJpeCxpLGopO1xyXG4gICAgfSxcclxuICAgIHNldENlbGwgOiBmdW5jdGlvbiAoaSxqKSB7XHJcbiAgICAgICAgdGhpcy5tYXRyaXhbaV1bal0ueiArPSAxMDAwO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubWF0cml4W2ldW2pdLnYsdGhpcy5tYXRyaXhbaV1bal0ueik7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCB7Qm9hcmQsU3F1YXJlfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL21vZGVsL21vZGVsLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vJ3VzZSBzdHJpY3QnO1xyXG4vL2NvbG9yXHJcbnZhciBnZXRDb2xvciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgdmFyIGcgPSAxMjUrMTAqTWF0aC5jZWlsKHZhbHVlIC8gOCk7XHJcbiAgICBpZiAoZyA+IDI1NSkgZyA9IDI1NTtcclxuICAgIGlmIChnIDwgMCkgZyA9IDA7XHJcbiAgICByZXR1cm4gJ3JnYignK2cudG9TdHJpbmcoMTApKycsJyArIGcudG9TdHJpbmcoMTApKycsJyArIGcudG9TdHJpbmcoMTApKycpJztcclxufTtcclxuXHJcbi8v0L7RgtGA0LjRgdC+0LLQutCwINC80LDRgtGA0LjRhtGLXHJcbnZhciBwYWludGVyID0gZnVuY3Rpb24gKGJvYXJkLHRhYmxlV2lkdGgpIHtcclxuICAgIC8v0LfQsNC/0L7Qu9C90LXQvdC40LUg0YLQtdC70LAg0YLQsNCx0LvQuNGG0YtcclxuICAgIHZhciBtYXRyaXggPSBib2FyZC5tYXRyaXg7XHJcbiAgICB2YXIgbSA9IG1hdHJpeC5sZW5ndGg7XHJcbiAgICB2YXIgbiA9IG1hdHJpeFswXS5sZW5ndGg7XHJcbiAgICAvL2NvbnNvbGUubG9nKG0sbik7XHJcbiAgICB2YXIgd2lkdGggPSB0YWJsZVdpZHRoL247XHJcbiAgICB2YXIgaGVpZ2h0ID0gd2lkdGg7XHJcblxyXG4gICAgdmFyIHRib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcclxuICAgIGZvcih2YXIgaT0wOyBpPG07IGkrKyl7XHJcbiAgICAgICAgdmFyIHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgICBmb3IodmFyIGo9MDsgajxuOyBqKyspe1xyXG4gICAgICAgICAgICB2YXIgIHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICAgICAgdGQuc3R5bGUud2lkdGggPSB3aWR0aCsncHgnO1xyXG4gICAgICAgICAgICB0ZC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQrJ3B4JztcclxuICAgICAgICAgICAgdGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZ2V0Q29sb3IoMCk7XHJcbiAgICAgICAgICAgIC8vaWYobWF0cml4W2ldW2pdKSB0ZC5jbGFzc05hbWUgPSAnbGl2ZSc7XHJcbiAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRib2R5LmFwcGVuZENoaWxkKHRyKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGJvZHk7XHJcbn07XHJcblxyXG52YXIgbmV3VGFibGUgPSBmdW5jdGlvbiAoYm9hcmQsdGFibGUpIHtcclxuICAgIC8v0LTQu9GPICDRgdC+0LfQtNCw0L3QuNGPINC4INGA0LXRgdCw0LnQt9CwINGC0LDQsdC70LjRhtGLXHJcbiAgICB2YXIgdGJvZHkgPSBwYWludGVyKGJvYXJkLHRhYmxlLmNsaWVudFdpZHRoKTtcclxuICAgIGlmKHRhYmxlLmNoaWxkcmVuLmxlbmd0aCkgdGFibGUucmVwbGFjZUNoaWxkKHRib2R5LCB0YWJsZS5jaGlsZHJlblswXSk7XHJcbiAgICBlbHNlIHRhYmxlLmFwcGVuZENoaWxkKHRib2R5KTtcclxufTtcclxuXHJcbnZhciByZXBhaW50ZXIgPSBmdW5jdGlvbiAoYm9hcmQsdGFibGUpIHtcclxuICAgIC8v0LjQt9C80LXQvdC10L3QuNC1INC60LvQsNGB0YHQsCDRgyDRj9GH0LXQtdC6INGC0LDQsdC70LjRhtGLXHJcbiAgICB2YXIgbWF0cml4ID0gYm9hcmQubWF0cml4O1xyXG4gICAgdmFyIHRib2R5ID0gdGFibGUuY2hpbGRyZW5bMF07XHJcbiAgICB2YXIgbSA9IG1hdHJpeC5sZW5ndGg7XHJcbiAgICB2YXIgbiA9IG1hdHJpeFswXS5sZW5ndGg7XHJcbiAgICAvL2NvbnNvbGUubG9nKG0sbik7XHJcblxyXG4gICAgZm9yKHZhciBpPTA7IGk8bTsgaSsrKXtcclxuICAgICAgICBmb3IodmFyIGo9MDsgajxuOyBqKyspey8v0YHRgtGA0L7QutCwXHJcbiAgICAgICAgICAgIHZhciB0ZCA9IHRib2R5LmNoaWxkcmVuW2ldLmNoaWxkcmVuW2pdO1xyXG4gICAgICAgICAgICB0ZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBnZXRDb2xvcihtYXRyaXhbaV1bal0ueik7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbn07XHJcbmV4cG9ydCB7cGFpbnRlcixuZXdUYWJsZSxyZXBhaW50ZXJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdmlldy92aWV3LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=