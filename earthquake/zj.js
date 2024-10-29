/*
guidelines

key : 숫자로 이루어진 고유문자열, 안내사항 데이터에서 어떤 안내사항을 찾아 표시할지 결정하는 index역할

sel : 2개의 선택지중 하나를 선택(t1 또는 t2)
t1에 해당하는 버튼 선택시 key에 '1' append
t2에 해당하는 버튼 선택시 key에 '2' append

guide : 안내사항을 확인하고 '다음'을 선택
'다음' 선택시 key에 '0' append

end : 안내 종료

head : 내용

type : sel 또는 guide 또는 end 선택

img : 첨부 자료(없다면 none입력) 

"" : 첫번째 sel/guide
*/

const d = {
  source: "za/",
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
    img: "1.jpg",
  },
  "110": {
    head: "흔들림이 멈출 때까지 구조물을 잡고 버티세요",
    type: "guide",
    img: "none"
  },
  "1100": {
    head: "가스와 전기를 차단하고 문을 열어 출구를 확보하세요",
    type: "guide",
    img: "2.png"
  },
  "11000": {
    head: "밖으로 나갈 때는 신발을 신고 이동하세요",
    type: "guide",
    img: "3.png"
  },
  "110000": {
    head: "계단을 이용하여 밖으로 대피하세요",
    type: "guide",
    img: "4.png"
  },
  "1100000": {
    head: "급한 경사지를 피해 평탄한 곳으로 대피하세요",
    type: "guide",
    img: "6.jpg"
  },
  "11000000": {
    type: "end",
  },
  "12": {
    head: "흔들림이 멈출 때까지 최대한 가만히 있으세요",
    type: "guide",
    img: "none"
  },
  "120": {
    head: "가스와 전기를 차단하고 문을 열어 출구를 확보하세요",
    type: "guide",
    img: "2.jpg"
  },
  "1200": {
    head: "밖으로 나갈 때는 신발을 신고 이동하세요",
    type: "guide",
    img: "3.png"
  },
  "12000": {
    head: "계단을 이용하여 밖으로 대피하세요",
    type: "guide",
    img: "4.png"
  },
  "120000": {
    head: "급한 경사지를 피해 평탄한 곳으로 대피하세요",
    type: "guide",
    img: "6.jpg"
  },
  "1200000": {
    type: "end",
  },
  "2":{
    head: "낙하물에 주의하세요",
    type: "guide",
    img: "5.jpg"
  },
  "20": {
    head: "급한 경사지를 피해 평탄한 곳으로 대피하세요",
    type: "guide",
    img: "6.jpg"
  },
  "200": {
   type: "end",
  },
};