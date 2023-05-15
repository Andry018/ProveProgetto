
var Mazzo;

var Prende;

var Seme;

var SB = 0; //seme di briscola

var Inizia;

var FlagInizio;

var FlagPrimoMano;

var w, E, R, B, x, Z, K, P, y;

var CaSud = new Array(11);

var CaNord = new Array(11);

var CaImgTabSud;

var CaImgTabNord;

var BucoVuotoNord, BucoVuotoSud;

var PuntNord, PuntSud;

var StopTop, StopLeft;

var TopPos;

var LeftPos;

var DiffTop;

var Diffleft;

var NewTop;

var NewLeft;

var Ricordo = new Array(40);

var FLAG = 0;

var QCaTall;

var QCaImg = new Array();

var CaImg = new Array(104);

var A = new Array(105);

var Carta = new Array(105);

var CaTall = new Array(104);

var ReCaTall = new Array(104);

var Reply;

var Dd, Dr, Ud, Ur, CartaPartenza;

var n;

var s;

var nDopo;

var sDopo;

function VisPunt_onclick() {
  if (document.getElementById("PRESESUD").style.visibility == "visible") {
    document.getElementById("PRESESUD").style.visibility = "hidden";

    document.getElementById("PRESENORD").style.visibility = "hidden";

    document.getElementById("VisPunt").value = "Visualizza punteggio";

    return;
  }

  document.getElementById("PRESESUD").style.visibility = "visible";

  document.getElementById("PRESENORD").style.visibility = "visible";

  document.getElementById("VisPunt").value = "Nascondi punteggio";
}

function mnuNew_onclick() {
  document.getElementById("mnuNew").disabled = true;

  ImgSud0.disabled = true;

  ImgSud1.disabled = true;

  ImgSud2.disabled = true;

  pulizia();

  Tall.style.visibility = "visible";

  mischia();

  Assegna40();

  Inizia = 0;

  Inizia = Math.random() * 2 + 1;

  Inizia = parseInt(Inizia, 10);

  if (Inizia == 1) {
    FlagInizio = "In_Nord";

    FlagPrimoMano = "Nord";
  }

  if (Inizia == 2) {
    FlagInizio = "In_Sud";

    FlagPrimoMano = "Sud";
  }

  Pozzo.src = "images/cards/" + CaTall[1] + ".png";

  SB = Math.round(CaTall[1] / 100);

  Pozzo.style.visibility = "visible";

  MovDistribuisci();
  NascondiStart();
  MostraGioco();
}

