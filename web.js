 document.body.insertAdjacentHTML("afterend", '<style>  #window{      display:block;      height:580px;      color: black;      width: 1106px;      min-width: 500px;      background: #f0eded;      border-radius: 5px;      -webkit-box-shadow: 0px 0px 20px rgba(0,0,0,0.75);      -moz-box-shadow: 0px 0px 20px rgba(0,0,0,0.75);     /*-webkit-transition:all 0.5s;      */      overflow: hidden;      font-family: Verdana, sans-serif;      font-weight: bold;      position: absolute;      z-index: 15;      left: 50%;      top: 50%;      transform: translate(-50%, -50%);      -ms-transform: translate(-50%, -50%);     /* for IE 9 */      -webkit-transform: translate(-50%, -50%);     /* for Safari */ } /* TOP BAR */  #topbar{      width: 100%;      height: 21px;      font-size: 16px;      font-family: "Myriad Pro", sans-serif;      text-shadow:0px 1px 0px rgba(255,255,255,0.25);      -webkit-box-shadow:0 1px 0 rgba(0,0,0,0.5);      -moz-box-shadow:0 1px 0 rgba(0,0,0,0.5); }  #topbar ul li {      float: left;      padding:0 10px;      height: 21px;      line-height: 24px; }  #topbar ul li:first-child{      font-size: 20px;      line-height: 26px;      margin-left: 5px; }  #topbar ul li:nth-child(2){      font-family: "Myriad-Semi", sans-serif; }  #topbar ul li:active{      background-image: -webkit-gradient(linear,left bottom,left top,color-stop(1, #4a82ff),color-stop(0, #0052fc));      color: #fff;      text-shadow: none; }  #toolbar{      width: 100%;      height: 25px;      background: grey;      border-radius:5px 5px 0 0;      background: #cfcfcf;     /* Old browsers */      background: -moz-linear-gradient(top, #cfcfcf 0%, #a8a8a8 100%);     /* FF3.6+ */      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#cfcfcf), color-stop(100%,#a8a8a8));     /* Chrome,Safari4+ */      background: -webkit-linear-gradient(top, #cfcfcf 0%,#a8a8a8 100%);     /* Chrome10+,Safari5.1+ */      background: -o-linear-gradient(top, #cfcfcf 0%,#a8a8a8 100%);     /* Opera 11.10+ */      background: -ms-linear-gradient(top, #cfcfcf 0%,#a8a8a8 100%);     /* IE10+ */      background: linear-gradient(top, #cfcfcf 0%,#a8a8a8 100%);     /* W3C */      -webkit-box-shadow:0px 1px 0px rgba(255,255,255,0.5) inset,0px 1px 0px #515151;      -moz-box-shadow:0px 1px 0px rgba(255,255,255,0.5) inset,0px 1px 0px #515151;      box-shadow:0px 1px 0px rgba(255,255,255,0.5) inset,0px 1px 0px #515151; }  #toolbar .top{      float: left;      width: 100%;      height: 23px; }  #toolbar .bottom{      float: left;      width: 100%;      height: 30px; } /*-----TRAFFIC LIGHTS-----*/  #toolbar #lights{      float: left;      position:relative;      top:4px;      left:7px; }  .light{      float:left;      width:14px;      height:14px;      border-radius:14px;      -webkit-box-shadow:0px 1px 0px rgba(255,255,255,0.5),0px 0px 3px #000 inset;      -moz-box-shadow:0px 1px 0px rgba(255,255,255,0.5),0px 0px 3px #000 inset;      box-shadow:0px 1px 0px rgba(255,255,255,0.5),0px 0px 3px #000 inset;      overflow: hidden; }  #lights:hover .glyph{      opacity: 1;      cursor:default; }  .light .shine{      width: 4px;      height:3px;      border-radius:10px;     /*background-image: -webkit-gradient(radial, center center, 0, center center, 3, from(rgba(255,255,255,1)), to(rgba(255,255,255,0)));      */      background: -moz-radial-gradient(center, ellipse cover, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);     /* FF3.6+ */      background-image: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,rgba(255,255,255,1)), color-stop(100%,rgba(255,255,255,0)));     /* Chrome,Safari4+ */      background: -webkit-radial-gradient(center, ellipse cover, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);     /* Chrome10+,Safari5.1+ */      background: -o-radial-gradient(center, ellipse cover, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);     /* Opera 12+ */      background: -ms-radial-gradient(center, ellipse cover, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);     /* IE10+ */      background: radial-gradient(center, ellipse cover, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);     /* W3C */ }  .light .glow{      width:14px;      height:8px;      background-image: -webkit-gradient(radial, center bottom, 0, center center, 5, from(rgba(255,255,255,0.75)), to(rgba(255,255,255,0)));      background: 0px 0px -moz-radial-gradient(bottom, cover, rgba(255,255,255,0.70) 0%, rgba(255,255,255,0) 80%);     /* FF3.6+ */ } /*--RED--*/  .red{      background: #f41b16;     /* Old browsers */      background: -moz-linear-gradient(top, #f41b16 0%, #fc7471 100%);     /* FF3.6+ */      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#f41b16), color-stop(100%,#fc7471));     /* Chrome,Safari4+ */      background: -webkit-linear-gradient(top, #f41b16 0%,#fc7471 100%);     /* Chrome10+,Safari5.1+ */      background: -o-linear-gradient(top, #f41b16 0%,#fc7471 100%);     /* Opera 11.10+ */      background: -ms-linear-gradient(top, #f41b16 0%,#fc7471 100%);     /* IE10+ */      background: linear-gradient(top, #f41b16 0%,#fc7471 100%);     /* W3C */ }  .red:active{      background: #972f2e;     /* Old browsers */      background: -moz-linear-gradient(top, #972f2e 0%, #fc7471 100%);     /* FF3.6+ */      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#972f2e), color-stop(100%,#fc7471));     /* Chrome,Safari4+ */      background: -webkit-linear-gradient(top, #972f2e 0%,#fc7471 100%);     /* Chrome10+,Safari5.1+ */      background: -o-linear-gradient(top, #972f2e 0%,#fc7471 100%);     /* Opera 11.10+ */      background: -ms-linear-gradient(top, #972f2e 0%,#fc7471 100%);     /* IE10+ */      background: linear-gradient(top, #972f2e 0%,#fc7471 100%);     /* W3C */ }  .red .shine{      position: relative;      top: -23px;      left: 5px; }  .red .glow{      position: relative;      top: -22px; }  .red .glyph{      position: relative;      top: -6px;      left: 3px;      font-size: 14px;      font-weight: bold;      color: #9b3a36;      z-index: 50;      opacity: 0; } /*--YELLOW--*/  .yellow{      background: #f4a316;     /* Old browsers */      background: -moz-linear-gradient(left, #f4a316 0%, #fcc371 100%);     /* FF3.6+ */      background: -webkit-gradient(linear, left top, right top, color-stop(0%,#f4a316), color-stop(100%,#fcc371));     /* Chrome,Safari4+ */      background: -webkit-linear-gradient(left, #f4a316 0%,#fcc371 100%);     /* Chrome10+,Safari5.1+ */      background: -o-linear-gradient(left, #f4a316 0%,#fcc371 100%);     /* Opera 11.10+ */      background: -ms-linear-gradient(left, #f4a316 0%,#fcc371 100%);     /* IE10+ */      background: linear-gradient(left, #f4a316 0%,#fcc371 100%);     /* W3C */      margin:0px 7px; }  .yellow:active{      background: #ae4f1e;     /* Old browsers */      background: -moz-linear-gradient(top, #ae4f1e 0%, #fcc371 100%);     /* FF3.6+ */      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ae4f1e), color-stop(100%,#fcc371));     /* Chrome,Safari4+ */      background: -webkit-linear-gradient(top, #ae4f1e 0%,#fcc371 100%);     /* Chrome10+,Safari5.1+ */      background: -o-linear-gradient(top, #ae4f1e 0%,#fcc371 100%);     /* Opera 11.10+ */      background: -ms-linear-gradient(top, #ae4f1e 0%,#fcc371 100%);     /* IE10+ */      background: linear-gradient(top, #ae4f1e 0%,#fcc371 100%);     /* W3C */ }  .yellow .shine{      position: relative;      top: -23px;      left: 5px; }  .yellow .glow{      position: relative;      top: -22px; }  .yellow .glyph{      position: relative;      top: -7px;      left: 4px;      font-size: 24px;      color: #854322;      z-index: 50;      opacity: 0;      -webkit-transform: scaleY(1.5) scaleX(1.3); } /*--GREEN--*/  .green{      background: #4cae2e;     /* Old browsers */      background: -moz-linear-gradient(top, #4cae2e 0%, #dafc71 100%);     /* FF3.6+ */      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#4cae2e), color-stop(100%,#dafc71));     /* Chrome,Safari4+ */      background: -webkit-linear-gradient(top, #4cae2e 0%,#dafc71 100%);     /* Chrome10+,Safari5.1+ */      background: -o-linear-gradient(top, #4cae2e 0%,#dafc71 100%);     /* Opera 11.10+ */      background: -ms-linear-gradient(top, #4cae2e 0%,#dafc71 100%);     /* IE10+ */      background: linear-gradient(top, #4cae2e 0%,#dafc71 100%);     /* W3C */ }  .green:active{      background: #48752b;     /* Old browsers */      background: -moz-linear-gradient(top, #48752b 0%, #dafc71 100%);     /* FF3.6+ */      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#48752b), color-stop(100%,#dafc71));     /* Chrome,Safari4+ */      background: -webkit-linear-gradient(top, #48752b 0%,#dafc71 100%);     /* Chrome10+,Safari5.1+ */      background: -o-linear-gradient(top, #48752b 0%,#dafc71 100%);     /* Opera 11.10+ */      background: -ms-linear-gradient(top, #48752b 0%,#dafc71 100%);     /* IE10+ */      background: linear-gradient(top, #48752b 0%,#dafc71 100%);     /* W3C */ }  .green .shine{      position: relative;      top: -22px;      left: 5px; }  .green .glow{      position: relative;      top: -22px; }  .green .glyph{      position: relative;      top: -6px;      left: 3px;      font-size: 14px;      font-weight: bold;      color: #25571d;      z-index: 50;      opacity: 0; } /* Horrible to do this for firefox */  @-moz-document url-prefix() {      .red .glyph {          position: relative;          top: -4px;     }      .yellow .glyph {          top: -4px;          left: 3px;     }      .green .glyph{          position: relative;          top: -4px;     } } /*-----TITLE-----*/  #title{      position: relative;      top:4px;      width:40%;      text-align: center;      font-family: "Myriad Pro", sans-serif;      font-size: 14px;      text-shadow: 0px 1px 0px rgba(255,255,255,0.5);      line-height: 14px; }  .folder{      float: left;      margin-right:5px; }  .folder .tab{      width:4px;      height:2px;      background:#a4c5da;      border:1px solid #728ea3;      border-bottom: none;      border-radius:2px 2px 0px 0px;      -webkit-box-shadow:0px -1px 0px #99b5c7 inset;      margin-left: 1px;      z-index: 5000;      margin-bottom: -1px; }  .folder .body{      width: 14px;      height: 10px;      border:1px solid #6e8ba1;      background: #b8cfe0;     /* Old browsers */      background: -moz-linear-gradient(top, #b8cfe0 0%, #86adc8 100%);     /* FF3.6+ */      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#b8cfe0), color-stop(100%,#86adc8));     /* Chrome,Safari4+ */      background: -webkit-linear-gradient(top, #b8cfe0 0%,#86adc8 100%);     /* Chrome10+,Safari5.1+ */      background: -o-linear-gradient(top, #b8cfe0 0%,#86adc8 100%);     /* Opera 11.10+ */      background: -ms-linear-gradient(top, #b8cfe0 0%,#86adc8 100%);     /* IE10+ */      background: linear-gradient(top, #b8cfe0 0%,#86adc8 100%);     /* W3C */      z-index: -50;      -webkit-box-shadow:0px 1px 0px rgba(255,255,255,0.25) inset,0px 1px 0px rgba(0,0,0,0.2);      -moz-box-shadow:0px 1px 0px rgba(255,255,255,0.25) inset,0px 1px 0px rgba(0,0,0,0.2); }  #nav{      margin: 1px 8px;      float: left; }  #view{      margin: 2px 0 0 110px;      display: inline-block; }  .control_box{      height:20px;      border-radius: 3px;      border: 1px solid #555;      background-image: -webkit-gradient(linear,left bottom,left top,color-stop(1, #fefefe),color-stop(0, #b8b8b8));      box-shadow:0px 1px 0px rgba(255,255,255,0.25); }  .control_box .control{      height:20px;      border-right: 1px solid #2e2e2e;      float: left;      text-align: center;      width: 27px; }  .control:last-child{      border-right: 0px solid !important; }  .control:active{      background: #b0afb0;      -webkit-box-shadow:0px 0px 4px #000 inset; }  .active{      background: #707070 !important;      -webkit-box-shadow:0px 3px 4px rgba(0,0,0,0.6) inset !important; }  #body {      font-family: Verdana, sans-serif;      line-height: 1em;      font-size:13px;      float: left;      width: 100%;      min-height:130px;      background:#f0eded;      padding:10px;      line-height:1.5em;      height: 40%; }  #body p {      color: #000; }  @keyframes blink {      0% {          background:rgba(99,222,0,100);     }      100% {          background:rgba(99,222,0,0);     } }  @-webkit-keyframes blink {      0% {          background:rgba(99,222,0,100);     }      100% {          background:rgba(99,222,0,0);     } }  @-moz-keyframes blink {      0% {          background:rgba(99,222,0,100);     }      100% {          background:rgba(99,222,0,0);     } }  .cursor {      background:#63de00;      display:inline-block;      width:11px;      height:19px;      margin-bottom:-3px; }  .cursor {      -webkit-animation-name: blink;      -webkit-animation-duration: 1.5s;      -webkit-animation-iteration-count: infinite;      -moz-animation-name: blink;      -moz-animation-duration: 1.5s;      -moz-animation-iteration-count: infinite; }  #body p::-webkit-selection {      background:#0b209e; }  #body p::selection {      background:#0b209e; }  #body p::-moz-selection {      background:#0b209e; }  #body p {      margin-top:5px;      margin-bottom:5px;      font-size:13px; }  #content{      float: left;      margin-top: 1px; }  #foot{      height: 23px;      width: 100%;      float: left;      background-image: -webkit-gradient(linear,left bottom,left top,color-stop(1, #cbcbcb),color-stop(0, #fff));      border-top:1px solid #515151;      border-radius:0 0 5px 5px; }  #foot .handle{      width: 11px;      height: 11px;      float: right;      margin: 6px;      overflow: hidden; }  .handle .grip{      -webkit-transform: rotate(45deg) scaley(3);      margin: 2px 0 0 2px;      color: #fff;      text-shadow: 1px 1px 0 #c6c6c6;      font-size: 14px; }  .icon{      width: 86px;      height: 100px;      margin: 20px;      float: left;      font-family: "Myriad Pro", sans-serif;      text-align: center;      font-size: 12px; }  .icon .frame{      width: 82px;      height: 82px;      border-radius: 5px;      border: 2px solid transparent; }  .icon .name{      color: #000;      padding-top: 3px;      border-radius:15px;      width: 55px;      margin: 5px 0 0 15px; }  .icon .folder{      margin:15px 0 0 6px; }  .tbl{      width: 100% }  td {      vertical-align: top;      width:50%; }  .wdb-stats, .wdb-flex-container {      display: flex;      align-items: stretch; 	 width:550px; 	 max-width:550px; 	 height: 150px; }  .wdb-stats div {      flex-grow: 1;      padding: 2px 5px; 	 white-space: nowrap; 	 overflow:hidden; }  .wdb-stats div li {      font-size: 15px;      font-weight: bold;      list-style: none; 	 white-space: nowrap; 	 overflow:hidden; }  .clearfix::after {      content: "";      clear: both;      display: table; }  .float-left {      float: left!important; }  .float-right {      float: right!important; }  .wraph{      width:550px; 	 max-width:550px;      height: 100%;      margin: 0;      padding: 0;      overflow: auto;      overflow-x: auto; }  #wdbWrapHistory {      height: 200px;      padding: 3px; }  #wdbWrapHistory {      overflow-x: auto; }  #wdbWrapHistory table {      border-collapse: collapse;      font-size: 11px!important; }  #wdbWrapHistory table thead tr th {      text-align: left;      padding: 1px;      border: 1px solid #fff; }  #wdbHistory tr {      border-bottom: 1px solid #fff;      color: #000!important; }  #wdbHistory tr:last-child {      border-bottom: 1px solid #ccc; }  #wdbHistory tr td {      all: revert;      white-space: nowrap;      padding: 1.5px;      border-right: 1px solid #fff;      border-left: 1px solid #fff; }  #wdbHistory tr td:first-child {      border-left: 1px solid #ccc; }  #wdbHistory tr td:last-child {      border-right: 1px solid #ccc; }  #wdbHistory tr td input {      all: revert; }  .btn-grad {      all: revert;      cursor: pointer;      background: #616060;      text-align: center;      transition: 0.5s;      background-size: 70%;      border: #ffc107;      border-radius: 3px;      font-weight: bold;      font-size: 12px; 	 color: white; }  .btn-grad:hover {      background-position: right center;      text-decoration: none; }  .btn-grad:active {      opacity: .65; }  .btn-grad:disabled {      cursor: auto;      opacity: .65;      color: #fff; }  .btn-control {      padding-top: 10px!important;      padding-bottom: 10px!important; }  #wdbMenu {      padding: 3px; }  #wdbMenu select, #wdbMenu span input[type=number] {      all: revert;      background: #fff!important;      padding: 3px 5px;      border: 1px solid #ccc;      border-radius: 0; }  #window{      color: black; }  #wdbLog {      border-spacing: 0px;      table-layout: fixed;      margin-left: auto;      margin-right: auto;      font-size: 11px;      background: #f0eded;      word-wrap: break-word;      text-align: left; }  #wdbLog, td, tr {      word-wrap: break-word;      text-align: left; }  #result {      position: relative;      padding-top: 2px;      padding-left: 20px;      padding-bottom: 10px;      height: 40px;      text-align: center;      vertical-align: middle;      font-size: 30px;      font-weight: bold;      font-family: Verdana, sans-serif; }  html {      font-family: Verdana, sans-serif;      font-weight: bold; }  .switch {      position: relative;      display: inline-block;      width: 40px;      height: 19px; }  .switch input {      opacity: 0;      width: 0;      height: 0; }  .slider {      position: absolute;      cursor: pointer;      top: 0;      left: 0;      right: 0;      bottom: 0;      background-color: #ccc;      -webkit-transition: .4s;      transition: .4s; }  .slider:before {      position: absolute;      content: "";      height: 19px;      width: 19px;      left: 0px;      bottom: 0px;      background-color: black;      -webkit-transition: .4s;      transition: .4s; }  input:checked + .slider {      background-image: linear-gradient(to right, #00E701 0%, #00E701 51%, #00E701 100%); }  input:focus + .slider {      box-shadow: 0 0 1px #2196F3; }  input:checked + .slider:before {      -webkit-transform: translateX(24px);      -ms-transform: translateX(24px);      transform: translateX(24px); } /* Rounded sliders */  .slider.round {      border-radius: 34px; }  .slider.round:before {      border-radius: 50%; }  .fastmode{      float: right;      font-weight: bold; }  td {      word-wrap: break-word;      text-align: left; }  tr {      word-wrap: break-word;      text-align: left; }  </style> <div id="window">     <div id="toolbar">         <div class="top">             <div id="lights">                 <div class="light red">                     <div class="glyph">×</div>                     <div class="shine"></div>                     <div class="glow"></div>                 </div>                 <div class="light yellow">                     <div class="glyph">-</div>                     <div class="shine"></div>                     <div class="glow"></div>                 </div>                 <div class="light green">                     <div class="glyph">+</div>                     <div class="shine"></div>                     <div class="glow"></div>                 </div>             </div>             <center>                 <div id="title"> github.com/poky1084 </div>             </center>             <div id="bubble">                 <div class="shine"></div>                 <div class="glow"></div>             </div>         </div>     </div>     <div id="body">         <table class="tbl">             <tr>                 <td>                     <div class="wdb-stats" id="wdbStats">                         <div>                             <li class="clearfix"> <span class="float-left">Balance:</span> <span class="float-right"><span id="wdbBalance">0.00000000</span></span>                             </li>                             <li class="clearfix"> <span class="float-left">Wagered:</span> <span class="float-right">(<span id="wdbPercentWagered">0.00</span>x) <span id="wdbWagered">0.00000000</span></span>                             </li>                             <li class="clearfix"> <span class="float-left">Profit:</span> <span class="float-right" id="wdbWrapPercentProfit">(<span id="wdbPercentProfit">0.00</span>%) <span id="wdbProfit">0.00000000</span></span>                             </li>                             <li class="clearfix"> <span class="float-left">W/L/T:</span> </li>                             <li class="clearfix"> <span class="float-left">H/L/Current:</span> </li>                             <li class="clearfix"> <span class="float-left">Time:</span> </li>                         </div>                         <div>                             <li class="clearfix"> <span class="float-left">MaxBet:</span> <span class="float-right"><span id="wdbHighBet">0.00000000</span></span>                             </li>                             <li class="clearfix"> <span class="float-left">MaxLose:</span> <span class="float-right"><span id="wdbHighLose">0.00000000</span></span>                             </li>                             <li class="clearfix"> <span class="float-left">MaxProfit:</span> <span class="float-right"><span id="wdbHighProfit">0.00000000</span></span>                             </li>                             <li class="clearfix"> <span class="float-right"><span id="wdbBets"><span style="">0</span> / <span style="">0</span> / 0</span>                                 </span>                             </li>                             <li class="clearfix"> <span class="float-right"><span id="wdbHighLowStreak"><span style="">0</span> / <span style="">0</span> / <span id="currentstrk">0</span></span>                                 </span>                             </li>                             <li class="clearfix"> <span class="float-right"><span id="wdbTime">0:0:0:0</span></span>                             </li>                         </div>                     </div>                 </td>                 <td>                     <div class="half" id="chartContainer" style="height: 150px; width: 540px;"></div>                 </td>             </tr>             <tr>                 <td>                     <div style="flex-grow: 1;width: 520px;">                         <div id="result"> </div>                         <div class="wraph" id="wdbWrapHistory">                             <table>                                 <thead>                                     <tr>                                         <th>Bets</th>                                         <th>Game</th>                                         <th>Amount</th>                                         <th>High</th>                                         <th>Multiplier</th>                                         <th>Profit</th>                                         <th>Payout</th>                                         <th>Target</th>                                         <th>Roll</th>                                         <th>Settings</th>                                         <th>BetID</th>                                     </tr>                                 </thead>                                 <tbody id="wdbHistory"></tbody>                             </table>                         </div>                     </div>                     <div id="wdbWrapLog">                         <table id="wdbLog" class="wraph" style="word-wrap: break-word; width: 100%; height: 170px;">                             <tr>                                 <td>‏‏‎ ‎</td>                             </tr>                             <tr>                                 <td>‏‏‎ ‎</td>                             </tr>                             <tr>                                 <td>‏‏‎ ‎</td>                             </tr>                             <tr>                                 <td>‏‏‎ ‎</td>                             </tr>                             <tr>                                 <td>‏‏‎ ‎</td>                             </tr>                             <tr>                                 <td>‏‏‎ ‎</td>                             </tr>                             <tr>                                 <td>‏‏‎ ‎</td>                             </tr>                             <tr>                                 <td>‏‏‎ ‎</td>                             </tr>                             <tr>                                 <td>‏‏‎ ‎</td>                             </tr>                         </table>                     </div>                 </td>                 <td>                     <div id="wdbMenu">                         <div style="padding: 5px 2px 5px">                             <button class="btn-grad" id="wdbSaveScriptButton">Save</button> 							<button id="resetall" class="btn-grad">ResetAll</button> 							<button id="refresh" class="btn-grad">CheckBalance</button>                             <div class="fastmode"> Fast Mode:                                 <label class="switch">                                     <input id="speedChange" type="checkbox"> <span class="slider round"></span> </label>                             </div>                         </div>                     </div>                     <textarea id="editor"></textarea>                     <div id="wdbControlMenu">                         <div id="wdbMenu">                             <button id="wdbStartButton" class="btn-grad btn-control" style="width: 100px;">Start</button>                             <button id="wdbStopButton" class="btn-grad btn-control" style="width: 100px;">Stop</button>                             <select id="wdbMenuCoin" class="wdb-select">                                 <option value="btc">BTC</option>                             </select>                             <select id="gameselect" class="gameselect">                                 <option value="dice" selected="selected">dice</option>                                 <option value="balls">balls</option>                             </select>                             <select id="themebot" class="themebot">                                 <option value="light" selected="selected">light</option>                                 <option value="dark">dark</option>                                 <option value="blue">blue</option>                                 <option value="black">black</option>                             </select>                                                     </div>                     </div>                 </td>             </tr>         </table>         <p> </p>         <div class="cursor"></div>     </div> </div>')
 
 
let currency = "btc"
var token = "";

