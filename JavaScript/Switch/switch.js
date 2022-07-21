const date = new Date();

console.log(date);

date.setFullYear(2010);

console.log(date);

// default:
// default keyword specifies the code
// to run if there is no case match

switch(date.getFullYear()) {
    case 2010:
        console.log('Match');
        break;
    default:
        console.log('Not match');

}