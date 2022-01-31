const boxs=document.querySelectorAll('.box');
boxs.forEach(function(box)
{
    box.addEventListener('click',function()
    {
        removeactiveclass();
        box.classList.add('active');
    })
})
function removeactiveclass()
{
    boxs.forEach(function(box)
    {
        box.classList.remove('active');
    })
}