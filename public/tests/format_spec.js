// var formattedProblems = [];
// learnjs.problems.forEach(function(problem) {
//   formattedProblems.push({
//     code: learnjs.formatcode(problem.code),
//     name: problem.name
//   });
// });
// return formattedProblems;
return learnjs.problems.map(learnjs.formatcode);