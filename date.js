#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const date = new Date();
const month = ['Jan', 'Feb', 'Mar', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const current = (argv) => {
  console.log('type current');
  console.log(argv);

  if (argv.d) {
    console.log(date.getDate());
  }
  if (argv.m) {
    console.log(month[date.getMonth()]);
  }
  if (argv.y) {
    console.log(date.getFullYear());
  } 
  if (!(argv.d || argv.m || argv.y)) {
    console.log(date.toISOString());
  } 
}

const sub = () => {
  console.log('type sub')
}

const add = () => {
  console.log('type add')
}

const argv = yargs(hideBin(process.argv))
  .command(
    'current',
    'current date and time in ISO',
    (yargs) => {
      return yargs
        .option('years', {
          alias: 'y',
          type: 'boolean',
          describe: 'current year'
        })
        .option('month', {
          alias: 'm',
          type: 'boolean',
          description: 'current month'
        })
        .option('date', {
          alias: 'd',
          type: 'boolean',
          description: 'current date'        
        })
    },
    (argv) => current(argv)
  )
  .command('sub', 'date, time in past', () => {}, sub)
  .command('add', 'date, time in future', () => {}, add)
  .demandCommand(1, 1, 'choose a command: current, add or sub')
  .strict()
  .help('h')
  .argv;

// console.log(argv)

// console.log('Hello! ', date);