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

/*
형식

"key값": {
        head: "이름",
        type: "guide",
        img: "none 또는 asset아래의 주소"
},

"key값": {
        head: "이름",
        type: "sel",
        t1: "첫번째 선택지"
        t2: "두번째 선택지"
},

"key값": {
        type: "end",
},
*/

const d = {
    source: "assets/",
    link: "end의 버튼에서 열릴 링크",
    end: "end에서 표시될 메시지",
    endb: "end의 버튼에서 표시될 메시지",
    "": {
        head: "",
        type: "",
    },
}