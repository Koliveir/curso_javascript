function tabuada() {
    var tab = window.document.getElementById('tab')
    var tab_r = Number(tab.value)
    var res = window.document.getElementById('res')
    res.innerHTML =''

    if (tab.value.length == "") {
        window.alert(`O campo está vazio`)
    } else {
        for (var i = 0; i <= 10; i++) {
            var result = tab_r * i
            res.innerHTML += `<p>${tab_r} X ${i} = <strong>${result}</strong></p>`
        }
    }
}
