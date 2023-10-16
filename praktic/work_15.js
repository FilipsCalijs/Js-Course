const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    
    if (prop){
        answer = 'Открыто';      
    }else{

        answer = 'Закрыто';
    }
    console.log(restorantData.openNow, prop)

    return answer;
}

console.log(isOpen(restorantData.openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {
    // console.log(+fDish.price.slice(0, -1) + (sDish.price) < average);
    // console.log(typeof(+fDish.price.slice(0, -1,sDish.price, average)));
  
   // if (){
     if (+fDish.price.slice(0, -1) + (sDish.price) < average) {
        return 'Цена выше средней';
    } else {
        
        return 'Цена ниже средней';
    }
 }

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));


function transferWaitors(data) {
    const copy = Object.assign({}, data);

    // Нам просто нужно менять весь массив данных,
    // а не лезть напрямую менять каждого из сотрудников
    // Так как это верхний уровень объекта, то значение 
    // будет меняться только у копии
    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

transferWaitors(restorantData);