var target_multi = 1.01;
var basebet = 0;
var amount = basebet;
var running = true;
var nextbet = 0;
var win = false;

var bethigh = false;
var chance = 49.5

var losestreak = 0;
var winstreak  = 0;
var highest_streak = [0];
var lowest_streak = [0];
var current_balance = 0;
var balance = 0;
var betcount = 0;
var bets = 0
var wins = 0;
var losses = 0;
var wagered = 0;
var profit_total = 0;
var highest_profit = [0];
var lowest_profit = [0];
var highest_bet = [0];
var currentstreak = 0;
var profit = 0;
var previousbet = 0;
var currentprofit = 0;
var current_profit = 0;
var game = "dice";
var currencyid = {}

var lastBet = {'amount': 0, 'win': false, 'Roll': 0, 'payoutMultiplier': 0, 'chance': 0, 'target': 0, 'payout': 0, 'percent': 0, 'targetNumber': 0}

var dps = []
var chart = ''
var color = "#f72a42"

var started_bal = 0;

var condition1 = "BELOW";

dobet = function(){}

var stopped = true;
var bet_found = false;
var run_clicked = false;
var bet_placed = false;
var starting_done = false;
var cashedoutauto = false;
var bet_has_been_made = false;
var dobet_run = false;
var crash_bet_placed = false;
var slide_bet_placed = false;
var crash_game_ran = false;
var slide_game_ran = false;
var make_slide_bet = false;
let speedmode = false;

