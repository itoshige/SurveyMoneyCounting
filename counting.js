function Add(name, point){
    this.name = name;
    this.point = point;
}

var data = {};
var maxNum = Number($(".stats-value-light")[1].innerText.slice(1));
for(var i=1; i<=maxNum; i++) {
  var namex = $x('/html/body/div[1]/div[3]/div/table/tbody/tr/td[2]/div[3]/div[3]/div/div/div[2]/div[3]/div/div[2]/div/div[1]/div/div[2]/div/ul/li[1]/span[2]')[0];
  var pointx = $x('/html/body/div[1]/div[3]/div/table/tbody/tr/td[2]/div[3]/div[3]/div/div/div[2]/div[2]/div/table[1]/tbody/tr/td[1]/span')[0];
  if(i==1) {
    namex = $x('/html/body/div[1]/div[3]/div/table/tbody/tr/td[2]/div[3]/div[3]/div/div/div[1]/div[3]/div/div[2]/div/div[1]/div/div[2]/div/ul/li[1]/span[2]')[0];
    pointx = $x('/html/body/div[1]/div[3]/div/table/tbody/tr/td[2]/div[3]/div[3]/div/div/div[1]/div[2]/div/table[1]/tbody/tr/td[1]/span')[0];
  } else if(i==maxNum) {
    namex = $x('/html/body/div[1]/div[3]/div/table/tbody/tr/td[2]/div[3]/div[3]/div/div/div[3]/div[3]/div/div[2]/div/div[1]/div/div[2]/div/ul/li[1]/span[2]')[0];
    pointx = $x('/html/body/div[1]/div[3]/div/table/tbody/tr/td[2]/div[3]/div[3]/div/div/div[3]/div[2]/div/table[1]/tbody/tr/td[1]/span')[0];
  }

  if(namex == undefined || pointx == undefined) {
    console.log(i);
    break;
  }
  var pointNum = Number(pointx.innerText.slice(0,-1));
  data[i] = new Add(namex.innerText, pointNum);
  $(".wds-button--arrow-right")[0].click();
}
console.table(data);
