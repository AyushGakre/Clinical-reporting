const docx = require('docx-templates')
const fs = require('fs')
const template = fs.readFileSync('myTemplate.docx');
const buffer = await docx.createReport({
  template,
  data: {
    name: 'John',
    surname: 'Appleseed',
  },
});

fs.writeFileSync('report.docx', buffer)
  
  