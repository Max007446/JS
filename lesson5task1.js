'use strict'
const chess = {
    doska : document.getElementById('chess'),
    renderMap(){
        const rows = [0,8,7,6,5,4,3,2,1,0];
        const cols = [0,'a','b','c','d','e','f','g','h',0];
        for (let i=0; i<rows.length;i++){
            const tr = document.createElement('tr');
            this.doska.appendChild(tr);
            for( let j = 0;j<cols.length;j++){
                const td = document.createElement('td');
                tr.appendChild(td);
                
                if (rows[i]===0 && cols[j]!==0){
                    td.innerHTML=cols[j];
                }else if (cols[j]===0 && rows[i]!==0){
                    td.innerHTML = rows[i].toString();
                }
                if(this.isCellBlack(i,j)){
                    td.style.backgroundColor = 'black';
                }
                
            }
        }
    },
        
       isCellBlack(rowNum, colNum) {
    // Если ячейка боковая (не игровое поле), их красить не нужно.
    if (rowNum === 0 || colNum === 0 || rowNum === 9 || colNum === 9) {
      return false;
    }
    
    return (rowNum + colNum) % 2 === 1;
  },
}; 
        
        

    chess.renderMap();