var gamelist = {}
var makecount = 0
var id = {}
var betidentifier = "identity01"
var bgChart = "#f0eded"
var betlist = []

let mines = 1
let fields = [1,2,3]
let risk = "low"
let numbers = [0,1,2,3,4,5,6,7,8,9]
let rows = 8
let segments = 10
let chips = [{"value":"colorBlack", "amount":0.0001}]
let multiplier_start = 1
let crash_bet_possible = true;

let kenorisk = risk
let	kenoselected = numbers
let	minecount = mines
let	fieldcount = fields
let	plinkorows = rows
let	plinkorisk = risk
let	wheelrisk = risk
let	wheelsegments = segments
let	selection = chips

let eggs = [0]
let difficulty = "easy"
let dragondifficulty = difficulty
let dragoneggs = eggs

let banker = 0
let player = 0
let tie = 0
let baccarattie = tie
let baccaratplayer = player
let baccaratbanker = banker

 function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
 
token = localStorage.getItem("token")

function randomString(length) {
	var chars = '0123456789abcdefghijklmnopqrstuvwxyz';
	var result = '';
	for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
	return result;
}

function selectElement(id, valueToSelect) {    
    let element = document.getElementById(id);
    element.value = valueToSelect;
} 


function addJs(src, cb) {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = src;
    s.onload = cb;
    document.head.appendChild(s);
}

