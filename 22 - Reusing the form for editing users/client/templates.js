(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.templatizer = factory();
    }
}(this, function () {
    var jade=function(){function r(r){return null!=r&&""!==r}function n(e){return Array.isArray(e)?e.map(n).filter(r).join(" "):e}var e={};return e.merge=function t(n,e){if(1===arguments.length){for(var a=n[0],s=1;s<n.length;s++)a=t(a,n[s]);return a}var i=n["class"],l=e["class"];(i||l)&&(i=i||[],l=l||[],Array.isArray(i)||(i=[i]),Array.isArray(l)||(l=[l]),n["class"]=i.concat(l).filter(r));for(var o in e)"class"!=o&&(n[o]=e[o]);return n},e.joinClasses=n,e.cls=function(r,t){for(var a=[],s=0;s<r.length;s++)a.push(t&&t[s]?e.escape(n([r[s]])):n(r[s]));var i=n(a);return i.length?' class="'+i+'"':""},e.attr=function(r,n,t,a){return"boolean"==typeof n||null==n?n?" "+(a?r:r+'="'+r+'"'):"":0==r.indexOf("data")&&"string"!=typeof n?" "+r+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'":t?" "+r+'="'+e.escape(n)+'"':" "+r+'="'+n+'"'},e.attrs=function(r,t){var a=[],s=Object.keys(r);if(s.length)for(var i=0;i<s.length;++i){var l=s[i],o=r[l];"class"==l?(o=n(o))&&a.push(" "+l+'="'+o+'"'):a.push(e.attr(l,o,!1,t))}return a.join("")},e.escape=function(r){var n=String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return n===""+r?r:n},e.rethrow=function a(r,n,e,t){if(!(r instanceof Error))throw r;if(!("undefined"==typeof window&&n||t))throw r.message+=" on line "+e,r;try{t=t||require("fs").readFileSync(n,"utf8")}catch(s){a(r,null,e)}var i=3,l=t.split("\n"),o=Math.max(e-i,0),c=Math.min(l.length,e+i),i=l.slice(o,c).map(function(r,n){var t=n+o+1;return(t==e?"  > ":"    ")+t+"| "+r}).join("\n");throw r.path=n,r.message=(n||"Jade")+":"+e+"\n"+i+"\n\n"+r.message,r},e}();

    var templatizer = {};
    templatizer["includes"] = {};
    templatizer["pages"] = {};

    // body.jade compiled template
    templatizer["body"] = function tmpl_body() {
        return '<body><nav class="navbar navbar-default"><div class="container-fluid"><div class="navbar-header"><a href="/" class="navbar-brand">Our App</a></div><ul class="nav navbar-nav"><li><a href="/users">users</a></li></ul><p role="user-name" class="navbar-text navbar-right"></p></div></nav><div class="container"><main role="page-container"></main></div></body>';
    };

    // includes/user.jade compiled template
    templatizer["includes"]["user"] = function tmpl_includes_user() {
        return '<li><span role="user-name"></span><buttons role="action-delete-user" class="btn btn-default">Delete</buttons><a role="action-view-user" class="btn btn-default">View</a><a role="action-edit-user" class="btn btn-default">Edit</a></li>';
    };

    // pages/home.jade compiled template
    templatizer["pages"]["home"] = function tmpl_pages_home() {
        return '<section class="page"><h2>Home</h2></section>';
    };

    // pages/userCreate.jade compiled template
    templatizer["pages"]["userCreate"] = function tmpl_pages_userCreate() {
        return '<section class="page create-user"><h1>Create a new user</h1><form role="user-form"><fieldset role="field-container"></fieldset><button type="submit" class="btn btn-primary">Create User</button></form></section>';
    };

    // pages/userEdit.jade compiled template
    templatizer["pages"]["userEdit"] = function tmpl_pages_userEdit() {
        return '<section class="page edit-user"><h1>Edit a user</h1><form role="user-form"><fieldset role="field-container"></fieldset><button type="submit" class="btn btn-primary">Save Changes</button></form></section>';
    };

    // pages/userView.jade compiled template
    templatizer["pages"]["userView"] = function tmpl_pages_userView() {
        return '<section class="page user-view"><img role="user-avatar" width="50" height="50"/><p role="user-name"></p><p role="user-awesomeness"></p></section>';
    };

    // pages/users.jade compiled template
    templatizer["pages"]["users"] = function tmpl_pages_users() {
        return '<section class="page"><h2>Users</h2><ul role="user-list"></ul></section>';
    };

    return templatizer;
}));