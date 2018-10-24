 /* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global sqlite, Handlebars */
//Конструкторы
// создает объект на основании данных полученныч из БД, изменяя представления некоторых значений
function joinObject(item){
    this.date = parseDate(item[0]);
    this.type = item[1];
    this.number = item[2];
    this.image = compareNull(item[3],"img/forbidden.png");
    this.productName = item[4];
    this.price = item[5];
    this.numb = item[6];
    this.existence = item[7];
}
//создает объект, хранаящий информацию относительно даты
function  Dt (item){
    this.date = item.date;
    this.sum =0;
    this.docs = [];
};
//создает объект, хрянящий информацию относительно документа 
function  Document (item){
    this.type = item.type;
    this.number = item.number;
    this.sum = 0;
    this.products = [];
};
//создает объект, хранящий информацию относительно продукта
function  Product (item){
    this.image = item.image;
    this.productName = item.productName;
    this.price = item.price;
    this.numb = item.numb;
    this.sum = item.price*item.numb;
    this.existence = item.existence;
};
//Функции
// функция преобразования даты
function parseDate (item){
    var month = ["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"];
    var dt = new Date(item.split(" ")[0]);
    var newDt = dt.getDate()+ " "+ month[dt.getMonth()];
    return newDt;
};
//функция проверки соответсвия первого аргумента значению null, при соответсвии заменяется вторым аргументом
//(используется в поиске пустых ссылок на картинки с продуктами и замене ссылкой на универсальную картинку)
function compareNull (item, changeItem){
 if (item===null){return changeItem;}
 else {return item;}
};
function creatJoinObject(item){
    return new joinObject(item);
};
function creatProduct (item){
    return new Product(item);
};
function creatDocument(item){
    var product = creatProduct(item);
    var doc = new Document(item);
    doc.products.push(product);
    doc.sum+=product.sum;
    return doc;
};
function creatDt (item){
     var doc = creatDocument(item);
     var dt = new Dt(item);
     dt.docs.push(doc);
     dt.sum+=doc.sum;
    return dt;
};
//функция, сравнивающая значение свойства number объекта  с переданным парметром, при соотвествии возвращает true 
//(использование в качестве call back функции)
function compareNumber(number){
    return function (item){
        return item.number ===number;
    };
};
//функция, сравнивающее значение свойства date объекта  с переданным парметром, при соотвествии возвращает true
//(использование в качестве call back функции)
function compareDate(date){
    return function (item){
        return item.date ===date;
    };
};
/* функция создает структуру (массив объектов типа Dt) для последующего рендеринга (функция принимает массив объектов типа joinObject:
 - создается массив arrDate (для хранения объектов типа Dt)
 - запускается цикл для проверки каждого объекта типа joinObject в массиве, полученном функцией в качестве параметра, некоторым условиям:
 1. если массив arrDate пустой, то создается объект типа Dt и добавляется в массив;
 2. если массив arrDate содержит эл. то проверяется соответсвие свойства date для каждого объекта массива arrDate и
 и объекта joinObject. если соотвествий нет, то создается новый объект типа Dt и добавляется в массив arrDate
 3. при нахождении соответсвия (date) проверяется соотвествие для свойства number для каждого объекта типа Document в массиве, 
 являющемся свойство docs объекта date  и свойства number объекта joinObject, если соответсвия нет, то создается 
 объект типа Document и добавляется в массив docs объекта date, если соответствие есть (document), то создается 
 объект типа Product и добавляется в массив продуктов, являющимся свойством products объекта document
 -функция возвращает массив объектов типа Dt (arrDate)
 */
function createStructure(arr){
    var arrDate = [];
    function addDt (jointObject){
        arrDate.push(creatDt(joinObject));
    };
    for (var i =0; i<arr.length; i++){
        var joinObject = arr[i]; 
        if (arrDate.length === 0){
            addDt(joinObject);
        }
        else {
            var filterArrDate =arrDate.filter(compareDate(joinObject.date));
            if (filterArrDate.length === 0){
            addDt(joinObject);
            }
            else {
                var date = filterArrDate[0];
                var filterArrDocs = date.docs.filter(compareNumber(joinObject.number));
                if (filterArrDocs.length ===0){
                    var doc = creatDocument(joinObject);
                    date.docs.push(doc);
                    date.sum+=doc.sum;
                }
                else{
                    var document = filterArrDocs[0];
                    var product = creatProduct(joinObject);
                    document.products.push(product);
                    document.sum+=product.sum;
                    date.sum+=product.sum;
                };
            };
        };
    };
    return arrDate;
};
//helper handlebars, преобразует число к требуемому формату
Handlebars.registerHelper("categoryNumber", function(number) {
    let m = number.toFixed(2).split(".");
    m[0] = m[0].replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    number = m.join(",");
    return number;
});
//обработчик события
function visible (event,data_name, data_name_hidden){
    /*объявление функции изменени янаправления стрелки при отражении /скрытии блока*/
    let changeArrow = function(id){
        let arrow = document.getElementById("img"+id);
        arrow.classList.toggle("rotate");
    };
    let id = event.target.getAttribute(data_name);
    /*отображение/скрытие блока и изменение направления стрелки указателя*/
    let obj = document.getElementById(id);
    obj.classList.toggle("visible");
    changeArrow(id);
    /*скрытие дочернего блока при скрытии родительского*/
    if (arguments.length === 3){
        if (!obj.classList.contains("visible")){
              let children = obj.children;
              for (let i = 0; i<children.length; i++){
              let id = children[i].getAttribute(data_name_hidden);
              let object = document.getElementById(id);
              let list = object.classList;
              if (list.contains("visible")){
                  list.remove("visible");
                  changeArrow(id);
                };
            };
       };
    };
};
//получение данных и создание структуры для послед. рендеринга
var structure = createStructure(sqlite.rows.map(creatJoinObject));
//получение шаблона и рендеринг (Handlebars)
let source   = document.getElementById('entry-template').innerHTML;
let template = Handlebars.compile(source);
let context = {arr: structure};
let html = template(context);
document.getElementById('result').innerHTML = html;
