'use strict';

fetch('https://api.rand.fun/text/password?length=10')
  .then(response => response.json())
  .then(data => document.body.innerHTML = data.result)