function addCss(src, cb) {
    var s = document.createElement('link');
    s.rel = 'stylesheet';
    s.href = src;
    s.onload = cb;
    document.head.appendChild(s);
}

function getMyJS(url, callback){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState !== 4) {
			return
		}
		if (xhr.status === 200) { 
			var s = document.createElement('script');
			s.text = xhr.responseText;
			document.body.appendChild(s);
		} else {
			console.log('Error', xhr.responseText);
		}
	};
	xhr.onload = callback;
	xhr.send();
}
addJs('https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.62.3/codemirror.min.js', () => {	
addJs('https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/javascript/javascript.min.js', () => {	
addJs('https://canvasjs.com/assets/script/canvasjs.min.js', () => { addBot() })})})

var editor = ''
addCss('https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/theme/darcula.min.css', () => {})
addCss('https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.css', () => {})
//addJs('https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js', () => {})

let theme = "light"

function addBot(){
	
	editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
		mode: "javascript",
		lineNumbers: true,
	});
	
	editor.save();
	editor.setSize(530, 300);
	
drawChart();

if(localStorage.getItem("jscode") != null){
	editor.setValue(localStorage.getItem("jscode"));
} else {
	editor.setValue(`chance=49.5 
bethigh=true
nextbet=0.00001
basebet=nextbet

dobet = function() {   
	if (win) {     
    	nextbet=basebet   
    } else {    
    	nextbet=nextbet*2   
    } 
	log("Betting "+nextbet+" on "+chance+" chance.")
}`);
}

