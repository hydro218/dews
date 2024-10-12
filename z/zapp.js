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

function end() {
  const nh = document.createElement("h1");
  const b = document.createElement("button");
  nh.textContent = "당황하지 않고, 침착해야 합니다";
  b.textContent = '처음 화면으로 돌아가기';
  b.onclick = () => window.location.assign("../index.html");
  b.className += 'end';
  document.body.append(nh);
  document.body.append(b);
}

function choose(what) {
  switch (what) {
    case "1":
      document.getElementById("can-remove0").remove();
      document.getElementById("can-remove1").remove();
      document.getElementById("can-remove2").remove();
      sel("주변에 책상이 있나요?", "예", "아니요", what);
      break;
    case "2":
      document.getElementById("can-remove0").remove();
      document.getElementById("can-remove1").remove();
      document.getElementById("can-remove2").remove();
      guide("급한 경사지를 피해 평탄한 곳으로 대피하세요", what);
      break;
    case "20":
      end();
      break;
    case "12":
      guide("흔들림이 멈출 때까지 최대한 가만히 있으세요", "110");
      break;
    case "11":
      guide("책상 아래에 들어가 몸을 보호하세요", what);
      break;
    case "110":
      guide("흔들림이 멈출 때까지 책상다리를 꼭 잡고 버티세요", what);
      break;
    case "1100":
      guide("가스와 전기 등을 차단하고 문을 열어 출구를 확보하세요", what);
      break;
    case "11000":
      guide("밖으로 나갈 때는 신발은 꼭 신고 이동하세요", what);
      break;
    case "110000":
      guide("계단을 이용하여 밖으로 대피하세요", what);
      break;
    case "1100000":
      guide("급한 경사지를 피해 평탄한 곳으로 대피하세요", "2");
      break;
    default:
      console.log(what + " did not work");
  }
}