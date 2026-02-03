let numbers = [1, 2, 3, 4, 5];

numbers.pop();
 numbers.push(10);

 let doubled = numbers.map(n => n * 2);

 let filtered = numbers.filter(n => n > 2);

 console.log('Doubled:', doubled);
 console.log('Filtered:', filtered);
 