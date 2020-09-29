let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class.','right on time.','when I finished.','during my lunch.','while I was praying.'];

let whoId = who[Math.floor(Math.random() * who.length)];
let actionId = action[Math.floor(Math.random() * action.length)];
let whatId = what[Math.floor(Math.random() * what.length)];
let whenId = when[Math.floor(Math.random() * when.length)];

document.getElementById('excuses').innerHTML = whoId + ' ' + actionId + ' ' + whatId + ' ' + whenId
