const container = document.querySelector(".container");

//グリッドの初期分割数
let count = 16;

createGrid(count);
hoverColor();
devideBtn();

//グリッドを作成
function createGrid(count){
    //x方向へdivを複製
    for (let x = 0; x < count; x++){
        const divx = document.createElement("div");
        divx.setAttribute("class", "divx");
        container.appendChild(divx);

        //y方向へdivを複製、各divx内にdivyを格納（複製のためループ内でdivyを定義）
        //appendChildの挙動に注意
        for(let y = 0; y < count; y++){
            const divy = document.createElement("div");
            divy.setAttribute("class", "divy");
            gridStyle(divy);
            divx.appendChild(divy);
        }
    }
}

//グリッドに属性とスタイルを付与
function gridStyle(div){
    // div.style.border = "1px solid gray";
    const divSize = window.innerWidth / count;
    div.style.width = `${divSize}px`; 
    div.style.height = `${divSize}px`;
}

//hoverしたdivに色付け用classを追加
function hoverColor(){
    document.querySelectorAll(".divy").forEach(el =>{
        el.addEventListener("mouseover", () =>{
            el.classList.add("is-hover")
            // el.style.backgroundcolor =("0 0 0 / 0.1") 
        })
    })
}

//分割数を変更するボタン機能
function devideBtn() {
    const btn = document.querySelector(".devidebtn")
    btn.addEventListener("click", () =>{
        devidePrompt()
    })
}

//再帰呼び出しを考慮して分割機能をボタンから独立
function devidePrompt(){
    let value = parseInt(toHalfWidth(prompt("10〜100の間で分割数を入力してください。", "10")))
        if(!Number.isFinite(value) || value < 10 || value > 100){
            console.log(value);
            console.log(typeof value);
            devidePrompt();
        };
    count = value;
    container.innerHTML = "";
    createGrid(count);
    hoverColor();
}

//入力が全角の場合、半角に
function toHalfWidth(str) {
  // 全角英数字を半角に変換
  str = str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
  });
  return str;
}