function NascondiStart() {
  var x = document.getElementById("start");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function pulizia() {
  ImgTabNord.src = "images/cards/vuota.png";

  ImgTabSud.src = "images/cards/vuota.png";

  ImgSud0.src = "images/cards/vuota.png";

  ImgSud1.src = "images/cards/vuota.png";

  ImgSud2.src = "images/cards/vuota.png";

  ImgNord0.src = "images/cards/vuota.png";

  ImgNord1.src = "images/cards/vuota.png";

  ImgNord2.src = "images/cards/vuota.png";

  Tall.src = "images/cards/back.png";

  CaImgTabNord = 0;

  CaImgTabSud = 0;

  CaNord[0] = 0;

  CaNord[1] = 0;

  CaNord[2] = 0;

  CaSud[0] = 0;

  CaSud[1] = 0;

  CaSud[2] = 0;

  SB = 0;

  Seme = 0;

  PuntNord = 0;

  PuntSud = 0;

  PreseNord.value = "0";

  PreseSud.value = "0";

  QCaTall = 40;

  lblQCaTall.value = QCaTall;
}

function mischia() {
  temp = 0;

  newnumber = 0;

  document.frmOne.taAll.value = "";

  TA = document.frmOne.taAll;

  for (i = 1; i < 41; i++) {
    Carta[i] = i;
  }

  for (i = 1; i < 41; i++) {
    newnumber = Math.random() * 40 + 1;

    newnumber = parseInt(newnumber, 10);

    temp = Carta[i];

    Carta[i] = Carta[newnumber];

    Carta[newnumber] = temp;
  }

  for (i = 1; i < 41; i++) {
    TA.value = TA.value + "CARTA[" + i + "] = " + Carta[i] + "\n";
  }
}

function Assegna40() {
  for (z = 1; z < 41; z++) {
    if (Carta[z] >= 1 && Carta[z] <= 10) CaTall[z] = Carta[z] + 100;

    if (Carta[z] >= 11 && Carta[z] <= 20) CaTall[z] = Carta[z] + 190;

    if (Carta[z] >= 21 && Carta[z] <= 30) CaTall[z] = Carta[z] + 280;

    if (Carta[z] >= 31 && Carta[z] <= 40) CaTall[z] = Carta[z] + 370;
  }

  for (i = 1; i < 41; i++) {
    document.frmOne.taAll.value =
      document.frmOne.taAll.value +
      "NUMERO CARTA[" +
      i +
      "] = " +
      CaTall[i] +
      "\n";
  }

  for (z = 1; z < 41; z++) {
    if (CaTall[z] == 103) {
      CaTall[z] = 111;
    }

    if (CaTall[z] == 203) {
      CaTall[z] = 211;
    }

    if (CaTall[z] == 303) {
      CaTall[z] = 311;
    }

    if (CaTall[z] == 403) {
      CaTall[z] = 411;
    }

    if (CaTall[z] == 101) {
      CaTall[z] = 112;
    }

    if (CaTall[z] == 201) {
      CaTall[z] = 212;
    }

    if (CaTall[z] == 301) {
      CaTall[z] = 312;
    }

    if (CaTall[z] == 401) {
      CaTall[z] = 412;
    }
  }

  QCaTall = 40;

  // memorizza le carte per ricominciare lo stesso solitario

  for (z = 1; z < 41; z++) {
    Ricordo[z] = CaTall[z];
  }
}

function ripetizione() {
  for (z = 1; z < 41; z++) {
    CaTall[z] = Ricordo[z];
  }

  pulizia();
}

function MovDistribuisci() {
  Transfer.src = "images/cards/back.png";

  Transfer.style.top = "200px";

  Transfer.style.left = "70px";

  Transfer.style.visibility = "visible";

  TopPos = 200;

  LeftPos = 70;

  //da Tall a imgNord

  if (FlagInizio == "In_Nord") {
    PrimaN0();
  }

  //da Tall a imgSud

  if (FlagInizio == "In_Sud") {
    PrimaS0();
  }
}

function PrimaN2() {
  NewTop = TopPos + "px";

  NewLeft = LeftPos + "px";

  Transfer.style.top = NewTop;

  Transfer.style.left = NewLeft;

  TopPos = TopPos - 2;

  LeftPos = LeftPos + 4;

  if (TopPos > 50) {
    var myTimerPrimaN2 = setTimeout("PrimaN2()", 15);
  } else {
    clearTimeout(myTimerPrimaN2);

    ImgNord2.src = "images/cards/back.png";

    Transfer.style.top = "200px";

    Transfer.style.left = "70px";

    TopPos = 200;

    LeftPos = 70;

    if (FlagInizio == "In_Nord") {
      PrimaS0();
    } else {
      MostraCarte();

      document.getElementById("mnuNew").disabled = true;
    }
  }
}

function PrimaN1() {
  NewTop = TopPos + "px";

  NewLeft = LeftPos + "px";

  Transfer.style.top = NewTop;

  Transfer.style.left = NewLeft;

  TopPos = TopPos - 2;

  LeftPos = LeftPos + 3;

  if (TopPos > 50) {
    var myTimerPrimaN1 = setTimeout("PrimaN1()", 15);
  } else {
    clearTimeout(myTimerPrimaN1);

    ImgNord1.src = "images/cards/back.png";

    Transfer.style.top = "200px";

    Transfer.style.left = "70px";

    TopPos = 200;

    LeftPos = 70;

    PrimaN2();
  }
}

function PrimaN0() {
  NewTop = TopPos + "px";

  NewLeft = LeftPos + "px";

  Transfer.style.top = NewTop;

  Transfer.style.left = NewLeft;

  TopPos = TopPos - 3;

  LeftPos = LeftPos + 3;

  if (TopPos > 50) {
    var myTimerPrimaN0 = setTimeout("PrimaN0()", 15);
  } else {
    clearTimeout(myTimerPrimaN0);

    ImgNord0.src = "images/cards/back.png";

    Transfer.style.top = "200px";

    Transfer.style.left = "70px";

    TopPos = 200;

    LeftPos = 70;

    PrimaN1();
  }
}

function PrimaS2() {
  NewTop = TopPos + "px";

  NewLeft = LeftPos + "px";

  Transfer.style.top = NewTop;

  Transfer.style.left = NewLeft;

  TopPos = TopPos + 2;

  LeftPos = LeftPos + 4;

  if (TopPos < 350 || LeftPos > 400) {
    var myTimerPrimaS2 = setTimeout("PrimaS2()", 15);
  } else {
    clearTimeout(myTimerPrimaS2);

    ImgSud2.src = "images/cards/back.png";

    Transfer.style.top = "200px";

    Transfer.style.left = "70px";

    TopPos = 200;

    LeftPos = 70;

    ImgSud2.src = "images/cards/" + CaTall[QCaTall] + ".png";

    CaSud[2] = CaTall[QCaTall];

    QCaTall = QCaTall - 1;

    lblQCaTall.value = QCaTall;

    if (FlagInizio == "In_Sud") {
      PrimaN0();
    } else {
      MostraCarte();

      document.getElementById("mnuNew").disabled = true;
    }
  }
}

function PrimaS1() {
  NewTop = TopPos + "px";

  NewLeft = LeftPos + "px";

  Transfer.style.top = NewTop;

  Transfer.style.left = NewLeft;

  TopPos = TopPos + 2;

  LeftPos = LeftPos + 3;

  if (TopPos < 350 || LeftPos > 300) {
    var myTimerPrimaS1 = setTimeout("PrimaS1()", 15);
  } else {
    clearTimeout(myTimerPrimaS1);

    ImgSud1.src = "images/cards/back.png";

    Transfer.style.top = "200px";

    Transfer.style.left = "70px";

    TopPos = 200;

    LeftPos = 70;

    ImgSud1.src = "images/cards/" + CaTall[QCaTall] + ".png";

    CaSud[1] = CaTall[QCaTall];

    QCaTall = QCaTall - 1;

    PrimaS2();
  }
}

function PrimaS0() {
  NewTop = TopPos + "px";

  NewLeft = LeftPos + "px";

  Transfer.style.top = NewTop;

  Transfer.style.left = NewLeft;

  TopPos = TopPos + 3;

  LeftPos = LeftPos + 2;

  if (TopPos < 350 || LeftPos > 200) {
    var myTimerPrimaS0 = setTimeout("PrimaS0()", 15);
  } else {
    clearTimeout(myTimerPrimaS0);

    ImgSud0.src = "images/cards/back.png";

    Transfer.style.top = "200px";

    Transfer.style.left = "70px";

    TopPos = 200;

    LeftPos = 70;

    ImgSud0.src = "images/cards/" + CaTall[QCaTall] + ".png";

    CaSud[0] = CaTall[QCaTall];

    QCaTall = QCaTall - 1;

    PrimaS1();
  }
}

function MostraCarte() {
  //inizia a giocare Nord

  //carica e mostra le carte sul tavolo

  ImgNord0.src = "images/cards/back.png";

  CaNord[0] = CaTall[QCaTall];

  QCaTall = QCaTall - 1;

  ImgNord1.src = "images/cards/back.png";

  CaNord[1] = CaTall[QCaTall];

  QCaTall = QCaTall - 1;

  ImgNord2.src = "images/cards/back.png";

  CaNord[2] = CaTall[QCaTall];

  QCaTall = QCaTall - 1;

  if (FlagPrimoMano == "Sud") {
    setTimeout(function () {
      AbilitaSud();
    }, 500);
  }

  if (FlagPrimoMano == "Nord") {
    Nord();
  }

  lblQCaTall.value = QCaTall;
}

function IMGSUD0_onmousedown() {
  ImgSud0.disabled = true;

  ImgSud1.disabled = true;

  ImgSud2.disabled = true;

  Transfer.src = "images/cards/" + CaSud[0] + ".png";

  Transfer.style.top = "350px";

  Transfer.style.left = "200px";

  Transfer.style.visibility = "visible";

  ImgSud0.src = "images/cards/vuota.png";

  TopPos = 350;

  LeftPos = 200;

  BucoVuotoSud = 0;

  CaImgTabSud = CaSud[0];

  CaSud[0] = 0;

  S0Tall();
}

function IMGSUD1_onmousedown() {
  ImgSud0.disabled = true;

  ImgSud1.disabled = true;

  ImgSud2.disabled = true;

  Transfer.src = "images/cards/" + CaSud[1] + ".png";

  Transfer.style.top = "350px";

  Transfer.style.left = "300px";

  Transfer.style.visibility = "visible";

  ImgSud1.src = "images/cards/vuota.png";

  TopPos = 350;

  LeftPos = 300;

  BucoVuotoSud = 1;

  CaImgTabSud = CaSud[1];

  CaSud[1] = 0;

  S1Tall();
}

function IMGSUD2_onmousedown() {
  ImgSud0.disabled = true;

  ImgSud1.disabled = true;

  ImgSud2.disabled = true;

  Transfer.src = "images/cards/" + CaSud[2] + ".png";

  Transfer.style.top = "350px";

  Transfer.style.left = "400px";

  Transfer.style.visibility = "visible";

  ImgSud2.src = "images/cards/vuota.png";

  TopPos = 350;

  LeftPos = 400;

  BucoVuotoSud = 2;

  CaImgTabSud = CaSud[2];

  CaSud[2] = 0;

  S2Tall();
}

function S0Tall() {
  NewTop = TopPos + "px";

  NewLeft = LeftPos + "px";

  Transfer.style.top = NewTop;

  Transfer.style.left = NewLeft;

  TopPos = TopPos - 3;

  LeftPos = LeftPos + 3;

  if (TopPos > 200) {
    var myTimerS0Tall = setTimeout("S0Tall()", 15);
  } else {
    clearTimeout(myTimerS0Tall);

    ImgTabSud.src = "images/cards/" + CaImgTabSud + ".png";

    Transfer.style.visibility = "hidden";

    Transfer.src = "images/cards/back.png";

    if (FlagPrimoMano == "Sud") {
      RispondeNord();

      if (FlagPrimoMano == "Nord") {
        Nord();
      }

      return;
    } else {
      Decide_chi_prende();

      if (FlagPrimoMano == "Nord") {
        Nord_su_Sud();

        return;
      }

      if (FlagPrimoMano == "Sud") {
        Sud_su_Nord();

        return;
      }
    }
  }
}

function S1Tall() {
  NewTop = TopPos + "px";

  NewLeft = LeftPos + "px";

  Transfer.style.top = NewTop;

  Transfer.style.left = NewLeft;

  TopPos = TopPos - 3;

  if (LeftPos < 350) {
    LeftPos = LeftPos + 2;
  } else {
    LeftPos = LeftPos + 0;
  }

  if (TopPos > 200) {
    var myTimerS1Tall = setTimeout("S1Tall()", 15);
  } else {
    clearTimeout(myTimerS1Tall);

    ImgTabSud.src = "images/cards/" + CaImgTabSud + ".png";

    Transfer.style.visibility = "hidden";

    Transfer.src = "images/cards/back.png";

    if (FlagPrimoMano == "Sud") {
      RispondeNord();

      if (FlagPrimoMano == "Nord") {
        Nord();
      }

      return;
    } else {
      Decide_chi_prende();

      if (FlagPrimoMano == "Nord") {
        Nord_su_Sud();

        return;
      }

      if (FlagPrimoMano == "Sud") {
        Sud_su_Nord();

        return;
      }
    }
  }
}

function S2Tall() {
  NewTop = TopPos + "px";

  NewLeft = LeftPos + "px";

  Transfer.style.top = NewTop;

  Transfer.style.left = NewLeft;

  TopPos = TopPos - 3;

  LeftPos = LeftPos - 1;

  if (TopPos > 200) {
    var myTimerS2Tall = setTimeout("S2Tall()", 15);
  } else {
    clearTimeout(myTimerS2Tall);

    ImgTabSud.src = "images/cards/" + CaImgTabSud + ".png";

    Transfer.style.visibility = "hidden";

    Transfer.src = "images/cards/back.png";

    if (FlagPrimoMano == "Sud") {
      RispondeNord();

      if (FlagPrimoMano == "Nord") {
        Nord();
      }

      return;
    } else {
      Decide_chi_prende();

      if (FlagPrimoMano == "Nord") {
        Nord_su_Sud();

        return;
      }

      if (FlagPrimoMano == "Sud") {
        Sud_su_Nord();

        return;
      }
    }
  }
}

function RispondeNord() {
  Seme = Math.round(CaImgTabSud / 100);

  //ora risponde Nord alla giocata

  //''''''''''''''''''''''''''''''''''''''''se la carta in tavolo � una scartina ma non briscola

  //''prende con un carico

  if (
    Math.round(CaImgTabSud / 100) != SB &&
    Math.round(CaImgTabSud % 100) <= 8
  ) {
    for (var y = 12; y > 8; y--) {
      for (var P = 0; P < 3; P++) {
        if (
          Math.round(CaNord[P] / 100) == Seme &&
          Math.round(CaNord[P] % 100) == y &&
          Math.round(CaNord[P] % 100) > Math.round(CaImgTabSud % 100)
        ) {
          if (P == 0) {
            Transfer.src = "images/cards/" + CaNord[0] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "200px";

            Transfer.style.visibility = "visible";

            ImgNord0.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 200;

            BucoVuotoNord = 0;

            CaImgTabNord = CaNord[0];

            CaNord[0] = 0;

            MovGiocaNord0();
          }

          if (P == 1) {
            Transfer.src = "images/cards/" + CaNord[1] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "300px";

            Transfer.style.visibility = "visible";

            ImgNord1.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 300;

            BucoVuotoNord = 1;

            CaImgTabNord = CaNord[1];

            CaNord[1] = 0;

            MovGiocaNord1();
          }

          if (P == 2) {
            Transfer.src = "images/cards/" + CaNord[2] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord2.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 400;

            BucoVuotoNord = 2;

            CaImgTabNord = CaNord[2];

            CaNord[2] = 0;

            MovGiocaNord2();
          }

          return;
        }
      }
    }
  }

  //''gioca una scartina di seme diverso

  if (
    Math.round(CaImgTabSud / 100) != SB &&
    Math.round(CaImgTabSud % 100) <= 8
  ) {
    for (var y = 7; y > 1; y--) {
      for (var P = 0; P < 3; P++) {
        if (
          Math.round(CaNord[P] / 100) != Seme &&
          Math.round(CaNord[P] % 100) == y &&
          Math.round(CaNord[P] / 100) != SB
        ) {
          if (P == 0) {
            Transfer.src = "images/cards/" + CaNord[0] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "200px";

            Transfer.style.visibility = "visible";

            ImgNord0.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 200;

            BucoVuotoNord = 0;

            CaImgTabNord = CaNord[0];

            CaNord[0] = 0;

            MovGiocaNord0();
          }

          if (P == 1) {
            Transfer.src = "images/cards/" + CaNord[1] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "300px";

            Transfer.style.visibility = "visible";

            ImgNord1.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 300;

            BucoVuotoNord = 1;

            CaImgTabNord = CaNord[1];

            CaNord[1] = 0;

            MovGiocaNord1();
          }

          if (P == 2) {
            Transfer.src = "images/cards/" + CaNord[2] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord2.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 400;

            BucoVuotoNord = 2;

            CaImgTabNord = CaNord[2];

            CaNord[2] = 0;

            MovGiocaNord2();
          }

          return;
        }
      }
    }
  }

  //''gioca una scartina di seme uguale di valore pi� basso

  if (
    Math.round(CaImgTabSud / 100) != SB &&
    Math.round(CaImgTabSud % 100) <= 8
  ) {
    for (var y = 7; y > 1; y--) {
      for (var P = 0; P < 3; P++) {
        if (
          Math.round(CaNord[P] / 100) == Seme &&
          Math.round(CaNord[P] % 100) == y &&
          Math.round(CaNord[P] % 100) < Math.round(CaImgTabSud % 100) &&
          Math.round(CaNord[P] / 100) != SB
        ) {
          if (P == 0) {
            Transfer.src = "images/cards/" + CaNord[0] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "200px";

            Transfer.style.visibility = "visible";

            ImgNord0.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 200;

            BucoVuotoNord = 0;

            CaImgTabNord = CaNord[0];

            CaNord[0] = 0;

            MovGiocaNord0();
          }

          if (P == 1) {
            Transfer.src = "images/cards/" + CaNord[1] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "300px";

            Transfer.style.visibility = "visible";

            ImgNord1.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 300;

            BucoVuotoNord = 1;

            CaImgTabNord = CaNord[1];

            CaNord[1] = 0;

            MovGiocaNord1();
          }

          if (P == 2) {
            Transfer.src = "images/cards/" + CaNord[2] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord2.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 400;

            BucoVuotoNord = 2;

            CaImgTabNord = CaNord[2];

            CaNord[2] = 0;

            MovGiocaNord2();
          }

          return;
        }
      }
    }
  }

  //''gioca una figura di seme diverso

  if (
    Math.round(CaImgTabSud / 100) != SB &&
    Math.round(CaImgTabSud % 100) <= 8
  ) {
    for (var y = 8; y < 11; y++) {
      for (var P = 0; P < 3; P++) {
        if (
          Math.round(CaNord[P] / 100) != Seme &&
          Math.round(CaNord[P] % 100) == y &&
          Math.round(CaNord[P] / 100) != SB
        ) {
          if (P == 0) {
            Transfer.src = "images/cards/" + CaNord[0] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "200px";

            Transfer.style.visibility = "visible";

            ImgNord0.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 200;

            BucoVuotoNord = 0;

            CaImgTabNord = CaNord[0];

            CaNord[0] = 0;

            MovGiocaNord0();
          }

          if (P == 1) {
            Transfer.src = "images/cards/" + CaNord[1] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "300px";

            Transfer.style.visibility = "visible";

            ImgNord1.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 300;

            BucoVuotoNord = 1;

            CaImgTabNord = CaNord[1];

            CaNord[1] = 0;

            MovGiocaNord1();
          }

          if (P == 2) {
            Transfer.src = "images/cards/" + CaNord[2] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord2.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 400;

            BucoVuotoNord = 2;

            CaImgTabNord = CaNord[2];

            CaNord[2] = 0;

            MovGiocaNord2();
          }

          return;
        }
      }
    }
  }

  //'gioca una figura di seme uguale di valore pi� alto

  if (
    Math.round(CaImgTabSud / 100) != SB &&
    Math.round(CaImgTabSud % 100) <= 8
  ) {
    for (var y = 10; y > 7; y--) {
      for (var P = 0; P < 3; P++) {
        if (
          Math.round(CaNord[P] / 100) == Seme &&
          Math.round(CaNord[P] % 100) == y &&
          Math.round(CaNord[P] % 100) > Math.round(CaImgTabSud % 100) &&
          Math.round(CaNord[P] / 100) != SB
        ) {
          if (P == 0) {
            Transfer.src = "images/cards/" + CaNord[0] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "200px";

            Transfer.style.visibility = "visible";

            ImgNord0.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 200;

            BucoVuotoNord = 0;

            CaImgTabNord = CaNord[0];

            CaNord[0] = 0;

            MovGiocaNord0();
          }

          if (P == 1) {
            Transfer.src = "images/cards/" + CaNord[1] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "300px";

            Transfer.style.visibility = "visible";

            ImgNord1.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 300;

            BucoVuotoNord = 1;

            CaImgTabNord = CaNord[1];

            CaNord[1] = 0;

            MovGiocaNord1();
          }

          if (P == 2) {
            Transfer.src = "images/cards/" + CaNord[2] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord2.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 400;

            BucoVuotoNord = 2;

            CaImgTabNord = CaNord[2];

            CaNord[2] = 0;

            MovGiocaNord2();
          }

          return;
        }
      }
    }
  }

  //''gioca una scartina di seme uguale di valore pi� alto

  if (
    Math.round(CaImgTabSud / 100) != SB &&
    Math.round(CaImgTabSud % 100) <= 8
  ) {
    for (var y = 7; y > 1; y--) {
      for (var P = 0; P < 3; P++) {
        if (
          Math.round(CaNord[P] / 100) == Seme &&
          Math.round(CaNord[P] % 100) == y &&
          Math.round(CaNord[P] % 100) > Math.round(CaImgTabSud % 100) &&
          Math.round(CaNord[P] / 100) != SB
        ) {
          if (P == 0) {
            Transfer.src = "images/cards/" + CaNord[0] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "200px";

            Transfer.style.visibility = "visible";

            ImgNord0.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 200;

            BucoVuotoNord = 0;

            CaImgTabNord = CaNord[0];

            CaNord[0] = 0;

            MovGiocaNord0();
          }

          if (P == 1) {
            Transfer.src = "images/cards/" + CaNord[1] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "300px";

            Transfer.style.visibility = "visible";

            ImgNord1.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 300;

            BucoVuotoNord = 1;

            CaImgTabNord = CaNord[1];

            CaNord[1] = 0;

            MovGiocaNord1();
          }

          if (P == 2) {
            Transfer.src = "images/cards/" + CaNord[2] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord2.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 400;

            BucoVuotoNord = 2;

            CaImgTabNord = CaNord[2];

            CaNord[2] = 0;

            MovGiocaNord2();
          }

          return;
        }
      }
    }
  }

  //'' gioca una briscola

  if (
    Math.round(CaImgTabSud / 100) != SB &&
    Math.round(CaImgTabSud % 100) <= 8
  ) {
    for (var y = 2; y < 13; y++) {
      for (var P = 0; P < 3; P++) {
        if (
          Math.round(CaNord[P] / 100) == SB &&
          Math.round(CaNord[P] % 100) == y
        ) {
          if (P == 0) {
            Transfer.src = "images/cards/" + CaNord[0] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "200px";

            Transfer.style.visibility = "visible";

            ImgNord0.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 200;

            BucoVuotoNord = 0;

            CaImgTabNord = CaNord[0];

            CaNord[0] = 0;

            MovGiocaNord0();
          }

          if (P == 1) {
            Transfer.src = "images/cards/" + CaNord[1] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "300px";

            Transfer.style.visibility = "visible";

            ImgNord1.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 300;

            BucoVuotoNord = 1;

            CaImgTabNord = CaNord[1];

            CaNord[1] = 0;

            MovGiocaNord1();
          }

          if (P == 2) {
            Transfer.src = "images/cards/" + CaNord[2] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord2.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 400;

            BucoVuotoNord = 2;

            CaImgTabNord = CaNord[2];

            CaNord[2] = 0;

            MovGiocaNord2();
          }

          return;
        }
      }
    }
  }

  //' gioca un carico

  if (
    Math.round(CaImgTabSud / 100) != SB &&
    Math.round(CaImgTabSud % 100) <= 8
  ) {
    for (var y = 11; y < 13; y++) {
      for (var P = 0; P < 3; P++) {
        if (
          Math.round(CaNord[P] / 100) != SB &&
          Math.round(CaNord[P] % 100) == y
        ) {
          if (P == 0) {
            Transfer.src = "images/cards/" + CaNord[0] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "200px";

            Transfer.style.visibility = "visible";

            ImgNord0.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 200;

            BucoVuotoNord = 0;

            CaImgTabNord = CaNord[0];

            CaNord[0] = 0;

            MovGiocaNord0();
          }

          if (P == 1) {
            Transfer.src = "images/cards/" + CaNord[1] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "300px";

            Transfer.style.visibility = "visible";

            ImgNord1.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 300;

            BucoVuotoNord = 1;

            CaImgTabNord = CaNord[1];

            CaNord[1] = 0;

            MovGiocaNord1();
          }

          if (P == 2) {
            Transfer.src = "images/cards/" + CaNord[2] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord2.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 400;

            BucoVuotoNord = 2;

            CaImgTabNord = CaNord[2];

            CaNord[2] = 0;

            MovGiocaNord2();
          }

          return;
        }
      }
    }
  }

  //''''''''''''''''''''''se la carta in tavolo � un cavallo o re, ma non briscola

  //''prende con un carico

  if (
    Math.round(CaImgTabSud / 100) != SB &&
    Math.round(CaImgTabSud % 100) > 8 &&
    Math.round(CaImgTabSud % 100) < 11
  ) {
    for (var y = 12; y > 8; y--) {
      for (var P = 0; P < 3; P++) {
        if (
          Math.round(CaNord[P] / 100) == Seme &&
          Math.round(CaNord[P] % 100) == y &&
          Math.round(CaNord[P] % 100) > Math.round(CaImgTabSud % 100)
        ) {
          if (P == 0) {
            Transfer.src = "images/cards/" + CaNord[0] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "200px";

            Transfer.style.visibility = "visible";

            ImgNord0.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 200;

            BucoVuotoNord = 0;

            CaImgTabNord = CaNord[0];

            CaNord[0] = 0;

            MovGiocaNord0();
          }

          if (P == 1) {
            Transfer.src = "images/cards/" + CaNord[1] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "300px";

            Transfer.style.visibility = "visible";

            ImgNord1.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 300;

            BucoVuotoNord = 1;

            CaImgTabNord = CaNord[1];

            CaNord[1] = 0;

            MovGiocaNord1();
          }

          if (P == 2) {
            Transfer.src = "images/cards/" + CaNord[2] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord2.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 400;

            BucoVuotoNord = 2;

            CaImgTabNord = CaNord[2];

            CaNord[2] = 0;

            MovGiocaNord2();
          }

          return;
        }
      }
    }
  }

  //'gioca una scartina di seme diverso

  if (
    Math.round(CaImgTabSud / 100) != SB &&
    Math.round(CaImgTabSud % 100) > 8 &&
    Math.round(CaImgTabSud % 100) < 11
  ) {
    for (var y = 7; y > 1; y--) {
      for (var P = 0; P < 3; P++) {
        if (
          Math.round(CaNord[P] / 100) != Seme &&
          Math.round(CaNord[P] % 100) == y
        ) {
          if (P == 0) {
            Transfer.src = "images/cards/" + CaNord[0] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord0.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 200;

            BucoVuotoNord = 0;

            CaImgTabNord = CaNord[0];

            CaNord[0] = 0;

            MovGiocaNord0();
          }

          if (P == 1) {
            Transfer.src = "images/cards/" + CaNord[1] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "300px";

            Transfer.style.visibility = "visible";

            ImgNord1.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 300;

            BucoVuotoNord = 1;

            CaImgTabNord = CaNord[1];

            CaNord[1] = 0;

            MovGiocaNord1();
          }

          if (P == 2) {
            Transfer.src = "images/cards/" + CaNord[2] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord2.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 400;

            BucoVuotoNord = 2;

            CaImgTabNord = CaNord[2];

            CaNord[2] = 0;

            MovGiocaNord2();
          }

          return;
        }
      }
    }
  }

  //''gioca una scartina di seme uguale

  if (
    Math.round(CaImgTabSud / 100) != SB &&
    Math.round(CaImgTabSud % 100) > 8 &&
    Math.round(CaImgTabSud % 100) < 11
  ) {
    for (var y = 7; y > 1; y--) {
      for (var P = 0; P < 3; P++) {
        if (
          Math.round(CaNord[P] / 100) == Seme &&
          Math.round(CaNord[P] % 100) == y
        ) {
          if (P == 0) {
            Transfer.src = "images/cards/" + CaNord[0] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord0.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 200;

            BucoVuotoNord = 0;

            CaImgTabNord = CaNord[0];

            CaNord[0] = 0;

            MovGiocaNord0();
          }

          if (P == 1) {
            Transfer.src = "images/cards/" + CaNord[1] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "300px";

            Transfer.style.visibility = "visible";

            ImgNord1.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 300;

            BucoVuotoNord = 1;

            CaImgTabNord = CaNord[1];

            CaNord[1] = 0;

            MovGiocaNord1();
          }

          if (P == 2) {
            Transfer.src = "images/cards/" + CaNord[2] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord2.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 400;

            BucoVuotoNord = 2;

            CaImgTabNord = CaNord[2];

            CaNord[2] = 0;

            MovGiocaNord2();
          }

          return;
        }
      }
    }
  }

  //' gioca una briscola

  if (
    Math.round(CaImgTabSud / 100) != SB &&
    Math.round(CaImgTabSud % 100) > 8 &&
    Math.round(CaImgTabSud % 100) < 11
  ) {
    for (var y = 2; y < 13; y++) {
      for (var P = 0; P < 3; P++) {
        if (
          Math.round(CaNord[P] / 100) == SB &&
          Math.round(CaNord[P] % 100) == y
        ) {
          if (P == 0) {
            Transfer.src = "images/cards/" + CaNord[0] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord0.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 200;

            BucoVuotoNord = 0;

            CaImgTabNord = CaNord[0];

            CaNord[0] = 0;

            MovGiocaNord0();
          }

          if (P == 1) {
            Transfer.src = "images/cards/" + CaNord[1] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "300px";

            Transfer.style.visibility = "visible";

            ImgNord1.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 300;

            BucoVuotoNord = 1;

            CaImgTabNord = CaNord[1];

            CaNord[1] = 0;

            MovGiocaNord1();
          }

          if (P == 2) {
            Transfer.src = "images/cards/" + CaNord[2] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord2.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 400;

            BucoVuotoNord = 2;

            CaImgTabNord = CaNord[2];

            CaNord[2] = 0;

            MovGiocaNord2();
          }

          return;
        }
      }
    }
  }

  //''gioca una figura di seme diverso

  if (
    Math.round(CaImgTabSud / 100) != SB &&
    Math.round(CaImgTabSud % 100) > 8 &&
    Math.round(CaImgTabSud % 100) < 11
  ) {
    for (var y = 8; y < 11; y++) {
      for (var P = 0; P < 3; P++) {
        if (
          Math.round(CaNord[P] / 100) != Seme &&
          Math.round(CaNord[P] % 100) == y
        ) {
          if (P == 0) {
            Transfer.src = "images/cards/" + CaNord[0] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord0.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 200;

            BucoVuotoNord = 0;

            CaImgTabNord = CaNord[0];

            CaNord[0] = 0;

            MovGiocaNord0();
          }

          if (P == 1) {
            Transfer.src = "images/cards/" + CaNord[1] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "300px";

            Transfer.style.visibility = "visible";

            ImgNord1.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 300;

            BucoVuotoNord = 1;

            CaImgTabNord = CaNord[1];

            CaNord[1] = 0;

            MovGiocaNord1();
          }

          if (P == 2) {
            Transfer.src = "images/cards/" + CaNord[2] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord2.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 400;

            BucoVuotoNord = 2;

            CaImgTabNord = CaNord[2];

            CaNord[2] = 0;

            MovGiocaNord2();
          }

          return;
        }
      }
    }
  }

  //'' gioca una briscola

  if (
    Math.round(CaImgTabSud / 100) != SB &&
    Math.round(CaImgTabSud % 100) > 8 &&
    Math.round(CaImgTabSud % 100) < 11
  ) {
    for (var y = 2; y < 13; y++) {
      for (var P = 0; P < 3; P++) {
        if (
          Math.round(CaNord[P] / 100) == SB &&
          Math.round(CaNord[P] % 100) == y
        ) {
          if (P == 0) {
            Transfer.src = "images/cards/" + CaNord[0] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord0.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 200;

            BucoVuotoNord = 0;

            CaImgTabNord = CaNord[0];

            CaNord[0] = 0;

            MovGiocaNord0();
          }

          if (P == 1) {
            Transfer.src = "images/cards/" + CaNord[1] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "300px";

            Transfer.style.visibility = "visible";

            ImgNord1.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 300;

            BucoVuotoNord = 1;

            CaImgTabNord = CaNord[1];

            CaNord[1] = 0;

            MovGiocaNord1();
          }

          if (P == 2) {
            Transfer.src = "images/cards/" + CaNord[2] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord2.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 400;

            BucoVuotoNord = 2;

            CaImgTabNord = CaNord[2];

            CaNord[2] = 0;

            MovGiocaNord2();
          }

          return;
        }
      }
    }
  }

  //' gioca un carico

  if (
    Math.round(CaImgTabSud / 100) != SB &&
    Math.round(CaImgTabSud % 100) > 8 &&
    Math.round(CaImgTabSud % 100) < 11
  ) {
    for (var y = 11; y < 13; y++) {
      for (var P = 0; P < 3; P++) {
        if (
          Math.round(CaNord[P] / 100) != SB &&
          Math.round(CaNord[P] % 100) == y
        ) {
          if (P == 0) {
            Transfer.src = "images/cards/" + CaNord[0] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord0.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 200;

            BucoVuotoNord = 0;

            CaImgTabNord = CaNord[0];

            CaNord[0] = 0;

            MovGiocaNord0();
          }

          if (P == 1) {
            Transfer.src = "images/cards/" + CaNord[1] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "300px";

            Transfer.style.visibility = "visible";

            ImgNord1.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 300;

            BucoVuotoNord = 1;

            CaImgTabNord = CaNord[1];

            CaNord[1] = 0;

            MovGiocaNord1();
          }

          if (P == 2) {
            Transfer.src = "images/cards/" + CaNord[2] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord2.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 400;

            BucoVuotoNord = 2;

            CaImgTabNord = CaNord[2];

            CaNord[2] = 0;

            MovGiocaNord2();
          }

          return;
        }
      }
    }
  }

  //''''''''''''''''''''''''''''''''''''''''''''se la carta in tavolo � un carico

  if (
    Math.round(CaImgTabSud / 100) != SB &&
    Math.round(CaImgTabSud % 100) == 11
  ) {
    //'prende A su 3

    for (var P = 0; P < 3; P++) {
      if (
        Math.round(CaNord[P] / 100) != SB &&
        Math.round(CaNord[P] % 100) == 12 &&
        Math.round(CaNord[P] / 100) == Seme
      ) {
        if (P == 0) {
          Transfer.src = "images/cards/" + CaNord[0] + ".png";

          Transfer.style.top = "50px";

          Transfer.style.left = "400px";

          Transfer.style.visibility = "visible";

          ImgNord0.src = "images/cards/vuota.png";

          TopPos = 50;

          LeftPos = 200;

          BucoVuotoNord = 0;

          CaImgTabNord = CaNord[0];

          CaNord[0] = 0;

          MovGiocaNord0();
        }

        if (P == 1) {
          Transfer.src = "images/cards/" + CaNord[1] + ".png";

          Transfer.style.top = "50px";

          Transfer.style.left = "300px";

          Transfer.style.visibility = "visible";

          ImgNord1.src = "images/cards/vuota.png";

          TopPos = 50;

          LeftPos = 300;

          BucoVuotoNord = 1;

          CaImgTabNord = CaNord[1];

          CaNord[1] = 0;

          MovGiocaNord1();
        }

        if (P == 2) {
          Transfer.src = "images/cards/" + CaNord[2] + ".png";

          Transfer.style.top = "50px";

          Transfer.style.left = "400px";

          Transfer.style.visibility = "visible";

          ImgNord2.src = "images/cards/vuota.png";

          TopPos = 50;

          LeftPos = 400;

          BucoVuotoNord = 2;

          CaImgTabNord = CaNord[2];

          CaNord[2] = 0;

          MovGiocaNord2();
        }

        return;
      }
    }
  }

  //'prende con briscola

  if (
    Math.round(CaImgTabSud / 100) != SB &&
    Math.round(CaImgTabSud % 100) >= 11
  ) {
    for (var y = 2; y < 13; y++) {
      for (var P = 0; P < 3; P++) {
        if (
          Math.round(CaNord[P] / 100) == SB &&
          Math.round(CaNord[P] % 100) == y
        ) {
          if (P == 0) {
            Transfer.src = "images/cards/" + CaNord[0] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord0.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 200;

            BucoVuotoNord = 0;

            CaImgTabNord = CaNord[0];

            CaNord[0] = 0;

            MovGiocaNord0();
          }

          if (P == 1) {
            Transfer.src = "images/cards/" + CaNord[1] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "300px";

            Transfer.style.visibility = "visible";

            ImgNord1.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 300;

            BucoVuotoNord = 1;

            CaImgTabNord = CaNord[1];

            CaNord[1] = 0;

            MovGiocaNord1();
          }

          if (P == 2) {
            Transfer.src = "images/cards/" + CaNord[2] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord2.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 400;

            BucoVuotoNord = 2;

            CaImgTabNord = CaNord[2];

            CaNord[2] = 0;

            MovGiocaNord2();
          }

          return;
        }
      }
    }
  }

  //'scartina da 7 a 2

  if (
    Math.round(CaImgTabSud / 100) != SB &&
    Math.round(CaImgTabSud % 100) >= 11
  ) {
    for (var y = 7; y > 1; y--) {
      for (var P = 0; P < 3; P++) {
        if (
          Math.round(CaNord[P] / 100) != SB &&
          Math.round(CaNord[P] % 100) == y
        ) {
          if (P == 0) {
            Transfer.src = "images/cards/" + CaNord[0] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord0.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 200;

            BucoVuotoNord = 0;

            CaImgTabNord = CaNord[0];

            CaNord[0] = 0;

            MovGiocaNord0();
          }

          if (P == 1) {
            Transfer.src = "images/cards/" + CaNord[1] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "300px";

            Transfer.style.visibility = "visible";

            ImgNord1.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 300;

            BucoVuotoNord = 1;

            CaImgTabNord = CaNord[1];

            CaNord[1] = 0;

            MovGiocaNord1();
          }

          if (P == 2) {
            Transfer.src = "images/cards/" + CaNord[2] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord2.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 400;

            BucoVuotoNord = 2;

            CaImgTabNord = CaNord[2];

            CaNord[2] = 0;

            MovGiocaNord2();
          }

          return;
        }
      }
    }
  }

  //'scartina da 8 a 10

  if (
    Math.round(CaImgTabSud / 100) != SB &&
    Math.round(CaImgTabSud % 100) >= 11
  ) {
    for (var y = 8; y < 11; y++) {
      for (var P = 0; P < 3; P++) {
        if (
          Math.round(CaNord[P] / 100) != SB &&
          Math.round(CaNord[P] % 100) == y
        ) {
          if (P == 0) {
            Transfer.src = "images/cards/" + CaNord[0] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord0.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 200;

            BucoVuotoNord = 0;

            CaImgTabNord = CaNord[0];

            CaNord[0] = 0;

            MovGiocaNord0();
          }

          if (P == 1) {
            Transfer.src = "images/cards/" + CaNord[1] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "300px";

            Transfer.style.visibility = "visible";

            ImgNord1.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 300;

            BucoVuotoNord = 1;

            CaImgTabNord = CaNord[1];

            CaNord[1] = 0;

            MovGiocaNord1();
          }

          if (P == 2) {
            Transfer.src = "images/cards/" + CaNord[2] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord2.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 400;

            BucoVuotoNord = 2;

            CaImgTabNord = CaNord[2];

            CaNord[2] = 0;

            MovGiocaNord2();
          }

          return;
        }
      }
    }
  }

  //'' gioca un carico

  if (
    Math.round(CaImgTabSud / 100) != SB &&
    Math.round(CaImgTabSud % 100) >= 11
  ) {
    for (var y = 11; y < 13; y++) {
      for (var P = 0; P < 3; P++) {
        if (
          Math.round(CaNord[P] / 100) != SB &&
          Math.round(CaNord[P] % 100) == y
        ) {
          if (P == 0) {
            Transfer.src = "images/cards/" + CaNord[0] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord0.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 200;

            BucoVuotoNord = 0;

            CaImgTabNord = CaNord[0];

            CaNord[0] = 0;

            MovGiocaNord0();
          }

          if (P == 1) {
            Transfer.src = "images/cards/" + CaNord[1] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "300px";

            Transfer.style.visibility = "visible";

            ImgNord1.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 300;

            BucoVuotoNord = 1;

            CaImgTabNord = CaNord[1];

            CaNord[1] = 0;

            MovGiocaNord1();
          }

          if (P == 2) {
            Transfer.src = "images/cards/" + CaNord[2] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord2.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 400;

            BucoVuotoNord = 2;

            CaImgTabNord = CaNord[2];

            CaNord[2] = 0;

            MovGiocaNord2();
          }

          return;
        }
      }
    }
  }

  //''''''''''''''''''''''''''''''''''''''se la carta in tavolo � una briscola fino a 7

  //''gioca una scartina

  if (
    Math.round(CaImgTabSud / 100) == SB &&
    Math.round(CaImgTabSud % 100) < 8
  ) {
    for (var y = 7; y > 1; y--) {
      for (var P = 0; P < 3; P++) {
        if (
          Math.round(CaNord[P] / 100) != SB &&
          Math.round(CaNord[P] % 100) == y
        ) {
          if (P == 0) {
            Transfer.src = "images/cards/" + CaNord[0] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord0.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 200;

            BucoVuotoNord = 0;

            CaImgTabNord = CaNord[0];

            CaNord[0] = 0;

            MovGiocaNord0();
          }

          if (P == 1) {
            Transfer.src = "images/cards/" + CaNord[1] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "300px";

            Transfer.style.visibility = "visible";

            ImgNord1.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 300;

            BucoVuotoNord = 1;

            CaImgTabNord = CaNord[1];

            CaNord[1] = 0;

            MovGiocaNord1();
          }

          if (P == 2) {
            Transfer.src = "images/cards/" + CaNord[2] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord2.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 400;

            BucoVuotoNord = 2;

            CaImgTabNord = CaNord[2];

            CaNord[2] = 0;

            MovGiocaNord2();
          }

          return;
        }
      }
    }
  }

  //'gioca una figura

  if (
    Math.round(CaImgTabSud / 100) == SB &&
    Math.round(CaImgTabSud % 100) < 8
  ) {
    for (var y = 8; y < 11; y++) {
      for (var P = 0; P < 3; P++) {
        if (
          Math.round(CaNord[P] / 100) != SB &&
          Math.round(CaNord[P] % 100) == y
        ) {
          if (P == 0) {
            Transfer.src = "images/cards/" + CaNord[0] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord0.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 200;

            BucoVuotoNord = 0;

            CaImgTabNord = CaNord[0];

            CaNord[0] = 0;

            MovGiocaNord0();
          }

          if (P == 1) {
            Transfer.src = "images/cards/" + CaNord[1] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "300px";

            Transfer.style.visibility = "visible";

            ImgNord1.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 300;

            BucoVuotoNord = 1;

            CaImgTabNord = CaNord[1];

            CaNord[1] = 0;

            MovGiocaNord1();
          }

          if (P == 2) {
            Transfer.src = "images/cards/" + CaNord[2] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord2.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 400;

            BucoVuotoNord = 2;

            CaImgTabNord = CaNord[2];

            CaNord[2] = 0;

            MovGiocaNord2();
          }

          return;
        }
      }
    }
  }

  //'gioca una briscola

  if (
    Math.round(CaImgTabSud / 100) == SB &&
    Math.round(CaImgTabSud % 100) < 8
  ) {
    for (var y = 7; y > 1; y--) {
      for (var P = 0; P < 3; P++) {
        if (
          Math.round(CaNord[P] / 100) == SB &&
          Math.round(CaNord[P] % 100) == y
        ) {
          if (P == 0) {
            Transfer.src = "images/cards/" + CaNord[0] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord0.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 200;

            BucoVuotoNord = 0;

            CaImgTabNord = CaNord[0];

            CaNord[0] = 0;

            MovGiocaNord0();
          }

          if (P == 1) {
            Transfer.src = "images/cards/" + CaNord[1] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "300px";

            Transfer.style.visibility = "visible";

            ImgNord1.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 300;

            BucoVuotoNord = 1;

            CaImgTabNord = CaNord[1];

            CaNord[1] = 0;

            MovGiocaNord1();
          }

          if (P == 2) {
            Transfer.src = "images/cards/" + CaNord[2] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord2.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 400;

            BucoVuotoNord = 2;

            CaImgTabNord = CaNord[2];

            CaNord[2] = 0;

            MovGiocaNord2();
          }

          return;
        }
      }
    }
  }

  //'gioca una briscola da 9 a 12

  if (
    Math.round(CaImgTabSud / 100) == SB &&
    Math.round(CaImgTabSud % 100) < 8
  ) {
    for (var y = 9; y < 13; y++) {
      for (var P = 0; P < 3; P++) {
        if (
          Math.round(CaNord[P] / 100) == SB &&
          Math.round(CaNord[P] % 100) == y &&
          Math.round(CaNord[P] % 100) > Math.round(CaImgTabSud % 100)
        ) {
          //'''''''qui ho qualche dubbio ad es. 3 su asso???

          if (P == 0) {
            Transfer.src = "images/cards/" + CaNord[0] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord0.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 200;

            BucoVuotoNord = 0;

            CaImgTabNord = CaNord[0];

            CaNord[0] = 0;

            MovGiocaNord0();
          }

          if (P == 1) {
            Transfer.src = "images/cards/" + CaNord[1] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "300px";

            Transfer.style.visibility = "visible";

            ImgNord1.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 300;

            BucoVuotoNord = 1;

            CaImgTabNord = CaNord[1];

            CaNord[1] = 0;

            MovGiocaNord1();
          }

          if (P == 2) {
            Transfer.src = "images/cards/" + CaNord[2] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord2.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 400;

            BucoVuotoNord = 2;

            CaImgTabNord = CaNord[2];

            CaNord[2] = 0;

            MovGiocaNord2();
          }

          return;
        }
      }
    }
  }

  //'' gioca un carico

  if (
    Math.round(CaImgTabSud / 100) == SB &&
    Math.round(CaImgTabSud % 100) < 8
  ) {
    for (var y = 11; y < 13; y++) {
      for (var P = 0; P < 3; P++) {
        if (
          Math.round(CaNord[P] / 100) != SB &&
          Math.round(CaNord[P] % 100) == y
        ) {
          if (P == 0) {
            Transfer.src = "images/cards/" + CaNord[0] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord0.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 200;

            BucoVuotoNord = 0;

            CaImgTabNord = CaNord[0];

            CaNord[0] = 0;

            MovGiocaNord0();
          }

          if (P == 1) {
            Transfer.src = "images/cards/" + CaNord[1] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "300px";

            Transfer.style.visibility = "visible";

            ImgNord1.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 300;

            BucoVuotoNord = 1;

            CaImgTabNord = CaNord[1];

            CaNord[1] = 0;

            MovGiocaNord1();
          }

          if (P == 2) {
            Transfer.src = "images/cards/" + CaNord[2] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord2.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 400;

            BucoVuotoNord = 2;

            CaImgTabNord = CaNord[2];

            CaNord[2] = 0;

            MovGiocaNord2();
          }

          return;
        }
      }
    }
  }

  //''''''''''''''''''''''''''''''''''se la carta in tavolo � una briscola da otto in poi

  //'gioca una briscola da 9 a 12

  if (
    Math.round(CaImgTabSud / 100) == SB &&
    Math.round(CaImgTabSud % 100) >= 8
  ) {
    for (var y = 9; y < 13; y++) {
      for (var P = 0; P < 3; P++) {
        if (
          Math.round(CaNord[P] / 100) == SB &&
          Math.round(CaNord[P] % 100) == y &&
          Math.round(CaNord[P] % 100) > Math.round(CaImgTabSud % 100)
        ) {
          if (P == 0) {
            Transfer.src = "images/cards/" + CaNord[0] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord0.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 200;

            BucoVuotoNord = 0;

            CaImgTabNord = CaNord[0];

            CaNord[0] = 0;

            MovGiocaNord0();
          }

          if (P == 1) {
            Transfer.src = "images/cards/" + CaNord[1] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "300px";

            Transfer.style.visibility = "visible";

            ImgNord1.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 300;

            BucoVuotoNord = 1;

            CaImgTabNord = CaNord[1];

            CaNord[1] = 0;

            MovGiocaNord1();
          }

          if (P == 2) {
            Transfer.src = "images/cards/" + CaNord[2] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord2.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 400;

            BucoVuotoNord = 2;

            CaImgTabNord = CaNord[2];

            CaNord[2] = 0;

            MovGiocaNord2();
          }

          return;
        }
      }
    }
  }

  //''gioca una scartina

  if (
    Math.round(CaImgTabSud / 100) == SB &&
    Math.round(CaImgTabSud % 100) >= 8
  ) {
    for (var y = 7; y > 1; y--) {
      for (var P = 0; P < 3; P++) {
        if (
          Math.round(CaNord[P] / 100) != SB &&
          Math.round(CaNord[P] % 100) == y
        ) {
          if (P == 0) {
            Transfer.src = "images/cards/" + CaNord[0] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord0.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 200;

            BucoVuotoNord = 0;

            CaImgTabNord = CaNord[0];

            CaNord[0] = 0;

            MovGiocaNord0();
          }

          if (P == 1) {
            Transfer.src = "images/cards/" + CaNord[1] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "300px";

            Transfer.style.visibility = "visible";

            ImgNord1.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 300;

            BucoVuotoNord = 1;

            CaImgTabNord = CaNord[1];

            CaNord[1] = 0;

            MovGiocaNord1();
          }

          if (P == 2) {
            Transfer.src = "images/cards/" + CaNord[2] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord2.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 400;

            BucoVuotoNord = 2;

            CaImgTabNord = CaNord[2];

            CaNord[2] = 0;

            MovGiocaNord2();
          }

          return;
        }
      }
    }
  }

  //''gioca una figura

  if (
    Math.round(CaImgTabSud / 100) == SB &&
    Math.round(CaImgTabSud % 100) >= 8
  ) {
    for (var y = 8; y < 11; y++) {
      for (var P = 0; P < 3; P++) {
        if (
          Math.round(CaNord[P] / 100) != SB &&
          Math.round(CaNord[P] % 100) == y
        ) {
          if (P == 0) {
            Transfer.src = "images/cards/" + CaNord[0] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord0.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 200;

            BucoVuotoNord = 0;

            CaImgTabNord = CaNord[0];

            CaNord[0] = 0;

            MovGiocaNord0();
          }

          if (P == 1) {
            Transfer.src = "images/cards/" + CaNord[1] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "300px";

            Transfer.style.visibility = "visible";

            ImgNord1.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 300;

            BucoVuotoNord = 1;

            CaImgTabNord = CaNord[1];

            CaNord[1] = 0;

            MovGiocaNord1();
          }

          if (P == 2) {
            Transfer.src = "images/cards/" + CaNord[2] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord2.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 400;

            BucoVuotoNord = 2;

            CaImgTabNord = CaNord[2];

            CaNord[2] = 0;

            MovGiocaNord2();
          }

          return;
        }
      }
    }
  }

  //''gioca una briscola

  if (
    Math.round(CaImgTabSud / 100) == SB &&
    Math.round(CaImgTabSud % 100) >= 8
  ) {
    for (var y = 2; y < 8; y++) {
      for (var P = 0; P < 3; P++) {
        if (
          Math.round(CaNord[P] / 100) == SB &&
          Math.round(CaNord[P] % 100) == y
        ) {
          if (P == 0) {
            Transfer.src = "images/cards/" + CaNord[0] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord0.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 200;

            BucoVuotoNord = 0;

            CaImgTabNord = CaNord[0];

            CaNord[0] = 0;

            MovGiocaNord0();
          }

          if (P == 1) {
            Transfer.src = "images/cards/" + CaNord[1] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "300px";

            Transfer.style.visibility = "visible";

            ImgNord1.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 300;

            BucoVuotoNord = 1;

            CaImgTabNord = CaNord[1];

            CaNord[1] = 0;

            MovGiocaNord1();
          }

          if (P == 2) {
            Transfer.src = "images/cards/" + CaNord[2] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord2.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 400;

            BucoVuotoNord = 2;

            CaImgTabNord = CaNord[2];

            CaNord[2] = 0;

            MovGiocaNord2();
          }

          return;
        }
      }
    }
  }

  //'' gioca un carico

  if (
    Math.round(CaImgTabSud / 100) == SB &&
    Math.round(CaImgTabSud % 100) >= 8
  ) {
    for (var y = 11; y < 13; y++) {
      for (var P = 0; P < 3; P++) {
        if (
          Math.round(CaNord[P] / 100) != SB &&
          Math.round(CaNord[P] % 100) == y
        ) {
          if (P == 0) {
            Transfer.src = "images/cards/" + CaNord[0] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord0.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 200;

            BucoVuotoNord = 0;

            CaImgTabNord = CaNord[0];

            CaNord[0] = 0;

            MovGiocaNord0();
          }

          if (P == 1) {
            Transfer.src = "images/cards/" + CaNord[1] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "300px";

            Transfer.style.visibility = "visible";

            ImgNord1.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 300;

            BucoVuotoNord = 1;

            CaImgTabNord = CaNord[1];

            CaNord[1] = 0;

            MovGiocaNord1();
          }

          if (P == 2) {
            Transfer.src = "images/cards/" + CaNord[2] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord2.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 400;

            BucoVuotoNord = 2;

            CaImgTabNord = CaNord[2];

            CaNord[2] = 0;

            MovGiocaNord2();
          }

          return;
        }
      }
    }
  }

  //'gioca una briscola da nove in su

  if (
    Math.round(CaImgTabSud / 100) == SB &&
    Math.round(CaImgTabSud % 100) >= 8
  ) {
    for (var y = 9; y < 14; y++) {
      for (var P = 0; P < 3; P++) {
        if (
          Math.round(CaNord[P] / 100) == SB &&
          Math.round(CaNord[P] % 100) == y
        ) {
          if (P == 0) {
            Transfer.src = "images/cards/" + CaNord[0] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord0.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 200;

            BucoVuotoNord = 0;

            CaImgTabNord = CaNord[0];

            CaNord[0] = 0;

            MovGiocaNord0();
          }

          if (P == 1) {
            Transfer.src = "images/cards/" + CaNord[1] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "300px";

            Transfer.style.visibility = "visible";

            ImgNord1.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 300;

            BucoVuotoNord = 1;

            CaImgTabNord = CaNord[1];

            CaNord[1] = 0;

            MovGiocaNord1();
          }

          if (P == 2) {
            Transfer.src = "images/cards/" + CaNord[2] + ".png";

            Transfer.style.top = "50px";

            Transfer.style.left = "400px";

            Transfer.style.visibility = "visible";

            ImgNord2.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 400;

            BucoVuotoNord = 2;

            CaImgTabNord = CaNord[2];

            CaNord[2] = 0;

            MovGiocaNord2();
          }

          return;
        }
      }
    }
  }

  //'clausola di salvaguardia

  for (var P = 0; P < 3; P++) {
    if (CaNord[P] != 0) {
      if (P == 0) {
        Transfer.src = "images/cards/" + CaNord[0] + ".png";

        Transfer.style.top = "50px";

        Transfer.style.left = "400px";

        Transfer.style.visibility = "visible";

        ImgNord0.src = "images/cards/vuota.png";

        TopPos = 50;

        LeftPos = 200;

        BucoVuotoNord = 0;

        CaImgTabNord = CaNord[0];

        CaNord[0] = 0;

        MovGiocaNord0();
      }

      if (P == 1) {
        Transfer.src = "images/cards/" + CaNord[1] + ".png";

        Transfer.style.top = "50px";

        Transfer.style.left = "300px";

        Transfer.style.visibility = "visible";

        ImgNord1.src = "images/cards/vuota.png";

        TopPos = 50;

        LeftPos = 300;

        BucoVuotoNord = 1;

        CaImgTabNord = CaNord[1];

        CaNord[1] = 0;

        MovGiocaNord1();
      }

      if (P == 2) {
        Transfer.src = "images/cards/" + CaNord[2] + ".png";

        Transfer.style.top = "50px";

        Transfer.style.left = "400px";

        Transfer.style.visibility = "visible";

        ImgNord2.src = "images/cards/vuota.png";

        TopPos = 50;

        LeftPos = 400;

        BucoVuotoNord = 2;

        CaImgTabNord = CaNord[2];

        CaNord[2] = 0;

        MovGiocaNord2();
      }

      return;
    }
  }
}

function MovGiocaNord0() {
  NewTop = TopPos + "px";

  NewLeft = LeftPos + "px";

  Transfer.style.top = NewTop;

  Transfer.style.left = NewLeft;

  TopPos = TopPos + 3;

  LeftPos = LeftPos + 1;

  if (TopPos < 200) {
    myTimerMovGiocaNord0 = window.setTimeout("MovGiocaNord0()", 15);
  } else {
    clearTimeout(myTimerMovGiocaNord0);

    ImgTabNord.src = "images/cards/" + CaImgTabNord + ".png";

    Transfer.style.visibility = "hidden";

    Transfer.src = "images/cards/back.png";

    Decide_chi_prende();

    if (FlagPrimoMano == "Nord") {
      Nord_su_Sud();
    }

    if (FlagPrimoMano == "Sud") {
      Sud_su_Nord();
    }
  }
}

function MovGiocaNord1() {
  NewTop = TopPos + "px";

  NewLeft = LeftPos + "px";

  Transfer.style.top = NewTop;

  Transfer.style.left = NewLeft;

  TopPos = TopPos + 3;

  LeftPos = LeftPos - 1;

  if (TopPos < 200) {
    myTimerMovGiocaNord1 = window.setTimeout("MovGiocaNord1()", 15);
  } else {
    clearTimeout(myTimerMovGiocaNord1);

    ImgTabNord.src = "images/cards/" + CaImgTabNord + ".png";

    Transfer.style.visibility = "hidden";

    Transfer.src = "images/cards/back.png";

    Decide_chi_prende();

    if (FlagPrimoMano == "Nord") {
      Nord_su_Sud();
    }

    if (FlagPrimoMano == "Sud") {
      Sud_su_Nord();
    }
  }
}

function MovGiocaNord2() {
  NewTop = TopPos + "px";

  NewLeft = LeftPos + "px";

  Transfer.style.top = NewTop;

  Transfer.style.left = NewLeft;

  TopPos = TopPos + 3;

  LeftPos = LeftPos - 5;

  if (LeftPos > 250) {
    LeftPos = LeftPos + 2;
  } else {
    LeftPos = LeftPos + 0;
  }

  if (TopPos < 200) {
    myTimerMovGiocaNord2 = window.setTimeout("MovGiocaNord2()", 15);
  } else {
    clearTimeout(myTimerMovGiocaNord2);

    ImgTabNord.src = "images/cards/" + CaImgTabNord + ".png";

    Transfer.style.visibility = "hidden";

    Transfer.src = "images/cards/back.png";

    Decide_chi_prende();

    if (FlagPrimoMano == "Nord") {
      Nord_su_Sud();
    }

    if (FlagPrimoMano == "Sud") {
      Sud_su_Nord();
    }
  }
}

function Decide_chi_prende() {
  var DN, UN, DS, US;

  DN = Math.round(CaImgTabNord / 100);

  DS = Math.round(CaImgTabSud / 100);

  UN = Math.round(CaImgTabNord % 100);

  US = Math.round(CaImgTabSud % 100);

  if (DN != DS) {
    if (FlagPrimoMano == "Nord") {
      Prende = "NORD";
    }

    if (FlagPrimoMano == "Sud") {
      Prende = "SUD";
    }
  }

  if (DN == SB && DS != SB) {
    Prende = "NORD";
  }

  if (DN != SB && DS == SB) {
    Prende = "SUD";
  }

  if (DN == DS) {
    if (UN > US) {
      Prende = "NORD";
    }

    if (US > UN) {
      Prende = "SUD";
    }
  }

  if (Prende == "NORD") {
    FlagPrimoMano = "Nord";
  }

  if (Prende == "SUD") {
    FlagPrimoMano = "Sud";
  }

  //calcola il punteggio

  var PuntMano;

  PuntMano = 0;

  if (UN == 12) {
    PuntMano = PuntMano + 11;
  }

  if (UN == 11) {
    PuntMano = PuntMano + 10;
  }

  if (UN == 10) {
    PuntMano = PuntMano + 4;
  }

  if (UN == 9) {
    PuntMano = PuntMano + 3;
  }

  if (UN == 8) {
    PuntMano = PuntMano + 2;
  }

  if (US == 12) {
    PuntMano = PuntMano + 11;
  }

  if (US == 11) {
    PuntMano = PuntMano + 10;
  }

  if (US == 10) {
    PuntMano = PuntMano + 4;
  }

  if (US == 9) {
    PuntMano = PuntMano + 3;
  }

  if (US == 8) {
    PuntMano = PuntMano + 2;
  }

  if (FlagPrimoMano == "Nord") {
    Transfer.style.top = "200px";

    Transfer.style.left = "250px";

    TopPos = 200;

    LeftPos = 250;

    Transfer.src = "images/cards/" + CaImgTabNord + ".png";

    Transfer.style.visibility = "visible";

    ImgTabNord.src = "images/cards/vuota.png";

    PuntNord = PuntNord + PuntMano;

    PreseNord.value = PuntNord;
  }

  if (FlagPrimoMano == "Sud") {
    TopPos = 200;

    LeftPos = 350;

    NewTop = TopPos + "px";

    NewLeft = LeftPos + "px";

    Transfer.style.top = NewTop;

    Transfer.style.left = NewLeft;

    Transfer.src = "images/cards/" + CaImgTabSud + ".png";

    Transfer.style.visibility = "visible";

    ImgTabSud.src = "images/cards/vuota.png";

    PuntSud = PuntSud + PuntMano;

    PreseSud.value = PuntSud;
  }
}

function Distribuisci_dopoPrima() {
  Transfer.style.top = "200px";

  Transfer.style.left = "70px";

  TopPos = 200;

  LeftPos = 70;

  if (QCaTall == 0) {
   
    for (i=0; i<3;i++){
      if (CaSud[i] == 0)
      Fine();
    }
    
  }

  if (QCaTall == 0) {
    if (FlagPrimoMano == "Nord") {
      Nord();
    }

    if (FlagPrimoMano == "Sud") {
      setTimeout(function () {
        AbilitaSud();
      }, 500);
    }

    return;
  }

  //inizia a giocare Nord

  if (FlagPrimoMano == "Nord") {
    Transfer.style.visibility = "visible";

    if (BucoVuotoNord == 0) {
      DopoN0();

      return;
    }

    if (BucoVuotoNord == 1) {
      DopoN1();

      return;
    }

    if (BucoVuotoNord == 2) {
      DopoN2();

      return;
    }
  }

  //inizia a giocare Sud

  if (FlagPrimoMano == "Sud") {
    Transfer.style.visibility = "visible";

    if (BucoVuotoSud == 0) {
      DopoS0();

      return;
    }

    if (BucoVuotoSud == 1) {
      DopoS1();

      return;
    }

    if (BucoVuotoSud == 2) {
      DopoS2();

      return;
    }
  }
}

function Nord() {
  //''solo due carta al tallone

  if (QCaTall == 2 && Math.round(CaTall[1] % 100) >= 11) {
    //''alert QCaTall

    //''gioca carico da 12 a 11

    for (var y = 12; y > 10; y--) {
      for (var P = 0; P < 3; P++) {
        if (
          Math.round(CaNord[P] / 100) != SB &&
          Math.round(CaNord[P] % 100) == y
        ) {
          BucoVuotoNord = P;

          CaImgTabNord = CaNord[P];

          Transfer.src = "images/cards/" + CaNord[P] + ".png";

          if (P == 0) {
            TopPos = 50;

            LeftPos = 200;

            ImgNord0.src = "images/cards/vuota.png";

            N0Tall();
          }

          if (P == 1) {
            TopPos = 50;

            LeftPos = 300;

            ImgNord1.src = "images/cards/vuota.png";

            N1Tall();
          }

          if (P == 2) {
            ImgNord2.src = "images/cards/vuota.png";

            TopPos = 50;

            LeftPos = 400;

            ImgNord2.src = "images/cards/vuota.png";

            N2Tall();
          }

          return;
        }
      }
    }
  }

  //''gioca scartina da 2 a 7

  for (var y = 2; y < 8; y++) {
    for (var P = 0; P < 3; P++) {
      if (
        Math.round(CaNord[P] / 100) != SB &&
        Math.round(CaNord[P] % 100) == y
      ) {
        BucoVuotoNord = P;

        CaImgTabNord = CaNord[P];

        Transfer.src = "images/cards/" + CaNord[P] + ".png";

        if (P == 0) {
          TopPos = 50;

          LeftPos = 200;

          ImgNord0.src = "images/cards/vuota.png";

          N0Tall();
        }

        if (P == 1) {
          TopPos = 50;

          LeftPos = 300;

          ImgNord1.src = "images/cards/vuota.png";

          N1Tall();
        }

        if (P == 2) {
          TopPos = 50;

          LeftPos = 400;

          ImgNord2.src = "images/cards/vuota.png";

          N2Tall();
        }

        return;
      }
    }
  }

  //''gioca scartina da 8 a 10

  for (var y = 8; y < 11; y++) {
    for (var P = 0; P < 3; P++) {
      if (
        Math.round(CaNord[P] / 100) != SB &&
        Math.round(CaNord[P] % 100) == y
      ) {
        BucoVuotoNord = P;

        CaImgTabNord = CaNord[P];

        Transfer.src = "images/cards/" + CaNord[P] + ".png";

        if (P == 0) {
          TopPos = 50;

          LeftPos = 200;

          ImgNord0.src = "images/cards/vuota.png";

          N0Tall();
        }

        if (P == 1) {
          TopPos = 50;

          LeftPos = 300;

          ImgNord1.src = "images/cards/vuota.png";

          N1Tall();
        }

        if (P == 2) {
          TopPos = 50;

          LeftPos = 400;

          ImgNord2.src = "images/cards/vuota.png";

          N2Tall();
        }

        return;
      }
    }
  }

  //''gioca briscola da 2 a 7

  for (var y = 2; y < 8; y++) {
    for (var P = 0; P < 3; P++) {
      if (
        Math.round(CaNord[P] / 100) == SB &&
        Math.round(CaNord[P] % 100) == y
      ) {
        BucoVuotoNord = P;

        CaImgTabNord = CaNord[P];

        Transfer.src = "images/cards/" + CaNord[P] + ".png";

        if (P == 0) {
          TopPos = 50;

          LeftPos = 200;

          ImgNord0.src = "images/cards/vuota.png";

          N0Tall();
        }

        if (P == 1) {
          TopPos = 50;

          LeftPos = 300;

          ImgNord1.src = "images/cards/vuota.png";

          N1Tall();
        }

        if (P == 2) {
          TopPos = 50;

          LeftPos = 400;

          ImgNord2.src = "images/cards/vuota.png";

          N2Tall();
        }

        return;
      }
    }
  }

  //''gioca scartina da 8 a 10

  for (var y = 8; y < 11; y++) {
    for (var P = 0; P < 3; P++) {
      if (
        Math.round(CaNord[P] / 100) == SB &&
        Math.round(CaNord[P] % 100) == y
      ) {
        BucoVuotoNord = P;

        CaImgTabNord = CaNord[P];

        Transfer.src = "images/cards/" + CaNord[P] + ".png";

        if (P == 0) {
          TopPos = 50;

          LeftPos = 200;

          ImgNord0.src = "images/cards/vuota.png";

          N0Tall();
        }

        if (P == 1) {
          TopPos = 50;

          LeftPos = 300;

          ImgNord1.src = "images/cards/vuota.png";

          N1Tall();
        }

        if (P == 2) {
          TopPos = 50;

          LeftPos = 400;

          ImgNord2.src = "images/cards/vuota.png";

          N2Tall();
        }

        return;
      }
    }
  }

  //''gioca carico da 12 a 11

  for (var y = 12; y > 10; y--) {
    for (var P = 0; P < 3; P++) {
      if (
        Math.round(CaNord[P] / 100) != SB &&
        Math.round(CaNord[P] % 100) == y
      ) {
        BucoVuotoNord = P;

        CaImgTabNord = CaNord[P];

        Transfer.src = "images/cards/" + CaNord[P] + ".png";

        if (P == 0) {
          TopPos = 50;

          LeftPos = 200;

          ImgNord0.src = "images/cards/vuota.png";

          N0Tall();
        }

        if (P == 1) {
          TopPos = 50;

          LeftPos = 300;

          ImgNord1.src = "images/cards/vuota.png";

          N1Tall();
        }

        if (P == 2) {
          TopPos = 50;

          LeftPos = 400;

          ImgNord2.src = "images/cards/vuota.png";

          N2Tall();
        }

        return;
      }
    }
  }

  //''gioca briscola da 12 a 11

  for (var y = 12; y > 10; y--) {
    for (var P = 0; P < 3; P++) {
      if (
        Math.round(CaNord[P] / 100) == SB &&
        Math.round(CaNord[P] % 100) == y
      ) {
        BucoVuotoNord = P;

        CaImgTabNord = CaNord[P];

        Transfer.src = "images/cards/" + CaNord[P] + ".png";

        if (P == 0) {
          TopPos = 50;

          LeftPos = 200;

          ImgNord0.src = "images/cards/vuota.png";

          N0Tall();
        }

        if (P == 1) {
          TopPos = 50;

          LeftPos = 300;

          ImgNord1.src = "images/cards/vuota.png";

          N1Tall();
        }

        if (P == 2) {
          TopPos = 50;

          LeftPos = 400;

          ImgNord2.src = "images/cards/vuota.png";

          N2Tall();
        }

        return;
      }
    }
  }
}

function N0Tall() {
  NewTop = TopPos + "px";

  NewLeft = LeftPos + "px";

  Transfer.style.top = NewTop;

  Transfer.style.left = NewLeft;

  Transfer.style.visibility = "visible";

  TopPos = TopPos + 3;

  LeftPos = LeftPos + 1;

  if (TopPos < 200) {
    var myTimerN0Tall = setTimeout("N0Tall()", 15);
  } else {
    clearTimeout(myTimerN0Tall);

    ImgTabNord.src = "images/cards/" + CaImgTabNord + ".png";

    Transfer.style.visibility = "hidden";

    Transfer.src = "images/cards/back.png";

    ImgNord0.src = "images/cards/vuota.png";

    CaNord[0] = 0;

    setTimeout(function () {
      AbilitaSud();
    }, 500);
  }
}

function N1Tall() {
  NewTop = TopPos + "px";

  NewLeft = LeftPos + "px";

  Transfer.style.top = NewTop;

  Transfer.style.left = NewLeft;

  Transfer.style.visibility = "visible";

  TopPos = TopPos + 3;

  LeftPos = LeftPos - 1;

  if (TopPos < 200) {
    var myTimerN1Tall = setTimeout("N1Tall()", 15);
  } else {
    clearTimeout(myTimerN1Tall);

    ImgTabNord.src = "images/cards/" + CaImgTabNord + ".png";

    Transfer.style.visibility = "hidden";

    Transfer.src = "images/cards/back.png";

    ImgNord1.src = "images/cards/vuota.png";

    CaNord[1] = 0;

    // AbilitaSud();

    setTimeout(function () {
      AbilitaSud();
    }, 500);
  }
}

function N2Tall() {
  NewTop = TopPos + "px";

  NewLeft = LeftPos + "px";

  Transfer.style.top = NewTop;

  Transfer.style.left = NewLeft;

  Transfer.style.visibility = "visible";

  TopPos = TopPos + 3;

  LeftPos = LeftPos - 5;

  if (LeftPos > 250) {
    LeftPos = LeftPos + 2;
  } else {
    LeftPos = LeftPos + 0;
  }

  if (TopPos < 200) {
    var myTimerN2Tall = setTimeout("N2Tall()", 15);
  } else {
    clearTimeout(myTimerN2Tall);

    ImgTabNord.src = "images/cards/" + CaImgTabNord + ".png";

    Transfer.style.visibility = "hidden";

    Transfer.src = "images/cards/back.png";

    ImgNord2.src = "images/cards/vuota.png";

    CaNord[2] = 0;

    // AbilitaSud();

    setTimeout(function () {
      AbilitaSud();
    }, 500);
  }
}

function Nord_su_Sud() {
  NewTop = TopPos + "px";

  NewLeft = LeftPos + "px";

  Transfer.style.top = NewTop;

  Transfer.style.left = NewLeft;

  LeftPos = LeftPos + 4;

  if (LeftPos < 350) {
    var myTimerNord_su_Sud = window.setTimeout("Nord_su_Sud()", 15);
  } else {
    clearTimeout(myTimerNord_su_Sud);

    ImgTabSud.src = "images/cards/vuota.png";

    ImgTabNord.src = "images/cards/vuota.png";

    Transfer.style.visibility = "hidden";

    Transfer.src = "images/cards/back.png";

    Distribuisci_dopoPrima();
  }
}

function Sud_su_Nord() {
  NewTop = TopPos + "px";

  NewLeft = LeftPos + "px";

  Transfer.style.top = NewTop;

  Transfer.style.left = NewLeft;

  LeftPos = LeftPos - 4;

  if (LeftPos > 249) {
    myTimerSud_su_Nord = window.setTimeout("Sud_su_Nord()", 15);
  } else {
    clearTimeout(myTimerSud_su_Nord);

    ImgTabSud.src = "images/cards/vuota.png";

    ImgTabNord.src = "images/cards/vuota.png";

    Transfer.style.visibility = "hidden";

    Transfer.src = "images/cards/back.png";

    Distribuisci_dopoPrima();
  }
}

function DopoN0() {
  if (QCaTall == 2) {
    Tall.style.visibility = "hidden";
  }

  NewTop = TopPos + "px";

  NewLeft = LeftPos + "px";

  Transfer.style.top = NewTop;

  Transfer.style.left = NewLeft;

  TopPos = TopPos - 3;

  LeftPos = LeftPos + 3;

  if (TopPos > 50) {
    var myTimerDopoN0 = setTimeout("DopoN0()", 15);
  } else {
    clearTimeout(myTimerDopoN0);

    ImgNord0.src = "images/cards/back.png";

    CaNord[0] = CaTall[QCaTall];

    QCaTall = QCaTall - 1;

    lblQCaTall.value = QCaTall;

    Carte_finite();

    Transfer.style.top = "200px";

    Transfer.style.left = "70px";

    TopPos = 200;

    LeftPos = 70;

    if (FlagPrimoMano == "Nord" && BucoVuotoSud == 0 && QCaTall > 0) {
      DopoS0();
    }

    if (FlagPrimoMano == "Nord" && BucoVuotoSud == 1 && QCaTall > 0) {
      DopoS1();
    }

    if (FlagPrimoMano == "Nord" && BucoVuotoSud == 2 && QCaTall > 0) {
      DopoS2();
    }

    if (FlagPrimoMano == "Sud") {
      setTimeout(function () {
        AbilitaSud();
      }, 1000);
    }
  }
}

function DopoN1() {
  if (QCaTall == 2) {
    Tall.style.visibility = "hidden";
  }

  NewTop = TopPos + "px";

  NewLeft = LeftPos + "px";

  Transfer.style.top = NewTop;

  Transfer.style.left = NewLeft;

  TopPos = TopPos - 2;

  LeftPos = LeftPos + 3;

  if (TopPos > 50) {
    var myTimerDopoN1 = setTimeout("DopoN1()", 15);
  } else {
    clearTimeout(myTimerDopoN1);

    ImgNord1.src = "images/cards/back.png";

    CaNord[1] = CaTall[QCaTall];

    QCaTall = QCaTall - 1;

    lblQCaTall.value = QCaTall;

    Carte_finite();

    Transfer.style.top = "200px";

    Transfer.style.left = "70px";

    TopPos = 200;

    LeftPos = 70;

    if (FlagPrimoMano == "Nord" && BucoVuotoSud == 0 && QCaTall > 0) {
      DopoS0();
    }

    if (FlagPrimoMano == "Nord" && BucoVuotoSud == 1 && QCaTall > 0) {
      DopoS1();
    }

    if (FlagPrimoMano == "Nord" && BucoVuotoSud == 2 && QCaTall > 0) {
      DopoS2();
    }

    if (FlagPrimoMano == "Sud") {
      setTimeout(function () {
        AbilitaSud();
      }, 1000);
    }
  }
}

function DopoN2() {
  if (QCaTall == 2) {
    Tall.style.visibility = "hidden";
  }

  NewTop = TopPos + "px";

  NewLeft = LeftPos + "px";

  Transfer.style.top = NewTop;

  Transfer.style.left = NewLeft;

  TopPos = TopPos - 2;

  LeftPos = LeftPos + 4;

  if (TopPos > 50) {
    var myTimerDopoN2 = setTimeout("DopoN2()", 15);
  } else {
    clearTimeout(myTimerDopoN2);

    ImgNord2.src = "images/cards/back.png";

    CaNord[2] = CaTall[QCaTall];

    QCaTall = QCaTall - 1;

    lblQCaTall.value = QCaTall;

    Carte_finite();

    Transfer.style.top = "200px";

    Transfer.style.left = "70px";

    TopPos = 200;

    LeftPos = 70;

    if (FlagPrimoMano == "Nord" && BucoVuotoSud == 0 && QCaTall > 0) {
      DopoS0();
    }

    if (FlagPrimoMano == "Nord" && BucoVuotoSud == 1 && QCaTall > 0) {
      DopoS1();
    }

    if (FlagPrimoMano == "Nord" && BucoVuotoSud == 2 && QCaTall > 0) {
      DopoS2();
    }

    if (FlagPrimoMano == "Sud") {
      setTimeout(function () {
        AbilitaSud();
      }, 1000);
    }
  }
}

function DopoS0() {
  if (QCaTall == 2) {
    Tall.style.visibility = "hidden";
  }

  NewTop = TopPos + "px";

  NewLeft = LeftPos + "px";

  Transfer.style.top = NewTop;

  Transfer.style.left = NewLeft;

  TopPos = TopPos + 3;

  LeftPos = LeftPos + 2;

  if (TopPos < 350 || LeftPos > 200) {
    var myTimerDopoS0 = setTimeout("DopoS0()", 15);
  } else {
    clearTimeout(myTimerDopoS0);

    ImgSud0.src = "images/cards/back.png";

    ImgSud0.src = "images/cards/" + CaTall[QCaTall] + ".png";

    CaSud[0] = CaTall[QCaTall];

    QCaTall = QCaTall - 1;

    lblQCaTall.value = QCaTall;

    Carte_finite();

    Transfer.style.top = "200px";

    Transfer.style.left = "70px";

    TopPos = 200;

    LeftPos = 70;

    if (FlagPrimoMano == "Sud" && BucoVuotoNord == 0 && QCaTall > 0) {
      DopoN0();
    }

    if (FlagPrimoMano == "Sud" && BucoVuotoNord == 1 && QCaTall > 0) {
      DopoN1();
    }

    if (FlagPrimoMano == "Sud" && BucoVuotoNord == 2 && QCaTall > 0) {
      DopoN2();
    }

    if (FlagPrimoMano == "Nord") {
      Nord();
    }
  }
}

function DopoS1() {
  if (QCaTall == 2) {
    Tall.style.visibility = "hidden";
  }

  NewTop = TopPos + "px";

  NewLeft = LeftPos + "px";

  Transfer.style.top = NewTop;

  Transfer.style.left = NewLeft;

  TopPos = TopPos + 2;

  LeftPos = LeftPos + 3;

  if (TopPos < 350 || LeftPos > 300) {
    var myTimerDopoS1 = setTimeout("DopoS1()", 15);
  } else {
    clearTimeout(myTimerDopoS1);

    ImgSud1.src = "images/cards/" + CaTall[QCaTall] + ".png";

    CaSud[1] = CaTall[QCaTall];

    QCaTall = QCaTall - 1;

    lblQCaTall.value = QCaTall;

    Carte_finite();

    Transfer.style.top = "200px";

    Transfer.style.left = "70px";

    TopPos = 200;

    LeftPos = 70;

    if (FlagPrimoMano == "Sud" && BucoVuotoNord == 0 && QCaTall > 0) {
      DopoN0();
    }

    if (FlagPrimoMano == "Sud" && BucoVuotoNord == 1 && QCaTall > 0) {
      DopoN1();
    }

    if (FlagPrimoMano == "Sud" && BucoVuotoNord == 2 && QCaTall > 0) {
      DopoN2();
    }

    if (FlagPrimoMano == "Nord") {
      Nord();
    }
  }
}

function DopoS2() {
  if (QCaTall == 2) {
    Tall.style.visibility = "hidden";
  }

  NewTop = TopPos + "px";

  NewLeft = LeftPos + "px";

  Transfer.style.top = NewTop;

  Transfer.style.left = NewLeft;

  TopPos = TopPos + 2;

  LeftPos = LeftPos + 4;

  if (TopPos < 350 || LeftPos > 400) {
    var myTimerDopoS2 = setTimeout("DopoS2()", 15);
  } else {
    clearTimeout(myTimerDopoS2);

    ImgSud2.src = "images/cards/" + CaTall[QCaTall] + ".png";

    CaSud[2] = CaTall[QCaTall];

    QCaTall = QCaTall - 1;

    lblQCaTall.value = QCaTall;

    Carte_finite();

    Transfer.style.top = "200px";

    Transfer.style.left = "70px";

    TopPos = 200;

    LeftPos = 70;

    if (FlagPrimoMano == "Sud" && BucoVuotoNord == 0 && QCaTall > 0) {
      DopoN0();
    }

    if (FlagPrimoMano == "Sud" && BucoVuotoNord == 1 && QCaTall > 0) {
      DopoN1();
    }

    if (FlagPrimoMano == "Sud" && BucoVuotoNord == 2 && QCaTall > 0) {
      DopoN2();
    }

    if (FlagPrimoMano == "Nord") {
      Nord();
    }
  }
}

function Carte_finite() {
  if (QCaTall == 1) {
    Pozzo.src = "images/cards/vuota.png";
  }

  if (QCaTall == 1) {
    Pozzo.style.visibility = "hidden";
  }

  if (QCaTall == 0) {
    Transfer.style.visibility = "hidden";
  }

  if (QCaTall == 1) {
    Tall.style.visibility = "hidden";
  }

  if (QCaTall == 1) {
    Transfer.src = "images/cards/" + CaTall[1] + ".png";
  }
}

function AbilitaSud() {
  if (CaSud[0] != 0) {
    ImgSud0.disabled = false;
  }

  if (CaSud[1] != 0) {
    ImgSud1.disabled = false;
  }

  if (CaSud[2] != 0) {
    ImgSud2.disabled = false;
  }

  if (CaSud[0] == 0) {
    ImgSud0.disabled = true;
  }

  if (CaSud[1] == 0) {
    ImgSud1.disabled = true;
  }

  if (CaSud[2] == 0) {
    ImgSud2.disabled = true;
  }
}

function Fine() {
  var scoreboard = document.getElementById("scoreboard");
  var divScoreG = document.getElementById("scoreG");
  var divScoreC = document.getElementById("scoreC");

  divScoreC.textContent = PuntNord;
  divScoreG.textContent = PuntSud; 

  /*if (
    CaNord[0] == 0 &&
    CaNord[1] == 0 &&
    CaNord[2] == 0 &&
    CaSud[0] == 0 &&
    CaSud[1] == 0 &&
    CaSud[2] == 0
  ) {*/
   
    if (scoreboard.style.display == "none") {
      scoreboard.style.display = "grid";
    } else {
      scoreboard.style.display = "none";
    }
    
  document.getElementById("mnuNew").disabled = false;
 
}

var ImgNord0 = document.getElementById("IMGNORD0");

var ImgNord1 = document.getElementById("IMGNORD1");

var ImgNord2 = document.getElementById("IMGNORD2");

var ImgSud0 = document.getElementById("IMGSUD0");

var ImgSud1 = document.getElementById("IMGSUD1");

var ImgSud2 = document.getElementById("IMGSUD2");

var Tall = document.getElementById("TALL");

var Pozzo = document.getElementById("POZZO");

var ImgTabNord = document.getElementById("IMGtabNORD");

var ImgTabSud = document.getElementById("IMGtabSUD");

var PreseNord = document.getElementById("PRESENORD");

var PreseSud = document.getElementById("PRESESUD");

var Transfer = document.getElementById("TRANSFER");

var lblQCaTall = document.getElementById("lblQCaTall");

QCaTall = 40;

lblQCaTall.value = QCaTall;

PreseNord.value = "0";

PreseSud.value = "0";

setTimeout(function () {
  document.getElementById("mnuNew").disabled = false;
}, 500);

setTimeout(function () {
  document.getElementById("loading").style.visibility = "hidden";
}, 500);