if(localStorage.getItem("currenc") != null){
	currency = localStorage.getItem("currenc");
	selectElement('wdbMenuCoin', currency);
	
} 

if (localStorage.getItem("gameselect") != null) {
	document.getElementById("gameselect").value = localStorage.getItem("gameselect");
	game = document.getElementById("gameselect").value;
}

if (localStorage.getItem("themebot") != null) {
	theme = localStorage.getItem("themebot");
	selectElement('themebot', theme);
	if(theme == "dark"){
		bgChart = "#383838"
		drawChart();
		document.getElementById("body").style.background="#383838";
		document.getElementById("window").style.background="#383838";
		document.getElementById("wdbLog").style.background="#383838";
		document.getElementById("window").style.color="white";
		document.getElementsByClassName("CodeMirror")[0].style.background = "white"
		document.getElementsByClassName("CodeMirror")[0].style.color = "black"				
		document.getElementById("result").style.color = "white";
						
	} else if(theme == "light") {
		bgChart = "#f0eded"
		drawChart();
		document.getElementById("body").style.background="#f0eded";
		document.getElementById("window").style.background="#f0eded";
		document.getElementById("wdbLog").style.background="#f0eded";
		document.getElementById("window").style.color="black";
		document.getElementsByClassName("CodeMirror")[0].style.background = "white"
		document.getElementsByClassName("CodeMirror")[0].style.color = "black"
		document.getElementById("result").style.color = "black";
		
	} else if(theme == "blue") {
		bgChart = "#213743"
		drawChart();
		document.getElementById("body").style.background="#213743";
		document.getElementById("window").style.background="#213743";
		document.getElementById("wdbLog").style.background="#213743";
		document.getElementById("window").style.color="white";
		document.getElementsByClassName("CodeMirror")[0].style.background = "white"
		document.getElementsByClassName("CodeMirror")[0].style.color = "black"
		document.getElementById("result").style.color = "white";
	} else if(theme == "black") {
		bgChart = "black"
		drawChart();
		document.getElementById("body").style.background="black";
		document.getElementById("window").style.background="black";
		document.getElementById("wdbLog").style.background="black";
		document.getElementById("window").style.color="#00E701";
		document.getElementsByClassName("CodeMirror")[0].style.background = "white"
		document.getElementsByClassName("CodeMirror")[0].style.color = "black"
		document.getElementById("result").style.color = "white";
	}

}

userBalances();

	const isMobile = navigator.maxTouchPoints > 2;
	if (isMobile) {
		document.getElementById("window").style.overflowY = "visible";
		document.getElementById("window").style.overflowX = "visible";
		document.getElementById("window").style.width = "570px"
		document.getElementById("wdbLog").style.width = "570px"
		document.getElementsByClassName("tbl")[0].children[0].children[0].getElementsByTagName("td")[1].style.display = "block"
		document.getElementsByClassName("tbl")[0].children[0].children[0].getElementsByTagName("td")[0].style.display = "block"
		document.getElementsByClassName("tbl")[0].getElementsByTagName("td")[0].style.display =  "block"
		document.getElementsByClassName("tbl")[0].getElementsByTagName("td")[1].style.display =  "block"
		document.getElementsByClassName("tbl")[0].getElementsByTagName("td")[2].style.display =  "block"
		document.getElementsByClassName("tbl")[0].getElementsByTagName("td")[12].style.display = "block"
	}
};

// drag and drop bot
var draggin = false
var mydiv = document.getElementById("toolbar");
var mywindow = document.getElementById('window')

function onMouseDrag({ movementX, movementY }) {
    let getContainerStyle = window.getComputedStyle(mywindow);
    let leftValue = parseInt(getContainerStyle.left);
    let topValue = parseInt(getContainerStyle.top);
	
	if(draggin){
    mywindow.style.left = `${leftValue + movementX}px`;
    mywindow.style.top = `${topValue + movementY}px`;
	}
	
}

mydiv.addEventListener("mousedown", () => {
	draggin = false
    mydiv.addEventListener("mousemove", onMouseDrag);
});
mydiv.addEventListener("mouseup", () => {
	draggin = false
    mydiv.removeEventListener("mousemove", onMouseDrag);
});

document.body.addEventListener("mouseup", () => {
	draggin = false
});



/*
var editorSave = document.getElementById("editor");
editorSave.addEventListener('input', function() {localStorage.setItem("jscode", editor.getValue()); }, false);
*/
var downloadBtn = document.getElementById("wdbSaveScriptButton");

downloadBtn.addEventListener('click', function() { downloadFile(); }, false);

var btnReset = document.getElementById("resetall");

btnReset.addEventListener('click', function() { resetAll(); }, false);

var btnStart = document.getElementById("wdbStartButton");

btnStart.addEventListener('click', function() {  start();}, false);

var btnStop = document.getElementById("wdbStopButton");
btnStop.addEventListener('click', function() {  btnStart.disabled = false; run_clicked = false; running = false; dobet = function(){} }, false);

var btnBalance = document.getElementById("refresh");
btnBalance.addEventListener('click', function() { userBalances(); }, false);

function userBalances(){
	
	fetch('https://' +  window.location.host + '/api/payment-methods', {
		method: 'get',
		headers: { 'Content-Type': 'application/json', 'Authorization': "Bearer " + token},
	})
	.then(res => res.json())
	.then(json => currencyList(json))
	.catch(function(err, json) {
		//console.log(err, json);
	});
}

function currencyList(json){
	currencyid = {};
	document.getElementById("wdbMenuCoin").innerHTML = "";
	select = document.getElementById('wdbMenuCoin');
	for (var i = 0; i < json.length; i++)
	{
		var opt = document.createElement('option');
		opt.value = json[i].balances.currency.asset;
		opt.innerHTML = json[i].balances.currency.asset;
		select.appendChild(opt);
		currencyid[json[i].balances.currency.asset] = json[i].id
		
	}
	selectElement('wdbMenuCoin', currency);
	balance = 0;
	var balanc = document.getElementById("wdbBalance");
	balanc.innerHTML = balance.toFixed(8);
	for (var i = 0; i < json.length; i++)
	{
		if (json[i].balances.currency.asset == currency)
		{
			current_balance = parseFloat(json[i].balances.amount);
			balance = current_balance;
			var balan = document.getElementById("wdbBalance");
			balan.innerHTML = balance.toFixed(8);
			started_bal = balance;

		}
	}
	
}


function vault(e){

 var client = e;
 if(client == undefined){
	return log("Please specify vault amount.")
 }
var body = {
    "operationName": "VaultDeposit",
    "variables": {
        "data": {
            "currency": currency.toUpperCase(),
            "amount": JSON.stringify(client)
        }
    },
    "query": "mutation VaultDeposit($data: VaultDepositInput!) {\n  vaultDeposit(data: $data) {\n    id\n    type\n    currency\n    amount\n    createdAt\n    __typename\n  }\n}"
	}
	fetch('https://' +   window.location.host + '/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', 'X-Correlation-Id':localStorage.getItem('BROWSER_ID') + "-" + randomString(21) + "-t::" + localStorage.getItem('CORRELATION_USER_ID'), 'Authorization': "Bearer " + token},
	})
	.then(res => res.json())
	.then(json => outvault(json))
	.catch(function(err, json) {
		//console.log(err);
		setTimeout(() => {
			//initUser();							
		}, "2000");
	});
}

