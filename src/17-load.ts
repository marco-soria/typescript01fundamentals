import _ from 'lodash';

const data = [
  { username: 'marco',
    role: 'admin',
  },
  {username: 'valentina',
    role: 'seller',
  },
  {
    username: 'daniel',
    role: 'seller',
  },
  {
    username: 'jose',
    role: 'customer',
  }
]

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
