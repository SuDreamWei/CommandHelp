let commands = []; // 存储所有命令的数组
const itemsPerPage = 10; // 每页显示的命令数量
let currentPage = 1; // 当前页码

// 获取DOM元素
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const commandList = document.getElementById('command-list');
const pagination = document.getElementById('pagination');

// 模拟从服务器获取数据，实际应用中可替换为真实的 API 请求
async function fetchCommands() {
    try {
        // 这里可以替换为真实的 API 地址
        const response = await fetch('https://sudreamwei.github.io/CommandHelp/commands.txt'); 
        commands = await response.json();
        renderCommands(commands);
        renderPagination(Math.ceil(commands.length / itemsPerPage));
    } catch (error) {
        console.error('获取命令列表失败:', error);
    }
}

// 渲染命令列表
function renderCommands(data) {
    commandList.innerHTML = '';
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = data.slice(startIndex, endIndex);

    paginatedData.forEach(command => {
        const li = document.createElement('li');
        li.textContent = `${command.name}: ${command.description}`;
        commandList.appendChild(li);
    });
}

// 渲染分页按钮
function renderPagination(totalPages) {
    pagination.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        if (i === currentPage) {
            button.classList.add('active');
        }
        button.addEventListener('click', () => {
            currentPage = i;
            renderCommands(commands);
            renderPagination(Math.ceil(commands.length / itemsPerPage));
        });
        pagination.appendChild(button);
    }
}

// 搜索功能
function searchCommands() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredCommands = commands.filter(command =>
        command.name.toLowerCase().includes(searchTerm) ||
        command.description.toLowerCase().includes(searchTerm)
    );
    currentPage = 1;
    renderCommands(filteredCommands);
    renderPagination(Math.ceil(filteredCommands.length / itemsPerPage));
}

// 初始化页面
function init() {
    fetchCommands();
    searchButton.addEventListener('click', searchCommands);
    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            searchCommands();
        }
    });
}

init();
