let name = "Sergey";
console.log(name);
let age = 15 + 12;
let dct= {"num": 1, "level": 5};
let lst = [1, 4, 5, 12];
console.log(lst.map(function(num) {
    return num * 2;
}));
for (let key in lst)
{
    console.log(key);
}
for (let key of lst)
{
    console.log(key);
}
