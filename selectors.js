// selectors.js
const selectors = [
    {
        code: '@e',
        description: '选择所有实体(只选择活着的实体)'
    },
    {
        code: '@a',
        description: '选择所有玩家(只选择活着的玩家)'
    },
    {
        code: '@r',
        description: '选择一名随机玩家(可通过type选择非玩家实体)(只选择活着的实体)'
    },
    {
        code: '@p',
        description: '选择最近的玩家(若距离相同，会在其中选择最晚进入服务器的玩家)'
    },
    {
        code: '@s',
        description: '命令的执行者(只选择唯一一个实体)(包括已死亡玩家)'
    },
    {
        code: '@initiator',
        description: '选择当前与该NPC进行交互(在NPC内置的命令界面中使用）'
    }
];

// 显示选择器模态框的函数
export function showSelectorModal() {
    const modal = document.getElementById('selector-modal');
    const selectorList = document.getElementById('selector-list');
    selectorList.innerHTML = '';

    selectors.forEach(selector => {
        const li = document.createElement('li');
        li.textContent = `${selector.code} - ${selector.description}`;
        selectorList.appendChild(li);
    });

    modal.style.display = 'block';
}

// 关闭选择器模态框的函数
export function closeSelectorModal() {
    const modal = document.getElementById('selector-modal');
    modal.style.display = 'none';
}
