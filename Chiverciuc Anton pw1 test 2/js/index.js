window.onload = function(){
    var container = document.querySelector(".container");
    var container2 = document.querySelector("#container");
    var rezultat = document.querySelector("#rezultat");
    //EX 1    
    creatElement("input", 'suma_1', '', "x", container);
    creatElement("input", 'suma_2', '', "y", container);
    creatElement("button", 'suma', 'suma', '', container);
    document.body.addEventListener("click", function(event){
        if( event.target.classList.contains("suma")){
            var x = parseInt(document.querySelector(".suma_1").value);
            var y = parseInt(document.querySelector(".suma_2").value);
            rezultat.innerHTML = ((isNaN(x))? 0 : x) + ((isNaN(y))? 0 : y);
        }
    })

    //EX 2
    creatElement("input", 'schimb_1', '', "x", container);
    creatElement("input", 'schimb_2', '', "y", container);
    creatElement("button", 'Schimb','Schimb', '', container);
    document.body.addEventListener("click", function(event){
        if( event.target.classList.contains("Schimb")){
            var x = document.querySelector(".schimb_1");
            var y = document.querySelector(".schimb_2");
            let tempval = x.value;
            x.value = y.value;
            y.value =  tempval;
        }
    })

    //EX 3
    container2.addEventListener("mouseover", function(){
        if( !this.classList.contains("verde")){
            this.classList.add("verde");
        }
    })

    //EX 4
    var pArray = document.querySelectorAll("p");
    for(let i = 0; i < 10; i++){
        pArray[i].innerHTML = 'Paragraful NR {{' + (i + 1) + '}}';
        if (i % 2 != 0)
            pArray[i].classList.add("albastru")
        else
            pArray[i].classList.add("galben");
    }
    
    //EX 5
    creatElement("ol", '','', '', container);
    let ol = document.querySelector('ol');
    for(var i = 1; i <= 10; i++)
        creatElement('li','', ("Element NR {{" + i + "}}"), '', ol);

    //EX 6
    let list = document.querySelector('ol');
    list.id = "lista";
    var c = list.childNodes;
    c[c.length-1].classList.add('violet');

    // //EX 7
    creatElement('button', 'sterge', 'sterge', '', container);
    let list1 = document.querySelector('ol');
    list1.id = "lista";
    var c = list1.childNodes;
    document.body.addEventListener("click", function(event){
        if( !this.classList.contains("sterge"))
            if ( c.length == 10)
                c[4].remove();
    })

    //EX 8 
    for(let i = 0; i < 10; i++)
        creatElement('div', 'cerc', '', '', container);
    document.querySelectorAll('.cerc').forEach(el =>{
        el.classList.add("cercnegru");
    })

    //EX 9
    let numbers = [ 1, 90 ,1 ,2 ,10, -1, 4, -5, 0 ,6];
    let numbersSort = numbers.sort(function(a,b){ 
        return a - b;
    })
    let html = '';
    for(let i = 0; i < numbersSort.length; i++)
        html += numbersSort[i] + "; ";
    document.querySelector('.array').innerHTML = html;

    //EX 10
    setTimeout(function(){
        document.body.style.background = "grey";
    }, 5000)

    //EX 11
    let list2 = document.querySelector('ol');
    setInterval(function(){
        var c = list2.childNodes;
        creatElement('li', '', ("Element NR {{" + (c.length + 1) + "}}"), '', ol)
    }, 1000)

    //12
    creatElement("button" , 'increment' , 'Control 1' , '', document.body);
    let butonincrement = document.querySelector('.increment');
    butonincrement.value = 1;
    console.log(parseInt(butonincrement.value));

    function creatElement(tag, classa, html, name, appendTo){
        let element = document.createElement(tag);
        if(name != '')
            element.name = name;
        if(html != '')
            element.innerHTML = html;
        if(classa != '' && !classa.includes(' '))
            element.classList.add(classa);
        appendTo.appendChild(element);
    }
}