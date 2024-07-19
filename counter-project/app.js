let count = 0;
//select value and button
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(item){
    item.addEventListener("click", function(e){
        //get the clicked button value
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }else if(styles.contains('increase')) {
            count++;
        }else {
            count = 0;
        }
        if(count > 0) {
            value.style.color = "green";
        }
        if(count < 0){
            value.style.color = "red";
        }
        if(count == 0) {
            value.style.display = 'black';
        }
        value.textContent = count;
    })
})