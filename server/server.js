const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const paginate = require('jw-paginate');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/api/items', (req, res, next) => {
  const items = [
    {
      RequestName: 'Fables at the tables',
      Requestor: 12355,
      GoodEnding: 'Depends',
      Description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
      NeedStoryteller: true,
      Storyteller: 12345,
      WantedCharacters: 'charA;charD;charFGKS',
      Deadline: 1570534960256,
      Budget: 500000,
      Status: 'Draft',
      Id: 12
    },
    {
      RequestName: 'Frayed crayons',
      Requestor: 12345,
      GoodEnding: 'yes',
      Description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
      NeedStoryteller: false,
      WantedCharacters: '',
      Deadline: 1570578960256,
      Budget: 505000,
      Status: 'New',
      Id: 15
    },
    {
      RequestName: 'Blue raider',
      Requestor: 12345,
      GoodEnding: 'Yes',
      Description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
      NeedStoryteller: false,
      WantedCharacters: '',
      Deadline: 1570578960256,
      Budget: 505000,
      Status: ' New',
      Id: 13
    },
    {
      RequestName: 'Rats and brats',
      Requestor: 12345,
      GoodEnding: 'No',
      Description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
      NeedStoryteller: false,
      WantedCharacters: '',
      Deadline: 1570578960256,
      Budget: 275000,
      Status: 'Draft',
      Id: 19
    },
    {
      RequestName: 'Fables at the tables',
      Requestor: 12355,
      GoodEnding: 'Depends',
      Description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
      NeedStoryteller: true,
      Storyteller: 12345,
      WantedCharacters: 'charA;charD;charFGKS',
      Deadline: 1570534960256,
      Budget: 500000,
      Status: 'Draft',
      Id: 22
    },
    {
      RequestName: 'Frayed crayons',
      Requestor: 12345,
      GoodEnding: 'yes',
      Description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
      NeedStoryteller: false,
      WantedCharacters: '',
      Deadline: 1570578960256,
      Budget: 505000,
      Status: 'New',
      Id: 25
    },
    {
      RequestName: 'Blue raider',
      Requestor: 12345,
      GoodEnding: 'Yes',
      Description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
      NeedStoryteller: false,
      WantedCharacters: '',
      Deadline: 1570578960256,
      Budget: 505000,
      Status: ' New',
      Id: 23
    },
    {
      RequestName: 'Rats and brats',
      Requestor: 12345,
      GoodEnding: 'No',
      Description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
      NeedStoryteller: false,
      WantedCharacters: '',
      Deadline: 1570578960256,
      Budget: 275000,
      Status: 'Draft',
      Id: 29
    },
    {
      RequestName: 'Fables at the tables',
      Requestor: 12355,
      GoodEnding: 'Depends',
      Description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
      NeedStoryteller: true,
      Storyteller: 12345,
      WantedCharacters: 'charA;charD;charFGKS',
      Deadline: 1570534960256,
      Budget: 500000,
      Status: 'Draft',
      Id: 32
    },
    {
      RequestName: 'Frayed crayons',
      Requestor: 12345,
      GoodEnding: 'yes',
      Description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
      NeedStoryteller: false,
      WantedCharacters: '',
      Deadline: 1570578960256,
      Budget: 505000,
      Status: 'New',
      Id: 35
    },
    {
      RequestName: 'Blue raider',
      Requestor: 12345,
      GoodEnding: 'Yes',
      Description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
      NeedStoryteller: false,
      WantedCharacters: '',
      Deadline: 1570578960256,
      Budget: 505000,
      Status: ' New',
      Id: 33
    },
    {
      RequestName: 'Rats and brats',
      Requestor: 12345,
      GoodEnding: 'No',
      Description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
      NeedStoryteller: false,
      WantedCharacters: '',
      Deadline: 1570578960256,
      Budget: 275000,
      Status: 'Draft',
      Id: 39
    }
  ]

  // get page from query params or default to first page
  const page = parseInt(req.query.page) || 1;

  // get pager object for specified page
  const pager = paginate(items.length, page);

  // get page of items from items array
  const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

  // return pager object and current page of items
  return res.json({ pager, pageOfItems });
});

app.get('/api/users', (req, res, next) => {
  // example array of 150 items to be paged
  const users = [
    {
      DisplayName: 'Ali Gator (DABA)',
      Name: 'Ali',
      Surname: 'Gator',
      Department: 'DABA',
      Email: 'ali.gator@company.com',
      Id: 12345,
      Manager: true,
      Roles: ['Manager', 'Account Manager', 'SPOC']
    },
    {
      DisplayName: 'Baba Yaga (DABA)',
      Name: 'Baba',
      Surname: 'Yaga',
      Department: 'DABA',
      Email: 'baba.yaga@company.com',
      Id: 12350,
      Manager: false,
      Roles: ['Owner', 'Account Manager']
    }, {
      DisplayName: 'Red Riding Hood (LFAB)',
      Name: 'Red Riding',
      Surname: 'Hood',
      Department: 'LFAB',
      Email: 'red.hood@company.com',
      Id: 12355,
      Manager: false,
      Roles: ['Compliance', 'SPOC']
    },
    {
      DisplayName: 'Luke Spooke (RUB)',
      Name: 'Luke',
      Surname: 'Spooke',
      Department: 'RUB',
      Email: 'luke.spooke@company.com',
      Id: 12892,
      Manager: true,
      Roles: ['Owner']
    },
    {
      DisplayName: 'Jack O’Lantern (RUB)',
      Name: 'Jack',
      Surname: 'O’Lantern',
      Department: 'RUB',
      Email: 'jack.olantern@company.com',
      Id: 12855,
      Manager: false,
      Roles: ['WUBWUBWUB', 'Drake']
    }
  ]

  // setTimeout added to simulate network lag
  setTimeout(()=> {
    return res.json({ users });
  }, 2000)
});

// start server
const port = 4000;
app.listen(port, () => console.log('Server listening on port ' + port));
