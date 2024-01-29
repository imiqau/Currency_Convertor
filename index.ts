import inquirer from 'inquirer';
import chalk from 'chalk';
let str:string = "Yes";
while (str == "Yes") {
    let user = await inquirer.prompt([
        {
            type : 'list',
            name : 'from',
            message : 'Select the currency to convert from: ',
            choices : ['Australian $','Canadian $','Chinese Yuan','Danish Krone','Euro','Hong Kong $','Japanese Yen','Saudi Rial','Singapore $','Swiss Franc','UAE Dirham','UK Pound Sterling','US $']
        },
        {
            type : 'list',
            name : 'to',
            message : 'Select the currency to convert to: ',
            choices : ['Australian $','Canadian $','Chinese Yuan','Danish Krone','Euro','Hong Kong $','Japanese Yen','Saudi Rial','Singapore $','Swiss Franc','UAE Dirham','UK Pound Sterling','US $']
        },
        {
            type : 'number',
            name : 'amount',
            message : 'Please enter the amount: '
        }
    ]);
let result = currencyConvert(user.from, user.to) * user.amount;
    console.log(`${user.amount} ${user.from} = ${result} ${user.to} `);
  
    let user2 = await inquirer.prompt(
        {
            type : 'list',
            name : 'another',
            message : 'Do you want to try another conversion: ',
            choices : ['Yes','No']
        }

    );

    str = user2.another;
    console.clear();
}

function currencyConvert(Curr1:string, Curr2:string) {
    let conrate = [182, 205, 39.32, 40.9, 302.5, 35.81, 2.02, 74.45, 207, 322.33, 76.4, 356, 278.9];
    let arr = ['Australian $','Canadian $','Chinese Yuan','Danish Krone','Euro','Hong Kong $','Japanese Yen','Saudi Rial','Singapore $','Swiss Franc','UAE Dirham','UK Pound Sterling','US $'];
    let n1, n2 = 0;
    n1 = arr.indexOf(Curr1);
    n2 = arr.indexOf(Curr2);
    return conrate[n1]/conrate[n2];
}
