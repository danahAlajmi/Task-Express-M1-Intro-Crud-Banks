let accounts = require("../../accounts");

exports.fetchAccounts((req, res) => {
  res.status(200).json(accounts);
});

exports.createAccounts((req, res) => {
  console.log(req.body);
  const id = accounts[accounts.length - 1].id + 1;
  const funds = 0;
  const newAccount = { id, ...req.body, funds };
  accounts.push(newAccount);
  res.status(201).json(newAccount);
});

exports.updateAccounts((req, res) => {
  const account = accounts.find(
    (_account) => _account.id === +req.params.accountId
  );
  if (account) {
    for (const key in req.body) {
      account[key] = req.body[key];
    }
    res.json(account);
  } else {
    res.status(404).json({ message: "Account doesn’t exist" });
  }
});

exports.deleteAccounts((req, res) => {
  const account = accounts.find(
    (_account) => _account.id === +req.params.accountId
  );
  if (account) {
    accounts = accounts.filter(
      (_account) => _account.id !== +req.params.accountId
    );

    res.status(204).end();
  } else {
    res.status(404).json({ message: "Account doesn’t exist" });
  }
});
