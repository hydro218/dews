/*
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
    source: "fa/",
    end: "자동차를 운행하지 마세요",
    "": {
        head: "어디에 있나요?",
        type: "sel",
        t1: "실내",
        t2: "실외",
    },
    "1": {
        head: "전기와 가스를 차단하세요",
        type: "guide",
        img: "sd.png",
    },
    "10": {
        head: "옥상과 같은 높은 곳으로 대피하세요",
        type: "guide",
        img: "ok.png",
    },
    "100": {
        type: "end",
    },
    "2": {
        head: "언덕과 같은 높은 곳으로 대피하세요",
        type: "guide",
        img: "hl.png",
    },
    "20": {
        type: "end"
    },
}