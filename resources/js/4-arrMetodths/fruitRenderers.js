export function createFruit(_fruitsArr)
{
    return `<div class="photo">
    <img class="photo__img" src="${_fruitsArr.image}" alt="">
    <p class="photo__name">${_fruitsArr.name}</p>
    </div>`;
}

export function createFruits(_fruitsArr)
{
    let  HTMLCode = "";
    for (let i = 0; i < _fruitsArr.length; i++) 
    {
        HTMLCode += createFruit(_fruitsArr[i]);
    }  
    return HTMLCode;
}