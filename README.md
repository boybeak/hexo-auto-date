# hexo-auto-date
Hexo plugin to automatically set post date using file creation or modification time

## Installation
```bash
npm install hexo-auto-date --save
```

## Usage
```yml
hexo_auto_date:
  enable: true  # enable the plugin, default is true
  strategy: ctime  # 'ctime' - create time or 'mtime' - modify time，default is 'ctime'
```