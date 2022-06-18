let _priOff = document.querySelectorAll('.pri-offset>section>input')
let _secOff = document.querySelectorAll('.sec-offset>section>input')
let _resultNum = document.querySelector('#result-percent').children
let _blob = document.getElementById('blob')
let _rand = [Math.floor(Math.random()*101), Math.floor(Math.random()*101), Math.floor(Math.random()*101), Math.floor(Math.random()*101), Math.floor(Math.random()*101), Math.floor(Math.random()*101), Math.floor(Math.random()*101), Math.floor(Math.random()*101)]
let _offsetarr1 = [_priOff[0], _priOff[1], _priOff[2], _priOff[3]]
let _offsetarr2 = [_secOff[0] , _secOff[1] , _secOff[2] , _secOff[3]]


_offsetarr1[0].setAttribute('value', ''+ _rand[0])
_offsetarr1[1].setAttribute('value', ''+ _rand[1])
_offsetarr1[2].setAttribute('value', ''+ _rand[2])
_offsetarr1[3].setAttribute('value', ''+ _rand[3])
_offsetarr2[0].setAttribute('value', ''+ _rand[4])
_offsetarr2[1].setAttribute('value', ''+ _rand[5])
_offsetarr2[2].setAttribute('value', ''+ _rand[6])
_offsetarr2[3].setAttribute('value', ''+ _rand[7])

function _offsetPri() {
    let _flag1 = ''+ _offsetarr1[0].value + '% ' + _offsetarr1[1].value + '% ' + _offsetarr1[2].value + '% ' + _offsetarr1[3].value + '% '
    _resultNum[0].innerHTML = _flag1
} 
_offsetPri()
function _offsetSec() {
    let _flag2 = ''+ _offsetarr2[0].value + '% ' + _offsetarr2[1].value + '% ' + _offsetarr2[2].value + '% ' + _offsetarr2[3].value + '% '
    _resultNum[1].innerHTML = _flag2
} 
_offsetSec() 
function _resultd() {
    let _flag = ''+ _resultNum[0].innerHTML +' / '+ _resultNum[1].innerHTML 
    _blob.style.borderRadius = _flag
}
_resultd()
document.getElementById('btn').addEventListener('click', function() {
    let _copy = 'border-radius: '+ _resultNum[0].innerHTML + ' / ' + _resultNum[1].innerHTML +';'
    navigator.clipboard.writeText(_copy)
    alert('Copied to clipboard !')
})
document.getElementById('refresh').addEventListener('click', function() {
    window.location.reload()
})


