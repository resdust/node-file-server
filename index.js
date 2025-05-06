const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
// 使用cors中间件
app.use(cors());
const port = 8000;

const filePath = 'assets/excel/文本小数时间.xlsx';

app.get('/api/taxrecon/crossTable/getTemplateExcel', (req, res) => {
  // 设置响应头以指示这是一个Excel文件下载
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.setHeader("Content-Disposition", "attachment; filename=template.xlsx");

  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
});
app.get('/api/taxrecon/crossTable/getTaskTemplateExcel', (req, res) => {
  // 设置响应头以指示这是一个Excel文件下载
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.setHeader("Content-Disposition", "attachment; filename=template.xlsx");

  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}).on('error', (e) => { // 监听错误事件
  console.error(e);
});