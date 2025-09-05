// 命令数据
const commandsData = {
    "cmd": [
        {
            "command": "cd",
            "description": "改变当前目录",
            "usage": "cd [路径]",
            "examples": ["cd C:\\Users", "cd ..", "cd /d D:\\"]
        },
        {
            "command": "dir",
            "description": "显示目录中的文件和子目录列表",
            "usage": "dir [路径] [参数]",
            "examples": ["dir", "dir /w", "dir *.txt"]
        },
        {
            "command": "cls",
            "description": "清空屏幕",
            "usage": "cls",
            "examples": ["cls"]
        },
        {
            "command": "ipconfig",
            "description": "显示当前TCP/IP网络配置值",
            "usage": "ipconfig [参数]",
            "examples": ["ipconfig", "ipconfig /all", "ipconfig /release"]
        },
        {
            "command": "ping",
            "description": "测试网络连通性",
            "usage": "ping [主机名或IP地址]",
            "examples": ["ping google.com", "ping 8.8.8.8", "ping -t 192.168.1.1"]
        },
        {
            "command": "mkdir",
            "description": "创建目录",
            "usage": "mkdir [目录名]",
            "examples": ["mkdir newfolder", "mkdir \"new folder\""]
        },
        {
            "command": "rmdir",
            "description": "删除目录",
            "usage": "rmdir [目录名] [参数]",
            "examples": ["rmdir emptyfolder", "rmdir /s folder"]
        },
        {
            "command": "copy",
            "description": "复制文件",
            "usage": "copy [源文件] [目标位置]",
            "examples": ["copy file.txt D:\\", "copy *.txt backup\\"]
        },
        {
            "command": "move",
            "description": "移动文件",
            "usage": "move [源文件] [目标位置]",
            "examples": ["move file.txt D:\\", "move *.doc documents\\"]
        },
        {
            "command": "del",
            "description": "删除文件",
            "usage": "del [文件名] [参数]",
            "examples": ["del file.txt", "del *.tmp", "del /q temp\\*"]
        },
        {
            "command": "shutdown",
            "description": "关机或重启计算机",
            "usage": "shutdown [参数]",
            "examples": ["shutdown /s", "shutdown /r", "shutdown /s /t 60"]
        },
        {
            "command": "tasklist",
            "description": "显示当前运行的任务",
            "usage": "tasklist [参数]",
            "examples": ["tasklist", "tasklist /fi \"imagename eq notepad.exe\""]
        },
        {
            "command": "taskkill",
            "description": "终止正在运行的任务或进程",
            "usage": "taskkill [参数]",
            "examples": ["taskkill /im notepad.exe", "taskkill /pid 1234"]
        },
        {
            "command": "systeminfo",
            "description": "显示计算机及其操作系统的配置信息",
            "usage": "systeminfo",
            "examples": ["systeminfo"]
        },
        {
            "command": "netstat",
            "description": "显示网络连接、路由表和网络接口信息",
            "usage": "netstat [参数]",
            "examples": ["netstat", "netstat -an", "netstat -r"]
        }
    ],
    "powershell": [
        {
            "command": "Get-Command",
            "description": "获取所有可用的命令",
            "usage": "Get-Command [参数]",
            "examples": ["Get-Command", "Get-Command *process*", "Get-Command -Module Microsoft.PowerShell.Management"]
        },
        {
            "command": "Get-Process",
            "description": "获取本地计算机上运行的进程",
            "usage": "Get-Process [参数]",
            "examples": ["Get-Process", "Get-Process notepad", "Get-Process | Sort-Object CPU -Descending"]
        },
        {
            "command": "Stop-Process",
            "description": "停止一个或多个正在运行的进程",
            "usage": "Stop-Process [参数]",
            "examples": ["Stop-Process -Name notepad", "Stop-Process -Id 1234", "Get-Process notepad | Stop-Process"]
        },
        {
            "command": "Get-Service",
            "description": "获取计算机上的服务",
            "usage": "Get-Service [参数]",
            "examples": ["Get-Service", "Get-Service -Name Spooler", "Get-Service | Where-Object {$_.Status -eq 'Running'}"]
        },
        {
            "command": "Restart-Service",
            "description": "重启一个或多个服务",
            "usage": "Restart-Service [参数]",
            "examples": ["Restart-Service -Name Spooler", "Get-Service Print* | Restart-Service"]
        },
        {
            "command": "Get-ChildItem",
            "description": "获取指定位置的项和子项，如文件和文件夹",
            "usage": "Get-ChildItem [路径] [参数]",
            "examples": ["Get-ChildItem", "Get-ChildItem C:\\Users", "Get-ChildItem *.txt -Recurse"]
        },
        {
            "command": "Set-Location",
            "description": "设置当前工作位置",
            "usage": "Set-Location [路径]",
            "examples": ["Set-Location C:\\Users", "Set-Location ..", "cd D:\\Projects"]
        },
        {
            "command": "New-Item",
            "description": "创建新项，如文件、文件夹、注册表项",
            "usage": "New-Item [参数]",
            "examples": ["New-Item -ItemType Directory -Name 'NewFolder'", "New-Item -ItemType File -Name 'test.txt'"]
        },
        {
            "command": "Remove-Item",
            "description": "删除一个或多个项",
            "usage": "Remove-Item [路径] [参数]",
            "examples": ["Remove-Item file.txt", "Remove-Item folder -Recurse", "Remove-Item *.tmp"]
        },
        {
            "command": "Copy-Item",
            "description": "将一个或多个项从一个位置复制到另一个位置",
            "usage": "Copy-Item [源] [目标] [参数]",
            "examples": ["Copy-Item file.txt D:\\", "Copy-Item folder D:\\ -Recurse"]
        },
        {
            "command": "Move-Item",
            "description": "将一个或多个项从一个位置移动到另一个位置",
            "usage": "Move-Item [源] [目标]",
            "examples": ["Move-Item file.txt D:\\", "Move-Item *.doc Documents\\"]
        },
        {
            "command": "Invoke-WebRequest",
            "description": "从Web页面获取内容",
            "usage": "Invoke-WebRequest [URL] [参数]",
            "examples": ["Invoke-WebRequest -Uri 'https://example.com'", "Invoke-WebRequest -Uri 'https://api.github.com' | ConvertFrom-Json"]
        },
        {
            "command": "Get-NetAdapter",
            "description": "获取网络适配器基本属性",
            "usage": "Get-NetAdapter [参数]",
            "examples": ["Get-NetAdapter", "Get-NetAdapter -Name 'Ethernet'", "Get-NetAdapter | Where-Object {$_.Status -eq 'Up'}"]
        },
        {
            "command": "Test-Connection",
            "description": "测试网络连接",
            "usage": "Test-Connection [目标] [参数]",
            "examples": ["Test-Connection google.com", "Test-Connection 8.8.8.8 -Count 4"]
        },
        {
            "command": "Get-EventLog",
            "description": "获取事件日志中的事件",
            "usage": "Get-EventLog [日志名] [参数]",
            "examples": ["Get-EventLog System -Newest 10", "Get-EventLog Application -EntryType Error"]
        }
    ]
};

