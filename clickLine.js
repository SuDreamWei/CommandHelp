// 获取 HTML 元素
const searchInput = document.getElementById('search - input');
const commandList = document.getElementById('command - list');
const commandPrefix = document.getElementById('command-prefix');
let commands = [];

// 动态加载指令列表
fetch('https://sudreamwei.github.io/CommandHelp/commands.txt')
  .then(response => response.text())
  .then(data => {
        const lines = data.split('\n');
        lines.forEach(line => {
            if (line.trim()!== '') {
                const li = document.createElement('li');
                li.textContent = line;
                commandList.appendChild(li);
                commands.push(li);

                // 为每个命令项添加点击事件
                li.addEventListener('click', function () {
                    const command = line.split(' - ')[0];
                    commandPrefix.textContent = `命令开始字符：/${command}`;
                });
            }
        });
    });

// 搜索功能
searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    commands.forEach(command => {
        if (command.textContent.toLowerCase().includes(searchTerm)) {
            command.classList.remove('hidden');
        } else {
            command.classList.add('hidden');
        }
    });
});
