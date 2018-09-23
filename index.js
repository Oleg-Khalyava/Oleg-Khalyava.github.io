/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*объявление функции преобразовывания эл. массива (дата) формата "2017-11-29 18:29:00" к формату "29 ноября, 
 * и поиска/замены пустых ссылок на картинки с продуктами"*/
function parseDate (item){
    let month = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];
    let dt = new Date(item[0].split(" ")[0]);
    let newDt = dt.getDate()+ " "+ month[dt.getMonth()];
    item[0]= newDt;
    if (item[3]===null){
    item[3]="img/forbidden.png";
    };
};
/*
объявление функции представления числа по разрядам и замены символа дробной части 
 */
function split_point (n){
    let m = n.split(".");
    m[0] = m[0].replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    n = m.join(",");
    return n;
};
/*объявление функции суммирования числа и строкового представления числа в формате (10 000, 10), 
 либо двух строковых  представлений, f - кол. знаков дробной части*/
function roundToFixed(first,second,fl){
    first = first.toString().split(' ').join("").replace(",",".");
    second = second.toString().split(' ').join("").replace(",",".");
    return (parseFloat(first)+parseFloat(second)).toFixed(fl);
};
/*
 объявление конструкторов объектов: Дата, Документ, Продукт
 */
function  Dt (item){
    this.date = item[0];
    this.docs = [];
    this.sum =0;
};
function  Document (item){
    this.type = item[1];
    this.number = item[2];
    this.products = [];
    this.sum = 0;
};
function  Product (item){
    this.image = item[3];
    this.product_name = item[4];
    this.price = split_point(item[5].toFixed(2));
    this.numb = item[6];
    this.sum = split_point((item[5]*item[6]).toFixed(2));
    this.removed = item[7];
};
/*
 * обвление функции преобразования структуры данных, полученных из БД для последующего рендеринга
 */
function modify(rows){
let arr = [];
for (let i = 0; i<rows.length; i++){
    let item = rows[i];
    let dt = new Dt(item);
    let doc = new Document(item);
    let product = new Product(item);
    let presenсeDt = false;
    let presenсeDocumetn = false;
    if (arr.length>0){
        for (let i = 0; i<arr.length; i++){
            if(arr[i].date === dt.date){
                let dtNew = arr[i];
                let docsNew = dtNew.docs;
                for (let a = 0; a<docsNew.length; a++){
                    if (docsNew[a].number === doc.number){
                        docsNew[a].products.push(product);
                        docsNew[a].sum = split_point(roundToFixed(docsNew[a].sum,product.sum,2));
                        presenсeDocumetn = true;
                        break
                    };
                };
                if (!presenсeDocumetn){
                    doc.products.push(product);
                    doc.sum = split_point(roundToFixed(doc.sum,product.sum,2));
                    dtNew.docs.push(doc);
                };
                presenсeDt = true;
                break;
            };
            
        };
        if (!presenсeDt){
            doc.products.push(product);
            doc.sum = split_point(roundToFixed(doc.sum,product.sum,2));
            dt.docs.push(doc);
            arr.push(dt);
        };
    }
    else {doc.products.push(product);
          doc.sum = split_point(roundToFixed(doc.sum,product.sum,2));
          dt.docs.push(doc);
          arr.push(dt);
         };
};
for (let i = 0; i<arr.length; i++){
    let dtNew =arr[i];
    let docsNew = dtNew.docs; 
    for (let a = 0; a<docsNew.length;a++){
    dtNew.sum =split_point(roundToFixed(dtNew.sum,docsNew[a].sum,2));    
    };
};
return arr;
};
/*
 получение данных из JSON
*/
let rows = sqlite.rows;
/*
преобразование формата отображения даты
*/
rows.forEach(parseDate);
/*
создание новой структруты данных для последущего рендеринга
 */
let arrObjDate = modify(rows);
/*
компиляция шаблона
*/
let source   = document.getElementById('entry-template').innerHTML;
let template = Handlebars.compile(source);
let context = {arr: arrObjDate};
let html = template(context);
document.getElementById('result').innerHTML = html;
/*
 обработка событий
 */
function visible (event,data_name){
    let id = event.target.getAttribute(data_name);
    /*отображение/скрытие блока*/
    let obj = document.getElementById(id);
    obj.classList.toggle("visible");
    /*изменение направления стрелки при оторажении/скрытии блока*/
    let arrow = document.getElementById("img"+id);
    arrow.classList.toggle("rotate");
};