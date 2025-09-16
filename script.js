const container = document.querySelector(".container");

//グリッドの初期分割数
let count = 16;

createGrid(count)
hoverColor()

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
    div.style.border = "1px solid gray";
    const divSize = Math.min(window.innerWidth, window.innerHeight) / count;
    div.style.width = `${divSize}px`; 
    div.style.height = `${divSize}px`;

}

//hoverしたdivに色付け用classを追加
function hoverColor(){
    document.querySelectorAll(".divy").forEach(el =>{
        el.addEventListener("mouseover", () =>{
            el.classList.add("is-hover")
        })
    })

}