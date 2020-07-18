function tabuada() {
    var tab = window.document.getElementById('tab')
    var tab_r = Number(tab.value)
    var res = window.document.getElementById('res')
    res.innerHTML =''
    for (var i = 0; i <= 10; i++) {
        var result = tab_r * i
        res.innerHTML += `<p>${tab_r} X ${i} = <strong>${result}</strong></p>`
    }
}
