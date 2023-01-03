async function access(){
    var res = await fetch("https://scratch.mit.edu/session/", {
        "headers": {
          "x-requested-with": "XMLHttpRequest"
        }
      });
    var res = await res.json();
    var xtoken = res.user.token;
    var projectid = location.href.replace(/[^0-9]/g, "");
    var res = await fetch(`https://api.scratch.mit.edu/projects/${projectid}?x-token=${xtoken}`);
    var res = await res.json();
    var link = `https://turbowarp.org/${projectid}#?token=${res.project_token}`.split("");
    var item = "abcdefghijklmnopqrstuvwxyz1234567890:/#?`_".split("");
    var itemt = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    link.map(function(value, number) {
      link[number] = itemt[item.indexOf(value)];
    });
    var result = link.toString().replace(/,/g, "");
    location.href = `https://thunder-sky.github.io/unshared-project/index.html?id=${result}&find=1`;
}

access();