function outvault(json){
	if(json.errors != undefined){
		log(json.errors[0].message);
	} else {
		log("Deposited " + parseFloat(json.data.vaultDeposit.amount).toFixed(10) + " to vault.")
	}

}

function log(val){
	var table2 = document.getElementById("wdbLog");
	var row = document.createElement("tr");
	var tdtext = document.createElement("td");
	tdtext.innerHTML = val
	row.appendChild(tdtext);
	table2.prepend(row);
	
	if (table2.rows.length > 15)
	{
		table2.deleteRow(table2.rows.length - 1);
	}
}

function stop(){
	running = false;
	run_clicked = false;
	stopped = true;
	dobet = function() {}
	btnStart.disabled = false; 
}

function resetAll(){
 resetstats();
 resetChart();
 deleteTable();
 deleteLogs();
 userBalances();
}

function deleteLogs(){
	document.getElementById("wdbLog").innerHTML = "";
	for(var i = 0; i < 10; i++){
		var table2 = document.getElementById("wdbLog");
		var row = document.createElement("tr");
		var tdtext = document.createElement("td");
		tdtext.innerHTML = "‏‏‎ ‎"
		row.appendChild(tdtext);
		table2.prepend(row)
	}
}



var gameselection = document.getElementById("gameselect");

gameselection.addEventListener('change', function(e) {  
	let gamevalue = document.getElementById("gameselect").value
    localStorage.setItem("gameselect", gamevalue);
	game = document.getElementById("gameselect").value;
	stop();
	document.getElementById("result").innerHTML = ""
	if(theme == "light"){
		document.getElementById("result").style.color = "black";
	} else {
		document.getElementById("result").style.color = "white";
	}
}, false);

var themebots = document.getElementById("themebot");

themebots.addEventListener('change', function(e) {  
	theme = document.getElementById("themebot").value
    localStorage.setItem("themebot", theme);
	if(theme == "dark"){
		bgChart = "#383838"
		drawChart();
		document.getElementById("body").style.background="#383838";
		document.getElementById("window").style.background="#383838";
		document.getElementById("wdbLog").style.background="#383838";
		document.getElementById("window").style.color="white";
		document.getElementsByClassName("CodeMirror")[0].style.background = "white"
		document.getElementsByClassName("CodeMirror")[0].style.color = "black"				
		document.getElementById("result").style.color = "white";
						
	} else if(theme == "light") {
		bgChart = "#f0eded"
		drawChart();
		document.getElementById("body").style.background="#f0eded";
		document.getElementById("window").style.background="#f0eded";
		document.getElementById("wdbLog").style.background="#f0eded";
		document.getElementById("window").style.color="black";
		document.getElementsByClassName("CodeMirror")[0].style.background = "white"
		document.getElementsByClassName("CodeMirror")[0].style.color = "black"
		document.getElementById("result").style.color = "black";
		
	} else if(theme == "blue") {
		bgChart = "#213743"
		drawChart();
		document.getElementById("body").style.background="#213743";
		document.getElementById("window").style.background="#213743";
		document.getElementById("wdbLog").style.background="#213743";
		document.getElementById("window").style.color="white";
		document.getElementsByClassName("CodeMirror")[0].style.background = "white"
		document.getElementsByClassName("CodeMirror")[0].style.color = "black"
		document.getElementById("result").style.color = "white";
	} else if(theme == "black") {
		bgChart = "black"
		drawChart();
		document.getElementById("body").style.background="black";
		document.getElementById("window").style.background="black";
		document.getElementById("wdbLog").style.background="black";
		document.getElementById("window").style.color="#00E701";
		document.getElementsByClassName("CodeMirror")[0].style.background = "white"
		document.getElementsByClassName("CodeMirror")[0].style.color = "black"
		document.getElementById("result").style.color = "white";
	}
	if(theme == "light"){
		document.getElementById("result").style.color = "black";
	} else {
		document.getElementById("result").style.color = "white";
	}
}, false);

var wdbMenuCoins = document.getElementById("wdbMenuCoin");

wdbMenuCoins.addEventListener('change', function(e) {  
	currency = document.getElementById("wdbMenuCoin").value
    localStorage.setItem("currenc", currency);
	userBalances();
}, false);

function resetstats(){
	losestreak = 0;
	winstreak  = 0;
	highest_streak = [0];
	lowest_streak = [0];
	current_balance = 0;
	betcount = 0;
	bets = 0
	wins = 0;
	losses = 0;
	wagered = 0;
	profit_total = 0;
	highest_profit = [0];
	lowest_profit = [0];
	highest_bet = [0];
	currentstreak = 0;
	profit = 0;
	currentprofit = 0;
	current_profit = 0;
	started_bal = balance;

	profit = profit_total;
	currentprofit = current_profit;
	bets = betcount;
	document.getElementById("wdbPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
	document.getElementById("wdbPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
	document.getElementById("result").innerHTML = "";
	if(theme == "light"){
		document.getElementById("result").style.color = "black";
	} else {
		document.getElementById("result").style.color = "white";
	}
	
	resetChart();
	
			document.getElementById("wdbProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("wdbWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("wdbHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("wdbHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("wdbHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("wdbBets").innerHTML = wins + " / " + losses + " / " + bets;
			document.getElementById("wdbHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak) + " / " + currentstreak;
			document.getElementById("wdbPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("wdbPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
			
}

function deleteTable(){
		document.getElementById("wdbHistory").innerHTML = "";
}


function drawChart() {
    dps = [{ x: betcount, y: profit_total }]
    chart = new CanvasJS.Chart('chartContainer', {
        backgroundColor: bgChart,
        theme: 'light2',
        title: {
            //text: BOT_URL,
            fontColor: 'white',
            fontSize: 20
        },
        data: [{
            type: 'line',
            markerSize: 0,
            dataPoints: dps
        }]
    })
    chart.render();
}

function updateChart() {
    dps.push({
        x: betcount,
        y: profit_total,
        color: color
    })
    if (dps[dps.length - 2]) dps[dps.length - 2].lineColor = color;
    if (dps.length > 100) dps.shift();
    chart.render();
}


function resetChart() {
    betcount = 0;
    profit_total = 0;
	if(theme == "light"){
		document.getElementById("result").style.color = "black";
	} else {
		document.getElementById("result").style.color = "white";
	}
    return drawChart();
}

function resetseed(e){

 var client = e;
 if(client == undefined){
	client = randomString(10);
 }
var body = {
    "operationName": "ChangeGameSeed",
    "variables": {
        "clientSeed": client
    },
    "query": "mutation ChangeGameSeed($clientSeed: String!) {\n  gameSeedChangeAndReveal(newClientSeed: $clientSeed) {\n    ...GameSeedFields\n    __typename\n  }\n}\n\nfragment GameSeedFields on GameSeed {\n  id\n  clientSeed\n  seed\n  hashedSeed\n  status\n  currentNonce\n  createdAt\n  __typename\n}"
	}
	fetch('https://' +  window.location.host + '/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', 'X-Correlation-Id':localStorage.getItem('BROWSER_ID') + "-" + randomString(21) + "-t::" + localStorage.getItem('CORRELATION_USER_ID'), 'Authorization': "Bearer " + token},
	})
	.then(res => res.json())
	.then(json => outseed(json))
	.catch(function(err, json) {
		//console.log(err);
		setTimeout(() => {
			//initUser();							
		}, "2000");
	});
}

function outseed(json){
	if(json.errors != undefined){
		log(json.errors[0].message);
	} else {
		log("Seed has been reset.")
	}

}





function payoutMultiplierValue(condition, target, edge, maxroll) {
    let payoutM;
    if (condition == "ABOVE") {
        payoutM = (maxroll - edge) / (maxroll - target);
    } else {
        payoutM = (maxroll - edge) / target;
    }
    return parseFloat(payoutM);
}

function op(roll, condition, target) {
    const operations = {
        1: roll > target,
        0: roll < target,
    };
    return operations[condition];
}

function ballBet(betsize, numbers){
	
	var body = {
    "bet": betsize.toFixed(8),
    "clientSeed": randomString(16),
    "isActiveStatistic": false,
    "paymentMethod": currencyid[currency.toUpperCase()],
    "serverSeedHash": randomString(64),
    "suggestedNumbers": JSON.stringify(numbers)
	}
	fetch('https://' +  window.location.host + '/api/balls', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', 'Authorization': "Bearer " + token},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err, json);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				 ballBet(betsize, numbers)		
				}				 
			}, "1000");
			
		}
	});
}

