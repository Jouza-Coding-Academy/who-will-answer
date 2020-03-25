const students = [
  // 'Jouza &#127831;',
  'Abdulhamid Al-Elaiyan',
  'Afnan Al-Mutairi',
  'Afnan Basudan',
  'Ali Al-Jamid',
  'Amirah Al-Mani',
  'Bader Al-Mazrou',
  'Budor Al-Shuaibi',
  'Faisal Al-Jazaeri',
  'Haya Binkhtahran',
  'Huda Al-Ismail',
  'Lama Askar',
  'Maimona Al-Hwaymil',
  'Mashael Al-Saadan',
  'Mohammed Al-Muhanna',
  'Mohammed Al-Hadab',
  'Najwa Al-Mutairi',
  'Omar Al-Hazmi',
  'Raghad Al-Abdulwahab',
  'Rana Al-Malki',
  'Ranen Khlabi',
  'Rawan Al-Dawsari',
  'Renad Al-Obaid',
  'Roba Arishi',
  'Salman Al-Suwailem',
  'Sara Kuddah',
  'Shahad Al-Qahtani',
  'Wejdan Al-Rasheedi'
];

const whoWillAnswerClass = '.whoWillAnswer';
const pickAnotherOneClass = '.pickAnotherOne';

$(whoWillAnswerClass).on('click', function() {
  const name = who();
  if (name[0] === 'Jouza') {
    $('#answer1').html(name[0] + ' ' + name[1]);
    $('#answer2').html('');
  } else {
    $('#answer1').html(name[0] + ' ' + name[1]);
    $('#answer2').html('');

    // $('#answer1').html(name[0]);
    // $('#answer2').html(name[1]);
  }
});

function who() {
  if (students.length === 0) {
    return ['Start', 'Again'];
  }
  let index = Math.floor(Math.random() * students.length);
  let result = students[index];
  students.splice(index, 1);
  return result.split(' ');
}

$(pickAnotherOneClass).on('click', function() {
  let randomNumber10 = Math.floor(Math.random() * 101);
  if (randomNumber10 > 50) {
    $('#answer3').html(randomNumber10 + ' %');
    $('#answer4').html('Yes, pick someone else &#128519;');
  } else {
    $('#answer3').html(randomNumber10 + ' %');
    $('#answer4').html('No, you should answer &#128557;');
  }
});

const students2 = [
  'Hisham ',
  'Hebbah ',
  'Usman ',
  'Sager '
  // 'Abdulhamid Al-Elaiyan',
  // 'Afnan Al-Mutairi',
  // 'Afnan Basudan',
  // 'Ali Al-Jamid',
  // 'Amirah Al-Mani',
  // 'Bader Al-Mazrou',
  // 'Budor Al-Shuaibi',
  // 'Faisal Al-Jazaeri',
  // 'Haya Binkhtahran',
  // 'Huda Al-Ismail',
  // 'Lama Askar',
  // 'Maimona Al-Hwaymil',
  // 'Mashael Al-Saadan',
  // 'Mohammed Al-Muhanna',
  // 'Mohammed Al-Hadab',
  // 'Najwa Al-Mutairi',
  // 'Omar Al-Hazmi',
  // 'Raghad Al-Abdulwahab',
  // 'Rana Al-Malki',
  // 'Ranen Khlabi',
  // 'Rawan Al-Dawsari',
  // 'Renad Al-Obaid',
  // 'Roba Arishi',
  // 'Salman Al-Suwailem',
  // 'Sara Kuddah',
  // 'Shahad Al-Qahtani',
  // 'Wejdan Al-Rasheedi'
];
/*  
1. Abdulhamid Al-Elaiyan
2. Afnan Al-Mutairi
3. Afnan Basudan
4. Ali Al-Jamid
5. Amirah Al-Mani
6. Bader Al-Mazrou
7. Budor Al-Shuaibi
8. Faisal Al-Jazaeri
9. Haya Binkhtahran
10. Huda Al-Ismail
11. Lama Askar
12. Maimona Al-Hwaymil
13. Mashael Al-Saadan
14. Mohammed Al-Muhanna
15. Mohammed Al-Hadab
16. Najwa Al-Mutairi
17. Omar Al-Hazmi
18. Raghad Al-Abdulwahab
19. Rana Al-Malki
20. Ranen Khlabi
21. Rawan Al-Dawsari
22. Renad Al-Obaid
23. Roba Arishi
24. Salman Al-Suwailem
25. Sara Kuddah
26. Shahad Al-Qahtani
27. Wejdan Al-Rasheed
*/

/*  
1. Abdulhamid Al-Elaiyan

*/