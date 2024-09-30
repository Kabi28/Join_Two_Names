function addName(){
    var f_name = document.getElementById('F_Name');
    var l_name = document.getElementById('L_Name');
    var result = document.getElementById('result');

    var name = f_name.value +' ' + l_name.value ;
    result.innerHTML = name;
    f_name.value = ' ';
    l_name.value = ' ';


    
}