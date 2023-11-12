const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  const simulatedInput = [
    "Input line 1", // 测试输入1
    "Input line 2", // 测试输入2
    // 添加更多的测试输入...
    "exit", // 停止输入的信号，根据需要更改
  ];

  let inputIndex = 0;
  while (true) {
    const line = await readline();

    if (line === simulatedInput[inputIndex]) {
      // 模拟用户输入
      console.log(`Simulated input: ${line}`);
      inputIndex++;

      if (inputIndex === simulatedInput.length) {
        // 当所有输入都模拟完成后，停止循环
        break;
      }
    }

    // 在此处编写你的代码
    // Write your code here
  }

  // 关闭 readline
  rl.close();
})();
