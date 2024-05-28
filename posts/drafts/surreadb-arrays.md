import { Surreal } from 'surrealdb.js';

const db = new Surreal('http://127.0.0.1:8000/rpc');

const main = async () => {

  try {
    await db.signin({
      NS: 'namespace',
      DB: 'database',
      SC: 'allusers', // We want to signup to the 'allusers' scope defined above
      email: 'user@ddlele.com',
      password: 'password'
    });
    
    // a jwt will be printed to the terminal
    const res2 = await db.query(`update user_data:xt91ftz4crhz533tt5hh set tasks=array::concat(tasks, [{
        name: "cut the grass",
        due: "no deadline"
    }]) `)
    console.log(res2)
  } catch (e) {
    console.error('ERROR', e);
  }
}

main();