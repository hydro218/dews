function sel(que, b1, b2, what) {
  const nh = document.createElement("h1");
  const b02 = document.createElement("button");
  const b01 = document.createElement("button");
  nh.textContent = que;
  b01.textContent = b1;
  b02.textContent = b2;
  b01.className += 'select';
  b02.className += 'select';
  nh.id = 'can-remove0';
  b01.id = 'can-remove1';
  b02.id = 'can-remove2';
  b01.onclick = () => {
    document.getElementById("can-remove0").remove();
    document.getElementById("can-remove1").remove();
    document.getElementById("can-remove2").remove();
    choose(what + "1");
  }
  b02.onclick = () => {
    document.getElementById("can-remove0").remove();
    document.getElementById("can-remove1").remove();
    document.getElementById("can-remove2").remove();
    choose(what + "2");
  }
  document.body.append(nh);
  document.body.append(b01);
  document.body.append(b02);
}

function guide(mes, what) {
  const nh = document.createElement("h1");
  const b = document.createElement("button");
  nh.textContent = mes;
  b.textContent = '다음';
  b.className += 'confirm';
  b.id = 'can-remove';
  b.onclick = () => {
    document.getElementById("can-remove").remove();
    choose(what + "0");
  }
  document.body.append(nh);
  document.body.append(b);
}

function end(){
  const nh = document.createElement("h1");
  const b = document.createElement("button");
  nh.textContent = "당황하지 않고, 침착해야 합니다";
  b.textContent = '처음 화면으로 돌아가기';
  b.onclick = () => window.location.assign("https://hydro218.github.io/");
  b.className += 'end';
  document.body.append(nh);
  document.body.append(b);
}

function choose(what) {
  switch (what) {
    case "1":
      guide("밖으로 나가지않고 창문을 통해 구조를 요청하세요", what);
      document.getElementById("can-remove0").remove();
      document.getElementById("can-remove1").remove();
      document.getElementById("can-remove2").remove();
      break;
    case "2":
      guide("몸을 숙이고 계단을 통해 신속히 움직이세요", what);
      document.getElementById("can-remove0").remove();
      document.getElementById("can-remove1").remove();
      document.getElementById("can-remove2").remove();
      break;
    case "10":
      guide("'불이야!' 라고 외치고, 119에 신고하세요", what);
      break;
    case "100":
      end();
      break;
    case "20":
      guide("문을 열고 밖으로 나가세요", what);
      break;
    case "200":
      guide("안전한 곳에서 119에 신고하세요", what);
      break;
    case "2000":
        end();
        break;
      default:
      console.log(what + " did not work");
  }
}