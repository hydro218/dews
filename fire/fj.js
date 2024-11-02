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
    link: "https://www.youtube.com/watch?v=Q3xNFC82ZYw",
    end: "필요시 소화기를 사용하세요",
    "": {
        head: "'불이야'라고 외치고 119에 신고하세요",
        type: "guide",
        img: "none",
    },
    "0": {
        head: "출구가 있나요?",
        type: "sel",
        t1: "예",
        t1: "아니오",
    },
    "01": {
        head: "문손잡이를 만져 보았을 때 뜨겁지 않으면 문을 조심스럽게 열고 밖으로 나가세요",
        type: "guide",
        img: "none",
    },
    "010": {
        head: "연기가 많다면 젖은 수건으로 코와 입을 감싸고 이동하세요",
        type: "guide",
        img: "fg.png",
    },
    "0100": {
        head: "엘리베이터를 이용하지 말고 계단을 이용하되 아래층으로 대피가 불가능한 때에는 옥상으로 대피하세요",
        type: "guide",
        img: "st.png",
    },
    "01000": {
        type: "end",
    },
    "02": {
        head: "연기가 안에 들어오지 못하도록 물을 적셔 문틈을 옷이나 이불로 막고 구조를 기다리세요",
        type: "guide",
        img: "fg.png",
    },
    "020": {
        type: "end"
    }
}