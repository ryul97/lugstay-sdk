module.exports = {
  async get(){
    let res = await fetch('https://api.github.com/orgs/nodejs', {method: 'GET'});

    const data = await res.json();

    return data;
  }
}