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
    location.href = `https://turbowarp.org/${projectid}#?token=${res.project_token}`;
}

access();
