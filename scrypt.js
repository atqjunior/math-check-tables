function tabuada(){

    let num = document.getElementById('txtNum')
    let tab = document.getElementById('selTab')
    let operador = document.getElementById('operador')
    
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        let oper = operador.value
        let c = 1

        for (c = 0; c <= 10; c++){
            let item = document.createElement('option')
            item.value = `tab${c}`
            tab.appendChild(item)
            
            if (oper == '+') {
                item.text = `${n} ${oper} ${c} = ${n+c}`   
            } else if (oper == '-') {
                item.text = `${n} ${oper} ${c} = ${n-c}`
            } else if (oper == '*') {
                item.text = `${n} ${oper} ${c} = ${n*c}`
            } else if (oper == '/') {
                item.text = `${n} ${oper} ${c} = ${n/c}`
            } else if (oper == '%') {
                item.text = `${n} ${oper} ${c} = ${n%c}`
            }

        }
       
    }
    

}

/*while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} ${oper} ${c} = ${n+c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }*/





