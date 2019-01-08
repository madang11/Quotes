var quotes = [
    'https://thesavvycouple.com/wp-content/uploads/2018/04/Motivational-Quotes-for-Students-1.jpg',
    'https://i.pinimg.com/originals/25/c7/e3/25c7e3224510f5f755e0be273b5f2f39.jpg',
    'https://www.notsalmon.com/wp-content/uploads/2015/06/poster-start-over-scared.jpg',
    
    ];

var index = 0;

function increment(){
    if (index >= quotes.length - 1) {
        index = 0;
    }
    else {
        index += 1;   
    }
    console.log('Current value of index');
    console.log(index);
    document.getElementById("quoteimage").setAttribute("src", quotes[index]);
}

document.getElementById("change").onclick = increment;







