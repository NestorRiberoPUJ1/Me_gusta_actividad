function addLike(root)
{
    likeH3= document.querySelector(root);
    var numbers = likeH3.innerText.match(/\d+/g).map(Number);
    likeH3.innerText= (numbers[0]+1) + " like(s)";
    console.log(numbers);
}

