const container = document.querySelector(".container");

//グリッドの初期分割数
let count = 10;

createGrid(count)


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
    div.style.width = "200px";
    div.style.height = "200px";
    div.style.minWidth = "0"; 
}