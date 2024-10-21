function del(){
  document.getElementById("removeh").remove();
  document.getElementById("remove1").remove();
  document.getElementById("remove2").remove();
}

const d = {
  "": {
    head: "어디에 있나요?",
    type: "sel",
    t1: "실내",
    t2: "실외",
  },
  "1": {
    head: "주변에 책상과 같은 구조물이 있나요?",
    type: "sel",
    t1: "예",
    t2: "아니오",
  },
  "11": {
    head: "구조물 아래에 들어가 몸을 보호하세요",
    type: "guide",
  },
  "110": {
    head: "흔들림이 멈출 때까지 구조물을 잡고 버티세요",
    type: "guide",
  },
  "1100": {
    head: "가스와 전기를 차단하고 문을 열어 출구를 확보하세요",
    type: "guide",
  },
  "11000": {
    head: "밖으로 나갈 때는 신발을 신고 이동하세요",
    type: "guide",
  },
  "110000": {
    head: "계단을 이용하여 밖으로 대피하세요",
    type: "guide",
  },
  "1100000": {
    head: "급한 경사지를 피해 평탄한 곳으로 대피하세요",
    type: "guide",
  },
  "11000000": {
    type: "end",
  },
  "12": {
    head: "흔들림이 멈출 때까지 최대한 가만히 있으세요",
    type: "guide",
  },
  "120": {
    head: "가스와 전기를 차단하고 문을 열어 출구를 확보하세요",
    type: "guide",
  },
  "1200": {
    head: "밖으로 나갈 때는 신발을 신고 이동하세요",
    type: "guide",
  },
  "12000": {
    head: "계단을 이용하여 밖으로 대피하세요",
    type: "guide",
  },
  "120000": {
    head: "급한 경사지를 피해 평탄한 곳으로 대피하세요",
    type: "guide",
  },
  "1200000": {
    type: "end",
  },
  "2": {
    head: "급한 경사지를 피해 평탄한 곳으로 대피하세요",
    type: "guide",
  },
  "20": {
   type: "end",
  },
};

function build(x) {
  switch (d[x].type) {
    case "sel":
      h = document.createElement("h1");
      b1 = document.createElement("button");
      b2 = document.createElement("button");
      h.textContent = d[x].head;
      b1.textContent = d[x].t1;
      b2.textContent = d[x].t2;
      b1.className += 'select';
      b2.className += 'select';
      h.id = 'removeh';
      b1.id = 'remove1';
      b2.id = 'remove2';
      b1.onclick = function(){
        del()
        build(x+"1");
      };
      b2.onclick = function(){
        del()
        build(x+"2")
      };
      document.body.append(h);
      document.body.append(b1);
      document.body.append(b2);
      break;
    case "guide":
      h = document.createElement("h1");
      b = document.createElement("button");
      h.textContent = d[x].head;
      b.textContent = '다음';
      b.className += 'confirm';
      b.id = 'remove';
      b.onclick = function(){
        document.getElementById("remove").remove();
        build(x+"0")
      };
      document.body.append(h);
      document.body.append(b);
      break;
    case "end":
      h = document.createElement("h1");
      b = document.createElement("button");
      h.textContent = "당황하지 않고, 침착해야 합니다";
      b.textContent = '처음 화면으로 돌아가기';
      b.onclick = function(){
        window.location.assign("../index.html");
      }
      b.className += 'end';
      document.body.append(h);
      document.body.append(b);
      break;
  }
}

window.onload = function() {
  build("")
}