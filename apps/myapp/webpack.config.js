function meow(config)  {
    console.log('MY_VAR IS ', process.env.MY_VAR);
    return config
}
module.exports = meow;