// 全局变量
let currentType = 'cmd';
let filteredCommands = commandsData[currentType];

// DOM 元素
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const cmdBtn = document.getElementById('cmdBtn');
const powershellBtn = document.getElementById('powershellBtn');
const commandsList = document.getElementById('commandsList');
const noResults = document.getElementById('noResults');
const helpToggle = document.getElementById('helpToggle');
const helpContent = document.getElementById('helpContent');
const copyToast = document.getElementById('copyToast');

// 初始化应用
function initApp() {
    renderCommands();
    bindEvents();
}

// 绑定事件监听器
function bindEvents() {
    // 搜索功能
    searchInput.addEventListener('input', handleSearch);
    clearSearchBtn.addEventListener('click', clearSearch);
    
    // 分类切换
    cmdBtn.addEventListener('click', () => switchType('cmd'));
    powershellBtn.addEventListener('click', () => switchType('powershell'));
    
    // 帮助区域切换
    helpToggle.addEventListener('click', toggleHelp);
    
    // 键盘快捷键
    document.addEventListener('keydown', handleKeydown);
}

// 处理搜索
function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    
    // 显示/隐藏清除按钮
    if (query) {
        clearSearchBtn.classList.add('show');
    } else {
        clearSearchBtn.classList.remove('show');
    }
    
    // 过滤命令
    if (query === '') {
        filteredCommands = commandsData[currentType];
    } else {
        filteredCommands = commandsData[currentType].filter(cmd => 
            cmd.command.toLowerCase().includes(query) || 
            cmd.description.toLowerCase().includes(query)
        );
    }
    
    renderCommands();
}