function DiceBet(betsize, chance, bethigh){
	
	
	var target = 49
	if(bethigh == false){
		target = chance
	} else {
		target = 99 - chance
	}
	

	var body = {
		"bet": betsize.toFixed(8),
		"clientSeed": randomString(16),
		"isActiveStatistic": false,
		"paymentMethod": currencyid[currency.toUpperCase()],
		"serverSeedHash": randomString(64),
		"sign": bethigh == true ? 1 : 0,
		"suggestedNumbers": target.toFixed(0)
	}
	fetch('https://' +  window.location.host + '/api/dices', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', 'Authorization': "Bearer " + token},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err, json);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				 DiceBet(betsize, chance, bethigh)		
				}				 
			}, "2000");
			
		}
	});
}


function data(json){
	
		if(json.error != null){
			log(json.error)
			//return;
		} 
		
		if(json.max == 99){
			
			balance = json.balance
			var balan = document.getElementById("wdbBalance");
			balan.innerHTML = parseFloat(json.balance).toFixed(8);
			
			var table = document.getElementById("wdbHistory");
			lastBet.amount = parseFloat(json.bet);
			
			lastBet.Roll = parseFloat(json.drawnNumber);
			lastBet.payout = parseFloat(json.win) + parseFloat(json.bet);
			lastBet.target = parseFloat(json.suggestedNumbers);
			
			let gameid = "dice"
			let conditionDice = json.sign;
			
			if(conditionDice == 0){
				bethigh = false;
			} else {
				bethigh = true;
			}
			
			
			lastBet.chance = json.chanceToWin
			
			
			
			let multiplierDice = json.coefficient 
			
			
			
			lastBet.payoutMultiplier = multiplierDice
			
			if(op(parseFloat(json.drawnNumber), conditionDice, parseFloat(json.suggestedNumbers))){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;
				document.getElementById("result").innerHTML = lastBet.Roll.toFixed(0)
				document.getElementById("result").style.color = color	
			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;
				lastBet.payoutMultiplier = 0;
				multiplierDice = 0
				lastBet.payout = 0
				document.getElementById("result").innerHTML = lastBet.Roll.toFixed(0)
				document.getElementById("result").style.color = color
											
			} 
		
			current_profit = parseFloat(json.win) - parseFloat(json.lose);
			profit_total += parseFloat(json.win) - parseFloat(json.lose);
			wagered += parseFloat(json.bet);
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = lastBet.amount.toFixed(8)
			
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = randomString(21);
			if(bethigh){
				tdcheck.checked = true;
			} else {
				tdcheck.checked = false;
			}
			tdcheck.id = randomString(21);
			
			tdhigh.appendChild(tdcheck);
			tdTargetChance.innerHTML = multiplierDice.toFixed(4) + "x"
			
			
			
			if(bethigh == false){
				//tdRollChance.innerHTML = json.data.dicePlay.state.result.toFixed(4)
			} else {
				//tdRollChance.innerHTML = (100 - json.data.dicePlay.state.result).toFixed(4)
			}
			
			tdProfit.innerHTML = current_profit.toFixed(8)
			if(bethigh){
				lastBet.targetNumber = (98 / (lastBet.chance));
				tdTargetNumber.innerHTML = ">" + (98 / (lastBet.chance)).toFixed(4)
			} else {
				lastBet.targetNumber = (98 / lastBet.chance);
				tdTargetNumber.innerHTML = ">" + (98 / lastBet.chance).toFixed(4)
			}
			tdRollNumber.innerHTML = lastBet.Roll.toFixed(0)
			tdNonce.innerHTML = gameid;
			tdBetID.innerHTML = json.id;
			tdPayout.innerHTML = lastBet.payout.toFixed(8);
			
			
			
			
			row.appendChild(tdbets);
			row.appendChild(tdNonce);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdRollChance);
			row.appendChild(tdBetID);			
					
			

				
			
			
			if(win){
				row.style.background = "#91F190";
				if(theme=="black"){
					row.style.background = "#00e701";
					row.style.color = "white";
				}
			} else {
				row.style.background = "#FFC0CB";
				if(theme=="black"){
					row.style.background = "#ed7a68";
					row.style.color = "white";
				}
			}
			
			table.prepend(row);
			
			if (table.rows.length > 50)
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < parseFloat(json.bet)){
				highest_bet.pop();
				highest_bet.push(parseFloat(json.bet));
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			balance = parseFloat(json.balance);
			profit = profit_total;
			previousbet = parseFloat(json.bet);
			currentprofit = current_profit;
			betcount++;
			bets = betcount;
		
			
			updateChart();
			
			
			//document.getElementById("multi").innerHTML = toFixedNo(json.data.limboBet.state.result, 2);
			document.getElementById("wdbProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("wdbWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("wdbHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("wdbHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("wdbHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("wdbBets").innerHTML = wins + " / " + losses + " / " + bets;
			document.getElementById("wdbHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak) + " / " + currentstreak;
			document.getElementById("wdbPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("wdbPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);			
			
								if(profit_total < 0){
										document.getElementById("wdbProfit").style.color = "#f72a42"
										document.getElementById("wdbPercentProfit").style.color = "#f72a42"
								} else {
										if(document.getElementById("themebot").value == "dark" || document.getElementById("themebot").value == "blue" || document.getElementById("themebot").value == "black"){
										document.getElementById("wdbProfit").style.color = "#05f711"
										document.getElementById("wdbPercentProfit").style.color = "#05f711"
									} else {
										document.getElementById("wdbProfit").style.color = "green"
										document.getElementById("wdbPercentProfit").style.color = "green"
									}
								}
								
			
			lastBet.percent = (profit_total / started_bal * 100)
			
		
		
		dobet();
		
		amount = nextbet;
		target_multi = 99 / chance;
					

		} 
		if(json.max == 10) {
			
			balance = json.balance
			var balan = document.getElementById("wdbBalance");
			balan.innerHTML = parseFloat(json.balance).toFixed(8);
			
			var table = document.getElementById("wdbHistory");
			lastBet.amount = parseFloat(json.bet);
			
			lastBet.Roll = json.drawnNumber;
			lastBet.payout = parseFloat(json.win) + parseFloat(json.bet);
			lastBet.target = json.suggestedNumbers;
			
			let gameid = "balls"			
			
			lastBet.chance = json.chanceToWin
			
			
			
			let multiplierBalls = json.coefficient 
			
			
			
			lastBet.payoutMultiplier = multiplierBalls
			
			if(parseFloat(json.win) > 0){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;
				document.getElementById("result").innerHTML = lastBet.Roll.toFixed(0)
				document.getElementById("result").style.color = color	
			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;
				
				if(json.coefficient < 1 && json.coefficient > 0 ){
					lastBet.payoutMultiplier = json.coefficient;
					multiplierBalls = json.coefficient
					
				} else {
					lastBet.payoutMultiplier = 0;
					multiplierBalls = 0
					lastBet.payout = 0
				}
				
				document.getElementById("result").innerHTML = lastBet.Roll.toFixed(0)
				document.getElementById("result").style.color = color
											
			} 

			current_profit = parseFloat(json.win) - parseFloat(json.lose);
			profit_total += parseFloat(json.win) - parseFloat(json.lose);
			wagered += parseFloat(json.bet);
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = lastBet.amount.toFixed(8)
			
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = randomString(21);
			if(bethigh){
				tdcheck.checked = true;
			} else {
				tdcheck.checked = false;
			}
			tdcheck.id = randomString(21);
			
			tdhigh.appendChild(tdcheck);
			tdTargetChance.innerHTML = multiplierBalls.toFixed(4) + "x"
			
			if(bethigh){
				lastBet.targetNumber = (98 / (lastBet.chance));
				tdTargetNumber.innerHTML = ">" + (98 / (lastBet.chance)).toFixed(4)
			} else {
				lastBet.targetNumber = (98 / lastBet.chance);
				tdTargetNumber.innerHTML = ">" + (98 / lastBet.chance).toFixed(4)
			}
			
			
			tdProfit.innerHTML = current_profit.toFixed(8)

			tdRollNumber.innerHTML = lastBet.Roll.toFixed(0)
			tdNonce.innerHTML = gameid;
			tdBetID.innerHTML = json.id;
			tdPayout.innerHTML = lastBet.payout.toFixed(8);
			
			
			
			
			row.appendChild(tdbets);
			row.appendChild(tdNonce);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdRollChance);
			row.appendChild(tdBetID);			
					
			

				
			
			
			if(win){
				row.style.background = "#91F190";
				if(theme=="black"){
					row.style.background = "#00e701";
					row.style.color = "white";
				}
			} else {
				row.style.background = "#FFC0CB";
				if(theme=="black"){
					row.style.background = "#ed7a68";
					row.style.color = "white";
				}
			}
			
			table.prepend(row);
			
			if (table.rows.length > 50)
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < parseFloat(json.bet)){
				highest_bet.pop();
				highest_bet.push(parseFloat(json.bet));
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			balance = parseFloat(json.balance);
			profit = profit_total;
			previousbet = parseFloat(json.bet);
			currentprofit = current_profit;
			betcount++;
			bets = betcount;
		
			
			updateChart();
			
			
			//document.getElementById("multi").innerHTML = toFixedNo(json.data.limboBet.state.result, 2);
			document.getElementById("wdbProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("wdbWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("wdbHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("wdbHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("wdbHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("wdbBets").innerHTML = wins + " / " + losses + " / " + bets;
			document.getElementById("wdbHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak) + " / " + currentstreak;
			document.getElementById("wdbPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("wdbPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);			
			
								if(profit_total < 0){
										document.getElementById("wdbProfit").style.color = "#f72a42"
										document.getElementById("wdbPercentProfit").style.color = "#f72a42"
								} else {
										if(document.getElementById("themebot").value == "dark" || document.getElementById("themebot").value == "blue" || document.getElementById("themebot").value == "black"){
										document.getElementById("wdbProfit").style.color = "#05f711"
										document.getElementById("wdbPercentProfit").style.color = "#05f711"
									} else {
										document.getElementById("wdbProfit").style.color = "green"
										document.getElementById("wdbPercentProfit").style.color = "green"
									}
								}
								
			
			lastBet.percent = (profit_total / started_bal * 100)
			
		
		
		dobet();
		
		amount = nextbet;
		target_multi = 99 / chance;
			
		}
		
		if(running){
			
			if(game == "dice"){
			DiceBet(nextbet, chance, bethigh)
			}
			if(game == "balls"){
			ballBet(nextbet, numbers)
			}
		}
	
}





function downloadFile() {

	var obj = editor.getValue();
	var filename = "JS_" + new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('.')[0].replace('T','-') + ".js";
	var blob = new Blob([obj], {type: 'text/plain'});
	if (window.navigator && window.navigator.msSaveOrOpenBlob) {
		window.navigator.msSaveOrOpenBlob(blob, filename);
	} else{
		var e = document.createEvent('MouseEvents'),
		a = document.createElement('a');
		a.download = filename;
		a.href = window.URL.createObjectURL(blob);
		a.dataset.downloadurl = ['text/plain', a.download, a.href].join(':');
		e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		a.dispatchEvent(e);
	}
}

function countTime() {
	startTime = new Date()
    setInterval(() => {
	if(running){
        playTime = (new Date().getTime()) - startTime;
        playDays = Math.floor(playTime / (1e3 * 6e1 * 6e1 * 24));
        playHours = Math.floor((playTime % (1e3 * 6e1 * 6e1 * 24)) / (1e3 * 6e1 * 6e1));
        playMinutes = Math.floor((playTime % (1e3 * 6e1 * 6e1)) / (1e3 * 6e1));
        playSeconds = Math.floor((playTime % (1e3 * 6e1)) / 1e3);
		document.getElementById("wdbTime").innerHTML = playDays + ":" + playHours + ":" + playMinutes + ":" + playSeconds
		}
    }, 1e3)
}

const checkbox = document.getElementById('speedChange')

checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
		speedmode = true;
  } else {
		speedmode = false;
  }
})



//setInterval(function () {localStorage.setItem("jscode", editor.getValue());}, 5000);


function start(){
		running = true; countTime(); 
		run_clicked = true;
		btnStart.disabled = true;
		dobet = function() {};		
		localStorage.setItem("jscode", editor.getValue());
		currency = document.getElementById('wdbMenuCoin').value;

		document.getElementById("result").innerHTML = "";
		if(theme == "light"){
			document.getElementById("result").style.color = "black";
		} else {
			document.getElementById("result").style.color = "white";
		}
		numbers = []
		game = document.getElementById("gameselect").value;
		var evalcode = editor.getValue();
		setTimeout(evalcode + `;started_bal = balance; 
		amount = nextbet;
		target_multi = 99 / chance
 
		var selectedGame = game;
		if(selectedGame == "dice"){
		if(speedmode == false){
			DiceBet(nextbet, chance, bethigh)
		} else {
			setTimeout(function () {
            DiceBet(nextbet, chance, bethigh)
          }, 200);

          setTimeout(function () {
            DiceBet(nextbet, chance, bethigh)
          }, 400);

		}
		}
		if(selectedGame == "balls"){
		if(speedmode == false){
			ballBet(nextbet, numbers)
		} else {
			setTimeout(function () {
            ballBet(nextbet, numbers)
          }, 200);

          setTimeout(function () {
            ballBet(nextbet, numbers)
          }, 400);

		}
		}
	`, 0);
		

 
 drawChart();

}


  