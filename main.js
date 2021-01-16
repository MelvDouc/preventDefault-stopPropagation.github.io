document.getElementById('a1').addEventListener('click', function(e) {
    e.preventDefault()
});
document.getElementById('checkbox1').addEventListener('click', function(e) {
    e.preventDefault()
});

const outerDiv = document.querySelector('#outer-div');
const innerDiv = document.querySelector('#inner-div');
const checkbox2 = document.getElementById('checkbox2');

outerDiv.addEventListener('click', function() {
    alert('OUTER DIV');
});
    
innerDiv.addEventListener('click', function(e) {
    alert('INNER DIV');
    if (checkbox2.checked) {
        e.stopPropagation();
    }
});

outerDiv.addEventListener('mouseenter', function() {
    this.style.outline = '2px dashed #000';
});
outerDiv.addEventListener('mouseleave', function() {
    this.style.outline = 'none';
});
innerDiv.addEventListener('mouseenter', function() {
    this.style.outline = '2px dashed #000';
    if (checkbox2.checked) {
        outerDiv.style.outline = 'none';
    }
});
innerDiv.addEventListener('mouseleave', function() {
    this.style.outline = 'none';
    if (checkbox2.checked) {
        outerDiv.style.outline = '2px dashed #000';
    }
});