// 清除搜索
function clearSearch() {
    searchInput.value = '';
    clearSearchBtn.classList.remove('show');
    filteredCommands = commandsData[currentType];
    renderCommands();
    searchInput.focus();
}

// 切换命令类型
function switchType(type) {
    currentType = type;
    
    // 更新按钮状态
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    if (type === 'cmd') {
        cmdBtn.classList.add('active');
    } else {
        powershellBtn.classList.add('active');
    }
    
    // 重新过滤和渲染
    handleSearch();
}

// 渲染命令列表
function renderCommands() {
    commandsList.innerHTML = '';
    
    if (filteredCommands.length === 0) {
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    filteredCommands.forEach((cmd, index) => {
        const commandItem = createCommandItem(cmd, index);
        commandsList.appendChild(commandItem);
    });
}

// 创建命令项元素
function createCommandItem(cmd, index) {
    const item = document.createElement('div');
    item.className = 'command-item';
    item.setAttribute('data-index', index);
    
    item.innerHTML = `
        <div class="command-info">
            <div class="command-name">${cmd.command}</div>
            <div class="command-description">${cmd.description}</div>
            ${cmd.usage ? `<div class="command-usage"><strong>用法:</strong> <code>${cmd.usage}</code></div>` : ''}
            ${cmd.examples && cmd.examples.length > 0 ? `
                <div class="command-examples">
                    <strong>示例:</strong> 
                    ${cmd.examples.map(example => `<code>${example}</code>`).join(', ')}
                </div>
            ` : ''}
        </div>
        <button class="copy-btn" onclick="copyCommand('${cmd.command}')">
            <i class="fas fa-copy"></i>
            复制
        </button>
    `;
    
    return item;
}

// 复制命令到剪贴板
async function copyCommand(command) {
    try {
        await navigator.clipboard.writeText(command);
        showCopyToast();
    } catch (err) {
        // 降级方案
        const textArea = document.createElement('textarea');
        textArea.value = command;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showCopyToast();
    }
}

// 显示复制成功提示
function showCopyToast() {
    copyToast.classList.add('show');
    setTimeout(() => {
        copyToast.classList.remove('show');
    }, 2000);
}

// 切换帮助区域
function toggleHelp() {
    helpToggle.classList.toggle('active');
    helpContent.classList.toggle('show');
}

// 处理键盘快捷键
function handleKeydown(e) {
    // Ctrl + F 聚焦搜索框
    if (e.ctrlKey && e.key === 'f') {
        e.preventDefault();
        searchInput.focus();
    }
    
    // Escape 清除搜索
    if (e.key === 'Escape') {
        if (searchInput.value) {
            clearSearch();
        }
    }
    
    // Ctrl + 1/2 切换类型
    if (e.ctrlKey && e.key === '1') {
        e.preventDefault();
        switchType('cmd');
    }
    if (e.ctrlKey && e.key === '2') {
        e.preventDefault();
        switchType('powershell');
    }
}

// 添加额外的CSS样式
function addExtraStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .command-usage {
            margin-top: 8px;
            font-size: 0.9rem;
            color: #555;
        }
        
        .command-examples {
            margin-top: 8px;
            font-size: 0.9rem;
            color: #555;
        }
        
        .command-examples code {
            background: #f1f3f4;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
            font-size: 0.85rem;
            color: #d63384;
            margin-right: 8px;
        }
        
        .command-usage code {
            background: #e3f2fd;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
            font-size: 0.85rem;
            color: #1976d2;
        }
        
        @media (max-width: 768px) {
            .command-examples code {
                display: block;
                margin: 4px 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    addExtraStyles();
    initApp();
});

