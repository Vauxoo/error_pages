let fs = require('fs');

let pug = require('pug');
let compiler = pug.compileFile('src/templates/base.pug');

fs.readFile('data/vauxoo.json', function(err, json) {
  if (err) throw err;

  data = JSON.parse(json.toString());

  for (dir in data['pages']) {
    fs.mkdir(dir, function(err) {
      if (err) {
        if (err.code != 'EEXIST') throw err;
      }
    });
    for (page in data['pages'][dir]) {
      fs.writeFile(
          dir + '/' + page + '.html',
          compiler(data['pages'][dir][page]),
          function(err) { if (err) throw err; }
      )
    }
  }
});

let less = require('less');

fs.readFile('src/less/style.less', function(err, style) {
  if (err) throw err;

  less.render(style.toString(), {
    compress: true
  }, function(err, output) {
    fs.writeFile(
        'res/css/style.css',
        output.css,
        function(err) { if (err) throw err; }
    );
  });
});
