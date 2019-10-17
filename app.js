var inquirer = require('inquirer');


function display(){
  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: 'list',
        name: 'c1',
        choices: ['Name', 'College', 'Skills', 'Projects', 'CGPA', 'Extra-curriculars']
      }
    ])
    .then(answers => {
      // Use user feedback for... whatever!!
      if (answers.c1 == 'Name') {
        console.log("Hey there! My name is Siddhant Shukla");
        displayBack();
      } else if (answers.c1 == 'College') {
        console.log("M.S Ramaiah Institute of Technology, Bangalore");
        displayBack();
      } else if (answers.c1 == 'Skills') {
        console.log("1- Node\n2- Javascript\n3- Java\n4- MySql\n5- Python\n6- React");
        displayBack();
      } else if (answers.c1 == 'Projects') {
        console.log("1- Alpha Blog Website\n2- Twitter Clone");
        displayBack();
      } else if (answers.c1 == 'CGPA') {
        console.log("9.81");
        displayBack();
      } else if (answers.c1 == 'Extra-curriculars') {
        console.log("1- National level football player\n2- Fitness Enthusiast");
        displayBack();
      }
    });
}

function displayBack(){
  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: 'list',
        name: 'c2',
        choices: ['Back','Exit']
      }
    ])
    .then(answers => {
      if(answers.c2=='Back'){
        display();
      }else{
        return;
      }

    });
}


display();